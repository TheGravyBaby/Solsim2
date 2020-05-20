var minutes = 0;
var runOrbits = false;

var dummy_array = [
    {
        "name": "sun",
        "size": 10,
        "color": "orange",
        "x": 0,                                                                 //earths m from the sun at aphelion
        "y": 0,
        "dx":0,
        "dy": 0,                                                                //velocity in m/s assuming the earth starts at 0
        "mass": 1.989 * Math.pow(10, 30),                                       //kg
    },

    // {
    //     "name": "sun2",
    //     "size": 10,
    //     "color": "orange",
    //     "x": 1.5 * 1.47098074 * Math.pow(10, 11),                                                                 //earths m from the sun at aphelion
    //     "y": 0,
    //     "dx":0,
    //     "dy": 10.28 * 1000,                                                                //velocity in m/s assuming the earth starts at 0
    //     "mass": 1.989 * Math.pow(10, 30),                                       //kg
    // },

    {
        "name": "earth",
        "size": 5,
        "color": "lightblue",
        "x": 1.47098074 * Math.pow(10, 11),                                        //earths m from the sun at aphehedron
        "y": 0,
        "dx":0,
        "dy": 30.28 * 1000,                                                        //velocity in m/s assuming the earth starts at 0
        "mass": 5.92 * Math.pow(10, 24),                                           //kg
    },

    {
        "name": "venus",
        "size": 4,
        "color": "sandybrown",
        "x": 0,                                        //earths m from the sun at aphehedron
        "y": 107477000 * Math.pow(10, 3),                //meters 
        "dx": -1 * 34.79 * 1000,
        "dy": 0,                                                        //velocity in m/s assuming the earth starts at 0
        "mass": 4.867 * Math.pow(10, 24),                                           //kg
    },

    {
        "name": "mars",
        "size": 4,
        "color": "red",
        "x": 0,                                        //earths m from the sun at aphehedron
        "y": - 249200000 * Math.pow(10, 3),                //meters 
        "dx": 1 * 24 * 1000,
        "dy": 0,                                                        //velocity in m/s assuming the earth starts at 0
        "mass": 6.39 * Math.pow(10, 23),                                           //kg
    },

    {
        "name": "mars",
        "size": 4,
        "color": "grey",
        "x": -69816900 * Math.pow(10, 3),                                        //earths m from the sun at aphehedron
        "y": 0,                //meters 
        "dx": 0,
        "dy": -47.362 * 1000,                                                        //velocity in m/s assuming the earth starts at 0
        "mass": 3.3011 * Math.pow(10, 23),                                           //kg
    },
    

];

function startStop() {
    var timer;

    if(runOrbits) {
        runOrbits = false;
        clearInterval(timer);
        console.log("STOPPED")
     }

     else {
        console.log("START")
        runOrbits = true;
        startMotion(dummy_array)
        setInterval(function(){renderObjects(dummy_array)}, 33);

        timer = setInterval(function(){ 
            //to make sure calculation timing is in line, really pushing the JS stack here to its limit
            //also use a trick here to force JS to do more calculations than the 1ms interval will allow
            // var t0 = performance.now()
            for (var i = 0; i < 10; i++) {
                startMotion(dummy_array)
            } 
            // var t1 = performance.now()
            // console.log("Call to move took " + (t1 - t0) + " milliseconds.")            
        }, 3);             
     }
}

function startMotion(body_array) {
    if(runOrbits) {
        moveBodies(body_array)
        minutes += 1
    }
}

function moveBodies(body_array) {
    //console.log(body_array[0])
    console.log(body_array)
    var allForces = sumForces(body_array);

    for (let i = 0; i < body_array.length; i++) {
        updatePosition(allForces[i].Fx, allForces[i].Fy, body_array[i], 300)
    }   
}

// body 1 will recieve proper force mag, body 2 is reference 
function calculateForce(body1, body2) {  
    var m1 =            body1.mass,
        m2 =            body2.mass,
        x1 =            body1.x,
        x2 =            body2.x,
        y1 =            body1.y,
        y2 =            body2.y,
        xdif =          x2 - x1,
        ydif =          y2 - y1
        theta =         Math.atan2(ydif, xdif),
        GravConst =     6.67408 * Math.pow(10, -11),
        distance =      Math.pow((Math.pow((xdif), 2) + Math.pow((ydif), 2)), .5),
        Fmag =          m1 * m2 * GravConst / (distance * distance),
        Fx =            Fmag * Math.cos(theta) 
        Fy =            Fmag * Math.sin(theta) 
    return [Fx, Fy]
}

//not very efficient, as we'll be doing this for every planet, and redoing a few calculations multiple times but its okay 
function sumForces(body_array) {
    universalForceArray = [];
    for (i=0; i< body_array.length; i++) {
        var Fx = 0;
        var Fy = 0;
        for (let j = 0; j < body_array.length; j++) {
            if (i != j) {
                var force = calculateForce(body_array[i], body_array[j])
                Fx += force[0]
                Fy += force[1]           
            }    
        }
        universalForceArray.push({"Fx": Fx, "Fy": Fy})
    }
return universalForceArray;
}

function updatePosition(Fx, Fy, body, dt) {
    var mass = body.mass,
        ddx = Fx / mass,
        ddy = Fy / mass;

    //add the accelertation * time component 
    body.dx = body.dx + ddx * dt
    body.dy = body.dy + ddy * dt

    body.x = body.x + body.dx * dt + .5 * ddx * Math.pow(dt, 2)
    body.y = body.y + body.dy * dt + .5 * ddy * Math.pow(dt, 2)     
}

function renderObjects(body_array) {

    var width = 1400
    var height = 875
    d3.select("#map").selectAll("svg").remove();

    var mapScale = 600 * Math.pow(10, 9);       //size of astronomical area 

    var svg = d3.select("#map").append("svg")
        .attr("width", width)
        .attr("height", height);

    var x = d3.scaleLinear()
        .domain([-mapScale, mapScale])
        .range([0, width]);

    var y = d3.scaleLinear()
        .domain([.625 * -mapScale, .624 * mapScale])
        .range([height, 0]);

    var circles = svg.selectAll("foo")
        .data(body_array)
        .enter()
        .append("circle")
        
    circles.attr("cx", function(d) { return x(d.x);})
        .attr("cy", function(d) { return y(d.y);})
        .attr("r", function(d) { return (d.size);})
        .attr("fill", function(d) { return (d.color);})

    document.getElementById('counter').innerHTML = `<p style="{color: "white";}"> Total Days: ${Math.round( minutes / 288 ) } </p>`
}
