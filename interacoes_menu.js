
let splash= document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{

    setTimeout(() => {
       splash.style.display = 'none';
    }, 4000);
})

function aparece(div){
    geral = document.body.querySelector('.batatas');
    geral.classList.remove('hide');
    ldiv= document.body.querySelector(div);
    ldiv.classList.remove('hide');
    document.querySelector('input[type="checkbox"]').checked = false;

    let children = document.getElementById("menuToggle").children;

    for (let i = 0; i < 4; i++) {
        children[i].style.visibility = "hidden";
    }
}



function apaga (div){
    geral = document.body.querySelector('.batatas');
    geral.classList.toggle('hide');
    ldiv= document.body.querySelector(div);
    ldiv.classList.toggle('hide');
    document.querySelector('input[type="checkbox"]').checked = true;

    let children = document.getElementById("menuToggle").children;

    for (let i = 0; i < 4; i++) {
        children[i].style.visibility = "visible";
    }

}


