import { create, createReportList } from './canvas.js';
import { name, draw, reportArea, reportPerimeter, arco } from './circle.js';
//import { drawCircle, randomNumber } from './cerclesAleatoris';



let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);


// Use the default
let circle1 = arco(myCanvas.ctx);


let myCanvas2 = create('mycanvas2', document.body , 780, 320);
let reportList2 = createReportList(myCanvas2.id);

let circles = drawCircle(myCanvas2.ctx)
