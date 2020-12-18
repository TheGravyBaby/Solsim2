// 1. make fields take proper values and change properly
// 2. update UI to be a bit more intuitive and good looking
// 3. add save states, should be able to load a solar system json object
// 4. add draggabiliy, no one wants to fiddle fuck with numbers
// 5. add arrows for speed
// 6. add planet sizability
// 7. add collisions 

var scale = 4500;
var granularity = 60;
var seconds = 0;
var runOrbits = false;
var hasRun = false;
var newBodyIndex = 1;
var lastBodyX;
var lastBodyY;
var lastBodyColor;

function populateSolarSystemList() {
    $('#solarSystemlist').empty()
    
    universeArray.forEach(element => {
        $('#solarSystemlist')
        .append($("<option></option>")
            .attr("value", element.name)
            .text(element.name));
    });

    solArray = universeArray[0].system;

    populateBodyList() 

}

function changeSolarSystem() {
    var systemIndex = $('#solarSystemlist').prop('selectedIndex')

    solArray = universeArray[systemIndex].system;

    $('#bodyList option')[0].selected = true;
    runOrbits = false;
    seconds = 0;
    populateTable() 
}

function populateBodyList() {
    $('#bodyList').empty()

    solArray.forEach(element => {
        $('#bodyList')
        .append($("<option></option>")
            .attr("value", element.name)
            .text(element.name));
    });
}

function changeGranularity() {
    granularity = Number($('#granularity').val());
};

function populateLines() {
   
    if (runOrbits) {
        for (let i = 0; i < solArray.length; i++) {
            if (solArray[i].lines.length < 10000) {
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

    //console.log(solArray)
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
        //to make sure calculation timing is in line, really pushing the JS stack here to its limit
        //also use a trick here to force JS to do more calculations than the 1ms interval will allow
        var t0 = performance.now()
                for (var i = 0; i < 500; i++) {
                    startMotion(solArray)
                }
        var t1 = performance.now()
        var calcTime = Math.round((t1 - t0))
        console.log(calcTime)

        // using time it took metric will allow us to ajust for systems of different speeds
        if (!hasRun) {
            hasRun = true;
            timer = setInterval(function(){
               
                for (var i = 0; i < 500; i++) {
                    startMotion(solArray)
                }
               
            }, calcTime);
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
        relativeMass = body.mass / Math.pow((1 - (velocityMag * velocityMag / ( 8.98755179 * Math.pow(10, 16)))) , .5),
        ddx = Fx / relativeMass,
        ddy = Fy / relativeMass;
        ddz = Fz / relativeMass;

    // these don't take into account relativity
    // ddx = Fx / body.mass,
    // ddy = Fy / body.mass;
    // ddz = Fz / body.mass;

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
                    
                    if (scale > 10) {
                        return d / 1000000000 +"Gm";
                    }
                    else  if (scale > .01) {
                        return d / 1000000 +"Mm";
                    }
                    else  if (scale > .001) {
                        return d / 1000 +"Km";
                    }
                    else  if (scale > .0000001) {
                        return d  +"m";
                    }
         
                });
    
    
            var yAxis = d3.axisRight(y).ticks(10)
                .tickFormat(function (d) {
                    if (scale > 10) {
                        return d / 1000000000 +"Gm";
                    }
                    else  if (scale > .01) {
                        return d / 1000000 +"Mm";
                    }
                    else  if (scale > .001) {
                        return d / 1000 +"Km";
                    }
                    else  if (scale > .0000001) {
                        return d  +"m";
                    }
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

        // remember that y is negative on the screen axis
        if (vectorsOn) {
            var vectorLines = svg.selectAll("arrows")
            .data(body_array)
            .enter()        
            .append("line")
            .attr("id", "velocityVector")
            .attr("x1", d => x(d.x))     
            .attr("y1", d => y(d.y))      
            .attr("x2", d => x(d.x) + (d.dx/300))     
            .attr("y2", d => y(d.y) - (d.dy/300))
    
    
        var rectangles = svg.selectAll("rectangles")
            .data(body_array)
            .enter()
            .append("rect")
    
        // minus 3 to center the rectangle

        rectangles.attr("x", d => x(d.x) + (d.dx/300) -3 )
            .attr("y", d => y(d.y) - (d.dy/300) - 3)
            .attr("stroke", "red")
            .attr("fill", "red")
            .attr("width", 6)
            .attr("height", 6)
            .attr("class", "vector")
            .attr("id", function(d) { return (d.name + "-vector");})
        }  

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
var gotVector = false;
var targetBody = "";

const viewer = document.getElementById('map');

// oh boy I am lazy, these two functions are mostly the same but lets just get it working and perhaps unify them later
function dragVector(vectorName, e) {
    //console.log("Dragging " + vectorName + " vector")

    var width = $(window).width() * .85;
    var height = $(window).height();
    var xMargin = 64;
    var yMargin = 40;
    var mapScale = scale * Math.pow(10, 9);       //size of astronomical area, 4500 to see neptune
    var x = d3.scaleLinear()
        .domain([-mapScale - xOffset * scale * Math.pow(10, 6) , mapScale - xOffset * scale * Math.pow(10, 6)])
        .range([xMargin, width - xMargin]);

    var y = d3.scaleLinear()
        .domain([.625 * -mapScale + yOffset * scale * Math.pow(10, 6), .625 * mapScale + yOffset * scale * Math.pow(10, 6)])
        .range([height - yMargin, yMargin]);

    var X = e.offsetX;
    var Y = e.offsetY;

    // console.log("---------------------------------------------------------")
    // console.log(X)
    // console.log(Y)
    
    // console.log(x(solArray.find(item=>item.name==vectorName).x))
    // console.log(y(solArray.find(item=>item.name==vectorName).y))
    // console.log("xdif : " + (X + xMargin - x(solArray.find(item=>item.name==vectorName).x) ))
    // console.log()
    // console.log("---------------------------------------------------------")



    // I guess this is a good scale
    solArray.find(item=>item.name==vectorName).dx = (X  - x(solArray.find(item=>item.name==vectorName).x))*300
    solArray.find(item=>item.name==vectorName).dy = (Y  - y(solArray.find(item=>item.name==vectorName).y))*-300;

    // we need to cap the vector, don't want speed of light violations
    if (solArray.find(item=>item.name==vectorName).dx > 1e6) {
        solArray.find(item=>item.name==vectorName).dx = 1e6
    }

    if (solArray.find(item=>item.name==vectorName).dx < -1e6) {
        solArray.find(item=>item.name==vectorName).dx = -1e6
    }

    if (solArray.find(item=>item.name==vectorName).dy > 1e6) {
        solArray.find(item=>item.name==vectorName).dy = 1e6
    }

    if (solArray.find(item=>item.name==vectorName).dy < -1e6) {
        solArray.find(item=>item.name==vectorName).dy = -1e6
    }

}

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

    $('#bodyList').val(bodyname)
    populateTable();
}

viewer.addEventListener('mousedown', e => {
    
    if ($(e.target).hasClass('planet')) {
        gotBody = true;
        targetBody = e.target.id;
        //console.log(targetBody)
    }

    else if ($(e.target).hasClass('vector')) {
        gotVector = true;
        targetBody = (e.target.id).split("-")[0];
        
    }

    else {
        isPanning = true;
    }
    
});

  
// if we press delete, then delete the selected body
$('html').keyup(function(e){
    if(e.keyCode == 46) {
        deleteBody()
    }
});



viewer.addEventListener('mousemove', e => {
    if (isPanning && xPosOld != null) {
        xPos = e.offsetX ;
        yPos = e.offsetY;
        xOffset += (xPos - xPosOld)
        yOffset += (yPos - yPosOld)
        //console.log("Dragging Offset (" + xOffset  + ", "+ yOffset  + ")")
        //console.log(e)
        xPosOld = e.offsetX;
        yPosOld = e.offsetY;
    }
    else if (isPanning) {
        xPosOld = e.offsetX;
        yPosOld = e.offsetY;
    }

    if (gotBody) {
        //console.log("GOT THE BODY")
        dragBody(targetBody, e)
    }

    if (gotVector) {
        dragVector(targetBody, e)
    }

  });

viewer.addEventListener('mouseup', e => {
    if (isPanning || gotBody || gotVector) {
        isPanning = false;
        gotBody = false;
        gotVector = false;
        xPos = null;
        xPosOld = null;
        yPos = null;
        yPosOld = null;
    }
  });

// this will add a new body on right click, keeping parameters of an already selected body
$('#map').bind("contextmenu",function(e){
    
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

    // first body should be white, after that, use the copy
    var color = "white"
    var size = 5
    var mass = 1e29
    
    if (newBodyIndex != 1) {
        color = $("#bodyColor").val()
        size = $("#bodyRadius").val()
        mass = $('#bodyMass').val()
    }
        
    solArray.push(
        {
            "name": "NewBody"+ newBodyIndex,
            "pixelSize": 5,
            "color": color,
            "x": xScale(X),                                                                 
            "y": yScale(Y),
            "z": 0,
            "dx": 0,
            "dy": 0,
            "dz": 0,                                                                
            "mass": mass,
            "lines":  []                                      
        }
    )

    populateBodyList()
    
    $('#bodyList').val("NewBody" + newBodyIndex)


    newBodyIndex += 1

    return false;
 });

viewer.addEventListener('wheel', function(e) {

    e.preventDefault();
    zoom(e);
}, { passive: false });


function zoom(e) {



    // default zoom in
    if (e.deltaY < 0 ) {
        scale =  scale * .8;
    }

    // default zoom out, can't go past scale max
    if (e.deltaY > 0 && scale <= 20100) {
        scale =  scale * 1.2;
    }

}

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

// https://stackoverflow.com/questions/33271555/download-json-object-as-json-file-using-jquery
$("#downloadJSON").click(function() {
    $("<a />", {
      "download": "universe_array.json",
      "href" : "data:application/json," + encodeURIComponent(JSON.stringify(universeArray))
    }).appendTo("body")
    .click(function() {
       $(this).remove()
    })[0].click()
  })

// https://www.geeksforgeeks.org/how-to-read-a-local-text-file-using-javascript/
// i am a dirty thief
document.getElementById('file-selector') .addEventListener('change', function() { 
    
  var fr=new FileReader(); 
  fr.onload=function(){ 
      try{
        var JSONTHING = (JSON.parse(fr.result)); 
        universeArray = null;
        solArray = null;
        universeArray = JSONTHING;

        populateSolarSystemList();
        
      }
      catch {
        alert("Sorry I couldn't parse that file.");
      }
  } 
    
  fr.readAsText(this.files[0]); 

}) 

// initializationn
populateSolarSystemList();
populateBodyList()
populateTable();

render = setInterval(function(){renderObjects(solArray)}, 42);
renderLines = setInterval(function(){populateLines()}, 84);
updateFields = setInterval(function(){dataUpdater()}, 1000);
