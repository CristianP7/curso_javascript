const $counter = document.getElementById('counter');
const $click = document.getElementById('click');
const $reset = document.getElementById('reset');

function manipulateClicks(){
    let clicks = 0;
    
    $click.addEventListener("click", () =>{
        clicks += 1;
        $counter.textContent = clicks;
    })

    $reset.addEventListener("click", () => {
        clicks = 0;
        $counter.textContent = clicks;
    })
}

manipulateClicks();