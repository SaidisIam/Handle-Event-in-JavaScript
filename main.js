// addEventListener, removeEventListener, event, onmouseover, onmouseout, onclick, ondoubleclick, onmousedown, onmouseup, oninput, onchange

let follow = document.querySelector('.FirstClass')
let bd = document.body

follow.onclick = ()=>{
    bd.classList.toggle('style')
    if(follow.innerHTML == 'dark'){
        follow.innerHTML = 'yellow'
    } else {
        follow.innerHTML = 'dark'
    }
}