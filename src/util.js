export const TAU = 2 * Math.PI;

export function randInt(a, b) {
  if (b == null) {
    b = a;
    a = 0;
  }
  return Math.floor(randFloat(a, b))
}

export function randFloat(a, b) {
  if (b == null) {
    b = a;
    a = 0;
  }
  let rng = b-a;
  return (Math.random() * rng) + a
}

export function lerp(a, b, frac) {
  return (a * frac) + (b * (1-frac))
}