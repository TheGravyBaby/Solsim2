var minutes = 0;
var runOrbits = false;
var hasRun = false;

var lineArray = []

//positions will be updated with nasa data
var solArray = [
    {
        "name": "Sun",
        "size": 10,
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
        "size": 3,
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
        "size": 4,
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
        "size": 4,
        "color": "lightblue",
        "x": -4.489719402109592 * Math.pow(10, 7) * 1000,                                        
        "y": -1.441434564423431 * Math.pow(10, 8) * 1000,
        "z": 1.529951970743388 * Math.pow(10, 3) * 1000,                                                                
        "dx": 2.799264897479503 * Math.pow(10, 1) * 1000,
        "dy": -8.772830796981310 *  Math.pow(10, 0) * 1000,
        "dz": 1.567359330562734 *  Math.pow(10, -3) * 1000,                                                   
        "mass": 5.92 * Math.pow(10, 24),
        "lines":   [],
                        
    },

    {
        "name": "Mars",
        "size": 3,
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
        "size": 7,
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
        "size": 6,
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
        "size": 5,
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
        "size": 5,
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
        "size": 2,
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
var scale = 4500;

render = setInterval(function(){renderObjects(solArray)}, 33);
renderLines = setInterval(function(){populateLines()}, 100);
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

function populateLines() {
    
    for (let i = 0; i < solArray.length; i++) {
        if (solArray[i].lines.length < 100000) {
            solArray[i].lines.push([solArray[i].x, solArray[i].y])
        }
        else {
            solArray[i].lines.shift()
            solArray[i].lines.push([solArray[i].x, solArray[i].y])
        }
    }
    //console.log(solArray)
}

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
            "name": "New Body",
            "size": 8,
            "color": "yellow",
            "x": 549200000 * Math.pow(10, 3),                                                                 
            "y": 549200000 * Math.pow(10, 3),
            "z": 0,
            "dx": -9.68 * 1000,
            "dy": 9.68 * 1000,
            "dz": 0,                                                                
            "mass": 5.92 * Math.pow(10, 29),
            "lines":  []                                      
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
                //var t0 = performance.now()
                for (var i = 0; i < 500; i++) {
                    startMotion(solArray)
                }
                //var t1 = performance.now()
                //console.log("Call to move took " + (t1 - t0) + " milliseconds.")
            }, 25);
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
        updatePosition(allForces[i].Fx, allForces[i].Fy, body_array[i], 60)        //every five minutes in this timeframe, run a calc
    }   
}

//body 1 will recieve proper force mag, body 2 is reference 
function calculateForce(body1, body2) {  
    var m1 =            body1.mass,
        m2 =            body2.mass,
        x1 =            body1.x,
        x2 =            body2.x,
        y1 =            body1.y,
        y2 =            body2.y,
        xdif =          x2 - x1,
        ydif =          y2 - y1,
        theta =         Math.atan2(ydif, xdif),
        GravConst =     6.67408 * Math.pow(10, -11),
        //GravConst =   6.65408 * Math.pow(10, -11),
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

    var width = $(window).width() * .85;
    var height = $(window).height();
    var xMargin = 64;
    var yMargin = 40;
    var mapScale = scale * Math.pow(10, 9);       //size of astronomical area, 4500 to see neptune

    d3.select("#map").selectAll("svg").remove();

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
            .call(yAxis);

        svg.append("g")
            .call(xAxis);
    }

    if (linesOn) {
        var orbitPath = d3.line()
        .x(function(d) { return x(d[0]);})
        .y(function(d) { return y(d[1]);});

    var bodyPath =  svg.selectAll("boo")
        .data(body_array)
        .enter()
        .append("path")
    
    bodyPath.attr("d", function(d) { return orbitPath(d.lines);} )
        .attr("fill", "none")
		.attr("stroke", function(d) { return d.color;})
		.attr("stroke-width", 1);
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

    document.getElementById('counter').innerHTML = `<p style="{color: "white";}"> Total Days: ${Math.round( minutes / 1440 ) } </p><p style="{color: "white";}"> Total Years: ${Math.floor( (minutes / 525600 ) ) } </p>`
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

var linesOn = false;
function toggleLines () {
    if (!linesOn) {
        linesOn = true;
    }
    else {
        linesOn = false;
    }
}

