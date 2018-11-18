/*console.log(truefalse(13));

function truefalse(a){

    if(a%2==0){
        a = "zuyg";
    }
    else{
        a = "kent";
    }

    return a;


}
*/
/*
var t = fak(5);
console.log(t);

function fak(d){
    var art = 1;
    for(var i = d; i > 0; i-- ){
        art *= i;
    }
    return art;
 

}
*/
/*
var arr = [1,2,3,4,5,6,7];
var t = rty(arr,3);
console.log(t);

function rty(x,y){
    var arr = x;
    var res = 1;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]==y){
            res = arr[i];


        }
        else{
            res = false;
        }
    }

}
*/
/*
var a = 100;
var b = 200;
var p = calcPer(a,b);
var s = calcSq(a,b);
console.log(p,s);

function calcPer(c,d){
   var res = c + d + c + d;
   return res;
}

function calcSq(e,f){
   //write your code here
   var res = e * f;
   return res;
}
*/
/*
var c = [45,60,12,98,78,154,65];
var m = [15,98,45,33,78,98,100,56,98];
var s1 = sumArray(c);
var s2 = sumArray(m);
console.log(s1, s2);


function sumArray(a){
   //write your code here
   var sum = 0;
   for(var i = 0; i<a.length; i++){
       sum += a[i];

   }
   return sum;
}
*/
/*

var c = [45,60,12,98,78,154,65];
var b = reverseArray(c);
console.log(b); //պիտի տպի 65,154,78,98,12,60,45

var t = ["php","javascript","html","css","mysql"];
var m = reverseArray(t);
console.log(m); //պիտի տպի mysql, css, html, javascript, php

function reverseArray(a){
     //write your code here
     var   arr= [];
     for(var i = a.length - 1; i>0; i--){
         console.log(a[i]);
         arr.push(a[i]);


     }
     return arr;
}
*/
/*
function dzaynavorneriqanaky(str){
    var dzaynavorner = ["a","e","i","u","o",];
    var n = 0;
    for(var i = 0; i< str.length; i++){
        if(dzaynavorner.indexOf(Str[1]) != -1){
            n++;
        }

    }
    return n;

}
*/
/*
var matrix = [
    [0,1,0,2,2,0,0,0],
    [0,3,0,1,1,0,0,0],
    [0,2,0,1,0,0,1,3],
    [0,0,1,2,2,0,2,2],
    [0,0,1,0,0,0,2,0],
    [0,0,3,0,1,1,0,0]
];
var sum = 0;
for(var y = 0; y < matrix.length; y++){
    for(var x = 0; x < matrix[y].length; x++){
        if(matrix[y][x] == 1){
            sum ++;

        }
    }
}
console.log(sum);
*/
/*
function setup() {
    createCanvas(500, 600);
    background('#acacac');
    noStroke();
  ;
    
}

function draw() {

    fill(0,0,255);
    var x = random(500);
    var y = random(500);
    var s = random(100);

    ellipse(x, y, s, s);
    


    
    
    
}
*/
/*

function setup() {
    createCanvas(500, 600);
    background('#acacac');
    noStroke();
    var fps = random(50);
    frameRate(10);
}

function draw() {

    fill(0,0,255);
    var x = random(500);
    var y = random(500);
    background('#acacac');
    

    ellipse(x, y, 10, 10);
   
    
  


    
    
    
}
*/
/*
var matrix = [
    [0,1,0,2,2,0,0,0],
    [0,3,0,1,1,0,0,0],
    [0,2,0,1,0,0,1,3],
    [0,0,1,2,2,0,2,2],
    [0,0,1,0,0,0,2,0],
    [0,0,3,0,1,1,0,0]
 ];
var side = 60;
function  setup(){
    createCanvas(matrix[0].length * side,matrix.length * side);
    background('#acacac');
    noStroke();
}
function draw() {
    for(var y = 0; y < matrix.length; y++){
        for(var x = 0; x < matrix[y].length; x++){
            if(matrix[y][x] == 1){
                fill("green");
                rect(x * side,y * side,side,side);
            }
        }
    }    
}
*/

/*
var matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
];

var side = 20;
function  setup(){
    createCanvas(matrix[0].length * side,matrix.length * side);
    background('#acacac');
    noStroke();
}
function draw() {
    for(var y = 0; y < matrix.length; y++){
        for(var x = 0; x < matrix[y].length; x++){
            if(matrix[y][x] == 1){
                fill("green");
                rect(x * side,y * side,side,side);
            }
        }
    }    
}
*/
/*
var matrix2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  var side = 20;
function  setup(){
    createCanvas(matrix2[0].length * side,matrix2.length * side);
    background('#acacac');
    noStroke();
}
  function draw() {
    for(var y = 0; y < matrix2.length; y++){
        for(var x = 0; x < matrix2[y].length; x++){
            if(matrix2[y][x] == 1){
                fill("green");
                rect(x * side,y * side,side,side);
            }
        }
    }    
}
*/
// axper esa a 
/*
var a = parseInt(Math.random()*6);
console.log(a);


var matrix = [];
var e = 0;

function givearr(){
    var a = 0;
    var arr = [];
    for(var i = 0; i < 40; i++){
        a = parseInt(Math.random()*6);
        arr.push(a);

    }
    return arr;
}

var tr = givearr();
console.log(tr);

for(var i = 0; i < 40; i++){
    e = givearr();
    matrix.push(e);
}
console.log(matrix);




var side = 20;
function  setup(){
    createCanvas(matrix[0].length * side,matrix.length * side);
    background('#acacac');
    
}
function draw() {
    for(var y = 0; y < matrix.length; y++){
        for(var x = 0; x < matrix[y].length; x++){
            if(matrix[y][x] == 1){
                fill("green");
                rect(x * side,y * side,side,side);
            }
            else if(matrix[y][x] == 2){
                fill("yellow");
                rect(x * side,y * side,side,side);
            }
                
                else if(matrix[y][x] == 3){
                    fill("red");
                    rect(x * side,y * side,side,side);
            }
            else if(matrix[y][x] == 4){
                fill("blue");
                rect(x * side,y * side,side,side);
            }
            else if(matrix[y][x] == 5){
                fill("#ffa31a");
                rect(x * side,y * side,side,side);
            }
            else if(matrix[y][x] == 0){
                fill("#ff471a");
                rect(x * side,y * side,side,side);
            }
        }
    }    
}
*/

/*

var side = 40;
function  setup(){
    createCanvas(matrix[0].length * side,matrix.length * side);
    background('#acacac');
    
}
*/
/*
var matrix = [];

function setup()
{
c
    }
    console.log(matrix);
}

function draw(){}
*/
/*
var matrix = [];
var  side = 100;
var m = 8;
var n = 8;
function  setup(){
    createCanvas(m * side +1, n * side+1);
    background('#acacac');
    
}
for(var y = 0; y<m; y++){
    matrix[y] = [];
    for(var x = 0; x<n; x++){
        if(x == y){
            matrix[y][x] = 1;

        }
        else matrix[y][x] = 0;
    }
}
function draw() {
    for(var y = 0; y < matrix.length; y++){
        for(var x = 0; x < matrix[y].length; x++){
            if(matrix[y][x] == 1){
                fill("green");
                rect(x * side,y * side,side,side);
            }
            else{
                fill("grey");
                rect(x * side,y * side,side,side);

            }
        }
    }
}
*/
/*
var matrix = [];
var  side = 100;
var m = 8;
var n = 8;
function  setup(){
    createCanvas(m * side +1, n * side+1);
    background('#acacac');
    
}
for(var y = 0; y<m; y++){
    matrix[y] = [];
    for(var x = 0; x<n; x++){
        if((x + y) %2 ==0){
            matrix[y][x] = 1;

        }
        else matrix[y][x] = 0;
    }
}
function draw() {
    for(var y = 0; y < matrix.length; y++){
        for(var x = 0; x < matrix[y].length; x++){
            if(matrix[y][x] == 1){
                fill("black");
                rect(x * side,y * side,side,side);
            }
            else{
                fill("white");
                rect(x * side,y * side,side,side);

            }
        }
    }
}


*/
/*
var side = 50;
var matrix = [];
var m = 11;
var n = 11;
var z;
function setup(){
    createCanvas(m * side + 1,n * side + 1);
    background('#acacac');
    for(var y =  0; y < m ; ++y)
    {   
        matrix[y] = [];
        for(var x = 0; x < n; ++x)
        {
            z = x * y
                if (x * y != 0)
                {
                    matrix[y][x] = 0;
                    z = x * y;
                    textSize(30); 
                    fill('#acacac');
                    rect(side*x, side*y, side, side);
                    fill('black'); 
                    text(z, side * x + 15, side * y + 15, side, side);
                }
                else if (x == 0)
                {
                    matrix[y][x] = 1;
                    z = x * y;
                    textSize(30); 
                    fill('#acacac');
                    rect(side*x, side*y, side, side);
                    fill('black'); 
                    text(y, side * x + 15, side * y + 15, side, side);
                }
                else if (y == 0)
                {
                    matrix[y][x] = 2;
                    z = x * y;
                    textSize(30); 
                    fill('#acacac');
                    rect(side*x, side*y, side, side);
                    fill('black'); 
                    text(x, side * x + 15, side * y + 15, side, side);
                }

        }
    }
}


*/

/*
 var katu = new Cat("Murz", 10, 20);


 console.log(katu);

 katu.eat();

 console.log(katu.mousCount);

 katu.move();

 console.log(katu);

*/


// asas
/* 
var a = parseInt(Math.random()*1);
console.log(a);


var matrix = [];
var e = 0;

function givearr(){
    var a = 0;
    var arr = [];
    for(var i = 0; i < 40; i++){
        a = parseInt(Math.random()*6);
        arr.push(a);

    }
    return arr;
}

var tr = givearr();
console.log(tr);

for(var i = 0; i < 40; i++){
    e = givearr();
    matrix.push(e);
}
*/
// project
var matrix = [];
var row = 70, column = 70;



console.log(matrix);
var side = 10;
var grassArr = [];
var grassEater = [];
var gishatich = [];
var virusArr = [];
var chahichArr = [];
var monsterArr = [];



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

        }


    }


    frameRate(20);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}
function draw() {
    drawmatrix();
    for (var i in gishatich) {
        gishatich[i].eat();
    }
    if (frameCount % 40 > 0 && frameCount % 40 < 10) {
        for (var i in grassArr) {
            grassArr[i].mult(0);
        }
    }
    else if(frameCount % 40 > 10 && frameCount % 40 < 20){
        for (var i in grassArr) {
            grassArr[i].mult(5);
        }

    }
    else if(frameCount % 40 > 20 && frameCount % 40 < 30){
        for (var i in grassArr) {
            grassArr[i].mult(1);
        }

    }
    else if(frameCount % 40 > 30 && frameCount % 40 < 40){
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
                else if (matrix[y][x] == 8) {
                    fill("red");
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
                p.innerText = "ՁՄԵՌ";


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
                else if (matrix[y][x] == 8) {
                    fill("red");
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
                p.innerText = "ԳԱՐՈՒՆ";

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
                else if (matrix[y][x] == 8) {
                    fill("red");
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
                p.innerText = "ԱՄԱՌ";

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
                else if (matrix[y][x] == 8) {
                    fill("red");
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
                p.innerText = "ԱՇՈՒՆ";

                rect(x * side, y * side, side, side);
         

            }
            else {
                //console.log(frameCount);
            }
        }
    }
}





