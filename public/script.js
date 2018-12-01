var matrix = [];
var row = 50, column = 50;



console.log(matrix);
var side = 9;
var grassArr = [];
var grassEater = [];
var gishatich = [];
var virusArr = [];
var monsterArr = [];
var bomberArr = [];
var socket = io.connect('http://localhost:3000');
var kadr = {
    "xotakeriqanak": 0,
    "xotiqanaky": 0,
    "gishatichiqanak": 0,
    "virusiqanak": 0,
    "monsteriqanak": 0,
    "bomberiqanak": 0


};



function setup() {
    
    for (var y = 0; y < row; ++y) {
        matrix[y] = [];
        for (var x = 0; x < column; ++x) {
            matrix[y][x] = Math.round(random(0, 3));

        }

    }
    

    


    matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 4;
    matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 5;
    matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 5;
    matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 5;
    matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 5;






    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                grassEater.push(new GrassEater(x, y));
            }
            else if (matrix[y][x] == 3) {
                gishatich.push(new Gishatich(x, y));
            }
            else if (matrix[y][x] == 4) {
                virusArr.push(new Virus(x, y));
            }
            else if (matrix[y][x] == 5) {
                monsterArr.push(new Monster(x, y));
            }
            else if (matrix[y][x] == 6) {
                bomberArr.push(new Bomber(x, y));
            }


        }


    }


    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}
function draw() {
    if (frameCount % 100 === 0) {
        console.log("dasas");

        function changeView(stat) {
            var c = document.getElementById("xotakeriqanak");
            var k = document.getElementById("xotiqanaky");
            var g = document.getElementById("gishatichiqanak");
            var v = document.getElementById("monsteriqanak");
            var d = document.getElementById("virusiqanak");
            var b = document.getElementById("bomberiqanak");
            c.innerHTML = stat.xotakeriqanak;
            k.innerHTML = stat.xotiqanaky;
            g.innerHTML = stat.monsteriqanak;
            v.innerHTML = stat.gishatichiqanak;
            d.innerHTML = stat.virusiqanak;
            b.innerHTML = stat.bomberiqanak;
        }

        function handleSubmit(evt) {
            kadr.xotakeriqanak = grassEater.length;
            kadr.xotiqanaky = grassArr.length;
            kadr.gishatichiqanak = gishatich.length;
            kadr.monsteriqanak = monsterArr.length;
            kadr.virusiqanak = virusArr.length;
            kadr.bomberiqanak = bomberArr.length;
            changeView(kadr);
            socket.emit("send data", kadr);

        }
        handleSubmit(kadr);
    }
    drawmatrix();
    for (var i in gishatich) {
        gishatich[i].eat();
    }
    if (frameCount % 40 > 0 && frameCount % 40 < 10) {
        for (var i in grassArr) {
            grassArr[i].mult(0);
        }
    }
    else if (frameCount % 40 > 10 && frameCount % 40 < 20) {
        for (var i in grassArr) {
            grassArr[i].mult(5);
        }
        for (var i in grassEater) {
            grassEater[i].eat();
        }

    }
    else if (frameCount % 40 > 20 && frameCount % 40 < 30) {
        for (var i in grassArr) {
            grassArr[i].mult(1);
        }

    }
    else if (frameCount % 40 > 30 && frameCount % 40 < 40) {
        for (var i in grassArr) {
            grassArr[i].mult(1);
        }

    }
    for (var i in grassEater) {
        grassEater[i].eat();
    }
    for (var i in virusArr) {
        virusArr[i].eat();
    }
    for (var i in monsterArr) {
        monsterArr[i].eat();
    }
    for (var i in bomberArr) {
        bomberArr[i].move();
    }

    // for (var i in gishatich) {
    //     gishatich[i].move();
    //     //gishatich[i].eat();
    //    //gishatich[i].bazmanal();
    //     gishatich[i].die(); 
    // }

    // for (var i in virusArr) {
    //     virusArr[i].move();
    //    // virusArr[i].eat();
    // }

    // for (var i in chahichArr) {
    //     chahichArr[i].mult();
    // }

}
function mouseClicked() {
    console.log("asdfadsf")

    var x = mouseX;
    var y = mouseY;
    var i = Math.floor(x / side);
    var k = Math.floor(y / side);
    var bomb = new Bomber(i, k);
    bomberArr.push(bomb);
}



function drawmatrix() {
    var p = document.getElementById("p");

    var aui = [0, 255];
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (frameCount % 40 > 0 && frameCount % 40 <= 10) {

                //dzmer



                if (matrix[y][x] == 1) {
                    fill("#ccff66");

                }
                else if (matrix[y][x] == 0) {
                    fill("#ffffff");

                }
                else if (matrix[y][x] == 2) {

                    fill("yellow");

                }

                else if (matrix[y][x] == 3) {
                    fill("#802b00");
                }

                else if (matrix[y][x] == 4) {
                    fill("black");
                }
                else if (matrix[y][x] == 5) {
                    fill("white");
                }
                else if (matrix[y][x] == 6) {
                    fill("red");
                }
                //image 

                p.innerText = "ՁՄԵՌ";
                document.getElementById("p").style.color = "#66ffff";




                rect(x * side, y * side, side, side);
            }
           
            else if (frameCount % 40 > 10 && frameCount % 40 <= 20) {
                    //garun
                    if (matrix[y][x] == 1) {
                        fill("#009900");

                    }
                    else if (matrix[y][x] == 0) {
                        fill("#994d00");

                    }
                    else if (matrix[y][x] == 2) {

                        fill("yellow");

                    }

                    else if (matrix[y][x] == 3) {
                        fill("#802b00");
                    }

                    else if (matrix[y][x] == 4) {
                        fill("black");
                    }
                    else if (matrix[y][x] == 5) {
                        fill("white");
                    }
                    else if (matrix[y][x] == 6) {
                        fill("red");
                    }
                    p.innerText = "ԳԱՐՈՒՆ";
                    document.getElementById("p").style.color = "#00cc00";






                    rect(x * side, y * side, side, side);

                }
                else if (frameCount % 40 > 20 && frameCount % 40 <= 30) {
                    //amar
                    if (matrix[y][x] == 1) {
                        fill("#39e600");

                    }
                    else if (matrix[y][x] == 0) {
                        fill("#e67300");

                    }
                    else if (matrix[y][x] == 2) {

                        fill("yellow");

                    }

                    else if (matrix[y][x] == 3) {
                        fill("#802b00");
                    }

                    else if (matrix[y][x] == 4) {
                        fill("black");
                    }
                    else if (matrix[y][x] == 5) {
                        fill("white");
                    }
                    else if (matrix[y][x] == 6) {
                        fill("red");
                    }
                    p.innerText = "ԱՄԱՌ";
                    document.getElementById("p").style.color = "#ffff00";

                    rect(x * side, y * side, side, side);

                }
                else if (frameCount % 40 > 30 && frameCount % 40 <= 40) {

                    //ashun
                    if (matrix[y][x] == 1) {
                        fill("#e65c00");

                    }
                    else if (matrix[y][x] == 0) {
                        fill("#ff9900");

                    }
                    else if (matrix[y][x] == 2) {

                        fill("yellow");

                    }

                    else if (matrix[y][x] == 3) {
                        fill("#802b00");
                    }

                    else if (matrix[y][x] == 4) {
                        fill("black");
                    }
                    else if (matrix[y][x] == 5) {
                        fill("white");
                    }
                    else if (matrix[y][x] == 6) {
                        fill("red");
                    }
                    p.innerText = "ԱՇՈՒՆ";
                    document.getElementById("p").style.color = "#ff9900";

                    rect(x * side, y * side, side, side);


                }
                else {
                    //console.log(frameCount);
                }
            }
        }

    }





/*
var img = document.getElementById("myimage");
img.src = ""
*/