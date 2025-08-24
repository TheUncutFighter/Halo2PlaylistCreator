// Halo 2 Playlist Creator Data

// Maps available in Halo 2 PC
// Custom maps will have to be added manually to .hpl files
const MAPS = [
    { id: "Lockout", name: "Lockout", size: "Small" },
    { id: "Ascension", name: "Ascension", size: "Medium" },
    { id: "Midship", name: "Midship", size: "Small" },
    { id: "IvoryTower", name: "Ivory Tower", size: "Medium" },
    { id: "BeaverCreek", name: "Beaver Creek", size: "Medium" },
    { id: "BurialMounds", name: "Burial Mounds", size: "Large" },
    { id: "Colossus", name: "Colossus", size: "Medium" },
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
    { id: "Desolation", name: "Desolation", size: "Medium", },
    { id: "Tombstone", name: "Tombstone", size: "Medium", },
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
    { id: "Slayer", name: "Slayer", gameType: "Slayer", description: "Kill as many of your opponents as you can. The player with the most points wins." },
    { id: "TeamSlayer", name: "Team Slayer", gameType: "Slayer", description: "Team-based Slayer. Kill enemy team members to score points for your team." },
    { id: "Rockets", name: "Rockets", gameType: "Slayer", description: "Slayer variant where players start with rocket launchers." },
    { id: "Snipers", name: "Snipers", gameType: "Slayer", description: "Slayer variant where players start with sniper rifles." },
    { id: "Swords", name: "Swords", gameType: "Slayer", description: "Slayer variant where players start with energy swords." },
    
    // King of the Hill variants
    { id: "KingOfTheHill", name: "King of the Hill", gameType: "KingOfTheHill", description: "Gain control of the hill to earn time. Keep your opponents off and earn the most time to win." },
    { id: "TeamKingOfTheHill", name: "Team King of the Hill", gameType: "KingOfTheHill", description: "Team-based King of the Hill where teams compete to control the hill and earn time." },
    { id: "CrazyKing", name: "Crazy King", gameType: "KingOfTheHill", description: "King of the Hill variant where the hill location changes periodically." },
    { id: "TeamCrazyKing", name: "Team Crazy King", gameType: "KingOfTheHill", description: "Team-based King of the Hill with a moving hill location." },
    
    // Oddball variants
    { id: "Oddball", name: "Oddball", gameType: "Oddball", description: "Find the ball and hold on to it to earn time. The player with the most time wins." },
    { id: "TeamOddball", name: "Team Oddball", gameType: "Oddball", description: "Team-based Oddball where teams compete to control the ball and earn time." },
    { id: "Multiball", name: "Multi-ball", gameType: "Oddball", description: "Oddball variant with multiple balls in play at once." },
    { id: "TeamMultiball", name: "Team Multi-ball", gameType: "Oddball", description: "Team-based Oddball with multiple balls in play." },
    
    // Juggernaut variants
    { id: "Juggernaut", name: "Juggernaut", gameType: "Juggernaut", description: "Work together to take down the Juggernaut. Beware, you kill the Juggernaut, you become the Juggernaut, and only the Juggernaut can win." },
    
    // Capture the Flag variants
    { id: "CaptureTheFlag", name: "Capture the Flag", gameType: "CaptureTheFlag", description: "Invade your opponent's stronghold, heist their flag, and bring it back to your base to score." },
    { id: "SingleFlag", name: "Single Flag", gameType: "CaptureTheFlag", description: "CTF variant where there is only one flag and teams take turns attacking and defending." },
    { id: "MultiFlag", name: "Multi Flag", gameType: "CaptureTheFlag", description: "CTF variant where each team has a flag and must play offense and defense simultaneously." },
    
    // Assault variants
    { id: "Assault", name: "Assault", gameType: "Assault", description: "Carry your bomb into the enemy base and arm it. Once armed, drop it on the enemy bomb post to score." },
    { id: "NeutralAssault", name: "Neutral Assault", gameType: "Assault", description: "Assault variant where a neutral bomb can be picked up and used by any team." },
    { id: "OneFlag", name: "One Flag", gameType: "Assault", description: "Assault variant where teams take turns attacking and defending with a single bomb." },
    
    // Territories variants
    { id: "Territories", name: "Territories", gameType: "Territories", description: "Find and control territories on the map. The more territories you control, the faster you earn time." }
];

// Universal Match Options
const MATCH_OPTIONS = [
    {
        id: "numberOfRounds",
        name: "Number Of Rounds",
        description: "A game can end after a single round, after a fixed number of rounds, or only after someone wins a number of rounds.",
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
        description: "A round can be set to end after a set amount of time has elapsed. Use this to prevent games from lasting too long.",
        values: [
            { id: "None", name: "None" },
            { id: "1Minute", name: "1 Minute" },
            { id: "2Minutes", name: "2 Minutes" },
            { id: "3Minutes", name: "3 Minutes" },
            { id: "4Minutes", name: "4 Minutes" },
            { id: "5Minutes", name: "5 Minutes" },
            { id: "6Minutes", name: "6 Minutes" },
            { id: "7Minutes", name: "7 Minutes" },
            { id: "8Minutes", name: "8 Minutes" },
            { id: "9Minutes", name: "9 Minutes" },
            { id: "10Minutes", name: "10 Minutes" },
            { id: "12Minutes", name: "12 Minutes" },
            { id: "15Minutes", name: "15 Minutes" },
            { id: "20Minutes", name: "20 Minutes" },
            { id: "30Minutes", name: "30 Minutes" },
            { id: "45Minutes", name: "45 Minutes" },
            { id: "1Hour", name: "1 Hour" }
        ]
    },
    {
        id: "roundsResetMap",
        name: "Rounds Reset Map",
        description: "A new round can either keep the map in its destroyed state from the previous round or reset it to its original pristine state.",
        values: [
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "resolveTies",
        name: "Resolve Ties",
        description: "When resolve ties is off a game can end in a tie. When it is on a winner will be chosen based on secondary winning conditions.",
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
        description: "This setting controls how many players are active in the game at once. In non-team games this is total players, in team games, players per team.",
        values: Array.from({ length: 15 }, (_, i) => ({ 
            id: String(i + 2), 
            name: String(i + 2),
            default: i === 14  // Make 16 the default (index 14 is the 16th value)
        }))
    },
    {
        id: "livesPerRound",
        name: "Lives Per Round",
        description: "The Lives Per Round setting determines how many chances you'll have in the game. Once you're out of lives you no longer respawn.",
        values: [
            { id: "Unlimited", name: "Unlimited", default: true },
            { id: "1", name: "1" },
            { id: "2", name: "2" },
            { id: "3", name: "3" },
            { id: "7", name: "7" },
            { id: "9", name: "9" },
            { id: "99", name: "99" }
        ]
    },
    {
        id: "respawnTime",
        name: "Respawn Time",
        description: "Respawn Time controls the amount of time that a dead player must wait before getting another chance at life.",
        values: [
            { id: "3Seconds", name: "3 Seconds", default: false },
            { id: "5Seconds", name: "5 Seconds", default: true },
            { id: "10Seconds", name: "10 Seconds", default: false },
            { id: "15Seconds", name: "15 Seconds", default: false },
            { id: "20Seconds", name: "20 Seconds", default: false },
            { id: "30Seconds", name: "30 Seconds", default: false }
        ]
    },
    {
        id: "suicidePenalty",
        name: "Suicide Penalty",
        description: "When you kill yourself you will have to wait the time specified for Suicide Penalty in addition to any other wait time before you respawn.",
        values: [
            { id: "None", name: "None" },
            { id: "5Seconds", name: "5 Seconds" },
            { id: "10Seconds", name: "10 Seconds" },
            { id: "15Seconds", name: "15 Seconds" }
        ]
    },
    {
        id: "shieldType",
        name: "Shield Type",
        description: "Shield Type determines whether players have energy shields, and if so whether they are normal strength, turned off, or overcharged.",
        values: [
            { id: "Normal", name: "Normal Shields" },
            { id: "None", name: "No Shields" },
            { id: "Overshields", name: "Overshields" }
        ]
    },
    {
        id: "motionSensor",
        name: "Motion Sensor",
        description: "When the Motion Sensor is turned off it no longer detects or indicates movement.",
        values: [
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "activeCamo",
        name: "Active Camo",
        description: "When this is on, all players will be invisible with Active Camo. Firing a weapon or taking damage makes you temporarily visible again.",
        values: [
            { id: "Off", name: "Off" },
            { id: "On", name: "On" }
        ]
    },
    {
        id: "extraDamage",
        name: "Extra Damage",
        description: "When Extra Damage is on all players will inflict more damage than normal.",
        values: [
            { id: "Off", name: "Off", default: true },
            { id: "On", name: "On" }
        ]
    },
    {
        id: "damageResistance",
        name: "Damage Resistance",
        description: "When Damage Resistance is on, everyone will be tougher than normal.",
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
        description: "This setting determines whether this is a team game or a free-for-all. The maximum number of teams for this game is determined by the map.",
        values: [
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "teamScoring",
        name: "Team Scoring",
        description: "A team's score can be the sum of all its member's scores, the score of its lowest player (minimum), or the score of its highest player (maximum).",
        values: [
            { id: "Sum", name: "Sum", default: true},
            { id: "Minimum", name: "Minimum" },
            { id: "Maximum", name: "Maximum" }
        ]
    },
    {
        id: "teamChanging",
        name: "Team Changing",
        description: "When Team Changing is on players are allowed to change teams while the game is in progress.",
        values: [
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "friendlyFire",
        name: "Friendly Fire",
        description: "Unwary players can injure or even kill teammates. Friendly Fire can be turned off so that teammates cannot be directly damaged by each other.",
        values: [
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "respawnTimeModifier",
        name: "Respawn Time Modifier",
        description: "Players either inherit dead teammate spawn times (inheritance), respawn together at fixed intervals (cycling), or respawn at a set amount of time after they die (none).",
        values: [
            { id: "None", name: "None", default: true },
            { id: "Inheritance", name: "Inheritance" },
            { id: "Cycling", name: "Cycling" }
        ]
    },
    {
        id: "betrayalPenalty",
        name: "Betrayal Penalty",
        description: "This setting determines an additional amount of time a team killer will have to wait before respawning.",
        values: [
            { id: "None", name: "None" },
            { id: "5Seconds", name: "5 Seconds" },
            { id: "10Seconds", name: "10 Seconds" },
            { id: "15Seconds", name: "15 Seconds" },
            { id: "30Seconds", name: "30 Seconds" },
            { id: "1Minute", name: "1 Minute" },
            { id: "2Minutes", name: "2 Minutes" }
        ]
    },
    {
        id: "forceEvenTeams",
        name: "Force Even Teams",
        description: "When Force Even Teams is on, each team will only have as many active players as the team with the fewest players. All other team members must wait for their turn to spawn.",
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
        description: "Vehicle respawn time determines how quickly dead vehicles come back to life. Times are relative to the default settings for the map.",
        values: [
            { id: "MapDefault", name: "Map Default" },
            { id: "HalfAsOften", name: "Half As Often" },
            { id: "NoRespawn", name: "No Respawn" }
        ]
    },
    {
        id: "primaryLightVehicle",
        name: "Primary Light Vehicle",
        description: "This setting allows you to override the map-specific primary light land vehicle with a vehicle of your choosing.",
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
        description: "This setting allows you to override the map-specific secondary light land vehicle with a vehicle of your choosing.",
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
        description: "This setting allows you to override the map-specific primary heavy land vehicle with a vehicle of your choosing.",
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
        description: "This setting allows you to specify whether Banshees appear on a map that supports them.",
        values: [
            { id: "MapDefault", name: "Map Default" },
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "primaryTurret",
        name: "Primary Turret",
        description: "This setting allows you to override the map-specific primary turret with the turret of your choosing.",
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
        description: "This setting allows you to override the map-specific secondary turret with a turret of your choosing.",
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
        description: "This setting determines which primary weapon players start the game and respawn with.",
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
        description: "This setting determines which backup weapon players start the game and respawn with. A backup weapon is optional.",
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
        description: "When this setting is on players will start the game and respawn with grenades.",
        values: [
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "weaponsOnMap",
        name: "Weapons On Map",
        description: "This setting determines the set of weapons that is available on the map. Weapons on map can also be turned off entirely.",
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
        description: "Weapon Respawn time determines how much time it takes to respawn weapons. Times are relative to the default settings for the map.",
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
        description: "If Grenades On Map is turned off there will be no grenades available for pickup on the map.",
        values: [
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "overshields",
        name: "Overshields",
        description: "This setting controls whether or not the Overshield powerup is available on the map.",
        values: [
            { id: "On", name: "On" },
            { id: "Off", name: "Off" }
        ]
    },
    {
        id: "activeCamoOnMap",
        name: "Active Camo On Map",
        description: "This setting controls whether or not the Active Camouflage powerup is available on the map.",
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
        description: "Points are earned in Slayer for killing other players. This setting determines how many points are needed to win a round.",
        values: [
            { id: "1", name: "1", default: false },
            { id: "3", name: "3", default: false },
            { id: "5", name: "5", default: false },
            { id: "10", name: "10", default: false },
            { id: "15", name: "15", default: false },
            { id: "20", name: "20", default: false },
            { id: "25", name: "25", default: true },
            { id: "50", name: "50", default: false },
            { id: "100", name: "100", default: false },
            { id: "250", name: "250", default: false },
            { id: "Unlimited", name: "Unlimited", default: false }
        ]
    },
    {
        id: "bonusPoints",
        name: "Bonus Points",
        description: "When Bonus Points are enabled, players can earn additional points for notable acts like double kills and killing sprees. (Off by default.)",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "suicidePointLoss",
        name: "Suicide Point Loss",
        description: "When Suicide Point Loss is enabled, a player will lose a point for committing suicide. (On by default.)",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "deathPointLoss",
        name: "Death Point Loss",
        description: "When Death Point Loss is enabled, a player that dies will lose a point. Careful, this can lengthen games significantly! (Off by default.)",
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
        description: "You accumulate time in King of the Hill by standing on the hill. This setting determines the amount of time you must earn in order to win a round.",
        values: [
            { id: "Off", name: "Off", default: false },
            { id: "30Seconds", name: "30 Seconds", default: false },
            { id: "1Minute", name: "1 Minute", default: false },
            { id: "2Minutes", name: "2 Minutes", default: true },
            { id: "3Minutes", name: "3 Minutes", default: false },
            { id: "5Minutes", name: "5 Minutes", default: false }
        ]
    },
    {
        id: "uncontestedHill",
        name: "Uncontested Hill",
        description: "When this is on, you can only earn time on the hill when there are no enemies contesting it. (Off by default.)",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "movingHill",
        name: "Moving Hill",
        description: "The hill will change to a new random location at the set interval.",
        values: [
            { id: "Off", name: "Off", default: true },
            { id: "30Seconds", name: "30 Seconds", default: false },
            { id: "1Minute", name: "1 Minute", default: false },
            { id: "2Minutes", name: "2 Minutes", default: false },
            { id: "3Minutes", name: "3 Minutes", default: false },
            { id: "5Minutes", name: "5 Minutes", default: false }
        ]
    },
    {
        id: "teamTimeMultiplier",
        name: "Team Time Multiplier",
        description: "When on, you will earn time faster when you have more teammates on the hill. (default = off)",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "extraDamageOnHill",
        name: "Extra Damage on Hill",
        description: "When on, a player on the hill will be more powerful than other players. (Default = off)",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "damageResistanceOnHill",
        name: "Damage Resistance on Hill",
        description: "When on, a player on the hill will be tougher than normal. (default = off)",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "activeCamoOnHill",
        name: "Active Camo on Hill",
        description: "When enabled, a player standing on the hill will have Active Camo. (Default = off)",
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
        description: "You accumulate time in Oddball by holding the ball. This setting determines the amount of time you must earn in order to win a round.",
        values: [
            { id: "Off", name: "Off", default: false },
            { id: "30Seconds", name: "30 Seconds", default: false },
            { id: "1Minute", name: "1 Minute", default: false },
            { id: "2Minutes", name: "2 Minutes", default: true },
            { id: "3Minutes", name: "3 Minutes", default: false },
            { id: "5Minutes", name: "5 Minutes", default: false },
            { id: "7Minutes", name: "7 Minutes", default: false },
            { id: "10Minutes", name: "10 Minutes", default: false },
            { id: "15Minutes", name: "15 Minutes", default: false }
        ]
    },
    {
        id: "ballCount",
        name: "Ball Count",
        description: "This controls the number of balls in the game. More balls equals more chaos, but that's not always a good thing.",
        values: [
            { id: "1 ball", name: "1 ball", default: true },
            { id: "2 balls", name: "2 balls", default: false },
            { id: "3 balls", name: "3 balls", default: false }
        ]
    },
    {
        id: "ballHitDamage",
        name: "Ball Hit Damage",
        description: "The ball is a weapon. This setting determines whether melee attacking someone with it hurts a little or a lot. Default = massive.",
        values: [
            { id: "Normal", name: "Normal", default: false },
            { id: "Massive", name: "Massive", default: true }
        ]
    },
    {
        id: "speedWithBall",
        name: "Speed With Ball",
        description: "This setting determines the speed that the ball carrier moves in relation to other players.",
        values: [
            { id: "Slow", name: "Slow", default: true },
            { id: "Normal", name: "Normal", default: false },
            { id: "Fast", name: "Fast", default: false }
        ]
    },
    {
        id: "toughnessWithBall",
        name: "Toughness With Ball",
        description: "When on, a player carrying a ball will be tougher than normal. (Default = off)",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "activeCamoWithBall",
        name: "Active Camo With Ball",
        description: "Determines whether a ball carrier can be seen by other players. (default = off)",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "vehicleOperation",
        name: "Vehicle Operation",
        description: "If off, the player carrying a ball cannot drive vehicles or operate stationary or vehicle-mounted guns. (Default = off)",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "ballIndicator",
        name: "Ball Indicator",
        description: "This setting controls if and when you see an indicator revealing the location of the ball. (default = always on)",
        values: [
            { id: "Always On", name: "Always On", default: true },
            { id: "Dropped Ball", name: "Dropped Ball", default: false },
            { id: "Team Control", name: "Team Control", default: false },
            { id: "Off", name: "Off", default: false }
        ]
    }
];

// Juggernaut-specific options
const JUGGERNAUT_OPTIONS = [
    {
        id: "scoreToWinRound",
        name: "Score to Win Round",
        description: "It's everyone against the Juggernaut. The Juggernaut earns a point for each kill, and only he can score. Kill the Juggernaut to become the Juggernaut. This setting determines how many points the Juggernaut needs to win a round.",
        values: [
            { id: "Unlimited", name: "Unlimited", default: false },
            { id: "1", name: "1", default: false },
            { id: "3", name: "3", default: false },
            { id: "5", name: "5", default: true },
            { id: "10", name: "10", default: false },
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
        description: "All players that are not the Juggernaut are considered teammates. When this option is on, betraying a teammate results in losing a point. (Default = on)",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "juggernautExtraDamage",
        name: "Juggernaut Extra Damage",
        description: "When on, the Juggernaut's weapons do more damage than normal. (Default = on)",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "juggernautInfiniteAmmo",
        name: "Juggernaut Infinite Ammo",
        description: "When on, the Juggernaut will never run out of ammunition. (Default = on)",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "juggernautOvershield",
        name: "Juggernaut Overshield",
        description: "When on, Juggernaut has recharging extra powerful shields. This setting overrides the player shield setting. (Default = on)",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "juggernautActiveCamo",
        name: "Juggernaut Active Camo",
        description: "When on, the Juggernaut has active camo. This setting overrides the player Active Camo setting. (Default = off)",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "juggernautMotionSensor",
        name: "Juggernaut Motion Sensor",
        description: "When on, Juggernaut has a motion sensor. Overrides the player motion sensor settings. (Default = on)",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "juggernautMovement",
        name: "Juggernaut Movement",
        description: "Determines the speed of the Juggernaut relative to the other players in the game. (Default = normal)",
        values: [
            { id: "Slow", name: "Slow", default: false },
            { id: "Normal", name: "Normal", default: true },
            { id: "Fast", name: "Fast", default: false }
        ]
    },
    {
        id: "juggernautDamageResistance",
        name: "Juggernaut Damage Resistance",
        description: "When this option is on the Juggernaut is extra tough. This setting overrides the Player Damage Resistance setting.",
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
        description: "How many points it takes to win a round of CTF. A point is earned each time you successfully capture an enemy flag and bring it back to your base.",
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
        description: "In Single Flag there is only one defending team. In Flag Per Team (multi-flag), each team has a flag and must play offense and defense at the same time. In Neutral Flag there is a single flag that any team can capture. (Flag per team = default.)",
        values: [
            { id: "Single Flag", name: "Single Flag", default: false },
            { id: "Flag Per Team", name: "Flag Per Team", default: true },
            { id: "Neutral Flag", name: "Neutral Flag", default: false }
        ]
    },
    {
        id: "suddenDeath",
        name: "Sudden Death",
        description: "When Sudden Death is enabled, a round will not end while a flag is being carried or contested. This can lead to exciting final moments. (On by default.)",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "flagAtHomeToScore",
        name: "Flag At Home To Score",
        description: "When Flag at Home To Score is enabled, you cannot score a point unless your flag is safely on its flag stand. (On by default.)",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "flagTouchReturn",
        name: "Flag Touch Return",
        description: "When Flag Touch Return is enabled, you may return your flag to the base by touching it. (Off by default.)",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "flagResetTime",
        name: "Flag Reset Time",
        description: "The time that must elapse before a dropped flag returns home. An enemy near a flag pauses this timer, an enemy picking it up resets it. (Default = 30 sec)",
        values: [
            { id: "5Seconds", name: "5 Seconds", default: false },
            { id: "10Seconds", name: "10 Seconds", default: false },
            { id: "15Seconds", name: "15 Seconds", default: false },
            { id: "30Seconds", name: "30 Seconds", default: true },
            { id: "45Seconds", name: "45 Seconds", default: false },
            { id: "60Seconds", name: "60 Seconds", default: false }
        ]
    },
    {
        id: "slowWithFlag",
        name: "Slow With Flag",
        description: "When Slow With Flag is on, the flag carrier moves as a slower pace than other players. (On by default.)",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "flagHitDamage",
        name: "Flag Hit Damage",
        description: "The flag pole is a weapon. Flag Hit Damage determines whether a melee attack with the flag hurts a little or is deadly. (On by default.)",
        values: [
            { id: "Normal", name: "Normal", default: false },
            { id: "Massive", name: "Massive", default: true }
        ]
    },
    {
        id: "damageResistanceWithFlag",
        name: "Damage Resistance With Flag",
        description: "When this is on, a player carrying the flag is tougher than normal. (Off by default.)",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "activeCamoWithFlag",
        name: "Active Camo With Flag",
        description: "When this is on, a player carrying the flag is invisible. (Off by default.)",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "vehicleOperation",
        name: "Vehicle Operation",
        description: "If this is disabled, a player carrying the flag cannot drive vehicles or operate stationary or vehicle-mounted guns. (Off by default.)",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "flagIndicator",
        name: "Flag Indicator",
        description: "Determines if and when you have an indicator showing the location of your flag. (Neutral by default.)",
        values: [
            { id: "When Uncontrolled", name: "When Uncontrolled", default: true },
            { id: "Always On", name: "Always On", default: false },
            { id: "Away From Home", name: "Away From Home", default: false },
            { id: "Off", name: "Off", default: false }
        ]
    }
];

// Assault-specific options
const ASSAULT_OPTIONS = [
    {
        id: "scoreToWinRound",
        name: "Score to Win Round",
        description: "How many points it takes to win a round of Assault. A point is earned each time you successfully arm and detonate a bomb in an enemy base.",
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
        description: "In Single Bomb there is only one defending team. In Bomb Per Team, each team has a bomb and must play offense and defense at the same time. In Neutral Bomb there is a single bomb that any team may use.",
        values: [
            { id: "SingleBomb", name: "Single Bomb", default: false },
            { id: "BombPerTeam", name: "Bomb Per Team", default: true },
            { id: "NeutralBomb", name: "Neutral Bomb", default: false }
        ]
    },
    {
        id: "enemyBombIndicator",
        name: "Enemy Bomb Indicator",
        description: "Determines if and when defenders have an indicator showing the location of an enemy bomb. (Default = when dropped)",
        values: [
            { id: "Always On", name: "Always On", default: false },
            { id: "When Dropped", name: "When Dropped", default: true },
            { id: "When Armed", name: "When Armed", default: false },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "suddenDeath",
        name: "Sudden Death",
        description: "When enabled, a round will not end while a bomb is being carried or contested. This can lead to tense final moments. (Default = on)",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "bombTouchReturn",
        name: "Bomb Touch Return",
        description: "When on, you may reset an enemy bomb to its original location by touching it. (Default = Off)",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "bombResetTime",
        name: "Bomb Reset Time",
        description: "The time that must elapse before a dropped bomb resets to its original location. Getting close to your bomb freezes this timer; picking it up resets it. (Default = 30 seconds)",
        values: [
            { id: "5Seconds", name: "5 Seconds", default: false },
            { id: "10Seconds", name: "10 Seconds", default: false },
            { id: "15Seconds", name: "15 Seconds", default: false },
            { id: "20Seconds", name: "20 Seconds", default: false },
            { id: "30Seconds", name: "30 Seconds", default: true },
            { id: "45Seconds", name: "45 Seconds", default: false },
            { id: "60Seconds", name: "60 Seconds", default: false }
        ]
    },
    {
        id: "bombArmTime",
        name: "Bomb Arm Time",
        description: "The time it takes to arm the bomb after you've carried it inside the arming zone near the enemy bomb post.",
        values: [
            { id: "5Seconds", name: "5 Seconds", default: true },
            { id: "10Seconds", name: "10 Seconds", default: false },
            { id: "15Seconds", name: "15 Seconds", default: false }
        ]
    },
    {
        id: "stickyArming",
        name: "Sticky Arming",
        description: "When on, you can pick up a partially armed bomb and resume arming it where someone else left off. (Default = on)",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
         ]
    },
    {
        id: "slowWithBomb",
        name: "Slow With Bomb",
        description: "When on, the bomb carrier moves at a slower pace than other players. (Default = on)",
        values: [
            { id: "On", name: "On", default: true },
            { id: "Off", name: "Off", default: false }
        ]
    },
    {
        id: "bombHitDamage",
        name: "Bomb Hit Damage",
        description: "The Bomb is a weapon. This determines whether a melee attack with the bomb hurts a little (normal) or is deadly (massive). (default = massive/deadly)",
        values: [
            { id: "Massive", name: "Massive", default: true },
            { id: "Normal", name: "Normal", default: false }
        ]
    },
    {
        id: "damageResistanceWithBomb",
        name: "Damage Resistance With Bomb",
        description: "When on, a player carrying the bomb is tougher than normal. (Default = off)",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "activeCamoWithBomb",
        name: "Active Camo With Bomb",
        description: "When on, a player carrying the bomb is invisible with active camo. (Default = off)",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    },
    {
        id: "vehicleOperation",
        name: "Vehicle Operation",
        description: "If off, a player carrying the bomb cannot drive vehicles or operate stationary or vehicle-mounted guns. (Default = off)",
        values: [
            { id: "On", name: "On", default: false },
            { id: "Off", name: "Off", default: true }
        ]
    }
];

// Territories-specific options
const TERRITORIES_OPTIONS = [
    {
        id: "scoreToWinRound",
        name: "Score to Win Round",
        description: "You accumulate time in Territories by controlling territory points. This setting determines the amount of time you must earn in order to win a round.",
        values: [
            { id: "Off", name: "Off", default: false },
            { id: "1Minute", name: "1 Minute", default: false },
            { id: "2Minutes", name: "2 Minutes", default: false },
            { id: "3Minutes", name: "3 Minutes", default: true },
            { id: "5Minutes", name: "5 Minutes", default: false },
            { id: "7Minutes", name: "7 Minutes", default: false },
            { id: "10Minutes", name: "10 Minutes", default: false },
            { id: "15Minutes", name: "15 Minutes", default: false },
            { id: "20Minutes", name: "20 Minutes", default: false },
            { id: "30Minutes", name: "30 Minutes", default: false }
        ]
    },
    {
        id: "territoryCount",
        name: "Territory Count",
        description: "This setting determines the maximum number of territories on the map. Notes: Not all maps have this many territories. (Default = 3)",
        values: [
            { id: "1 Territory", name: "1 Territory", default: false },
            { id: "2 Territories", name: "2 Territories", default: false },
            { id: "3 Territories", name: "3 Territories", default: true },
            { id: "4 Territories", name: "4 Territories", default: false },
            { id: "5 Territories", name: "5 Territories", default: false },
            { id: "6 Territories", name: "6 Territories", default: false },
            { id: "7 Territories", name: "7 Territories", default: false },
            { id: "8 Territroies", name: "8 Territories", default: false }
        ]
    },
    {
        id: "contestTime",
        name: "Contest Time",
        description: "This setting determines the amount of time it takes to undo someone else's control of a territory. (Default = 5 seconds)",
        values: [
            { id: "3Seconds", name: "3 Seconds", default: false },
            { id: "5Seconds", name: "5 Seconds", default: true },
            { id: "10Seconds", name: "10 Seconds", default: false },
            { id: "15Seconds", name: "15 Seconds", default: false },
            { id: "20Seconds", name: "20 Seconds", default: false },
            { id: "30Seconds", name: "30 Seconds", default: false }
        ]
    },
    {
        id: "controlTime",
        name: "Control Time",
        description: "This settings determines how long it takes to gain control of a neutral territory. Enemy territories must first be contested, then controlled. (Default = 5 seconds)",
        values: [
            { id: "3Seconds", name: "3 Seconds", default: false },
            { id: "5Seconds", name: "5 Seconds", default: true },
            { id: "10Seconds", name: "10 Seconds", default: false },
            { id: "15Seconds", name: "15 Seconds", default: false },
            { id: "20Seconds", name: "20 Seconds", default: false },
            { id: "30Seconds", name: "30 Seconds", default: false }
        ]
    }
];

// Special case handling for weapon respawn time
if (key === 'weaponRespawnTime' && value === 'Half as Often') {
    formattedValue = 'Half Time';
}