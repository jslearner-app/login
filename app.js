//SELECTORS
let text = document.getElementById('logInput');
const btn = document.getElementById('btn');
/*const email = document.getElementById('logInput');
const password = docoment.getElementById('logInput');*/

let email = "text";

text = document.getElementById('logInput')



//EVENTLISTENNER

btn.addEventListener('click', buttonClicked);
text.addEventListener('input', logInput);



//FUNCTIONS

function buttonClicked(ev) {
    console.log(ev.type, ev.target, ev.currentTarget);
    alert("You 're signin")
}

function logInput(ev) {
    console.log(ev.type, ev.target.value);
}