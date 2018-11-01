
/*

class Cat 




{
    constructor( n, x, y )
    {
        this.name       = n;
        this.x          = x;
        this.y          = y;
        this.hungry     = 8;
        this.mouseCount = 0;


    }

    eat()
    {
        this.mouseCount++;

        if( this.hungry < 8 )
        {
            this.hungry++;
            console.log("nyam");
        }
        else
        {
            console.log("Not hungy");
        }
    }
    move()
    {
        this.x++;
        this.y++;
        this.hungry--;



    }
    
}
*/
class Grass {
    constructor(x, y, ) {
        this.x = x;
        this.y = y;
        this.multiply = random(5,10);
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    chooseCell(c) {
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push([x, y]);
                }
            }
        }

        return found;
    }


    mult() {
        this.multiply++
        var emptyCells = this.chooseCell(0); // array

        var randomCell = random(emptyCells); // [ x, y ]

        if (this.multiply >= 8 && randomCell != undefined) {
            var x = randomCell[0];
            var y = randomCell[1];

            matrix[y][x] = 1;

            var gr = new Grass(x, y);

            grassArr.push(gr);
            this.multiply = 0;
        }
    }
}
// grasseaster

class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [];
        this.index = 2;

    }

    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell1(c) {
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push([x, y]);
                }
            }
        }

        return found;
    }

    move() {
        this.getNewCordinates();

        this.energy--;

        var cell = random(this.chooseCell1(0));

        if (cell) {
            matrix[this.y][this.x] = 0
            this.x = cell[0]; this.y = cell[1];
            matrix[this.y][this.x] = 2

        }

        if (this.energy < 1) {
            this.die();
        }
    }

    eat() {
        this.getNewCordinates();

        var cell2 = random(this.chooseCell1(1));

        if (cell2) {
            this.energy++;

            matrix[this.y][this.x] = 0;
            this.x = cell2[0]; this.y = cell2[1];
            matrix[this.y][this.x] = 2;

            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            if (this.energy > 9) {
                this.bazmanal();
            }
        }
        else this.move();

    }

    die() {
        matrix[this.y][this.x] = 0;

        for (var c in grassEater) {
            if (grassEater[c].x == this.x && grassEater[c].y == this.y) {
                grassEater.splice(c, 1);
                console.log(grassEater.length);
                break;
            }
        }
    }

    bazmanal() {
        this.getNewCordinates();

        var vandak = random(this.chooseCell1(0));

        if (vandak) {
            var norgrasseater = new GrassEater(vandak[0], vandak[1]);
            grassEater.push(norgrasseater);
            matrix[vandak[1]][vandak[0]] = 2;
            this.energy = 3;
        }
    }
}

// gishatich
class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 2;

    }

    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell1(c) {
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push([x, y]);
                }
            }
        }

        return found;
    }

    move() {
        this.getNewCordinates();

        this.energy--;

        var cell = random(this.chooseCell1(0));

        if (cell) {
            matrix[this.y][this.x] = 0;
            this.x = cell[0]; this.y = cell[1];
            matrix[this.y][this.x] = 3;

        }

        if (this.energy < 1) {
            this.die();
        }
    }

    eat() {
        this.getNewCordinates();

        var cell2 = random(this.chooseCell1(2));

        if (cell2) {
            this.energy++;

            matrix[this.y][this.x] = 0;
            this.x = cell2[0]; this.y = cell2[1];
            matrix[this.y][this.x] = 3;

            for (var i in grassEater) {
                if (this.x == grassEater[i].x && this.y == grassEater[i].y) {
                    grassEater.splice(i, 1);
                    break;
                }
            }

            if (this.energy > 9) {
                this.bazmanal();
            }
        }
        else this.move();

    }

    die() {
        matrix[this.y][this.x] = 0;

        for (var c in gishatich) {
            if (gishatich[c].x == this.x && gishatich[c].y == this.y) {
                gishatich.splice(c, 1);
                console.log(gishatich.length);
                break;
            }
        }
    }

    bazmanal() {
        this.getNewCordinates();

        var vandak = random(this.chooseCell1(0));

        if (vandak) {
            var norgishatich = new Gishatich(vandak[0], vandak[1]);
            gishatich.push(norgishatich);
            matrix[vandak[1]][vandak[0]] = 3;
            this.energy = 3;
        }
    }
}
//virus
class Virus {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 3;
        this.directions = [];
        this.index = 2;

    }

    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x, this.y - 2],
            [this.x + 2, this.y],
            [this.x - 2, this.y],
            [this.x, this.y + 2],
            [this.x + 1, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x + 1, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y + 2]

        ];
    }
    chooseCell1(c) {
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push([x, y]);
                }
            }
        }

        return found;
    }

    move() {
        this.getNewCordinates();

        this.energy--;

        var cell = random(this.chooseCell1(0));

        if (cell) {
            matrix[this.y][this.x] = 0;
            this.x = cell[0]; this.y = cell[1];
            matrix[this.y][this.x] = 4;

        }


    }

    eat() {
        this.getNewCordinates();

        var cell2 = random(this.chooseCell1(1));
        var cell3 = random(this.chooseCell1(2));
        var cell4 = random(this.chooseCell1(3));

        this.energy++

        if (cell2) {


            matrix[this.y][this.x] = 0;
            this.x = cell2[0]; this.y = cell2[1];
            matrix[this.y][this.x] = 4;

            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }



        }

        else if (cell3) {


            matrix[this.y][this.x] = 0;
            this.x = cell3[0]; this.y = cell3[1];
            matrix[this.y][this.x] = 4;

            for (var i in grassEater) {
                if (this.x == grassEater[i].x && this.y == grassEater[i].y) {
                    grassEater.splice(i, 1);
                    break;
                }
            }



        }

        else if (cell4) {


            matrix[this.y][this.x] = 0;
            this.x = cell4[0]; this.y = cell4[1];
            matrix[this.y][this.x] = 4;

            for (var i in gishatich) {
                if (this.x == gishatich[i].x && this.y == gishatich[i].y) {
                    gishatich.splice(i, 1);
                    break;
                }
            }


        }

        else this.move();





    }



}

class Monster {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 3;
        this.directions = [];
        this.index = 2;

    }

    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x, this.y - 2],
            [this.x + 2, this.y],
            [this.x - 2, this.y],
            [this.x, this.y + 2],
            [this.x + 1, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x + 1, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y + 2]

        ];
    }
    chooseCell1(c) {
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push([x, y]);
                }
            }
        }

        return found;
    }

    move() {
        this.getNewCordinates();

        this.energy--;

        var cell = random(this.chooseCell1(0));

        if (cell) {
            matrix[this.y][this.x] = 0;
            this.x = cell[0]; this.y = cell[1];
            matrix[this.y][this.x] = 5;

        }

        if (this.energy < 1) {
            this.die();
        }
    }

    eat() {
        this.getNewCordinates();

        var cell2 = random(this.chooseCell1(3));
        var cell3 = random(this.chooseCell1(1));
        var cell4 = random(this.chooseCell1(2));

        if (cell2) {
            this.energy++;

            matrix[this.y][this.x] = 0;
            this.x = cell2[0]; this.y = cell2[1];
            matrix[this.y][this.x] = 5;

            for (var i in gishatich) {
                if (this.x == gishatich[i].x && this.y == gishatich[i].y) {
                    gishatich.splice(i, 1);
                    break;
                }
            }

            if (this.energy > 9) {
                this.bazmanal();
            }
        }
       else if (cell3) {
            

            matrix[this.y][this.x] = 0;
            this.x = cell3[0]; this.y = cell3[1];
            matrix[this.y][this.x] = 5;

            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

        }
        else if (cell4) {
            
            this.energy++
            matrix[this.y][this.x] = 0;
            this.x = cell4[0]; this.y = cell4[1];
            matrix[this.y][this.x] = 5;

            for (var i in grassEater) {
                if (this.x == grassEater[i].x && this.y == grassEater[i].y) {
                    grassEater.splice(i, 1);
                    break;
                }
            }
            
            if (this.energy > 9) {
                this.bazmanal();
            }

        }
        else this.move();

    }

    die() {
        matrix[this.y][this.x] = 0;

        for (var c in monsterArr) {
            if (monsterArr[c].x == this.x && monsterArr[c].y == this.y) {
                monsterArr.splice(c, 1);
               
                break;
            }
        }
    }

    bazmanal() {
        this.getNewCordinates();

        var vandak = random(this.chooseCell1(0));

        if (vandak) {
            var normonster = new Monster(vandak[0], vandak[1]);
            monsterArr.push(normonster);
            matrix[vandak[1]][vandak[0]] = 5;
            this.energy = 3;
        }
    }
}