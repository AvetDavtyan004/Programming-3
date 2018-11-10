class Virus extends Base {
    constructor(x, y) {
        super(x, y);
        this.energy = 3;


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
    chooseCell1(ch) {
        this.getNewCordinates();
        return super.chooseCell(ch);
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