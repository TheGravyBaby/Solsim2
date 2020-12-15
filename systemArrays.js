
var emptySolarSystem =  
    {
        "name": "Sun",
        "pixelSize": 10,
        "diameter": 695000 * Math.pow(10, 3),
        "color": "orange",
        "x": 0,                                                                 
        "y": 0,
        "z": 0,  
        "dx": 0,
        "dy": 0,
        "dz": 0,                                                               
        "mass": 0,
        "lines":   []
    }


var ourSolarSystem = [ 
    {
        "name": "Sun",
        "pixelSize": 10,
        "diameter": 695000 * Math.pow(10, 3),
        "color": "orange",
        "x": -7.582243850428136 * Math.pow(10, 5) * 1000,                                                                 
        "y": 1.049352731119007 * Math.pow(10, 6) * 1000,
        "z": 8.765910727530660 * Math.pow(10, 3) * 1000,  
        "dx": -1.402789385026487 * Math.pow(10, -2) * 1000,
        "dy": -6.257072806069494 *  Math.pow(10, -3) * 1000,
        "dz": 4.031602500468826 *  Math.pow(10, -4) * 1000,                                                               
        "mass": 1988500 * Math.pow(10, 24),
        "lines":   [],                          
    },

    {
        "name": "Mercury",
        "pixelSize": 3,
        "diameter": 4879 * Math.pow(10, 3),
        "color": "grey",
        "x": -5.937556658360244 * Math.pow(10, 7) * 1000,                                        
        "y": -1.908052824719750 * Math.pow(10, 7) * 1000,
        "z": 3.741063587904326 * Math.pow(10, 6) * 1000,                                                                
        "dx":  5.716629054510291 * Math.pow(10, 0) * 1000,
        "dy": -4.397568825398321 *  Math.pow(10, 1) * 1000,
        "dz": -4.118242766154887 *  Math.pow(10, 0) * 1000,                                                   
        "mass": 3.302 * Math.pow(10, 23),
        "lines":   [],                          
    },

    {
        "name": "Venus",
        "pixelSize": 4,
        "diameter": 12.1 * Math.pow(10, 6),
        "color": "sandybrown",
        "x": -3.261035038530476 * Math.pow(10, 7) * 1000,                                        
        "y": -1.027595075697591 * Math.pow(10, 8) * 1000,
        "z": 4.223628033044040 * Math.pow(10, 5) * 1000,                                                                
        "dx": 3.322929843952519 * Math.pow(10, 1) * 1000,
        "dy": -1.042608300967504 *  Math.pow(10, 1) * 1000,
        "dz": -2.060959903655422 *  Math.pow(10, 0) * 1000,                                                   
        "mass": 4.867 * Math.pow(10, 24),
        "lines":   [],
                                
    },

    {
        "name": "Earth",
        "pixelSize": 4,
        "diameter": 12.7 * Math.pow(10, 6),
        "color": "lightblue",
        "x": -4.489719402109592 * Math.pow(10, 7) * 1000,                                        
        "y": -1.441434564423431 * Math.pow(10, 8) * 1000,
        "z": 1.529951970743388 * Math.pow(10, 3) * 1000,                                                                
        "dx": 2.799264897479503 * Math.pow(10, 1) * 1000,
        "dy": -8.772830796981310 *  Math.pow(10, 0) * 1000,
        "dz": 1.567359330562734 *  Math.pow(10, -3) * 1000,                                                   
        "mass": 5.9722 * Math.pow(10, 24),
        "lines":   [],
                        
    },

    {
        "name": "Moon",
        "pixelSize": 2,
        "diameter": 3.4 * Math.pow(10, 6),
        "color": "grey",
        "x": -4.516792620118394 * Math.pow(10, 7) * 1000,                                        
        "y": -1.443861999156687 * Math.pow(10, 8) * 1000,
        "z": 3.976709230741113 * Math.pow(10, 3) * 1000,                                                                
        "dx": 2.870467491441869 * Math.pow(10, 1) * 1000,
        "dy": -9.581515322458117 *  Math.pow(10, 0) * 1000,
        "dz": -6.535892956173806 *  Math.pow(10, -2) * 1000,                                                   
        "mass": 7.34767309 * Math.pow(10, 22),
        "lines":   [],
                        
    },

    {
        "name": "Mars",
        "pixelSize": 3,
        "diameter": 6.7 * Math.pow(10, 6),
        "color": "red",
        "x": 9.777993347253025 * Math.pow(10, 7) * 1000,                                        
        "y": -1.848513174329408 * Math.pow(10, 8) * 1000,
        "z": -6.303956079397298 * Math.pow(10, 6) * 1000,                                                                
        "dx": 2.231097567144139 * Math.pow(10, 1) * 1000,
        "dy": 1.342099861791514 *  Math.pow(10, 1) * 1000,
        "dz": -2.659326520797185 *  Math.pow(10, -1) * 1000,                                                   
        "mass": 6.39 * Math.pow(10, 23),
        "lines":   [],
                          
    },

    {
        "name": "Jupiter",
        "pixelSize": 7,
        "diameter": 142.9 * Math.pow(10, 6),
        "color": "brown",
        "x": 2.461575712591664 * Math.pow(10, 8) * 1000,                                        
        "y": -7.320378301099460 * Math.pow(10, 8) * 1000,
        "z": -2.470797059266835 * Math.pow(10, 6) * 1000,                                                                
        "dx": 1.222563597399181 * Math.pow(10, 1) * 1000,
        "dy": 4.784796491907828 *  Math.pow(10, 0) * 1000,
        "dz": -2.933183857992712 *  Math.pow(10, -1) * 1000,                                                   
        "mass": 1.8982 * Math.pow(10, 27),
        "lines":   [],
               
    },

    {
        "name": "Saturn",
        "pixelSize": 6,
        "diameter": 120.5 * Math.pow(10, 6),
        "color": "DARKSALMON",
        "x": 6.775744982875707 * Math.pow(10, 8) * 1000,                                        
        "y": -1.335134690125010 * Math.pow(10, 9) * 1000,
        "z": -3.759359586556315 * Math.pow(10, 6) * 1000,                                                                
        "dx": 8.078272381372704 * Math.pow(10, 0) * 1000,
        "dy": 4.344335844450176 *  Math.pow(10, 0) * 1000,
        "dz": -3.969730509269223 *  Math.pow(10, -1) * 1000,                                                   
        "mass": 5.6834 * Math.pow(10, 26),
        "lines":   [],
                      
    },

    {
        "name": "Uranus",
        "pixelSize": 5,
        "diameter": 50.7 * Math.pow(10, 6),
        "color": "lightblue",
        "x": 2.372741712986109 * Math.pow(10, 9) * 1000,                                        
        "y": 1.772776410626363 * Math.pow(10, 9) * 1000,
        "z": -2.415502028674400 * Math.pow(10, 7) * 1000,                                                                
        "dx": -4.125989733942681 * Math.pow(10, 0) * 1000,
        "dy": 5.138122359447883 *  Math.pow(10, 0) * 1000,
        "dz": 7.254297569670909 *  Math.pow(10, -2) * 1000,                                                   
        "mass": 8.6810 * Math.pow(10, 25),
        "lines":   [],
               
    },

    {
        "name": "Neptune",
        "pixelSize": 5,
        "diameter": 49.2 * Math.pow(10, 6),
        "color": "blue",
        "x": 4.388455206690246 * Math.pow(10, 9) * 1000,                                        
        "y": -8.799545972618895 * Math.pow(10, 8) * 1000,
        "z": -8.301534783803701 * Math.pow(10, 7) * 1000,                                                                
        "dx": 1.031907946563477 * Math.pow(10, 0) * 1000,
        "dy": 5.361649390440912 *  Math.pow(10, 0) * 1000,
        "dz": -1.335522743648274 *  Math.pow(10, -1) * 1000,                                                   
        "mass": 1.024 * Math.pow(10, 26),
        "lines":   [],
                          
    },

    {
        "name": "Pluto",
        "pixelSize": 2,
        "diameter": 1.48 * Math.pow(10, 6),
        "color": "grey",
        "x": 2.009235744867388 * Math.pow(10, 9) * 1000,                                        
        "y": -4.679083593987942 * Math.pow(10, 9) * 1000,
        "z": -8.049857906899095 * Math.pow(10, 7) * 1000,                                                                
        "dx": 5.132263959205242 * Math.pow(10, 0) * 1000,
        "dy": 1.002895829865026 *  Math.pow(10, 0) * 1000,
        "dz": -1.578217218701207 *  Math.pow(10, 0) * 1000,                                                   
        "mass": 1.307 * Math.pow(10, 22),
        "lines":   [],
                          
    },
];

let userSystem1 = [JSON.parse(JSON.stringify(emptySolarSystem))];
let userSystem2 = [JSON.parse(JSON.stringify(emptySolarSystem))];
let userSystem3 = [JSON.parse(JSON.stringify(emptySolarSystem))];

var universeArray = [
    {
        "name": "Sol",
        "system": ourSolarSystem,
    },

    // the strange notation i believe makes a shallow copy
    {
        "name": "User System 1",
        "system": userSystem1,
    },

    {
        "name": "User System 2",
        "system": userSystem2,
    },

    {
        "name": "User System 3",
        "system": userSystem3,
    },

]
