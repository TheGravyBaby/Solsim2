// 1. make fields take proper values and change properly
// 2. update UI to be a bit more intuitive and good looking
// 3. add save states, should be able to load a solar system json object
// 4. add draggabiliy, no one wants to fiddle fuck with numbers
// 5. add arrows for speed
// 6. add planet sizability
// 7. add collisions 

var solArray = [
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
var scale = 4500;
var granularity = 60;
var seconds = 0;
var runOrbits = false;
var hasRun = false;

//renderObjects(solArray)
render = setInterval(function(){renderObjects(solArray)}, 42);
renderLines = setInterval(function(){populateLines()}, 84);
updateFields = setInterval(function(){dataUpdater()}, 1000);

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

function changeGranularity() {
    granularity = Number($('#granularity').val());
};

function populateLines() {
   
    if (runOrbits) {
        for (let i = 0; i < solArray.length; i++) {
            if (solArray[i].lines.length < 1000) {
                solArray[i].lines.push([solArray[i].x, solArray[i].y, solArray[i].z])
            }
            else {
                solArray[i].lines.shift()
                solArray[i].lines.push([solArray[i].x, solArray[i].y, , solArray[i].z])
            }
        }
        //console.log(solArray)
    }
}

function populateTable() {
    var body = $('#bodyList').prop('selectedIndex')
    
    // if the user is in the field, don't change the field...
    if (!($("#bodyName").is(":focus")))
        $('#bodyName').val(solArray[body].name)

    if (!($("#bodyRadius").is(":focus"))) 
        $('#bodyRadius').val(solArray[body].pixelSize)

    if (!($("#bodyMass").is(":focus")))
        $('#bodyMass').val(solArray[body].mass)

    if (!($("#bodyColor").is(":focus")))
        $('#bodyColor').val(solArray[body].color)

    if (!($("#bodyX").is(":focus")))
        $('#bodyX').val(solArray[body].x)

    if (!($("#bodyY").is(":focus")))
        $('#bodyY').val(solArray[body].y)

    if (!($("#bodyZ").is(":focus")))
        $('#bodyZ').val(solArray[body].z)

    if (!($("#bodydX").is(":focus")))
        $('#bodydX').val(solArray[body].dx)

    if (!($("#bodydY").is(":focus")))
        $('#bodydY').val(solArray[body].dy)

    if (!($("#bodydZ").is(":focus")))
        $('#bodydZ').val(solArray[body].dz)
}

populateTable()

function updateSystem() {
    var body = $('#bodyList').prop('selectedIndex');
    var name = $('#bodyName').val();

    solArray[body].name = $('#bodyName').val();

    if (($.isNumeric(   $('#bodyRadius').val()   )))
        solArray[body].pixelSize = Number($('#bodyRadius').val());

    if (($.isNumeric(   $('#bodyMass').val()   )))
        solArray[body].mass = Number($('#bodyMass').val())

    solArray[body].color = $('#bodyColor').val();

    if (($.isNumeric(   $('#bodyX').val()   )))
        solArray[body].x = Number($('#bodyX').val());

    if (($.isNumeric(   $('#bodyY').val()   )))    
        solArray[body].y = Number($('#bodyY').val());

    if (($.isNumeric(   $('#bodyZ').val()   )))
        solArray[body].z = Number($('#bodyZ').val());

    if (($.isNumeric(   $('#bodydX').val()   )))
        solArray[body].dx = Number($('#bodydX').val());

    if (($.isNumeric(   $('#bodydY').val()   )))
        solArray[body].dy = Number($('#bodydY').val());

    if (($.isNumeric(   $('#bodydZ').val()   )))
        solArray[body].dz = Number($('#bodydZ').val());

    populateBodyList();
    $("#bodyList").val(name);
}

function addBody() {
    solArray.push(
        {
            "name": "NewBody",
            "pixelSize": 8,
            "color": "yellow",
            "x": 549200000 * Math.pow(10, 3),                                                                 
            "y": 549200000 * Math.pow(10, 3),
            "z": 0,
            "dx": -9.68 * 1000,
            "dy": 9.68 * 1000,
            "dz": 0,                                                                
            "mass": 5.00 * Math.pow(10, 29),
            "lines":  []                                      
        }
    )
    populateBodyList();
    $("#bodyList").val("NewBody")
    populateTable();
    console.log(solArray)
}

function enableFields() {
    $('#bodyName').removeAttr('disabled');
    $('#bodyRadius').removeAttr('disabled');
    $('#bodyMass').removeAttr('disabled');
    $('#bodyColor').removeAttr('disabled');
    $('#bodyX').removeAttr('disabled');
    $('#bodyY').removeAttr('disabled');
    $('#bodyZ').removeAttr('disabled');
    $('#bodydX').removeAttr('disabled');
    $('#bodydY').removeAttr('disabled');
    $('#bodydZ').removeAttr('disabled');
}

function disableFields() {
    $('#bodyName').attr('disabled', 'disabled')
    $('#bodyRadius').attr('disabled', 'disabled')
    $('#bodyMass').attr('disabled', 'disabled')
    $('#bodyColor').attr('disabled', 'disabled')
    $('#bodyX').attr('disabled', 'disabled')
    $('#bodyY').attr('disabled', 'disabled')
    $('#bodyZ').attr('disabled', 'disabled')
    $('#bodydX').attr('disabled', 'disabled')
    $('#bodydY').attr('disabled', 'disabled')
    $('#bodydZ').attr('disabled', 'disabled')
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
        enableFields()
       
     }

     else {
        console.log("START")

        // when we start, we dont want the user to edit these fields, only when paused
        disableFields()

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
            }, 10);
        }
     }
}

function dataUpdater() {  
    populateTable()
    
    // don't want to push textbox values to the array if we dont have to, could cause some calc async problems
    // also if the user is editng the field and we send mid edit, while oribiting, will fuck shit up
    if (!runOrbits)
        updateSystem()
}

function startMotion(body_array) {
    if(runOrbits) {
        moveBodies(body_array)
        seconds += granularity
    }
}

function moveBodies(body_array) {
    //console.log(body_array[0])
    //console.log(body_array)
    var allForces = sumForces(body_array);

    for (let i = 0; i < body_array.length; i++) {
        updatePosition(allForces[i].Fx, allForces[i].Fy, allForces[i].Fz, body_array[i], granularity)      
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
        z1 =            body1.z,
        z2 =            body2.z,
        xdif =          x2 - x1,
        ydif =          y2 - y1,
        zdif =          z2 - z1,
        distance2d =    Math.pow((Math.pow((xdif), 2) + Math.pow((ydif), 2)), .5),
        distance =      Math.pow((Math.pow((xdif), 2) + Math.pow((ydif), 2) + Math.pow((zdif), 2)), .5),
        theta =         Math.atan2(ydif, xdif),
        phi =           Math.atan2(zdif, distance2d),
        GravConst =     6.67408 * Math.pow(10, -11),
        Fmag =          m1 * m2 * GravConst / (distance * distance),
        Fx =            Fmag * Math.cos(theta),
        Fy =            Fmag * Math.sin(theta),
        Fz =            Fmag * Math.sin(phi)
    return [Fx, Fy, Fz]
}

// not very efficient, as we'll be doing this for every planet, and redoing a few calculations multiple times but its okay 
function sumForces(body_array) {
    universalForceArray = [];
    for (i=0; i< body_array.length; i++) {
        var Fx = 0;
        var Fy = 0;
        var Fz = 0;
        for (let j = 0; j < body_array.length; j++) {
            if (i != j) {
                var force = calculateForce(body_array[i], body_array[j])
                Fx += force[0]
                Fy += force[1]
                Fz += force[2]
            }
        }
        universalForceArray.push({"Fx": Fx, "Fy": Fy, "Fz": Fz})
    }
return universalForceArray;
}

function updatePosition(Fx, Fy, Fz, body, dt) {
    
    // this is a very crude implimentation of special relativity
    // should however prevent bodies from moving too fast, which is mostly the goal
    var velocityMag = Math.pow((body.dx * body.dx + body.dy * body.dy + body.dz * body.dz), .5)
        relativeMass = body.mass / Math.pow((1 - (velocityMag * velocityMag / ( 8.98755179 * Math.pow(10, 16)))) , .5) ,
        ddx = Fx / relativeMass,
        ddy = Fy / relativeMass;
        ddz = Fz / relativeMass;

    body.x = body.x + body.dx * dt + .5 * ddx * Math.pow(dt, 2)
    body.y = body.y + body.dy * dt + .5 * ddy * Math.pow(dt, 2)
    body.z = body.z + body.dz * dt + .5 * ddz * Math.pow(dt, 2)

    // find the new velocity at this new position position
    body.dx = body.dx + ddx * dt
    body.dy = body.dy + ddy * dt
    body.dz = body.dz + ddz * dt
}

function renderObjects(body_array) {

    if (focusing == true) {
        focusBody();
    }

    var width = $(window).width() * .85;
    var height = $(window).height();
    var xMargin = 64;
    var yMargin = 40;
    var mapScale = scale * Math.pow(10, 9);       //size of astronomical area, 4500 to see neptune, 45 trillion meters, or 4500 billion meters

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

    if (vectorsOn) {
        var vectorLines = svg.selectAll("arrows")
        .data(body_array)
        .enter()        
        .append("line")
        .attr("id", "velocityVector")
        .attr("x1", d => x(d.x))     
        .attr("y1", d => y(d.y))      
        .attr("x2", d => x(d.x + (d.dx * 86400 * 8)))     
        .attr("y2", d => y(d.y + (d.dy * 86400 * 8)))


    var rectangles = svg.selectAll("rectangles")
        .data(body_array)
        .enter()
        .append("rect")

    rectangles.attr("x", d => x(d.x + (d.dx * 86400 * 8)) - 2)
        .attr("y", d => y(d.y + (d.dy * 86400 * 8)) -2)
        .attr("stroke", "red")
        .attr("fill", "red")
        .attr("width", 4)
        .attr("height", 4)
        .attr("id", function(d) { return (d.name + "_vector");})
    }

    

    if (linesOn) {
        var orbitPath = d3.line()
        .x(function(d) { return x(d[0]);})
        .y(function(d) { return y(d[1]);});

    var bodyPath =  svg.selectAll("foo")
        .data(body_array)
        .enter()
        .append("path")
    
    bodyPath.attr("d", function(d) { return orbitPath(d.lines);} )
        .attr("fill", "none")
		.attr("stroke", function(d) { return d.color;})
		.attr("stroke-width", 1);
    }
   
    var circles = svg.selectAll("bodies")
        .data(body_array)
        .enter()
        .append("circle")

    circles.attr("cx", function(d) { return x(d.x);})
        .attr("cy", function(d) { return y(d.y);})
        .attr("r", function(d) { return (d.pixelSize);})
        .attr("fill", function(d) { return (d.color);})
        .attr("id", function(d) { return (d.name);})
        .attr("class", "planet")


    document.getElementById('counter').innerHTML = `<p style="{color: "white";}"> Total Days: ${Math.round( seconds / 86400 ) } </p><p style="{color: "white";}"> Total Years: ${Math.floor( (seconds / 31556952) ) } </p>`
}


// below is camera and dragging controls
var xOffset = 0;
var yOffset = 0;
var xPos = null;
var xPosOld = null;
var yPos = null;
var yPosOld = null;
var isPanning = false;
var gotBody = false;
var targetBody = "";

const viewer = document.getElementById('map');

function dragBody(bodyname, e) {

    var width = $(window).width() * .85;
    var height = $(window).height();
    var xMargin = 64;
    var yMargin = 40;
    var mapScale = scale * Math.pow(10, 9);       //size of astronomical area, 4500 to see neptune

    var X = e.offsetX;
    var Y = e.offsetY;

    // these are the inverse of our render scales, we want to go from pixels to meters
    var xScale = d3.scaleLinear()
        .domain([xMargin, width - xMargin])
        .range([-mapScale - xOffset * scale * Math.pow(10, 6) , mapScale - xOffset * scale * Math.pow(10, 6)]);

    var yScale = d3.scaleLinear()
        .domain([height - yMargin, yMargin])
        .range([.625 * -mapScale + yOffset * scale * Math.pow(10, 6), .625 * mapScale + yOffset * scale * Math.pow(10, 6)])


    solArray.find(item=>item.name==bodyname).x = xScale(X);
    solArray.find(item=>item.name==bodyname).y = yScale(Y);

    populateTable();
}

viewer.addEventListener('mousedown', e => {
    
    if ($(e.target).hasClass('planet')) {
        gotBody = true;
        targetBody = e.target.id;
        console.log(targetBody);
    }
    else {
        isPanning = true;
    }

  });

viewer.addEventListener('mousemove', e => {
    if (isPanning && xPosOld != null) {
        xPos = e.offsetX ;
        yPos = e.offsetY;
        xOffset += (xPos - xPosOld)
        yOffset += (yPos - yPosOld)
        console.log("Dragging Offset (" + xOffset  + ", "+ yOffset  + ")")
        //console.log(e)
        xPosOld = e.offsetX;
        yPosOld = e.offsetY;
    }
    else if (isPanning) {
        xPosOld = e.offsetX;
        yPosOld = e.offsetY;
    }

    if (gotBody) {
        dragBody(targetBody, e)
    }

  });

  viewer.addEventListener('mouseup', e => {
    if (isPanning || gotBody) {
        isPanning = false;
        gotBody = false;
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

function zoom(e) {

    // if zooming in but we're already very zoomed, go slow
    if (e.deltaY < 0 && scale >= 22) {
        scale =  scale - 20;
    }

    // default zoom in
    if (e.deltaY < 0 && scale >= 200) {
        scale =  scale - 180;

    }

    // default zoom out, can't go past scale max
    if (e.deltaY > 0 && scale <= 20100) {
        scale =  scale + 500;
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

var vectorsOn
function toggleVectors() {
    if (!vectorsOn)
        vectorsOn = true;
    else
        vectorsOn = false;
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