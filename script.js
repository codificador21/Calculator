var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',calc); 
    
}
document.addEventListener('keydown',function(event){
    if (event.key === '+' || event.key  === '-' || event.key  === '*' || event.key  === '/') {
        if(display.innerText == "" && (event.key === '+' || event.key === '-' ) && operand1==null){
            display.innerText += event.key;
        }
        operator = event.key;
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
    }else if(event.key ==="CapsLock" ||event.key ==="Shift" ||event.key ==="Control" ||event.key ==="Alt" || event.key ==="Tab"
          || event.key ==="Insert" || event.key ==="Delete" || event.key ==="ArrowUp" || event.key ==="ArrowLeft" || event.key ==="ArrowRight" 
          || event.key ==="ArrowDown" || event.key >= 'a' || event.key == "Escape"){

          }
    else if(event.key  === '+/-' ){
        var str = display.innerText;
        if(str.charAt(0)=='-'){
            str.charAt(0)='+';
            display.innerText = str;
        }if(str.charAt(0)=='+'){
            str.charAt(0)='-';
            display.innerText = str;
        }if(str.charAt(0)!='+' ||str.charAt(0)!='-' ){
            display.innerText = "-"+display.innerText;
        }
        
    }
    else if (event.key  === '%') {
        operand1 = parseFloat(display.textContent);
        operand1 = eval(operand1 + " " + '/' + " " + '100');
        display.innerText = (operand1);
    } else if (event.key  === 'AC' || event.key ==="Backspace") {
        display.innerText = "";

    } else if (event.key  === '=' || event.key === "Enter") {
        operand2 = parseFloat(display.textContent);
        operand1 = eval(operand1 + " " + operator + " " + operand2);
        display.innerText = (operand1);
    } else {
        display.innerText += event.key;
    }
})

function calc () {
    var value = this.getAttribute('data-value');
    if (value == '+' || value == '-' || value == '*' || value == '/') {
        if(display.innerText == "" && (value == '+' || value == '-' ) && operand1==null){
            display.innerText += value;
        }
        operator = value;
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
    }else if(value == '+/-'){
        var str = display.innerText;
        if(str.charAt(0)=='-'){
            str.charAt(0)='+';
            display.innerText = str;
        }if(str.charAt(0)=='+'){
            str.charAt(0)='-';
            display.innerText = str;
        }if(str.charAt(0)!='+' ||str.charAt(0)!='-' ){
            display.innerText = "-"+display.innerText;
        }
        
    }else if (value == '%') {
        operand1 = parseFloat(display.textContent);
        operand1 = eval(operand1 + " " + '/' + " " + '100');
        display.innerText = (operand1);
    } else if (value == 'AC') {
        display.innerText = "";

    } else if (value == '=') {
        operand2 = parseFloat(display.textContent);
        operand1 = eval(operand1 + " " + operator + " " + operand2);
        display.innerText = (operand1);
    } else {
        display.innerText += value;
    }
}
// document.body.classList.add('dark-theme');
var icon  = document.getElementById('icon');
icon.addEventListener('click', function(){
    
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
           icon.src = 'sun.png';
    }else{
           icon.src = 'moon.png';
    }
});

