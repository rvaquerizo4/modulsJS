import { create, createReportList } from './canvas.js';
import { name, draw, reportArea, reportPerimeter, arco } from './circle.js';
//import arco from './circle.js';

let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);


// Use the default
let circle1 = arco(myCanvas.ctx);
/* let circle2 = arco2(myCanvas.ctx);
let circle3 = arco3(myCanvas.ctx);
let circle4 = arco4(myCanvas.ctx);
let circle5 = arco5(myCanvas.ctx);
let circle6 = arco6(myCanvas.ctx);
let circle7 = arco7(myCanvas.ctx); */