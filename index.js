
const h1 = document.querySelector('h1')
const btnA = document.querySelector('.btn-area')
const container = document.querySelector(".container")
const img = document.querySelector("img")
let input = document.getElementById('input1');
let audio = document.querySelector('#audio1')
const log = () => {
  let newI = input.value;
  
  if (newI == ''|| newI == null) {
    //clear btn
    console.log('error');
    input.classList.add('placeholder')
    
  } else {
    input.classList.remove('placeholder')
    const clear = () => {
      container.innerHTML = ""
      btnA.innerHTML = ''
      input.value = ''
    }
    
    const myHtml = `<button class="btn1">Clear Meow</button> <button class="btn2">Copy Meoww</button>`
    btnA.innerHTML = myHtml
    
    let btn1 = document.querySelector('.btn1').addEventListener('click',clear)

    let txt = ['Meoww😺',]
    for (let i = 0; i < newI; i++) {
      txt.splice(0,0, 'Meoww😺')
    }
    let newtxt = txt.toString()
    console.log(newtxt);
    
      function myFunction() {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }
      const copContent = async () => {
        try {
          await navigator.clipboard.writeText(newtxt);
          console.log('Content copied to clipboard');
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      }

    let btn2 = document.querySelector('.btn2').addEventListener('click',myFunction,copContent)

  
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
        pokeNo.innerText = 'Meoww'
        newD.appendChild(imgC)
        newD.appendChild(pokeNo)
    }
    audio.play();
      
    }

}
const btn = document.querySelector('#btn').addEventListener('click', log)
