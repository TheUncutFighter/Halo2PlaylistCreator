// Halo 2 Playlist Creator Data

// Maps available in Halo 2 PC
// Custom maps will have to be added manually to .hpl files
const MAPS = [
    { id: "Lockout", name: "Lockout", size: "Small" },
    { id: "Ascension", name: "Ascension", size: "Medium" },
    { id: "Midship", name: "Midship", size: "Small" },
    { id: "IvoryTower", name: "Ivory Tower", size: "Medium" },
    { id: "BeaverCreek", name: "Beaver Creek", size: "Medium" },
    { id: "Burial Mounds", name: "Burial Mounds", size: "Large" },
    { id: "Coagulation", name: "Coagulation", size: "Large" },
    { id: "Headlong", name: "Headlong", size: "Large" },
    { id: "Waterworks", name: "Waterworks", size: "Large" },
    { id: "Zanzibar", name: "Zanzibar", size: "Large" },
    { id: "Foundation", name: "Foundation", size: "Medium" },
    { id: "Containment", name: "Containment", size: "Large" },
    { id: "Warlock", name: "Warlock", size: "Small" },
    { id: "Sanctuary", name: "Sanctuary", size: "Medium" },
    { id: "Turf", name: "Turf", size: "Medium" },
    { id: "Backwash", name: "Backwash", size: "Medium" },
    { id: "Elongation", name: "Elongation", size: "Medium" },
    { id: "Gemini", name: "Gemini", size: "Medium" },
    { id: "Relic", name: "Relic", size: "Large" },
    { id: "Terminal", name: "Terminal", size: "Large" },
    { id: "Desolation", name: "Desolation", size: "Medium", file_name: "Derelict" },
    { id: "Tombstone", name: "Tombstone", size: "Medium", file_name: "Highplains" },
    { id: "District", name: "District", size: "Large" },
    { id: "Uplift", name: "Uplift", size: "Large" }
];

// Game Types
const GAME_TYPES = [
    { id: "Slayer", name: "Slayer", description: "Kill as many of your opponents as you can. The player with the most points wins." },
    { id: "KingOfTheHill", name: "King of the Hill", description: "Gain control of the hill to earn time. Keep your opponents off and earn the most time to win." },
    { id: "Oddball", name: "Oddball", description: "Find the ball and hold on to it to earn time. The player with the most time wins." },
    { id: "Juggernaut", name: "Juggernaut", description: "Work together to take down the Juggernaut. Beware, you kill the Juggernaut, you become the Juggernaut, and only the Juggernaut can win." },
    { id: "CaptureTheFlag", name: "Capture the Flag", description: "Invade your opponent's stronghold, heist their flag, and bring it back to your base to score." },
    { id: "Assault", name: "Assault", description: "Carry your bomb into the enemy base and arm it. Once armed, drop it on the enemy bomb post to score." },
    { id: "Territories", name: "Territories", description: "Find and control territories on the map. The more territories you control, the faster you earn time." }
];

// Base Variants for each game type
const BASE_VARIANTS = [
    // Slayer variants
    { id: "Slayer", name: "Slayer", gameType: "Slayer" },
    { id: "TeamSlayer", name: "Team Slayer", gameType: "Slayer" },
    { id: "Rockets", name: "Rockets", gameType: "Slayer" },
    { id: "Snipers", name: "Snipers", gameType: "Slayer" },
    { id: "Swords", name: "Swords", gameType: "Slayer" },
    
    // King of the Hill variants
    { id: "KingOfTheHill", name: "King of the Hill", gameType: "KingOfTheHill" },
    { id: "TeamKingOfTheHill", name: "Team King of the Hill", gameType: "KingOfTheHill" },
    { id: "CrazyKing", name: "Crazy King", gameType: "KingOfTheHill" },
    { id: "TeamCrazyKing", name: "Team Crazy King", gameType: "KingOfTheHill" },
    
    // Oddball variants
    { id: "Oddball", name: "Oddball", gameType: "Oddball" },
    { id: "TeamOddball", name: "Team Oddball", gameType: "Oddball" },
    { id: "Multiball", name: "Multi-ball", gameType: "Oddball" },
    { id: "TeamMultiball", name: "Team Multi-ball", gameType: "Oddball" },
    
    // Juggernaut variants
    { id: "Juggernaut", name: "Juggernaut", gameType: "Juggernaut" },
    
    // Capture the Flag variants
    { id: "CaptureTheFlag", name: "Capture the Flag", gameType: "CaptureTheFlag" },
    { id: "SingleFlag", name: "Single Flag", gameType: "CaptureTheFlag" },
    { id: "MultiFlag", name: "Multi Flag", gameType: "CaptureTheFlag" },
    
    // Assault variants
    { id: "Assault", name: "Assault", gameType: "Assault" },
    { id: "NeutralAssault", name: "Neutral Assault", gameType: "Assault" },
    { id: "OneFlag", name: "One Flag", gameType: "Assault" },
    
    // Territories variants
    { id: "Territories", name: "Territories", gameType: "Territories" }
];

// Universal Match Options
const MATCH_OPTIONS = [
    {
        id: "numberOfRounds",
        name: "Number of Rounds",
        values: [
            { id: "1Round", name: "1 Round" },
            { id: "2Rounds", name: "2 Rounds" },
            { id: "4Rounds", name: "4 Rounds" },
            { id: "6Rounds", name: "6 Rounds" },
            { id: "FirstTo2", name: "First to 2" },
            { id: "FirstTo3", name: "First to 3" },
            { id: "FirstTo4", name: "First to 4" }
        ]
    },
    {
        id: "roundTimeLimit",
        name: "Round Time Limit",
        values: [
            { id: "None", name: "None" },
            { id: "1Minute", name: "1 minute" },
            { id: "2Minutes", name: "2 minutes" },
            { id: "3Minutes", name: "3 minutes" },
            { id: "4Minutes", name: "4 minutes" },
            { id: "5Minutes", name: "5 minutes" },
            { id: "6Minutes", name: "6 minutes" },
            { id: "7Minutes", name: "7 minutes" },
            { id: "8Minutes", name: "8 minutes" },
            { id: "9Minutes", name: "9 minutes" },
            { id: "10Minutes", name: "10 minutes" },
            { id: "12Minutes", name: "12 minutes" },
            { id: "15Minutes", name: "15 minutes" },
            { id: "20Minutes", name: "20 minutes" },
            { id: "30Minutes", name: "30 minutes" },
            { id: "45Minutes", name: "45 minutes" },
            { id: "1Hour", name: "1 hour" }
        ]
    },
    {
        id: "roundsResetMap",
        name: "Rounds Reset Map",
        values: [
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "resolveTies",
        name: "Resolve Ties",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    }
];

// Player Settings
const PLAYER_SETTINGS = [
    {
        id: "maxActivePlayers",
        name: "Max Active Players",
        values: Array.from({ length: 15 }, (_, i) => ({ 
            id: String(i + 2), 
            name: String(i + 2),
            default: i === 14  // Make 16 the default (index 14 is the 16th value)
        }))
    },
    {
        id: "livesPerRound",
        name: "Lives Per Round",
        values: [
            { id: "Unlimited", name: "Unlimited", default: true },
            { id: "1", name: "1" },
            { id: "2", name: "2" },
            { id: "3", name: "3" },
            { id: "5", name: "5" },
            { id: "7", name: "7" },
            { id: "10", name: "10" },
            { id: "99", name: "99" },
            { id: "custom", name: "Custom..." }
        ]
    },
    {
        id: "respawnTime",
        name: "Respawn Time",
        values: [
            { id: "3Seconds", name: "3 seconds", default: false },
            { id: "5Seconds", name: "5 seconds", default: true },
            { id: "10Seconds", name: "10 seconds", default: false },
            { id: "15Seconds", name: "15 seconds", default: false },
            { id: "20Seconds", name: "20 seconds", default: false },
            { id: "30Seconds", name: "30 seconds", default: false }
        ]
    },
    {
        id: "suicidePenalty",
        name: "Suicide Penalty",
        values: [
            { id: "None", name: "None" },
            { id: "5Seconds", name: "5 seconds" },
            { id: "10Seconds", name: "10 seconds" },
            { id: "15Seconds", name: "15 seconds" }
        ]
    },
    {
        id: "shieldType",
        name: "Player Shield Type",
        values: [
            { id: "Normal", name: "Normal Shields" },
            { id: "None", name: "No Shields" },
            { id: "Overshields", name: "Overshields" }
        ]
    },
    {
        id: "motionSensor",
        name: "Motion Sensor",
        values: [
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "activeCamo",
        name: "Player Active Camo",
        values: [
            { id: "Off", name: "Off" },
            { id: "On", name: "On" }
        ]
    },
    {
        id: "extraDamage",
        name: "Extra Damage",
        values: [
            { id: "Off", name: "Off", default: true },
            { id: "On", name: "On" }
        ]
    },
    {
        id: "damageResistance",
        name: "Damage Resistance",
        values: [
            { id: "Off", name: "Off", default: true },
            { id: "On", name: "On" }
        ]
    }
];

// Team Options
const TEAM_OPTIONS = [
    {
        id: "teamPlay",
        name: "Team Play",
        values: [
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "teamScoring",
        name: "Team Scoring",
        values: [
            { id: "Sum", name: "Sum", default: true},
            { id: "Minimum", name: "Minimum" },
            { id: "Maximum", name: "Maximum" }
        ]
    },
    {
        id: "teamChanging",
        name: "Team Changing",
        values: [
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "friendlyFire",
        name: "Friendly Fire",
        values: [
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "respawnTimeModifier",
        name: "Respawn Time Modifier",
        values: [
            { id: "None", name: "None", default: true },
            { id: "Inheritance", name: "Inheritance" },
            { id: "Cycling", name: "Cycling" }
        ]
    },
    {
        id: "betrayalPenalty",
        name: "Betrayal Penalty",
        values: [
            { id: "None", name: "None" },
            { id: "5Seconds", name: "5 seconds" },
            { id: "10Seconds", name: "10 seconds" },
            { id: "15Seconds", name: "15 seconds" },
            { id: "30Seconds", name: "30 seconds" },
            { id: "1Minute", name: "1 minute" },
            { id: "2Minutes", name: "2 minutes" }
        ]
    },
    {
        id: "forceEvenTeams",
        name: "Force Even Teams",
        values: [
            { id: "Off", name: "Off", default: true },
            { id: "On", name: "On" }
        ]
    }
];

// Vehicle Options
const VEHICLE_OPTIONS = [
    {
        id: "vehicleRespawnTime",
        name: "Vehicle Respawn Time",
        values: [
            { id: "MapDefault", name: "Map Default" },
            { id: "HalfAsOften", name: "Half As Often" },
            { id: "NoRespawn", name: "No Respawn" }
        ]
    },
    {
        id: "primaryLightVehicle",
        name: "Primary Light Vehicle",
        values: [
            { id: "MapDefault", name: "Map Default" },
            { id: "Warthog", name: "Warthog" },
            { id: "GaussWarthog", name: "Gauss Warthog" },
            { id: "Ghost", name: "Ghost" },
            { id: "Spectre", name: "Spectre" },
            { id: "Random", name: "Random" },
            { id: "None", name: "None" }
        ]
    },
    {
        id: "secondaryLightVehicle",
        name: "Secondary Light Vehicle",
        values: [
            { id: "MapDefault", name: "Map Default" },
            { id: "Warthog", name: "Warthog" },
            { id: "GaussWarthog", name: "Gauss Warthog" },
            { id: "Ghost", name: "Ghost" },
            { id: "Spectre", name: "Spectre" },
            { id: "Random", name: "Random" },
            { id: "None", name: "None" }
        ]
    },
    {
        id: "primaryHeavyVehicle",
        name: "Primary Heavy Vehicle",
        values: [
            { id: "MapDefault", name: "Map Default" },
            { id: "ScorpionTank", name: "Scorpion Tank" },
            { id: "Wraith", name: "Wraith" },
            { id: "Random", name: "Random" },
            { id: "None", name: "None" }
        ]
    },
    {
        id: "banshee",
        name: "Banshee",
        values: [
            { id: "MapDefault", name: "Map Default" },
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "primaryTurret",
        name: "Primary Turret",
        values: [
            { id: "MapDefault", name: "Map Default" },
            { id: "LargeMachineGun", name: "Large Machine Gun" },
            { id: "LargePlasma", name: "Large Plasma" },
            { id: "Random", name: "Random" },
            { id: "None", name: "None" }
        ]
    },
    {
        id: "secondaryTurret",
        name: "Secondary Turret",
        values: [
            { id: "MapDefault", name: "Map Default" },
            { id: "LargeMachineGun", name: "Large Machine Gun" },
            { id: "LargePlasma", name: "Large Plasma" },
            { id: "Random", name: "Random" },
            { id: "None", name: "None" }
        ]
    }
];

// Equipment Options
const EQUIPMENT_OPTIONS = [
    {
        id: "startingWeapon",
        name: "Starting Weapon",
        values: [
            { id: "MapDefault", name: "Map Default" },
            { id: "None", name: "None" },
            { id: "Random", name: "Random" },
            { id: "BattleRifle", name: "Battle Rifle" },
            { id: "Magnum", name: "Magnum" },
            { id: "SMG", name: "SMG" },
            { id: "PlasmaPistol", name: "Plasma Pistol" },
            { id: "PlasmaRifle", name: "Plasma Rifle" },
            { id: "BrutePlasmaRifle", name: "Brute Plasma Rifle" },
            { id: "RocketLauncher", name: "Rocket Launcher" },
            { id: "Shotgun", name: "Shotgun" },
            { id: "SniperRifle", name: "Sniper Rifle" },
            { id: "BruteShot", name: "Brute Shot" },
            { id: "Needler", name: "Needler" },
            { id: "Carbine", name: "Carbine" },
            { id: "BeamRifle", name: "Beam Rifle" },
            { id: "EnergySword", name: "Energy Sword" },
            { id: "SentinelBeam", name: "Sentinel Beam" }
        ]
    },
    {
        id: "secondaryWeapon",
        name: "Secondary Weapon",
        values: [
            { id: "MapDefault", name: "Map Default" },
            { id: "None", name: "None" },
            { id: "Random", name: "Random" },
            { id: "BattleRifle", name: "Battle Rifle" },
            { id: "Magnum", name: "Magnum" },
            { id: "SMG", name: "SMG" },
            { id: "PlasmaPistol", name: "Plasma Pistol" },
            { id: "PlasmaRifle", name: "Plasma Rifle" },
            { id: "BrutePlasmaRifle", name: "Brute Plasma Rifle" },
            { id: "RocketLauncher", name: "Rocket Launcher" },
            { id: "Shotgun", name: "Shotgun" },
            { id: "SniperRifle", name: "Sniper Rifle" },
            { id: "BruteShot", name: "Brute Shot" },
            { id: "Needler", name: "Needler" },
            { id: "Carbine", name: "Carbine" },
            { id: "BeamRifle", name: "Beam Rifle" },
            { id: "EnergySword", name: "Energy Sword" },
            { id: "SentinelBeam", name: "Sentinel Beam" }
        ]
    },
    {
        id: "startingGrenades",
        name: "Starting Grenades",
        values: [
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "weaponsOnMap",
        name: "Weapons on Map",
        values: [
            { id: "MapDefault", name: "Map Default" },
            { id: "None", name: "None" },
            { id: "Rockets", name: "Rockets" },
            { id: "Shotguns", name: "Shotguns" },
            { id: "Swords", name: "Swords" },
            { id: "BruteShots", name: "Brute Shots" },
            { id: "HaloClassic", name: "Halo Classic" },
            { id: "NewClassic", name: "New Classic" },
            { id: "HeavyWeapons", name: "Heavy Weapons" },
            { id: "AllDuals", name: "All Duals" },
            { id: "NoDuals", name: "No Duals" },
            { id: "Rifles", name: "Rifles" },
            { id: "Sniping", name: "Sniping" },
            { id: "NoSniping", name: "No Sniping" },
            { id: "Pistols", name: "Pistols" },
            { id: "Plasma", name: "Plasma" },
            { id: "Human", name: "Human" },
            { id: "Covenant", name: "Covenant" },
            { id: "RandomSet", name: "Random Set" }
        ]
    },
    {
        id: "weaponRespawnTime",
        name: "Weapon Respawn Time",
        values: [
            { id: "MapDefault", name: "Map Default" },
            { id: "NoRespawn", name: "No Respawn" },
            { id: "HalfTime", name: "Half Time" },
            { id: "DoubleTime", name: "Double Time" }
        ]
    },
    {
        id: "grenadesOnMap",
        name: "Grenades On Map",
        values: [
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "overshields",
        name: "Overshields on Map",
        values: [
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "activeCamoOnMap",
        name: "Active Camo on Map",
        values: [
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    }
];

// Game-Specific Options

// Slayer-specific options
const SLAYER_OPTIONS = [
    {
        id: "scoreToWinRound",
        name: "Score to Win Round",
        values: [
            { id: "1", name: "1", default: false },
            { id: "3", name: "3", default: false },
            { id: "5", name: "5", default: false },
            { id: "10", name: "10", default: false },
            { id: "15", name: "15", default: true },
            { id: "20", name: "20", default: false },
            { id: "25", name: "25", default: false },
            { id: "50", name: "50", default: false },
            { id: "100", name: "100", default: false },
            { id: "250", name: "250", default: false },
            { id: "Unlimited", name: "Unlimited", default: false }
        ]
    },
    {
        id: "bonusPoints",
        name: "Bonus Points",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "suicidePointLoss",
        name: "Suicide Point Loss",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "deathPointLoss",
        name: "Death Point Loss",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    }
];

// King of the Hill-specific options
const KOTH_OPTIONS = [
    {
        id: "scoreToWinRound",
        name: "Score to Win Round",
        values: [
            { id: "Off", name: "Off", default: false },
            { id: "30Seconds", name: "30 seconds", default: false },
            { id: "1Minute", name: "1 minute", default: false },
            { id: "2Minutes", name: "2 minutes", default: true },
            { id: "3Minutes", name: "3 minutes", default: false },
            { id: "5Minutes", name: "5 minutes", default: false }
        ]
    },
    {
        id: "uncontestedHill",
        name: "Uncontested Hill",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "movingHill",
        name: "Moving Hill",
        values: [
            { id: "Off", name: "Off", default: true },
            { id: "30Seconds", name: "30 seconds", default: false },
            { id: "1Minute", name: "1 minute", default: false },
            { id: "2Minutes", name: "2 minutes", default: false },
            { id: "3Minutes", name: "3 minutes", default: false },
            { id: "5Minutes", name: "5 minutes", default: false }
        ]
    },
    {
        id: "teamTimeMultiplier",
        name: "Team Time Multiplier",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "extraDamageOnHill",
        name: "Extra Damage on Hill",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "damageResistanceOnHill",
        name: "Damage Resistance on Hill",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "activeCamoOnHill",
        name: "Active Camo on Hill",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    }
];

// Oddball-specific options
const ODDBALL_OPTIONS = [
    {
        id: "scoreToWinRound",
        name: "Score to Win Round",
        values: [
            { id: "Off", name: "Off", default: false },
            { id: "30Seconds", name: "30 seconds", default: false },
            { id: "1Minute", name: "1 minute", default: false },
            { id: "2Minutes", name: "2 minutes", default: true },
            { id: "3Minutes", name: "3 minutes", default: false },
            { id: "5Minutes", name: "5 minutes", default: false },
            { id: "7Minutes", name: "7 minutes", default: false },
            { id: "10Minutes", name: "10 minutes", default: false },
            { id: "15Minutes", name: "15 minutes", default: false }
        ]
    },
    {
        id: "ballCount",
        name: "Ball Count",
        values: [
            { id: "1", name: "1 ball", default: true },
            { id: "2", name: "2 balls", default: false },
            { id: "3", name: "3 balls", default: false }
        ]
    },
    {
        id: "ballHitDamage",
        name: "Ball Hit Damage",
        values: [
            { id: "Normal", name: "Normal", default: false },
            { id: "Massive", name: "Massive", default: true }
        ]
    },
    {
        id: "speedWithBall",
        name: "Speed With Ball",
        values: [
            { id: "Slow", name: "Slow", default: true },
            { id: "Normal", name: "Normal", default: false },
            { id: "Fast", name: "Fast", default: false }
        ]
    },
    {
        id: "toughnessWithBall",
        name: "Toughness With Ball",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "activeCamoWithBall",
        name: "Active Camo With Ball",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "vehicleOperation",
        name: "Vehicle Operation",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "ballIndicator",
        name: "Ball Indicator",
        values: [
            { id: "AlwaysOn", name: "Always On", default: true },
            { id: "DroppedBall", name: "Dropped Ball", default: false },
            { id: "TeamControl", name: "Team Control", default: false },
            { id: "Off", name: "Off", default: false }
        ]
    }
];

// Juggernaut-specific options
const JUGGERNAUT_OPTIONS = [
    {
        id: "scoreToWinRound",
        name: "Score to Win Round",
        values: [
            { id: "Unlimited", name: "Unlimited", default: false },
            { id: "1", name: "1", default: false },
            { id: "3", name: "3", default: false },
            { id: "5", name: "5", default: false },
            { id: "10", name: "10", default: true },
            { id: "15", name: "15", default: false },
            { id: "20", name: "20", default: false },
            { id: "25", name: "25", default: false },
            { id: "50", name: "50", default: false },
            { id: "75", name: "75", default: false },
            { id: "100", name: "100", default: false }
        ]
    },
    {
        id: "betrayalPointLoss",
        name: "Betrayal Point Loss",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "juggernautExtraDamage",
        name: "Juggernaut Extra Damage",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "juggernautInfiniteAmmo",
        name: "Juggernaut Infinite Ammo",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "juggernautOvershield",
        name: "Juggernaut Overshield",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "juggernautActiveCamo",
        name: "Juggernaut Active Camo",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "juggernautMotionSensor",
        name: "Juggernaut Motion Sensor",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "juggernautMovement",
        name: "Juggernaut Movement",
        values: [
            { id: "Slow", name: "Slow", default: false },
            { id: "Normal", name: "Normal", default: true },
            { id: "Fast", name: "Fast", default: false }
        ]
    },
    {
        id: "juggernautDamageResistance",
        name: "Juggernaut Damage Resistance",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    }
];

// Capture the Flag-specific options
const CTF_OPTIONS = [
    {
        id: "scoreToWinRound",
        name: "Score to Win Round",
        values: [
            { id: "Unlimited", name: "Unlimited", default: false },
            { id: "1", name: "1", default: false },
            { id: "2", name: "2", default: false },
            { id: "3", name: "3", default: true },
            { id: "5", name: "5", default: false }
        ]
    },
    {
        id: "flagType",
        name: "Flag Type",
        values: [
            { id: "SingleFlag", name: "Single Flag", default: false },
            { id: "FlagPerTeam", name: "Flag Per Team", default: true },
            { id: "NeutralFlag", name: "Neutral Flag", default: false }
        ]
    },
    {
        id: "suddenDeath",
        name: "Sudden Death",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "flagAtHomeToScore",
        name: "Flag At Home To Score",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "flagTouchReturn",
        name: "Flag Touch Return",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "flagResetTime",
        name: "Flag Reset Time",
        values: [
            { id: "5Seconds", name: "5 seconds", default: false },
            { id: "10Seconds", name: "10 seconds", default: false },
            { id: "15Seconds", name: "15 seconds", default: false },
            { id: "30Seconds", name: "30 seconds", default: true },
            { id: "45Seconds", name: "45 seconds", default: false },
            { id: "60Seconds", name: "60 seconds", default: false }
        ]
    },
    {
        id: "slowWithFlag",
        name: "Slow With Flag",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "flagHitDamage",
        name: "Flag Hit Damage",
        values: [
            { id: "Normal", name: "Normal", default: false },
            { id: "Massive", name: "Massive", default: true }
        ]
    },
    {
        id: "damageResistanceWithFlag",
        name: "Damage Resistance With Flag",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "activeCamoWithFlag",
        name: "Active Camo With Flag",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "vehicleOperation",
        name: "Vehicle Operation",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "flagIndicator",
        name: "Flag Indicator",
        values: [
            { id: "WhenUncontrolled", name: "When Uncontrolled", default: true },
            { id: "AlwaysOn", name: "Always On", default: false },
            { id: "AwayFromHome", name: "Away From Home", default: false },
            { id: "Off", name: "Off", default: false }
        ]
    }
];

// Assault-specific options
const ASSAULT_OPTIONS = [
    {
        id: "scoreToWinRound",
        name: "Score to Win Round",
        values: [
            { id: "Unlimited", name: "Unlimited", default: false },
            { id: "1", name: "1", default: false },
            { id: "2", name: "2", default: false },
            { id: "3", name: "3", default: true },
            { id: "5", name: "5", default: false }
        ]
    },
    {
        id: "bombType",
        name: "Bomb Type",
        values: [
            { id: "SingleBomb", name: "Single Bomb", default: false },
            { id: "MultiTeamBomb", name: "Multi-Team Bomb", default: true },
            { id: "NeutralBomb", name: "Neutral Bomb", default: false }
        ]
    },
    {
        id: "suddenDeath",
        name: "Sudden Death",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "bombResetTime",
        name: "Bomb Reset Time",
        values: [
            { id: "5Seconds", name: "5 seconds", default: false },
            { id: "10Seconds", name: "10 seconds", default: false },
            { id: "15Seconds", name: "15 seconds", default: false },
            { id: "30Seconds", name: "30 seconds", default: true },
            { id: "45Seconds", name: "45 seconds", default: false },
            { id: "60Seconds", name: "60 seconds", default: false }
        ]
    },
    {
        id: "bombArmingTime",
        name: "Bomb Arming Time",
        values: [
            { id: "3Seconds", name: "3 seconds", default: true },
            { id: "5Seconds", name: "5 seconds", default: false },
            { id: "10Seconds", name: "10 seconds", default: false },
            { id: "15Seconds", name: "15 seconds", default: false },
            { id: "30Seconds", name: "30 seconds", default: false }
        ]
    },
    {
        id: "bombFuseDuration",
        name: "Bomb Fuse Duration",
        values: [
            { id: "5Seconds", name: "5 seconds", default: false },
            { id: "10Seconds", name: "10 seconds", default: true },
            { id: "15Seconds", name: "15 seconds", default: false },
            { id: "30Seconds", name: "30 seconds", default: false },
            { id: "45Seconds", name: "45 seconds", default: false },
            { id: "60Seconds", name: "60 seconds", default: false }
        ]
    },
    {
        id: "bombDisarmingTime",
        name: "Bomb Disarming Time",
        values: [
            { id: "3Seconds", name: "3 seconds", default: true },
            { id: "5Seconds", name: "5 seconds", default: false },
            { id: "10Seconds", name: "10 seconds", default: false },
            { id: "15Seconds", name: "15 seconds", default: false }
        ]
    },
    {
        id: "slowWithBomb",
        name: "Slow With Bomb",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "bombHitDamage",
        name: "Bomb Hit Damage",
        values: [
            { id: "Normal", name: "Normal", default: false },
            { id: "Massive", name: "Massive", default: true }
        ]
    },
    {
        id: "damageResistanceWithBomb",
        name: "Damage Resistance With Bomb",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "activeCamoWithBomb",
        name: "Active Camo With Bomb",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "vehicleOperation",
        name: "Vehicle Operation",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "bombIndicator",
        name: "Bomb Indicator",
        values: [
            { id: "WhenUncontrolled", name: "When Uncontrolled", default: true },
            { id: "AlwaysOn", name: "Always On", default: false },
            { id: "Off", name: "Off", default: false }
        ]
    }
];

// Territories-specific options
const TERRITORIES_OPTIONS = [
    {
        id: "scoreToWinRound",
        name: "Score to Win Round",
        values: [
            { id: "Off", name: "Off", default: false },
            { id: "1Minute", name: "1 minute", default: false },
            { id: "2Minutes", name: "2 minutes", default: false },
            { id: "3Minutes", name: "3 minutes", default: true },
            { id: "5Minutes", name: "5 minutes", default: false },
            { id: "10Minutes", name: "10 minutes", default: false },
            { id: "15Minutes", name: "15 minutes", default: false }
        ]
    },
    {
        id: "territoryCount",
        name: "Territory Count",
        values: [
            { id: "Default", name: "Default", default: true },
            { id: "One", name: "One", default: false },
            { id: "Two", name: "Two", default: false },
            { id: "Three", name: "Three", default: false },
            { id: "Four", name: "Four", default: false },
            { id: "Five", name: "Five", default: false }
        ]
    },
    {
        id: "territoryMovement",
        name: "Territory Movement",
        values: [
            { id: "Off", name: "Off", default: true },
            { id: "30Seconds", name: "30 seconds", default: false },
            { id: "1Minute", name: "1 minute", default: false },
            { id: "2Minutes", name: "2 minutes", default: false },
            { id: "3Minutes", name: "3 minutes", default: false }
        ]
    },
    {
        id: "incrementalScoring",
        name: "Incremental Scoring",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "lockoutBonus",
        name: "Lockout Bonus",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "extraDamageOnTerritory",
        name: "Extra Damage On Territory",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "damageResistanceOnTerritory",
        name: "Damage Resistance On Territory",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "activeCamoOnTerritory",
        name: "Active Camo On Territory",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    }
]; 