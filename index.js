const button = document.querySelector('button');

let id = 0;

button.addEventListener('click', function(){
    if(id < 12){
        createSection();
    }
    else{
        removeSections();
    }
});

function getRandomColor(colors) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
}

const colors = ['red', 'blue', 'green', 'orange', 'yellow', 'purple', 'black', 'white', 'brown'];

const createSection = () => {
    const parent = document.querySelector(`.idx${id}`);
    id++;
    parent.innerHTML = `<section class="container-section idx${id}" style="border:27px ${getRandomColor(colors)} solid"></section>`;
}

const removeSections = () => {
    const parent = document.querySelector(`.idx1`);
    parent.remove();
    id = 0;
}