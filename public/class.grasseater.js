class GrassEater extends Base {
    constructor(x, y){
    super(x, y);
    this.energy = 20;
    this.gender = Math.round(Math.random());


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
    chooseCell1(ch){
        this.getNewCordinates();
        return super.chooseCell(ch);
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
        else if (this.energy > 9) {
          
            this.bazmanal();
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
                //console.log(55);
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
               // console.log(grassEater.length);
                break;
            }
        }
    }

    bazmanal() {
        this.getNewCordinates();
        if (this.gender == 0) {
            var g = 1
        }
        else {
            var g = 0
        }
        var voshxarner = this.chooseCell1(2);
        for (var i in voshxarner) {
            for (var l in grassEater) {
                if(grassEater[l].y == voshxarner[i][1] && grassEater[l].x == voshxarner[i][0]){
                    if (grassEater[l].gender == g) {
                        var bex = []
                        bex.push(grassEater[l])
                        for (var k in bex) {
                            if (bex[k].energy >= 5) {

                                var vandak = random(this.chooseCell1(0));

                                if (vandak) {
                                    var norgrasseater = new GrassEater(vandak[0], vandak[1]);
                                    grassEater.push(norgrasseater);
                                    matrix[vandak[1]][vandak[0]] = 2;
                                    this.energy = 8;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}



