class Bomber extends Base {
    constructor(x, y ) {
        super(x, y );
        this.index = 6;
        this.energ = 0  ;


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

        [this.x - 1, this.y - 2],
        [this.x, this.y - 2],
        [this.x + 1, this.y - 2],
        [this.x + 2, this.y - 2],
        [this.x + 2, this.y - 1],
        [this.x + 2, this.y],
        [this.x + 2, this.y + 1],
        [this.x + 2, this.y + 2],
        [this.x + 1, this.y + 2],
        [this.x, this.y + 2],
        [this.x - 1, this.y + 2],
        [this.x - 2, this.y + 2],
        [this.x - 2, this.y + 1],
        [this.x - 2, this.y],
        [this.x - 2, this.y - 1],
        [this.x - 2, this.y - 2],

        [this.x, this.y + 3],
        [this.x - 1, this.y + 3],
        [this.x - 2, this.y + 3],
        [this.x - 3, this.y + 3],
        [this.x + 1, this.y + 3],
        [this.x + 2, this.y + 3],
        [this.x + 3, this.y + 3],

        [this.x + 3, this.y + 2],
        [this.x - 3, this.y + 2],
        [this.x + 3, this.y + 1],
        [this.x - 3, this.y + 1],
        [this.x + 3, this.y],
        [this.x - 3, this.y],
        [this.x + 3, this.y - 1],
        [this.x - 3, this.y - 1],
        [this.x + 3, this.y - 2],
        [this.x - 3, this.y - 2],

        [this.x, this.y - 3],
        [this.x - 1, this.y - 3],
        [this.x - 2, this.y - 3],
        [this.x - 3, this.y - 3],
        [this.x + 1, this.y - 3],
        [this.x + 2, this.y - 3],
        [this.x + 3, this.y - 3],

        [this.x, this.y + 4],
        [this.x - 1, this.y + 4],
        [this.x - 2, this.y + 4],
        [this.x - 3, this.y + 4],
        [this.x - 4, this.y + 4],
        [this.x + 1, this.y + 4],
        [this.x + 2, this.y + 4],
        [this.x + 3, this.y + 4],
        [this.x + 4, this.y + 4],

        [this.x + 4, this.y + 3],
        [this.x - 4, this.y + 3],
        [this.x + 4, this.y + 2],
        [this.x - 4, this.y + 2],
        [this.x + 4, this.y + 1],
        [this.x - 4, this.y + 1],
        [this.x + 4, this.y],
        [this.x - 4, this.y],
        [this.x + 4, this.y - 2],
        [this.x - 4, this.y - 2],
        [this.x + 4, this.y - 1],
        [this.x - 4, this.y - 1],
        [this.x + 4, this.y - 3],
        [this.x - 4, this.y - 3],

        [this.x, this.y - 4],
        [this.x - 1, this.y - 4],
        [this.x - 2, this.y - 4],
        [this.x - 3, this.y - 4],
        [this.x - 4, this.y - 4],
        [this.x + 1, this.y - 4],
        [this.x + 2, this.y - 4],
        [this.x + 3, this.y - 4],
        [this.x + 4, this.y - 4],

        [this.x, this.y + 5],
        [this.x - 1, this.y + 5],
        [this.x - 2, this.y + 5],
        [this.x - 3, this.y + 5],
        [this.x - 4, this.y + 5],
        [this.x - 5, this.y + 5],
        [this.x + 1, this.y + 5],
        [this.x + 2, this.y + 5],
        [this.x + 3, this.y + 5],
        [this.x + 4, this.y + 5],
        [this.x + 5, this.y + 5],


        [this.x + 5, this.y + 4],
        [this.x - 5, this.y + 4],
        [this.x + 5, this.y + 3],
        [this.x - 5, this.y + 3],
        [this.x + 5, this.y + 2],
        [this.x - 5, this.y + 2],
        [this.x + 5, this.y + 1],
        [this.x - 5, this.y + 1],
        [this.x + 5, this.y],
        [this.x - 5, this.y],
        [this.x + 5, this.y - 2],
        [this.x - 5, this.y - 2],
        [this.x + 5, this.y - 1],
        [this.x - 5, this.y - 1],
        [this.x + 5, this.y - 3],
        [this.x - 5, this.y - 3],
        [this.x + 5, this.y - 4],
        [this.x - 5, this.y - 4],

        [this.x, this.y - 5],
        [this.x - 1, this.y - 5],
        [this.x - 2, this.y - 5],
        [this.x - 3, this.y - 5],
        [this.x - 4, this.y - 5],
        [this.x - 5, this.y - 5],
        [this.x + 1, this.y - 5],
        [this.x + 2, this.y - 5],
        [this.x + 3, this.y - 5],
        [this.x + 4, this.y - 5],
        [this.x + 5, this.y - 5],

        [this.x, this.y + 6],
        [this.x - 1, this.y + 6],
        [this.x - 2, this.y + 6],
        [this.x - 3, this.y + 6],
        [this.x - 4, this.y + 6],
        [this.x - 5, this.y + 6],
        [this.x - 6, this.y + 6],
        [this.x + 1, this.y + 6],
        [this.x + 2, this.y + 6],
        [this.x + 3, this.y + 6],
        [this.x + 4, this.y + 6],
        [this.x + 5, this.y + 6],
        [this.x + 6, this.y + 6],

        [this.x + 6, this.y + 5],
        [this.x - 6, this.y + 5],
        [this.x + 6, this.y + 4],
        [this.x - 6, this.y + 4],
        [this.x + 6, this.y + 3],
        [this.x - 6, this.y + 3],
        [this.x + 6, this.y + 2],
        [this.x - 6, this.y + 2],
        [this.x + 6, this.y + 1],
        [this.x - 6, this.y + 1],
        [this.x + 6, this.y],
        [this.x - 6, this.y],
        [this.x + 6, this.y - 2],
        [this.x - 6, this.y - 2],
        [this.x + 6, this.y - 1],
        [this.x - 6, this.y - 1],
        [this.x + 6, this.y - 3],
        [this.x - 6, this.y - 3],
        [this.x + 6, this.y - 4],
        [this.x - 6, this.y - 4],
        [this.x + 6, this.y - 5],
        [this.x - 6, this.y - 5],
        
        [this.x, this.y - 6],
        [this.x - 1, this.y - 6],
        [this.x - 2, this.y - 6],
        [this.x - 3, this.y - 6],
        [this.x - 4, this.y - 6],
        [this.x - 5, this.y - 6],
        [this.x - 6, this.y - 6],
        [this.x + 1, this.y - 6],
        [this.x + 2, this.y - 6],
        [this.x + 3, this.y - 6],
        [this.x + 4, this.y - 6],
        [this.x + 5, this.y - 6],
        [this.x + 6, this.y - 6]
    ]
    }

    mul() {
        // var emptyCells = this.chooseCell(0);
        // var newCell = random(emptyCells);

        // //console.log(emptyCells);
        // if (newCell) {
        //     var newX = newCell[0];
        //     var newY = newCell[1];
        //     matrix[newY][newX] = this.index;

        //     var newXotaker = new Xotaker(newX, newY, this.index);
        //     xotakerArr.push(newXotaker);
        //     this.energ = 6;
        // }
    }


    chooseCellmul(character, character1, character2, character3, character4) {
        this.getNewCordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character || matrix[y][x] == character1 || matrix[y][x] == character2 || matrix[y][x] == character3 || matrix[y][x] == character4) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }

    move() {




        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        //console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;
            this.x = newX;
            this.y = newY;

        }
        this.energ--;
        if (this.energ <= 0) {
            this.eat();
            this.die();
            
        }

    }
    die() {

        for (var i in bomberArr) {
            if (this.x == bomberArr[i].x && this.y == bomberArr[i].y) {
                matrix[this.y][this.x] = 0;
                bomberArr.splice(i, 1);
                break;
            }
        }
    }

    eat() {


        var emptyCells = this.chooseCellmul( 1, 2, 3,4, 5);


        //console.log(emptyCells);
        if (emptyCells.length > 0) {
          //  console.log("dasd");
            for (var i in emptyCells) {
                var newX = emptyCells[i][0];
                var newY = emptyCells[i][1];


                //var newX = emptyCells[i][0];
                //var newY = emptyCells[i][1];



                if (matrix[newY][newX] == 1) {
                    for (var i in grassArr) {
                        if (newX == grassArr[i].x && newY == grassArr[i].y) {
                            matrix[newY][newX] = 0;
                            grassArr.splice(i, 1);
                        }
                    }
                }

                else if (matrix[newY][newX] == 2) {
                    for (var i in grassEater) {
                        if (newX == grassEater[i].x && newY == grassEater[i].y) {
                            matrix[newY][newX] = 0;
                            grassEater.splice(i, 1);
                        }
                    }
                }

                else if (matrix[newY][newX] == 3) {
                    for (var i in gishatich) {
                        if (newX == gishatich[i].x && newY == gishatich[i].y) {
                            matrix[newY][newX] = 0;
                            gishatich.splice(i, 1);
                        }
                    }
                }

                else if (matrix[newY][newX] == 4) {
                    for (var i in virusArr) {
                        if (newX == virusArr[i].x && newY == virusArr[i].y) {
                            matrix[newY][newX] = 0;
                            virusArr.splice(i, 1);
                        }
                    }
                }


                //matrix[newY][newX] = 0;
                // matrix[newY][newX] = this.index;


                // this.x = newX;
                // this.y = newY;
                //this.energ++;
            }
        }
        else {
            this.move();
        }
    }
}
