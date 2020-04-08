import { TAU, lerp } from "./util";

export default class Point {
  constructor(x, y) {
    if (x == null) x = 0;
    if (y == null) y = 0;
    this.vals = [x, y];
  }
  
  get x() { return this.vals[0]; }
  get y() { return this.vals[1]; }

  draw(ctx, r=2, color="black") {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, r, 0, TAU);
    ctx.fill();
  }

  static midpoint(p1, p2, frac=.5) {
    let x = lerp(p1.x, p2.x, frac);
    let y = lerp(p1.y, p2.y, frac);
    return new Point(x, y);
  }
}