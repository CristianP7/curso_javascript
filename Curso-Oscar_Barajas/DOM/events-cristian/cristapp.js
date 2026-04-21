const $counter = document.getElementById('counter');
const $click = document.getElementById('click');
const $reset = document.getElementById('reset');

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

manipulateClicks();