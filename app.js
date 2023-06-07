const cols = document.body.querySelectorAll('.col');


function setRandomColor() {
  cols.forEach(col => {
    let color = generateRandomColor();
    
    col.style.backgroundColor = color;
    setText(col, color);
  })
}

function generateRandomColor() {
  const hexCode = '0123456789ABCDEF';
  let color = '#';
  
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 16);
    color += hexCode[index];
  }

  return color;
}

function setText(col, color) {
  col.textContent = color;

  let luminance = chroma(color).luminance();
  col.style.color = luminance > 0.5 ? '#111' : '#fff';
}

document.addEventListener('keypress', (e) => {
  if (e.code.toLowerCase() == 'space') {
    setRandomColor();
  }
})

setRandomColor();

