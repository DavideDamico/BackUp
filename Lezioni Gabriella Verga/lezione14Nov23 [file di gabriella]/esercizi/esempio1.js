class Point{
    constructor(x,y){
        this.x;
        this.y;
    }
    puntox = "x";
    static displayNome = "Point";
    static distance(a,b){
        let dx = a - b;
        let dy = a + b;
        return Math.hypot(dx,dy);
    } 
}

let pointA = new Point(5,5);
console.log(pointA.displayNome);
console.log(pointA.puntox);
console.log(Point.displayNome);

let data = new Date();
data.getDate();
 
Math.random(); 
