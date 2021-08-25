/*jshint esversion: 6*/

window.onload = function () {
    const btn = document.querySelector("#btn");
    btn.onclick = function () {
        muda();
    };
};

function muda() {

    let txt = document.querySelector("#txt");
    let newTxt = "Now we changed the text via javascript.";
    let oriTxt = "Hello! This is just a test page.";

    if (txt.innerHTML === oriTxt) {
        txt.innerHTML = newTxt;
    } else {
        txt.innerHTML = oriTxt;
    }
    
}