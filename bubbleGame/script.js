// jis element pe click krege udhr event raise hoga, udhr event listener dhundega, na milne per uske parent pe dhundega, udhr bhi na mila to uske parent pe dhundega




var score =0 ;
var hitrun=0;
const makeBubble = () => {

    var clutter = "";
    for (var i = 1; i <= 126; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class='bubble'>${rn}</div>`;
    }

    document.querySelector('#pannelbottom').innerHTML = clutter;

}

const setTImer = () => {
    var timer = 60;
    var timerint = setInterval(()=>{
        if (timer >0){
        timer--;
        document.querySelector('#setTimer').textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pannelbottom").innerHTML = `<h1>Game Over</h1>`;
        }
    
    } ,1000);

}

const setHitval = () => {
    hitrun = Math.floor(Math.random()* 10);
    document.querySelector("#setHit").textContent = hitrun;
}

const increaseScore = () => {
    score+=10;
    document.querySelector("#setScore").textContent = score;
}
 

document.querySelector('#pannelbottom')
.addEventListener('click',function(dets)
{
    var ClickedNum = (Number(dets.target.textContent));
    if (hitrun == ClickedNum){
        increaseScore();
        makeBubble();
        setHitval(); 
    }
})

setTImer();
makeBubble();
setHitval();



