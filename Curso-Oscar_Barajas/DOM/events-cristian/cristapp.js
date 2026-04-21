const $counter = document.getElementById('counter');
const $click = document.getElementById('click');
const $reset = document.getElementById('reset');
const $box = document.getElementById("box");

function manipulateClicks(){
    let clicks = 0;

    function render(){
        $counter.textContent = clicks;
    }

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

function changeColor(color){
    $box.style.backgroundColor = color;
}

$box.addEventListener("mouseenter", () => changeColor("black"));
$box.addEventListener("mouseleave", () => changeColor("#2A7B9B"));

manipulateClicks();