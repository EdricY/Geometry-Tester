/**
 * Adds click listener to canvas using relative x and y for the callback
 * 
 * @param {Canvas} canvas 
 * @param {function(x, y)} callback 
 */
export function setOnClick(canvas, callback) {
  canvas.addEventListener("click", () => {
    let clientRatioX = canvas.width/canvas.clientWidth;
    let clientRatioY = canvas.height/canvas.clientHeight;
    let x = (event.pageX - canvas.offsetLeft) * clientRatioX;
    let y = (event.pageY - canvas.offsetTop) * clientRatioY;
    callback(x, y);
  })
}

/**
 * Adds click listener to canvas using relative x and y for the callback
 * 
 * @param {Canvas} canvas
 * @param {function(x, y)} callback
 */
export function setOnMove(canvas, callback) {
  canvas.addEventListener("mousemove", () => {
    let clientRatioX = canvas.width/canvas.clientWidth;
    let clientRatioY = canvas.height/canvas.clientHeight;
    let x = (event.pageX - canvas.offsetLeft) * clientRatioX;
    let y = (event.pageY - canvas.offsetTop) * clientRatioY;
    callback(x, y);
  })
}
