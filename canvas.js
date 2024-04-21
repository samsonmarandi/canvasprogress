let canvas = document.querySelector('canvas');
// Add an event listener to track mouse movements
canvas.addEventListener("mousemove", function(event) {
    // Get the cursor position relative to the canvas
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;

    // Print the cursor position
    console.log(`Cursor position: x = ${x}, y = ${y}`);
});
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas)

let c = canvas.getContext('2d');

c.fillStyle = 'rgba(255,0,0,0.5)';
c.fillRect(200,200,200,200);
// console.log(c)
c.strokeStyle = 'rgba(0,255,0,0.5)';
c.strokeRect(100,100,100,100);
console.log(c)
// c.fillStyle = 'rgba(0,0,255,0.5';
// c.fillRect(400,100,100,100);
// c.fillStyle = 'rgba(0,255,0,0.5';
// c.fillRect(300,300,100,100);

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 310);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// arc circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke()

// for(let i = 1; i<= 10; i++){
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke()
// }


var x = 200;
var dx = 4;
var radius = 30;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, 200, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    x+= dx;
}
// animate()

let isDragging = false;
let initialX, initialY;

canvas.addEventListener('mousedown', (event) => {
  isDragging = true;
  initialX = event.clientX - canvas.getBoundingClientRect().left;
  initialY = event.clientY - canvas.getBoundingClientRect().top;
});

canvas.addEventListener('mousemove', (event) => {
    if (isDragging) {
      const currentX = event.clientX - canvas.getBoundingClientRect().left;
      const currentY = event.clientY - canvas.getBoundingClientRect().top;
      const width = currentX - initialX;
      const height = currentY - initialY;
  
      // Clear canvas
      c.clearRect(0, 0, canvas.width, canvas.height);
  
      c.fillStyle = 'blue';
      // Draw the rectangle
      c.fillRect(initialX, initialY, width, height);
    }
  });
  
  canvas.addEventListener('mouseup', () => {
    isDragging = false;
  });