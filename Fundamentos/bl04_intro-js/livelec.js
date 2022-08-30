//esse elemento existe no meu js?
const container = document.getElementById("first");
// console.log(container);
// como criarr um elemento html?
const newDiv = document.createElement('div');
// console.log(newDiv);
// como adc classes a esse elemento?
newDiv.className = 'purple circle small';
// como adc o elemento ao arquivo html?
container.appendChild(newDiv);