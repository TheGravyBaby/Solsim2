var minutes = 0;
var runOrbits = false;
var hasRun = false;
var solArray = [
    {
        "name": "Sun",
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
    //     "x": -1 * 1.47098074 * Math.pow(10, 11)  * 3,                                                              //earths m from the sun at aphelion
    //     "y": 0,
    //     "dx":0,
    //     "dy": - .5 * 15000,                                                                        //velocity in m/s assuming the earth starts at 0
    //     "mass": 1.989 * Math.pow(10, 30),                                               //kg
    // },

    {
        "name": "Mercury",
        "size": 4,
        "color": "grey",
        "x": -69816900 * Math.pow(10, 3),                                        //earths m from the sun at aphehedron
        "y": 0,                                                                  //meters 
        "dx": 0,
        "dy": -48.362 * 1000,                                                        //velocity in m/s assuming the earth starts at 0
        "mass": 3.3011 * Math.pow(10, 23),                                           //kg
    },

    {
        "name": "Venus",
        "size": 4,
        "color": "sandybrown",
        "x": 0,                                        //earths m from the sun at aphehedron
        "y": 107477000 * Math.pow(10, 3),                //meters 
        "dx": -1 * 34.79 * 1000,
        "dy": 0,                                                        //velocity in m/s assuming the earth starts at 0
        "mass": 4.867 * Math.pow(10, 24),                                           //kg
    },

    {
        "name": "Earth",
        "size": 5,
        "color": "lightblue",
        "x": 1.47098074 * Math.pow(10, 11),                                        //earths m from the sun at aphehedron
        "y": 0,
        "dx":0,
        "dy": 30.28 * 1000,                                                        //velocity in m/s assuming the earth starts at 0
        "mass": 5.92 * Math.pow(10, 24),                                           //kg
    },

    {
        "name": "Moon",
        "size": 2,
        "color": "grey",
        "x": 1.47098074 * Math.pow(10, 11) + 384748 * Math.pow(10, 3),                                        //earths m from the sun at aphehedron
        "y": 0,
        "dx":0,
        "dy": 30.28 * 1000 + 1180,                                                 //fudged a little to make it work
        "mass": 7.35 * Math.pow(10, 22),                                           //kg
    },

    {
        "name": "Mars",
        "size": 4,
        "color": "red",
        "x": 0,                                                                     //earths m from the sun at aphehedron
        "y": - 249200000 * Math.pow(10, 3),                                         //meters 
        "dx": 1 * 24 * 1000,
        "dy": 0,                                                                    //velocity in m/s assuming the earth starts at 0
        "mass": 6.39 * Math.pow(10, 23),                                           //kg
    },

    {
        "name": "Jupiter",
        "size": 7,
        "color": "brown",
        "x": 0,                                                                  //earths m from the sun at aphehedron
        "y": 740.52 * Math.pow(10, 9),                                          //meters 
        "dx": -1 * 13.07 * 1000,
        "dy": 0,                                                                 //velocity in m/s assuming the earth starts at 0
        "mass": 1.8982 * Math.pow(10, 27),                                              //kg
    },

    {
        "name": "Saturn",
        "size": 6,
        "color": "DARKSALMON",
        "x": 1352.55 * Math.pow(10, 9),                                        //earths m from the sun at aphehedron
        "y": 0,                
        "dx": 0,
        "dy": 9.68 * 1000,                                                        //velocity in m/s assuming the earth starts at 0
        "mass": 5.6834 * Math.pow(10, 26),                                           //kg
    },

    {
        "name": "Uranus",
        "size": 5,
        "color": "lightblue",
        "x": -1 * 2742 * Math.pow(10, 9),                                        //earths m from the sun at aphehedron
        "y": 0,                 
        "dx": 0,
        "dy": -1* 6.8 * 1000,                                                        //velocity in m/s assuming the earth starts at 0
        "mass": 8.6810 * Math.pow(10, 25),                                           //kg
    },

    {
        "name": "Neptune",
        "size": 5,
        "color": "blue",
        "x": 4460 * Math.pow(10, 9),                                        //earths m from the sun at aphehedron
        "y": 0,               
        "dx": 0,
        "dy": 5.43 * 1000,                                                        //velocity in m/s assuming the earth starts at 0
        "mass": 1.024 * Math.pow(10, 26),                                           //kg
    },

];
var scale = 4500;

render = setInterval(function(){renderObjects(solArray)}, 33);
updateFields = setInterval(function(){dataUpdater()}, 500);

function populateBodyList() { 
    $('#bodyList').empty()
    solArray.forEach(element => {
        $('#bodyList')
        .append($("<option></option>")
                   .attr("value", element.name)
                   .text(element.name));
    }); 
}
populateBodyList()

function populateTable() {
    var body = $('#bodyList').prop('selectedIndex')

    $('#bodyName').empty().append(solArray[body].name)
    $('#bodyRadius').empty().append(solArray[body].size)
    $('#bodyMass').empty().append(solArray[body].mass)
    $('#bodyColor').empty().append(solArray[body].color)
    $('#bodyX').empty().append(solArray[body].x)
    $('#bodyY').empty().append(solArray[body].y)
    $('#bodydX').empty().append(solArray[body].dx)
    $('#bodydY').empty().append(solArray[body].dy)
}
populateTable()

function updateSystem() {
    var body = $('#bodyList').prop('selectedIndex')

    var name = $('#bodyName').val()

    solArray[body].name = $('#bodyName').val();
    solArray[body].size = $('#bodyRadius').val();
    solArray[body].mass = Number($('#bodyMass').val())
    solArray[body].color = $('#bodyColor').val();
    solArray[body].x = Number($('#bodyX').val());
    solArray[body].y = Number($('#bodyY').val());
    solArray[body].dx = Number($('#bodydX').val());
    solArray[body].dy = Number($('#bodydY').val());

    populateBodyList()
    $("#bodyList").val(name)
}

function addBody() {
    
    solArray.push(
        {
            "name": "NewPlanet",
            "size": 4,
            "color": "grey",
            "x": 249200000 * Math.pow(10, 3),                                                                 //earths m from the sun at aphelion
            "y": 249200000 * Math.pow(10, 3),
            "dx": -9.68 * 1000,
            "dy": 9.68 * 1000,                                                                //velocity in m/s assuming the earth starts at 0
            "mass": 5.92 * Math.pow(10, 24),                                       //kg
        }
    )
    populateBodyList();
    $("#bodyList").val("NewPlanet")
    populateTable();
    console.log(solArray)
}

function deleteBody() {
    // clearInterval(render)
    // clearInterval(updateFields)
    
    var body = $('#bodyList').prop('selectedIndex')
    solArray.splice(body, 1)
    
    console.log(solArray)
    populateBodyList();
}

function startStop() {
    if(runOrbits) {
        runOrbits = false;
        populateTable()
        console.log("STOPPED")
     }

     else {
        console.log("START")
        runOrbits = true;
        startMotion(solArray)
        if (!hasRun) {
            hasRun = true;
            timer = setInterval(function(){ 
                //to make sure calculation timing is in line, really pushing the JS stack here to its limit
                //also use a trick here to force JS to do more calculations than the 1ms interval will allow
                // var t0 = performance.now()
                for (var i = 0; i < 50; i++) {
                    startMotion(solArray)
                } 
                // var t1 = performance.now()
                // console.log("Call to move took " + (t1 - t0) + " milliseconds.")            
            }, 5);
        }
     }
}

function dataUpdater() {
    if(runOrbits) {
        populateTable()
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
    //console.log(body_array)
    var allForces = sumForces(body_array);

    for (let i = 0; i < body_array.length; i++) {
        updatePosition(allForces[i].Fx, allForces[i].Fy, body_array[i], 300)        //every five minutes in this timeframe, run a calc
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

    if (focusing == true) {
        focusBody();
    }

    var width = 1600
    var height = 1000

    var xMargin = 64;
    var yMargin = 40;

    d3.select("#map").selectAll("svg").remove();

    var mapScale = scale * Math.pow(10, 9);       //size of astronomical area, 4500 to see neptune

    var svg = d3.select("#map").append("svg")
        .attr("width", width)
        .attr("height", height);

    var x = d3.scaleLinear()
        .domain([-mapScale - xOffset * scale * Math.pow(10, 6) , mapScale - xOffset * scale * Math.pow(10, 6)])
        .range([xMargin, width - xMargin]);

    var y = d3.scaleLinear()
        .domain([.625 * -mapScale + yOffset * scale * Math.pow(10, 6), .625 * mapScale + yOffset * scale * Math.pow(10, 6)])
        .range([height - yMargin, yMargin]);


    if (gridOn) {
        // gridlines in x axis function
        function make_x_gridlines() {		
            return d3.axisBottom(x)
                .ticks(16)       
        }

        // gridlines in y axis function
        function make_y_gridlines() {		
            return d3.axisLeft(y)
                .ticks(10)
        }

        // add the X gridlines
        svg.append("g")			
            .attr("class", "grid")
            .attr("transform", "translate(0," + (height) + ")")
            .call(make_x_gridlines()
            .tickSize(-height)
            .tickFormat("")
            )

        // add the Y gridlines
        svg.append("g")			
            .attr("class", "grid")
            .call(make_y_gridlines()
            .tickSize(-width)
            .tickFormat(""))

        // Add scales to axis
        var xAxis = d3.axisBottom(x).ticks(16)
                    .tickFormat(function (d) {
                        return d / 1000000000 +"Gm";
                    });


        var yAxis = d3.axisRight(y).ticks(10)
                    .tickFormat(function (d) {
                        return d / 1000000000 +"Gm";
                    });
        
        svg.append("g")
            //.attr("transform", `translate(${height - 40}, 40)`)
            .call(yAxis);
            

        svg.append("g")
            //.attr("transform", `translate(40, ${width - 40})`)
            .call(xAxis);
    }
    

    var circles = svg.selectAll("foo")
    .data(body_array)
    .enter()
    .append("circle")
        
    circles.attr("cx", function(d) { return x(d.x);})
        .attr("cy", function(d) { return y(d.y);})
        .attr("r", function(d) { return (d.size);})
        .attr("fill", function(d) { return (d.color);})
        .attr("id", function(d) { return (d.name);})
        .attr("class", "planet")

    document.getElementById('counter').innerHTML = `<p style="{color: "white";}"> Total Days: ${Math.round( minutes / 288 ) } </p>`

}

//allows panning of the map
var xOffset = 0;
var yOffset = 0;

var xPos = null;
var xPosOld = null;
var yPos = null;
var yPosOld = null;
let isPanning = false;
const viewer = document.getElementById('map');

viewer.addEventListener('mousedown', e => {
    isPanning = true;
  });

viewer.addEventListener('mousemove', e => {
    if (isPanning === true && xPosOld != null) {
        xPos = e.offsetX ;
        yPos = e.offsetY;
        xOffset += (xPos - xPosOld)
        yOffset += (yPos - yPosOld)
        console.log("Dragging Offset (" + xOffset  + ", "+ yOffset  + ")")
        //console.log(e)
        xPosOld = e.offsetX;
        yPosOld = e.offsetY;
    }
    else {
        xPosOld = e.offsetX;
        yPosOld = e.offsetY;
    }
  });

  viewer.addEventListener('mouseup', e => {
    if (isPanning === true) {
        isPanning = false; 
        xPos = null;
        xPosOld = null;
        yPos = null;
        yPosOld = null;
    }
  });

  
document.addEventListener('wheel', function(e) {
    e.preventDefault();
    zoom(e);
}, { passive: false });

function zoom(event) {
    
    if (event.deltaY < 0 && scale >= 11) {
        scale =  scale + (event.deltaY / 10);
    }  

    if (event.deltaY < 0 && scale >= 200) {
        scale =  scale + (event.deltaY);
        
    }  
    if (event.deltaY > 0 && scale <= 10100) {
        scale =  scale + (event.deltaY);

 
    }
}

renderObjects(solArray);

var focusing = false;
function focusButton() {
    if (!focusing) {
        focusing = true;
        focusBody()
    }

    else {
        focusing = false;
    }
}

function focusBody() {
    var body = $('#bodyList').prop('selectedIndex')

    xOffset = -1 * solArray[body].x / (scale * Math.pow(10, 6))
    yOffset = solArray[body].y / (scale * Math.pow(10, 6))
    console.log(xOffset)
}

function centerCamera() {
    xOffset = 0;
    yOffset = 0;
    scale = 4500;
    focusing = false;

}

var gridOn = true;
function toggleGrid () {
    if (!gridOn) {
        gridOn = true;
    }
    else {
        gridOn = false;
    }
}
