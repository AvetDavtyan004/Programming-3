class Grass extends Base {
    
    
    
    mult(x) {

        this.multiply+=x;
        
        
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









