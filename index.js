


const h1 = document.querySelector('h1')
const btnA = document.querySelector('.btn-area')
const container = document.querySelector(".container")
const img = document.querySelector("img")
let input = document.getElementById('input1');
let audio = document.querySelector('#audio1')
const log = ()=> {
    let newI = input.value;

    console.log(newI);
    
    //clear btn
        const clear = () => {
            container.innerHTML = ""
            btnA.innerHTML = ''
            input.value = ''
        }
        const btn2 = document.createElement('button')
        btn2.classList.add('btn1')
        btn2.addEventListener('click',clear)
        btn2.innerText = 'Clear Meow'
        btnA.appendChild(btn2)

        const copy2 = () => {
    let txt2 = 'hi'
txt2.select
    document.execCommand('copy')

}
    const btn3 = document.createElement('button')
    btn3.classList.add('btn2')
    btn3.addEventListener('click',copy2)
    btn3.innerText = 'Copy Meoww'
    btnA.appendChild(btn3)



 for (let i = 0; i < newI; i++) {
    // creating Container
    const newD = document.createElement('div')
    newD.classList.add('image-con')
    container.appendChild(newD)
    // const newConatiner = document.querySelector('.image-con')
    // Creating image and p tag
    const imgC = document.createElement('img')
    imgC.src = `https://i.pinimg.com/564x/a0/cb/5b/a0cb5b8674b3f322199670d5da39c8c9.jpg`
    // p
    const pokeNo = document.createElement('p')
    pokeNo.innerText =  'Meoww'
    newD.appendChild(imgC)
    newD.appendChild(pokeNo)
}
audio.play();
}
const btn = document.querySelector('#btn').addEventListener('click',log)
