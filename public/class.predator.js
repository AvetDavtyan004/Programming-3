class Gishatich extends Base {
    constructor(x, y) {
        super(x, y);
        this.energy = 5;


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
                //console.log(gishatich.length);
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
