
const Display = document.getElementById("display");

function appendtodisplay(input){
    Display.value += input;
}

function calculate(){
    Display.value = eval(Display.value);
}

function cleardisplay(){
    Display.value = "";
}
