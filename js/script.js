let textarea = document.querySelector('#textarea');
let clearBtn = document.querySelector('#button');
let space = document.querySelector('#space');
let noSpace = document.querySelector('#nospace');
let word = document.querySelector('#word');


function getTextarea() {
   let txtValue = textarea.value;
   let txtLength = txtValue.length;
   let noSpaces = txtValue.split(' ').join('').length;
   let words = txtValue.replace(/\.|\,/g, ' ').replace(/^\s*/, '').replace(/\s*$/, '').split(/[\s]+/).length;

   space.lastChild.innerText = txtLength;
   noSpace.lastChild.innerText = noSpaces;
   word.lastChild.innerText = words;

}

function clearTxt() {
   textarea.value = '';
   space.lastChild.innerText = 0;
   noSpace.lastChild.innerText = 0;
   word.lastChild.innerText = 0;
}

textarea.addEventListener('input', getTextarea);
clearBtn.addEventListener('click', clearTxt);







































// let sait = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

// function showDiv() {
//    let count = 0;
//    for (let i = 0; i < sait.length; i++) {
//       for (let j = 0; j < input.value; j++) {
//          sait[i] = input.value[i];
//          count++;
//       }
//    }
//    div.innerHTML = count;
// }

// button.addEventListener('click', showDiv);