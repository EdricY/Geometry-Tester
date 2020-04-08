import Point from "./point";

export default class Triangle {
  constructor(p1, p2, p3) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }

  draw(ctx, color="orange") {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.lineTo(this.p3.x, this.p3.y);
    ctx.fill();
  }

  get centroid() {
    let x = (this.p1.x + this.p2.x + this.p3.x) / 3;
    let y = (this.p1.y + this.p2.y + this.p3.y) / 3;
    return new Point(x, y);
  }
}
