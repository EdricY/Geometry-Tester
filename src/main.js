import { setOnClick } from "./input-util";
import Point from "./point";
import Triangle from "./triangle";
import { randInt, randFloat } from "./util";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;
ctx.fillStyle = "#777";
ctx.fillRect(0, 0, canvas.width, canvas.height)

setOnClick(canvas, (x, y) => {
  let p1 = new Point(x, y);
  let p2 = new Point(x + randInt(10,50), y - randInt(10,20));
  let p3 = new Point(x - randInt(10,20), y - randInt(10,50));
  let tri = new Triangle(p1, p2, p3)
  console.log(x,y);
  tri.draw(ctx);
  tri.centroid.draw(ctx);
  let subtris = getSubTriangles(tri);
  subtris[0].draw(ctx, "red");
  subtris[1].draw(ctx, "yellow");
  subtris[2].draw(ctx, "blue");
  subtris[3].draw(ctx, "lime");
});

function getSubTriangles(triangle) {
  let { p1, p2, p3 } = triangle;
  let p4 = Point.midpoint(p1, p2, randFloat(.2,.8));
  let p5 = Point.midpoint(p1, p3, randFloat(.2,.8));
  let p6 = Point.midpoint(p2, p3, randFloat(.2,.8));
  return [
    new Triangle(p1, p4, p5),
    new Triangle(p2, p4, p6),
    new Triangle(p3, p5, p6),
    new Triangle(p4, p5, p6),
  ]
}

const mainBtn = document.getElementById("main-btn");
mainBtn.addEventListener("click", () => {

})
