const name = 'circle'

function draw(ctx, length, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, length);
  
    return {
      length: length,
      x: x,
      y: y,
      color: color
    };
  }
  
  function random(min, max) {
     let num = Math.floor(Math.random() * (max - min)) + min;
     return num;
  }
  
  function reportArea(length, listId) {
    let listItem = document.createElement('li');
    listItem.textContent = `${name} area is ${length * length}px squared.`
  
    let list = document.getElementById(listId);
    list.appendChild(listItem);
  }
  
  function reportPerimeter(length, listId) {
    let listItem = document.createElement('li');
    listItem.textContent = `${name} perimeter is ${length * 4}px.`
  
    let list = document.getElementById(listId);
    list.appendChild(listItem);
  }

  function arco(ctx) {
    let color1 = 148;
    let color2 = 0;
    let color3 = 211;
    let color = `rgb(${color1},${color2},${color3})`

    let color4 = 75;
    let color5 = 0;
    let color6 = 130;
    let color7 = `rgb(${color4},${color5},${color6})`

    let color8 = 0;
    let color9 = 0;
    let color10 = 255;
    let color11 = `rgb(${color8},${color9},${color10})`


    let color12 = 0;
    let color13 = 255;
    let color14 = 0;
    let color15 = `rgb(${color12},${color13},${color14})`

    let color16 = 255;
    let color17 = 255;
    let color18 = 0;
    let color19 = `rgb(${color16},${color17},${color18})`

    let color20 = 255;
    let color21 = 127;
    let color22 = 0;
    let color23 = `rgb(${color1},${color2},${color3})`

    let color24 = 255;
    let color25 = 0;
    let color26 = 0;
    let color27 = `rgb(${color1},${color2},${color3})`

    let arrayColors = [color, color7, color11, color15, color19, color23, color27] 

    for (let i = 0; i < 7; i++){
        ctx.strokeStyle = arrayColors[i];
        ctx.lineWidth = 10;
        ctx.beginPath();
        if (i == 0){
            ctx.arc(225, 320, 100, Math.PI,0);
            
        }
        else if(i == 1){  
            ctx.arc(225, 310, 100, Math.PI,0);
        }
        ctx.stroke();
    }

  
    return {
      color: color
    };
  }

  /* function arco2(ctx) {
    let color1 = 75;
    let color2 = 0;
    let color3 = 130;
    let color = `rgb(${color1},${color2},${color3})`
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
  
    ctx.beginPath();
    ctx.arc(225, 310, 100, Math.PI,0);
    ctx.stroke();
  
    return {
      color: color
    };
    
  } 

  function arco3(ctx) {
    let color1 = 0;
    let color2 = 0;
    let color3 = 255;
    let color = `rgb(${color1},${color2},${color3})`
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
  
    ctx.beginPath();
    ctx.arc(225, 300, 100, Math.PI,0);
    ctx.stroke();
  
    return {
      color: color
    };
    
  }

  function arco4(ctx) {
    let color1 = 0;
    let color2 = 255;
    let color3 = 0;
    let color = `rgb(${color1},${color2},${color3})`
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
  
    ctx.beginPath();
    ctx.arc(225, 290, 100, Math.PI,0);
    ctx.stroke();
  
    return {
      color: color
    };
    
  }

  function arco5(ctx) {
    let color1 = 255;
    let color2 = 255;
    let color3 = 0;
    let color = `rgb(${color1},${color2},${color3})`
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
  
    ctx.beginPath();
    ctx.arc(225, 280, 100, Math.PI,0);
    ctx.stroke();
  
    return {
      color: color
    };
    
  }

  function arco6(ctx) {
    let color1 = 255;
    let color2 = 127;
    let color3 = 0;
    let color = `rgb(${color1},${color2},${color3})`
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
  
    ctx.beginPath();
    ctx.arc(225, 270, 100, Math.PI,0);
    ctx.stroke();
  
    return {
      color: color
    };
    
  }

  function arco7(ctx) {
    let color1 = 255;
    let color2 = 0;
    let color3 = 0;
    let color = `rgb(${color1},${color2},${color3})`
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
  
    ctx.beginPath();
    ctx.arc(225, 260, 100, Math.PI,0);
    ctx.stroke();
  
    return {
      color: color
    };
    
  }
*/
export { name, draw, reportArea, reportPerimeter, arco};
//export default arco;

  