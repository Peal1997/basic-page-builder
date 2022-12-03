const input = document.querySelector('.heading')
const h1 = document.querySelector('.holder')
const align = document.querySelectorAll('.align')
const size = document.querySelector('.size')
const color = document.querySelector('.color')
const ff = document.querySelector('.ff')

//push value to dynamic section
input.onkeyup = () => {
   h1.innerHTML = input.value
}


//text align section
align.forEach(item => {
     item.onchange = () =>{
        h1.style.textAlign = item.value
     }
})

//text size

size.oninput = () => {
    
    h1.style.fontSize = size.value + 'px'

}

//color
color.oninput = () => {
    h1.style.color = color.value
}

//font-family

ff.onchange = () => {
    h1.style.fontFamily = ff.value
}




