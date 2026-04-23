const $counter = document.getElementById('counter');
const $click = document.getElementById('click');
const $reset = document.getElementById('reset');
const $box = document.getElementById("box");

let clicks = 0;

function render(){
    $counter.textContent = clicks;
}

function manipulateClicks(){

    $click.addEventListener("click", () =>{
        clicks++;
        render();
    });

    $reset.addEventListener("click", () => {
        clicks = 0;
        render();
    });

    render();
}

manipulateClicks();

function changeColor(color){
    $box.style.backgroundColor = color;
}

$box.addEventListener("mouseenter", () => changeColor("black"));
$box.addEventListener("mouseleave", () => changeColor("#2A7B9B"));

function setupKeyboardLike(){
    document.addEventListener('keydown', (event) => {
        if (event.key?.toLowerCase() != 'c') return;
        clicks++;
        render();
    })

    document.addEventListener('keydown', (event) => {
        if (event.key?.toLowerCase() != 'r') return;
        clicks = 0;
        render(); 
    })
}

setupKeyboardLike();