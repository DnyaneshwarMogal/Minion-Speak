let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");

console.log(txtInput);

function clickEventHandler(){
    outputDiv.innerText = " hahahahahaha " + txtInput.value ;
};

btnTranslate.addEventListener("click", clickEventHandler);