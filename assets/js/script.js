/*jshint esversion: 6*/

window.onload = function () {
    const btn = document.querySelector("#btn");
    btn.onclick = function () {
        muda();
    };
};

function muda() {
    let txt = document.querySelector("#txt");
    let newtxt = "Now we changed the text in the page via javascript.";
    let oritxt = "Hello! This is my test page.";

    if (txt.innerHTML === oritxt) {
        txt.innerHTML = newtxt;
    } else {
        txt.innerHTML = oritxt;
    }
    
}