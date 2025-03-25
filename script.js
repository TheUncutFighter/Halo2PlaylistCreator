// Halo 2 Playlist Creator - Core Functionality

document.addEventListener('DOMContentLoaded', function() {
    if (typeof MAPS === 'undefined' || 
        typeof GAME_TYPES === 'undefined' || 
        typeof BASE_VARIANTS === 'undefined') {
        console.error('Error: Required data not loaded. Make sure data.js is included before script.js');
        alert('Error: Required game data not loaded. Please make sure data.js is loaded before script.js.');
        return;
    }
    
    // Global Variables
    let customVariants = [];
    let matches = [];
    let currentEditIndex = -1;
    let hasGeneratedPlaylist = false; // Track if user has generated a playlist

    // Load data from local storage if available
    loadFromLocalStorage();

    initializeUI();

    setupEventListeners();

    function loadFromLocalStorage() {
        try {
            const savedVariants = localStorage.getItem('halo2_custom_variants');
            const savedMatches = localStorage.getItem('halo2_matches');
            
            if (savedVariants) {
                customVariants = JSON.parse(savedVariants);
            }
            
            if (savedMatches) {
                matches = JSON.parse(savedMatches);
            }
        } catch (e) {
            console.error('Error loading from local storage:', e);
        }
    }

    function saveToLocalStorage() {
        try {
            localStorage.setItem('halo2_custom_variants', JSON.stringify(customVariants));
            localStorage.setItem('halo2_matches', JSON.stringify(matches));
            
            // Only auto-update playlist if it has been generated once
            if (hasGeneratedPlaylist && matches.length > 0) {
                generatePlaylist();
            }
        } catch (e) {
            console.error('Error saving to local storage:', e);
        }
    }

    function initializeUI() {
        const mapSelect = document.getElementById('mapSelect');
        if (mapSelect) {
            mapSelect.innerHTML = '';
            
            MAPS.forEach(map => {
                const mapOption = document.createElement('div');
                mapOption.className = 'map-option';
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = 'map_' + map.id;
                checkbox.value = map.id;
                checkbox.setAttribute('data-map-id', map.id);
                
                const label = document.createElement('label');
                label.setAttribute('for', 'map_' + map.id);
                label.textContent = map.name;
                
                mapOption.appendChild(checkbox);
                mapOption.appendChild(label);
                mapSelect.appendChild(mapOption);
                
                mapOption.addEventListener('click', function(e) {
                    e.preventDefault();
                        checkbox.checked = !checkbox.checked;
                });
                
                checkbox.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
            });
        }

        updateCustomVariantsList();
        updateMatchesList();

        setupVariantCreator();
        
        document.addEventListener('change', function(e) {
            if (e.target.id === 'livesPerRound' && e.target.value === 'custom') {
                const customLives = prompt('Enter custom number of lives (1-999):', '5');
                if (customLives !== null) {
                    const numLives = parseInt(customLives, 10);
                    if (!isNaN(numLives) && numLives > 0 && numLives <= 999) {
                        const option = document.createElement('option');
                        option.value = numLives.toString();
                        option.textContent = numLives.toString() + ' (Custom)';
                        option.selected = true;
                        
                        const customOption = e.target.querySelector('option[value="custom"]');
                        e.target.insertBefore(option, customOption);
                        e.target.value = numLives.toString();
                    } else {
                        alert('Please enter a valid number between 1 and 999.');
                        e.target.value = 'Unlimited';
                    }
                } else {
                    e.target.value = 'Unlimited';
                }
            }
            
            if (e.target.id === 'teamPlay') {
                toggleTeamOptions(e.target.value);
            }
        });

        const gameTypeSelect = document.getElementById('gameType');
        if (gameTypeSelect) {
            gameTypeSelect.addEventListener('change', function() {
                updateGameOptions(this.value);
            });
        }

        setupTooltipListeners();
        
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.info-icon')) {
                closeAllTooltips();
            }
        });
    }

    function setupEventListeners() {
        const addVariantBtn = document.getElementById('add-variant');
        if (addVariantBtn) {
            addVariantBtn.addEventListener('click', function() {
                currentEditIndex = -1;
                openModal('custom-variant-modal');
            });
        }
        
        const addMatchBtn = document.getElementById('add-match');
        if (addMatchBtn) {
            addMatchBtn.addEventListener('click', function() {
                openModal('match-modal');
            });
        }
        
        document.querySelectorAll('.close').forEach(closeBtn => {
            closeBtn.addEventListener('click', function() {
                closeModal(this.closest('.modal').id);
            });
        });

        const gameTypeSelect = document.getElementById('gameType');
        if (gameTypeSelect) {
            gameTypeSelect.addEventListener('change', function() {
                updateGameOptions(this.value);
            });
        }

        const teamPlaySelect = document.getElementById('teamPlay');
        if (teamPlaySelect) {
            teamPlaySelect.addEventListener('change', function() {
                toggleTeamOptions(this.value);
            });
        }

        const saveVariantBtn = document.getElementById('save-variant');
        if (saveVariantBtn) {
            saveVariantBtn.addEventListener('click', saveVariant);
        }

        const saveMatchBtn = document.getElementById('save-match');
        if (saveMatchBtn) {
            saveMatchBtn.addEventListener('click', saveMatch);
        }

        const generatePlaylistBtn = document.getElementById('generate-playlist');
        if (generatePlaylistBtn) {
            generatePlaylistBtn.addEventListener('click', function() {
                generatePlaylist();
                hasGeneratedPlaylist = true; // Mark that user has generated a playlist
            });
        }

        const downloadPlaylistBtn = document.getElementById('download-playlist');
        if (downloadPlaylistBtn) {
            downloadPlaylistBtn.addEventListener('click', downloadPlaylist);
        }
        
        const copyPlaylistBtn = document.getElementById('copy-playlist');
        if (copyPlaylistBtn) {
            copyPlaylistBtn.addEventListener('click', copyPlaylistToClipboard);
        }

        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('scroll', function(e) {
                e.stopPropagation();
            });
        });

        const clearAllBtn = document.getElementById('clear-all');
        if (clearAllBtn) {
            clearAllBtn.addEventListener('click', clearAll);
        }

        const delaySlider = document.getElementById('delaySlider');
        if (delaySlider) {
            delaySlider.addEventListener('input', function() {
                const delayValue = parseInt(this.value);
                const delayValueEl = document.getElementById('delayValue');
                if (delayValueEl) {
                    delayValueEl.textContent = delayValue + ' seconds';
                }
                const delayInputEl = document.getElementById('delayInput');
                if (delayInputEl) {
                    delayInputEl.value = delayValue;
                }
            });
        }

        const delayInput = document.getElementById('delayInput');
        if (delayInput) {
            delayInput.addEventListener('change', function() {
                const input = parseInt(this.value);
                if (isNaN(input) || input < 1 || input > 999) {
                    showValidationError(this, 'Please enter a valid number between 1 and 999.');
                    this.value = 15; // Reset to default
                    const delaySliderEl = document.getElementById('delaySlider');
                    if (delaySliderEl) {
                        delaySliderEl.value = 15;
                    }
                    const delayValueEl = document.getElementById('delayValue');
                    if (delayValueEl) {
                        delayValueEl.textContent = '15 seconds';
                    }
                } else {
                    const delaySliderEl = document.getElementById('delaySlider');
                    if (delaySliderEl) {
                        delaySliderEl.value = input;
                    }
                    const delayValueEl = document.getElementById('delayValue');
                    if (delayValueEl) {
                        delayValueEl.textContent = input + ' seconds';
                    }
                }
            });
        }
    }

    function toggleTeamOptions(teamPlayValue) {
        const teamOptions = document.querySelectorAll('#teamOptions .form-group');
        
        teamOptions.forEach(option => {
            if (option.querySelector('label').getAttribute('for') !== 'teamPlay') {
                option.style.display = teamPlayValue === 'On' ? 'block' : 'none';
            }
        });
    }

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {

            modal.classList.add('opening');

            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

            const modalContent = modal.querySelector('.modal-content');
            if (scrollbarWidth > 0) {
                modalContent.style.paddingRight = `${scrollbarWidth}px`;
            }
            
            modal.style.display = 'block';
            document.body.classList.add('modal-open');

            const modalBody = modal.querySelector('.modal-body');
            if (modalBody) {
                modalBody.scrollTop = 0;
            }

            setTimeout(() => {
                modal.classList.remove('opening');

                setupTooltipListeners(modal);

                modal.querySelectorAll('.info-tooltip').forEach(tooltip => {
                    tooltip.classList.remove('show');
                    
                    tooltip.style.visibility = 'hidden';
                    tooltip.style.opacity = '0';
                    
                    setTimeout(() => {
                        tooltip.style.visibility = '';
                        tooltip.style.opacity = '';
                    }, 50);
                });
            }, 300);
        
            if (modalId === 'custom-variant-modal') {
                if (currentEditIndex === -1) {
                    document.getElementById('gameType').value = 'Slayer';
                    document.getElementById('variantName').value = '';

                    setDefaultFormValues();

                    resetAllOptionSections();

                    updateGameOptions('Slayer');
                } else {
                    const variant = customVariants[currentEditIndex];
                    document.getElementById('variantName').value = variant.name;
                    updateGameOptions(variant.gameType || 'Slayer');
                    
                    if (variant.settings) {
                        for (const [key, value] of Object.entries(variant.settings)) {
                            const select = document.getElementById(key);
                            if (select) {
                                select.value = value;
                            }
                        }
                    }
                    
                    const teamPlaySelect = document.getElementById('teamPlay');
                    if (teamPlaySelect) {
                        toggleTeamOptions(teamPlaySelect.value);
                    }
                }
            } else if (modalId === 'match-modal') {
                populateMatchVariantsDropdown();
                
                const mapCheckboxes = document.querySelectorAll('#mapSelect input[type="checkbox"]');
                mapCheckboxes.forEach(checkbox => {
                    checkbox.checked = false;
                });

                const mapSelect = document.getElementById('mapSelect');
                if (mapSelect) {
                    mapSelect.scrollTop = 0;
                }
                
                document.getElementById('matchWeight').value = '100';
                
                document.getElementById('matchMinPlayers').value = '1';
                document.getElementById('matchMaxPlayers').value = '16';
            }
        }
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');

            if (modalId === 'custom-variant-modal') {
                currentEditIndex = -1;

                const variantNameInput = document.getElementById('variantName');
                if (variantNameInput) {
                    variantNameInput.value = '';
                }
            }

            if (modalId === 'match-modal') {
                resetSaveMatchButton();
            }
        }
    }

    function setupVariantCreator() {
        if (typeof MATCH_OPTIONS === 'undefined' || 
            typeof PLAYER_SETTINGS === 'undefined' || 
            typeof TEAM_OPTIONS === 'undefined' || 
            typeof VEHICLE_OPTIONS === 'undefined' || 
            typeof EQUIPMENT_OPTIONS === 'undefined') {
            console.error('Required data variables are not defined. Make sure data.js is loaded before script.js');
            return;
        }

        // Set up match options section
        const matchOptionsContainer = document.getElementById('matchOptions');
        if (matchOptionsContainer) {
            matchOptionsContainer.innerHTML = '<div class="game-options-grid"></div>';
            const matchOptionsGrid = matchOptionsContainer.querySelector('.game-options-grid');
            
            if (matchOptionsGrid) {
                MATCH_OPTIONS.forEach(option => {
                    const formGroup = createFormGroup(option);
                    if (formGroup) {
                        matchOptionsGrid.appendChild(formGroup);
                    }
                });
            }
        }
        
        // Set up player settings section
        const playerSettingsContainer = document.getElementById('playerSettings');
        if (playerSettingsContainer) {
            playerSettingsContainer.innerHTML = '<div class="game-options-grid"></div>';
            const playerSettingsGrid = playerSettingsContainer.querySelector('.game-options-grid');
            
            if (playerSettingsGrid) {
                PLAYER_SETTINGS.forEach(option => {
                    const formGroup = createFormGroup(option);
                    if (formGroup) {
                        playerSettingsGrid.appendChild(formGroup);
                    }
                });
            }
        }
        
        // Set up team options section
        const teamOptionsContainer = document.getElementById('teamOptions');
        if (teamOptionsContainer) {
            teamOptionsContainer.innerHTML = '<div class="game-options-grid"></div>';
            const teamOptionsGrid = teamOptionsContainer.querySelector('.game-options-grid');
            
            if (teamOptionsGrid) {
                TEAM_OPTIONS.forEach(option => {
                    const formGroup = createFormGroup(option);
                    if (formGroup) {
                        teamOptionsGrid.appendChild(formGroup);
                    }
                });
            }
        }
        
        // Set up vehicle options section
        const vehicleOptionsContainer = document.getElementById('vehicleOptions');
        if (vehicleOptionsContainer) {
            vehicleOptionsContainer.innerHTML = '<div class="game-options-grid"></div>';
            const vehicleOptionsGrid = vehicleOptionsContainer.querySelector('.game-options-grid');
            
            if (vehicleOptionsGrid) {
                VEHICLE_OPTIONS.forEach(option => {
                    const formGroup = createFormGroup(option);
                    if (formGroup) {
                        vehicleOptionsGrid.appendChild(formGroup);
                    }
                });
            }
        }
        
        // Set up equipment options section 
        const equipmentOptionsContainer = document.getElementById('equipmentOptions');
        if (equipmentOptionsContainer) {
            equipmentOptionsContainer.innerHTML = '<div class="game-options-grid"></div>';
            const equipmentOptionsGrid = equipmentOptionsContainer.querySelector('.game-options-grid');
            
            if (equipmentOptionsGrid) {
                EQUIPMENT_OPTIONS.forEach(option => {
                    const formGroup = createFormGroup(option);
                    if (formGroup) {
                        equipmentOptionsGrid.appendChild(formGroup);
                    }
                });
            }
        }
        
        // Initialize game-specific options based on default game type
        const gameTypeSelect = document.getElementById('gameType');
        if (gameTypeSelect) {
            const defaultGameType = gameTypeSelect.value;
            updateGameOptions(defaultGameType);
        }
    }

    // Updates game-specific options based on selected game type
    function updateGameOptions(gameType) {
        if (typeof SLAYER_OPTIONS === 'undefined' || 
            typeof KOTH_OPTIONS === 'undefined' || 
            typeof ODDBALL_OPTIONS === 'undefined' || 
            typeof JUGGERNAUT_OPTIONS === 'undefined' || 
            typeof CTF_OPTIONS === 'undefined' || 
            typeof ASSAULT_OPTIONS === 'undefined' || 
            typeof TERRITORIES_OPTIONS === 'undefined') {
            console.error('Game-specific options variables are not defined. Make sure data.js is loaded before script.js');
            return;
        }
        
        const gameOptionsContainer = document.getElementById('gameSpecificOptions');
        if (!gameOptionsContainer) return;
        
        gameOptionsContainer.innerHTML = '';
        
        let gameTypeDisplayName = "Game Type";
        const selectedGameType = GAME_TYPES.find(type => type.id === gameType);
        if (selectedGameType) {
            gameTypeDisplayName = selectedGameType.name;
        }
        
        // Handle team play options based on game type
        switch(gameType) {
            case 'Slayer':
                resetTeamPlayOptions();
                break;
            case 'KingOfTheHill':
                resetTeamPlayOptions();
                break;
            case 'Oddball':
                resetTeamPlayOptions();
                break;
            case 'Juggernaut':
                resetTeamPlayOptions();
                break;
            case 'CaptureTheFlag':
                forceTeamPlayOn();
                break;
            case 'Assault':
                forceTeamPlayOn();
                break;
            case 'Territories':
                forceTeamPlayOn();
                break;
        }
        
        const header = document.createElement('h3');
        header.className = 'section-category';
        header.textContent = `${gameTypeDisplayName} Settings`;
        gameOptionsContainer.appendChild(header);
        
        const gameOptionsGrid = document.createElement('div');
        gameOptionsGrid.className = 'game-options-grid';
        gameOptionsContainer.appendChild(gameOptionsGrid);
        
        let gameSpecificOptions = [];
        
        switch(gameType) {
            case 'Slayer':
                gameSpecificOptions = SLAYER_OPTIONS;
                break;
            case 'KingOfTheHill':
                gameSpecificOptions = KOTH_OPTIONS;
                break;
            case 'Oddball':
                gameSpecificOptions = ODDBALL_OPTIONS;
                break;
            case 'Juggernaut':
                gameSpecificOptions = JUGGERNAUT_OPTIONS;
                break;
            case 'CaptureTheFlag':
                gameSpecificOptions = CTF_OPTIONS;
                // These game types require team play to be ON
                forceTeamPlayOn();
                break;
            case 'Assault':
                gameSpecificOptions = ASSAULT_OPTIONS;
                // These game types require team play to be ON
                forceTeamPlayOn();
                break;
            case 'Territories':
                gameSpecificOptions = TERRITORIES_OPTIONS;
                // These game types require team play to be ON
                forceTeamPlayOn();
                break;
            default:
                gameOptionsContainer.style.display = 'none';
                return;
        }
        
        gameOptionsContainer.style.display = 'block';
        
        if (Array.isArray(gameSpecificOptions)) {
        gameSpecificOptions.forEach(option => {
            const formGroup = createFormGroup(option);
                if (formGroup) {
            gameOptionsGrid.appendChild(formGroup);
                }
            });
        } else {
            console.error(`Game-specific options for ${gameType} are not properly defined`);
        }
    }

    function resetTeamPlayOptions() {
        const teamPlaySelect = document.getElementById('teamPlay');
        if (teamPlaySelect) {
            teamPlaySelect.disabled = false;
            
            Array.from(teamPlaySelect.options).forEach(option => {
                option.style.display = '';
            });
            
            if (!teamPlaySelect.value) {
                const defaultOption = TEAM_OPTIONS.find(option => option.id === 'teamPlay');
                if (defaultOption) {
                    const defaultValue = defaultOption.values.find(v => v.default);
                    if (defaultValue) {
                        teamPlaySelect.value = defaultValue.id;
                        toggleTeamOptions(defaultValue.id);
                    }
                }
            }
        }
    }

    // Function to force Team Play setting to On and disable the Off option
    function forceTeamPlayOn() {
        const teamPlaySelect = document.getElementById('teamPlay');
        if (teamPlaySelect) {
            teamPlaySelect.value = 'On';
            
            Array.from(teamPlaySelect.options).forEach(option => {
                if (option.value === 'Off') {
                    option.style.display = 'none';
                }
            });
            
            toggleTeamOptions('On');
            
            teamPlaySelect.disabled = true;
        }
    }

    function populateMatchVariantsDropdown() {
        const matchVariantSelect = document.getElementById('matchVariant');
        matchVariantSelect.innerHTML = '<option value="">Select Variant</option>';
        
            customVariants.forEach(variant => {
                const option = document.createElement('option');
                option.value = variant.name;
                option.textContent = variant.name;
            matchVariantSelect.appendChild(option);
        });
        
    }

    // Check if variant name conflicts with base variants
    function checkVariantNameConflict(variantName) {
        return BASE_VARIANTS.some(v => v.name.toLowerCase() === variantName.toLowerCase());
    }

    function showValidationError(element, message) {
        closeAllTooltips();
        
        element.classList.add('form-error');
        
        element.focus();

        let tooltip = element.nextElementSibling;
        if (!tooltip || !tooltip.classList.contains('error-tooltip')) {
            tooltip = document.createElement('div');
            tooltip.className = 'error-tooltip';
            element.parentNode.insertBefore(tooltip, element.nextSibling);
        }

        tooltip.textContent = message;
        tooltip.classList.add('show');
        tooltip.style.zIndex = '5000';

        const removeError = () => {
            element.classList.remove('form-error');
            tooltip.classList.remove('show');
            setTimeout(() => {
                if (tooltip.parentNode) {
                    tooltip.parentNode.removeChild(tooltip);
                }
            }, 300);
        };
        
        element.addEventListener('input', removeError, { once: true });
        element.addEventListener('change', removeError, { once: true });
        
        setTimeout(removeError, 3000);
    }

    function saveVariant() {
        const variantNameInput = document.getElementById('variantName');
        const variantName = variantNameInput.value.trim();
        
        if (!variantName) {
            showValidationError(variantNameInput, 'Please enter a variant name');
            return;
        }
        
        if (variantName.length > 16) {
            showValidationError(variantNameInput, 'Variant name cannot exceed 16 characters');
            return;
        }
        
        // Check if name conflicts with base variants as the game overides the custom variant and uses the default base game varaint
        if (checkVariantNameConflict(variantName)) {
            showValidationError(variantNameInput, 'Cannot use the same name as a base variant');
            return;
        }
        
        // Check if name already exists in custom variants (except when editing)
        if (currentEditIndex === -1 && customVariants.some(v => v.name === variantName)) {
            if (!confirm('A variant with this name already exists. Do you want to replace it?')) {
                return;
            }
            customVariants = customVariants.filter(v => v.name !== variantName);
        }
        
        // Always use game type method since creation method dropdown is hidden
            const gameTypeId = document.getElementById('gameType').value;
        
        const variant = {
            name: variantName,
            gameType: gameTypeId,
            settings: {}
        };
        
        // Match options
        MATCH_OPTIONS.forEach(option => {
            const select = document.getElementById(option.id);
            if (select && select.value) {
                variant.settings[option.id] = select.value;
            }
        });
        
        // Player settings
        PLAYER_SETTINGS.forEach(option => {
            const select = document.getElementById(option.id);
            if (select && select.value) {
                variant.settings[option.id] = select.value;
            }
        });
        
        // Team options
        TEAM_OPTIONS.forEach(option => {
            const select = document.getElementById(option.id);
            if (select && select.value) {
                variant.settings[option.id] = select.value;
            }
        });
        
        // Vehicle options
        VEHICLE_OPTIONS.forEach(option => {
            const select = document.getElementById(option.id);
            if (select && select.value) {
                variant.settings[option.id] = select.value;
            }
        });
        
        // Equipment options
        EQUIPMENT_OPTIONS.forEach(option => {
            const select = document.getElementById(option.id);
            if (select && select.value) {
                variant.settings[option.id] = select.value;
            }
        });
        
        // Game-specific options
        let gameSpecificOptions = [];
        switch(gameTypeId) {
            case 'Slayer':
                gameSpecificOptions = SLAYER_OPTIONS;
                break;
            case 'KingOfTheHill':
                gameSpecificOptions = KOTH_OPTIONS;
                break;
            case 'Oddball':
                gameSpecificOptions = ODDBALL_OPTIONS;
                break;
            case 'Juggernaut':
                gameSpecificOptions = JUGGERNAUT_OPTIONS;
                break;
            case 'CaptureTheFlag':
                gameSpecificOptions = CTF_OPTIONS;
                break;
            case 'Assault':
                gameSpecificOptions = ASSAULT_OPTIONS;
                break;
            case 'Territories':
                gameSpecificOptions = TERRITORIES_OPTIONS;
                break;
        }
        
        gameSpecificOptions.forEach(option => {
            const select = document.getElementById(option.id);
            if (select && select.value) {
                variant.settings[option.id] = select.value;
            }
        });
        
        if (currentEditIndex !== -1) {
            customVariants[currentEditIndex] = variant;
            currentEditIndex = -1;
        } else {
        customVariants.push(variant);
        }
        
        updateCustomVariantsList();
        
        saveToLocalStorage();
        
        closeModal('custom-variant-modal');
    }

    function saveMatch() {
        const matchVariantSelect = document.getElementById('matchVariant');
        if (!matchVariantSelect) {
            console.error('Match variant select element not found');
            return;
        }
        
        const variantId = matchVariantSelect.value;
        if (!variantId) {
            showValidationError(matchVariantSelect, 'Please select a variant');
            return;
        }
        
        const mapSelect = document.getElementById('mapSelect');
        if (!mapSelect) {
            console.error('Map select element not found');
            return;
        }
        
        const mapCheckboxes = mapSelect.querySelectorAll('input[type="checkbox"]:checked');
        if (!mapCheckboxes || mapCheckboxes.length === 0) {
            showValidationError(mapSelect, 'Please select at least one map');
            return;
        }
        
        const selectedMaps = Array.from(mapCheckboxes).map(checkbox => checkbox.value);
        
        const weightInput = document.getElementById('matchWeight');
        const minPlayersSelect = document.getElementById('matchMinPlayers');
        const maxPlayersSelect = document.getElementById('matchMaxPlayers');
        
        if (!weightInput || !minPlayersSelect || !maxPlayersSelect) {
            console.error('One or more match form elements not found');
            return;
        }
        
        const weight = parseInt(weightInput.value, 10) || 100;
        const minPlayers = parseInt(minPlayersSelect.value, 10) || 1;
        const maxPlayers = parseInt(maxPlayersSelect.value, 10) || 16;
        
        if (weight < 1 || weight > 1000) {
            showValidationError(weightInput, 'Weight must be between 1 and 1000.');
            return;
        }
        
        if (minPlayers > maxPlayers) {
            showValidationError(minPlayersSelect, 'Minimum players cannot be greater than maximum players.');
            return;
        }
        
        selectedMaps.forEach(map => {
            const match = {
                variant: variantId,
                map,
                weight,
                minPlayers,
                maxPlayers
            };
            
            matches.push(match);
        });
        
        updateMatchesList();
        
        saveToLocalStorage();
        
        closeModal('match-modal');
    }

    function updateCustomVariantsList() {
        const container = document.getElementById('custom-variants-list');
        container.innerHTML = '';
        
        if (customVariants.length === 0) {
            container.innerHTML = '<p>No custom variants added yet.</p>';
            return;
        }
        
        customVariants.forEach((variant, index) => {
            const variantItem = document.createElement('div');
            variantItem.className = 'variant-item';
            
            const details = document.createElement('div');
            details.className = 'variant-item-details';
            
            let baseInfo = '';
            if (variant.gameType) {
                const gameType = GAME_TYPES.find(g => g.id === variant.gameType);
                baseInfo = `Game Type: ${gameType ? gameType.name : variant.gameType}`;
            }
            
            details.innerHTML = `
                <strong>${variant.name}</strong><br>
                <small>${baseInfo}</small>
            `;
            
            const actions = document.createElement('div');
            actions.className = 'variant-item-actions';
            
            const editBtn = document.createElement('button');
            editBtn.className = 'action-btn edit';
            editBtn.innerHTML = '✏️';
            editBtn.title = 'Edit Variant';
            editBtn.addEventListener('click', () => editVariant(index));
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'action-btn delete';
            deleteBtn.innerHTML = '❌';
            deleteBtn.title = 'Delete Variant';
            deleteBtn.addEventListener('click', () => deleteVariant(index));
            
            actions.appendChild(editBtn);
            actions.appendChild(deleteBtn);
            
            variantItem.appendChild(details);
            variantItem.appendChild(actions);
            
            container.appendChild(variantItem);
        });
    }

    function updateMatchesList() {
        const container = document.getElementById('matches-list');
        container.innerHTML = '';
        
        if (matches.length === 0) {
            container.innerHTML = '<p>No matches added yet.</p>';
            
            // Hide playlist preview if no matches
            const previewContainer = document.getElementById('preview-container');
            if (previewContainer) {
                previewContainer.style.display = 'none';
            }
            
            return;
        }
        
        matches.forEach((match, index) => {
            const matchItem = document.createElement('div');
            matchItem.className = 'match-item';
            
            const details = document.createElement('div');
            details.className = 'match-item-details';
            
            let variantName = match.variant;
            let mapName = match.map;
            
            // Check if it's a built-in variant
            const builtInVariant = BASE_VARIANTS.find(v => v.id === match.variant);
            if (builtInVariant) {
                variantName = builtInVariant.name;
            }
            
            // Check if it's a custom variant
            const customVariant = customVariants.find(v => v.name === match.variant);
            if (customVariant) {
                variantName = customVariant.name;
            }
            
            const mapObj = MAPS.find(m => m.id === match.map);
            if (mapObj) {
                mapName = mapObj.name;
            }
            
            details.innerHTML = `
                <strong>${variantName} on ${mapName}</strong><br>
                <small>Weight: ${match.weight} | Players: ${match.minPlayers}-${match.maxPlayers}</small>
            `;
            
            const actions = document.createElement('div');
            actions.className = 'match-item-actions';
            
            const editBtn = document.createElement('button');
            editBtn.className = 'action-btn edit';
            editBtn.innerHTML = '✏️';
            editBtn.title = 'Edit Match';
            editBtn.addEventListener('click', () => editMatch(index));
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'action-btn delete';
            deleteBtn.innerHTML = '❌';
            deleteBtn.title = 'Delete Match';
            deleteBtn.addEventListener('click', () => deleteMatch(index));
            
            actions.appendChild(editBtn);
            actions.appendChild(deleteBtn);
            
            matchItem.appendChild(details);
            matchItem.appendChild(actions);
            
            container.appendChild(matchItem);
        });
    }

    function editVariant(index) {
        const variant = customVariants[index];
        currentEditIndex = index;
        
        document.getElementById('variantName').value = variant.name;
        document.getElementById('gameType').value = variant.gameType || 'Slayer';
        
        updateGameOptions(variant.gameType || 'Slayer');
        
        if (variant.settings) {
            for (const [key, value] of Object.entries(variant.settings)) {
                const select = document.getElementById(key);
                if (select) {
                    select.value = value;
                }
            }
        }
        
        const teamPlaySelect = document.getElementById('teamPlay');
        if (teamPlaySelect) {
            toggleTeamOptions(teamPlaySelect.value);
        }
        
        openModal('custom-variant-modal');
    }

    function deleteVariant(index) {
        if (confirm('Are you sure you want to delete this variant?')) {
            customVariants.splice(index, 1);
            updateCustomVariantsList();
            saveToLocalStorage();
        }
    }

    function editMatch(index) {
        const match = matches[index];
        
        openModal('match-modal');
        
        populateMatchVariantsDropdown();
        const matchVariantSelect = document.getElementById('matchVariant');
        if (matchVariantSelect) {
            matchVariantSelect.value = match.variant;
        }
        
        const mapCheckboxes = document.querySelectorAll('#mapSelect input[type="checkbox"]');
        mapCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
            
            if (checkbox.value === match.map) {
                checkbox.checked = true;
            }
        });
        
        const weightInput = document.getElementById('matchWeight');
        if (weightInput) {
            weightInput.value = match.weight || 100;
        }
        
        const minPlayersSelect = document.getElementById('matchMinPlayers');
        if (minPlayersSelect) {
            minPlayersSelect.value = match.minPlayers || 1;
        }
        
        const maxPlayersSelect = document.getElementById('matchMaxPlayers');
        if (maxPlayersSelect) {
            maxPlayersSelect.value = match.maxPlayers || 16;
        }
        
        const saveMatchBtn = document.getElementById('save-match');
        if (saveMatchBtn) {
            const newSaveBtn = saveMatchBtn.cloneNode(true);
            saveMatchBtn.parentNode.replaceChild(newSaveBtn, saveMatchBtn);
            
            newSaveBtn.addEventListener('click', function() {
                updateMatch(index);
            });
            
            newSaveBtn.textContent = 'Update Match';
        }
    }
    
    function updateMatch(index) {
        const matchVariantSelect = document.getElementById('matchVariant');
        if (!matchVariantSelect) {
            console.error('Match variant select element not found');
            return;
        }
        
        const variantId = matchVariantSelect.value;
        if (!variantId) {
            showValidationError(matchVariantSelect, 'Please select a variant.');
            return;
        }
        
        const mapSelect = document.getElementById('mapSelect');
        if (!mapSelect) {
            console.error('Map select element not found');
            return;
        }
        
        const mapCheckboxes = mapSelect.querySelectorAll('input[type="checkbox"]:checked');
        if (!mapCheckboxes || mapCheckboxes.length === 0) {
            showValidationError(mapSelect, 'Please select at least one map.');
            return;
        }
        
        const selectedMap = mapCheckboxes[0].value;
        
        const weightInput = document.getElementById('matchWeight');
        const minPlayersSelect = document.getElementById('matchMinPlayers');
        const maxPlayersSelect = document.getElementById('matchMaxPlayers');
        
        if (!weightInput || !minPlayersSelect || !maxPlayersSelect) {
            console.error('One or more match form elements not found');
            return;
        }
        
        const weight = parseInt(weightInput.value, 10) || 100;
        const minPlayers = parseInt(minPlayersSelect.value, 10) || 1;
        const maxPlayers = parseInt(maxPlayersSelect.value, 10) || 16;
        
        if (weight < 1 || weight > 1000) {
            showValidationError(weightInput, 'Weight must be between 1 and 1000.');
            return;
        }
        
        if (minPlayers > maxPlayers) {
            showValidationError(minPlayersSelect, 'Minimum players cannot be greater than maximum players.');
            return;
        }
        
        // Update the match
        matches[index] = {
            variant: variantId,
            map: selectedMap,
            weight: weight,
            minPlayers: minPlayers,
            maxPlayers: maxPlayers
        };
        
        updateMatchesList();
        
        saveToLocalStorage();
        
        resetSaveMatchButton();
        closeModal('match-modal');
    }
    
    function resetSaveMatchButton() {
        const saveMatchBtn = document.getElementById('save-match');
        if (saveMatchBtn) {
            const newSaveBtn = saveMatchBtn.cloneNode(true);
            saveMatchBtn.parentNode.replaceChild(newSaveBtn, saveMatchBtn);
            
            newSaveBtn.addEventListener('click', saveMatch);
            
            newSaveBtn.textContent = 'Save Match';
        }
    }

    function deleteMatch(index) {
        if (confirm('Are you sure you want to delete this match?')) {
            matches.splice(index, 1);
            updateMatchesList();
            saveToLocalStorage();
        }
    }

    // Copy playlist text to clipboard
    function copyPlaylistToClipboard() {
        const playlistText = document.getElementById('playlist-preview').textContent;
        
        // Create a temporary textarea to copy the text
        const textarea = document.createElement('textarea');
        textarea.value = playlistText;
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            const success = document.execCommand('copy');
            if (success) {
                // Success notification
                const notification = document.createElement('div');
                notification.textContent = 'Playlist copied to clipboard!';
                notification.className = 'copy-notification';
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.classList.add('fade-out');
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 500);
                }, 2000);
            } else {
                alert('Failed to copy. Please try again.');
            }
        } catch (err) {
            console.error('Copy failed:', err);
            alert('Failed to copy. Please try again.');
        }
        
        document.body.removeChild(textarea);
    }

    function generatePlaylist() {
        if (matches.length === 0 || customVariants.length === 0) {
            const generateButton = document.getElementById('generate-playlist');
            let errorMessage = 'Please create at least one custom variant and add at least one match before generating a playlist.';
            
            if (matches.length === 0 && customVariants.length > 0) {
                errorMessage = 'Please add at least one match before generating a playlist.';
            } else if (matches.length > 0 && customVariants.length === 0) {
                errorMessage = 'Please create at least one custom variant before generating a playlist.';
            }

            let tooltip = document.createElement('div');
            tooltip.className = 'error-tooltip';
            tooltip.textContent = errorMessage;
            tooltip.style.zIndex = '5000';

            generateButton.parentNode.appendChild(tooltip);
            tooltip.style.top = (generateButton.offsetTop + generateButton.offsetHeight + 5) + 'px';
            tooltip.style.left = generateButton.offsetLeft + 'px';
            
            setTimeout(() => {
                tooltip.classList.add('show');
            }, 10);

            setTimeout(() => {
                tooltip.classList.remove('show');
                setTimeout(() => {
                    if (tooltip.parentNode) {
                        tooltip.parentNode.removeChild(tooltip);
                    }
                }, 300);
            }, 3000);
            
            return;
        }
        
        let playlist = '';
        
        playlist += '[playlist]\n';
        
        const playlistName = document.getElementById('playlistName').value.trim() || 'Custom Playlist';
        playlist += `; ${playlistName}\n`;
        
        const shuffleValue = document.getElementById('shufflePlaylist').value;
        playlist += `shuffle=${shuffleValue}\n`;
        
        const pregameTeamSelectionDelay = document.getElementById('pregameTeamSelectionDelay').value;
        const pregameDelay = document.getElementById('pregameDelay').value;
        const postgameDelay = document.getElementById('postgameDelay').value;
        
        playlist += `Pregame Team Selection Delay=${pregameTeamSelectionDelay}\n`;
        playlist += `Pregame Delay=${pregameDelay}\n`;
        playlist += `Postgame Delay=${postgameDelay}\n\n`;
        
        customVariants.forEach(variant => {
            playlist += '[custom variant]\n';
            playlist += `name=${variant.name}\n`;
            
            const gameType = GAME_TYPES.find(g => g.id === variant.gameType);
            playlist += `game type=${gameType ? gameType.name : variant.gameType}\n`;
            
            for (const [key, value] of Object.entries(variant.settings)) {
                const formattedKey = key.replace(/([A-Z])/g, ' $1').trim();
                
                let formattedValue = value;
                
                [MATCH_OPTIONS, PLAYER_SETTINGS, TEAM_OPTIONS, VEHICLE_OPTIONS, EQUIPMENT_OPTIONS].forEach(optionCategory => {
                    optionCategory.forEach(option => {
                        if (option.id === key) {
                            const foundValue = option.values.find(v => v.id === value);
                            if (foundValue) {
                                formattedValue = foundValue.name;
                            }
                        }
                    });
                });
                
                playlist += `${formattedKey} = ${formattedValue}\n`;
            }
            
            playlist += '\n';
        });
        
        matches.forEach(match => {
            playlist += '[match]\n';
            
            // Get variant name (could be a built-in or custom variant)
            let variantName = match.variant;
            const builtInVariant = BASE_VARIANTS.find(v => v.id === match.variant);
            if (builtInVariant) {
                variantName = builtInVariant.name;
            }
            
            let mapName = match.map;
            const mapObj = MAPS.find(m => m.id === match.map);
            if (mapObj) {
                // Use file_name if available, otherwise use display name for the HPL file
                mapName = mapObj.file_name || mapObj.name;
            }
            
            playlist += `variant=${variantName}\n`;
            playlist += `map=${mapName}\n`;
            playlist += `weight=${match.weight}\n`;
            playlist += `minimum players=${match.minPlayers}\n`;
            playlist += `maximum players=${match.maxPlayers}\n\n`;
        });
        
        const previewElement = document.getElementById('playlist-preview');
        if (previewElement) {
            previewElement.textContent = playlist;
        }
        
        const previewContainer = document.getElementById('preview-container');
        if (previewContainer) {
            previewContainer.style.display = 'block';
        }
    }

    // Download the playlist as a .hpl file
    function downloadPlaylist() {
        // Close all tooltips first
        closeAllTooltips();
        
        const playlistNameInput = document.getElementById('playlistName');
        const playlistName = playlistNameInput.value.trim();
        
        if (!playlistName) {
            showValidationError(playlistNameInput, 'Please enter a playlist name before downloading');
            return;
        }
        
        const playlist = document.getElementById('playlist-preview').textContent;
        
        // Create sanitized filename
        const filename = playlistName.replace(/[^a-z0-9]/gi, '_') + '.hpl';
        
        const blob = new Blob([playlist], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
    }


    function setDefaultFormValues() {
        document.getElementById('gameType').value = 'Slayer';
        
        // Reset all match options to their defaults
        MATCH_OPTIONS.forEach(option => {
            const select = document.getElementById(option.id);
            if (select) {
                const defaultValue = option.values.find(v => v.default);
                if (defaultValue) {
                    select.value = defaultValue.id;
                }
            }
        });
        
        // Reset all player settings to their defaults
        PLAYER_SETTINGS.forEach(option => {
            const select = document.getElementById(option.id);
            if (select) {
                const defaultValue = option.values.find(v => v.default);
                if (defaultValue) {
                    select.value = defaultValue.id;
                }
            }
        });
        
        // Reset team, vehicle, and equipment options to their defaults
        [TEAM_OPTIONS, VEHICLE_OPTIONS, EQUIPMENT_OPTIONS].forEach(optionCategory => {
            optionCategory.forEach(option => {
                const select = document.getElementById(option.id);
                if (select) {
                    const defaultValue = option.values.find(v => v.default);
                    if (defaultValue) {
                        select.value = defaultValue.id;
                    }
                }
            });
        });
        
        // Reset all game-specific options
        // Slayer options
        if (typeof SLAYER_OPTIONS !== 'undefined') {
            SLAYER_OPTIONS.forEach(option => {
                const select = document.getElementById(option.id);
                if (select) {
                    const defaultValue = option.values.find(v => v.default);
                    if (defaultValue) {
                        select.value = defaultValue.id;
                    }
                }
            });
        }
        
        // Reset other game type options as well
        [KOTH_OPTIONS, ODDBALL_OPTIONS, JUGGERNAUT_OPTIONS, CTF_OPTIONS, 
         ASSAULT_OPTIONS, TERRITORIES_OPTIONS].forEach(optionsArray => {
            if (typeof optionsArray !== 'undefined') {
                optionsArray.forEach(option => {
                    const select = document.getElementById(option.id);
                    if (select) {
                        const defaultValue = option.values.find(v => v.default);
                        if (defaultValue) {
                            select.value = defaultValue.id;
                        }
                    }
                });
            }
        });
        
        // Make sure team play options are properly toggled
        const teamPlaySelect = document.getElementById('teamPlay');
        if (teamPlaySelect) {
            // Reset to default value
            const defaultOption = TEAM_OPTIONS.find(option => option.id === 'teamPlay');
            if (defaultOption) {
                const defaultValue = defaultOption.values.find(v => v.default);
                if (defaultValue) {
                    teamPlaySelect.value = defaultValue.id;
                }
            }
            
            // Enable the select and make all options visible
            teamPlaySelect.disabled = false;
            Array.from(teamPlaySelect.options).forEach(option => {
                option.style.display = '';
            });
            
            // Toggle visibility of team options based on selected value
            toggleTeamOptions(teamPlaySelect.value);
        }
    }

    function populateFormOptions() {
        
        const equipmentOptionsGrid = document.querySelector('.form-section .game-options-grid:nth-of-type(5)');
        if (equipmentOptionsGrid) {
            EQUIPMENT_OPTIONS.forEach(option => {
                const group = createFormGroup(option);
                equipmentOptionsGrid.appendChild(group);
            });
        }
        
        updateGameOptions('Slayer');
    }

    function closeAllTooltips() {
        document.querySelectorAll('.info-tooltip.show').forEach(tooltip => {
            tooltip.classList.remove('show');
        });
    }

    document.addEventListener('click', () => {
        closeAllTooltips();
    });

    function createFormGroup(option) {
        if (!option || typeof option !== 'object' || !option.id || !option.name || !Array.isArray(option.values)) {
            console.error('Invalid option provided to createFormGroup:', option);
            return null;
        }
        
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        
        const labelContainer = document.createElement('div');
        labelContainer.className = 'label-container';
        
        const label = document.createElement('label');
        label.setAttribute('for', option.id);
        label.textContent = option.name;
        
        if (option.description) {
            const infoIcon = document.createElement('span');
            infoIcon.className = 'info-icon';
            infoIcon.textContent = 'i';
            infoIcon.setAttribute('aria-label', `Information about ${option.name}`);
            infoIcon.setAttribute('tabindex', '0');

            const tooltip = document.createElement('div');
            tooltip.className = 'info-tooltip';
            tooltip.textContent = option.description;

            infoIcon.addEventListener('mouseenter', () => {
                closeAllTooltips();

                adjustTooltipPosition(infoIcon, tooltip);
                
                tooltip.classList.add('show');
            });
            
            infoIcon.addEventListener('mouseleave', () => {
                tooltip.classList.remove('show');
            });
            
            infoIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                
                if (tooltip.classList.contains('show')) {
                    tooltip.classList.remove('show');
                } else {
                    closeAllTooltips();
                    adjustTooltipPosition(infoIcon, tooltip);
                    tooltip.classList.add('show');
                }
            });
            
            infoIcon.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    closeAllTooltips();
                    adjustTooltipPosition(infoIcon, tooltip);
                    tooltip.classList.add('show');
                }
            });
            
            infoIcon.appendChild(tooltip);
            labelContainer.appendChild(label);
            labelContainer.appendChild(infoIcon);
        } else {
            labelContainer.appendChild(label);
        }
        
        const select = document.createElement('select');
        select.id = option.id;
        select.name = option.id;
        
        option.values.forEach(value => {
            if (!value || typeof value !== 'object' || !value.id) {
                console.warn(`Invalid value in option ${option.id}:`, value);
                return;
            }
            
            const optionEl = document.createElement('option');
            optionEl.value = value.id;
            optionEl.textContent = value.name || value.id;
            
            if (option.id === 'resolveTies' && value.id === 'Off') {
                optionEl.selected = true;
            } else if (option.id === 'maxActivePlayers' && value.id === '16') {
                optionEl.selected = true;
            } else if (option.id === 'respawnTime' && value.id === '5Seconds') {
                optionEl.selected = true;
            } else if (value.default && 
                      option.id !== 'resolveTies' && 
                      option.id !== 'maxActivePlayers' && 
                      option.id !== 'respawnTime') {
                optionEl.selected = true;
            }
            
            select.appendChild(optionEl);
        });
        
        formGroup.appendChild(labelContainer);
        formGroup.appendChild(select);
        
        return formGroup;
    }

    function clearAll() {
        if (confirm('WARNING: This action will delete all Variants, Matches and Playlist Settings! Are you sure?')) {
            localStorage.removeItem('halo2_custom_variants');
            localStorage.removeItem('halo2_matches');
            
            // Reset data structures
            customVariants = [];
            matches = [];
            
            // Reset UI
            updateCustomVariantsList();
            updateMatchesList();
            
            // Reset form fields
            document.getElementById('playlistName').value = '';
            document.getElementById('shufflePlaylist').value = 'Off';
            document.getElementById('pregameTeamSelectionDelay').value = '5';
            document.getElementById('pregameDelay').value = '5';
            document.getElementById('postgameDelay').value = '10';
            
            // Reset and hide playlist preview
            const previewContainer = document.getElementById('preview-container');
            if (previewContainer) {
                previewContainer.style.display = 'none';
            }
            
            const playlistPreview = document.getElementById('playlist-preview');
            if (playlistPreview) {
                playlistPreview.textContent = '';
            }
            
            // Reset generated playlist flag to behave like a fresh page load
            hasGeneratedPlaylist = false;
        }
    }

    function adjustTooltipPosition(infoIcon, tooltip) {
        tooltip.classList.remove('tooltip-left', 'tooltip-right', 'tooltip-top', 'tooltip-bottom');
        tooltip.style.zIndex = '2000';
        tooltip.style.top = '';
        tooltip.style.left = '';
        tooltip.style.right = '';
        tooltip.style.bottom = '';
        
        tooltip.style.width = '280px';
        
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        const iconRect = infoIcon.getBoundingClientRect();
        const tooltipWidth = tooltip.offsetWidth || 280;
        
        const isInModal = infoIcon.closest('.modal-content') !== null;
        
        if (isInModal) {
            const modalRect = infoIcon.closest('.modal-content').getBoundingClientRect();
            
            const isRightSide = (iconRect.left > modalRect.left + modalRect.width / 2);
            
            const position = isRightSide ? 'left' : 'right';
            
            tooltip.style.position = 'absolute';
            
            tooltip.classList.add(`tooltip-${position}`);
            
            if (isRightSide) {
                const tooltipRect = tooltip.getBoundingClientRect();
                if (tooltipRect.left < modalRect.left) {
                    const adjustment = modalRect.left - tooltipRect.left + 20;
                    tooltip.style.left = `${adjustment}px`;
                }
            } else {
                const rightEdge = iconRect.right + tooltipWidth;
                if (rightEdge > modalRect.right) {
                    tooltip.classList.remove('tooltip-right');
                    tooltip.classList.add('tooltip-left');
                }
            }
        } else {
            const rightEdgePosition = iconRect.right + tooltipWidth + 10;
            const wouldOverflowRight = rightEdgePosition > viewportWidth;
            
            const leftEdgePosition = iconRect.left - tooltipWidth - 10;
            const wouldOverflowLeft = leftEdgePosition < 0;
            
            let position = 'right';
            
            if (wouldOverflowRight && !wouldOverflowLeft) {
                position = 'left';
            }
            else if (wouldOverflowRight && wouldOverflowLeft) {
                const centerPosition = iconRect.left + (iconRect.width / 2) - (tooltipWidth / 2);
                if (centerPosition >= 0 && centerPosition + tooltipWidth <= viewportWidth) {
                    position = 'top';
                } else {
                    position = (viewportWidth - iconRect.right > iconRect.left) ? 'right' : 'left';
                }
            }
            
            tooltip.classList.add(`tooltip-${position}`);
        }
    }

    function setupTooltipListeners(container = document) {
        const infoIcons = container.querySelectorAll('.info-icon');
        infoIcons.forEach(icon => {
            icon.replaceWith(icon.cloneNode(true));

            const refreshedIcon = container.querySelector(`[aria-label="${icon.getAttribute('aria-label')}"]`);
            if (!refreshedIcon) return;
            
            const tooltip = refreshedIcon.querySelector('.info-tooltip');
            if (!tooltip) return;

            adjustTooltipPosition(refreshedIcon, tooltip);

            tooltip.classList.remove('show');

            refreshedIcon.style.width = '18px';
            refreshedIcon.style.height = '18px';
            refreshedIcon.style.borderRadius = '50%';

            refreshedIcon.addEventListener('mouseenter', (e) => {
                if (e.target === refreshedIcon) {
                    closeAllTooltips();
                    adjustTooltipPosition(refreshedIcon, tooltip);
                    tooltip.classList.add('show');
                    
                    tooltip.style.zIndex = '3000';
                }
            });
            
            refreshedIcon.addEventListener('mouseleave', (e) => {
                if (e.target === refreshedIcon) {
                    tooltip.classList.remove('show');
                    setTimeout(() => {
                        if (!tooltip.classList.contains('show')) {
                            tooltip.style.zIndex = '2000';
                        }
                    }, 300);
                }
            });
            
            refreshedIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                if (e.target === refreshedIcon) {
                    if (tooltip.classList.contains('show')) {
                        tooltip.classList.remove('show');
                        setTimeout(() => {
                            if (!tooltip.classList.contains('show')) {
                                tooltip.style.zIndex = '2000';
                            }
                        }, 300);
                    } else {
                        closeAllTooltips();
                        adjustTooltipPosition(refreshedIcon, tooltip);
                        tooltip.classList.add('show');
                        tooltip.style.zIndex = '3000';
                    }
                }
            });
        });
    }

    // Function to reset any option section to defaults
    function resetOptionSection(sectionId, optionsArray) {
        const container = document.getElementById(sectionId);
        if (!container) return;
        
        // Reset container with the standard structure
        container.innerHTML = '<div class="game-options-grid"></div>';
        const optionsGrid = container.querySelector('.game-options-grid');
        
        if (optionsGrid && Array.isArray(optionsArray)) {
            optionsArray.forEach(option => {
                const formGroup = createFormGroup(option);
                if (formGroup) {
                    optionsGrid.appendChild(formGroup);
                }
            });
        }
    }

    // Function to reset all option sections
    function resetAllOptionSections() {
        resetOptionSection('matchOptions', MATCH_OPTIONS);
        resetOptionSection('playerSettings', PLAYER_SETTINGS);
        resetOptionSection('teamOptions', TEAM_OPTIONS);
        resetOptionSection('vehicleOptions', VEHICLE_OPTIONS);
        resetOptionSection('equipmentOptions', EQUIPMENT_OPTIONS);
    }

}); 