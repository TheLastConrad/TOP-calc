
// basic functions

function add(x,y){
  return x + y;
}

function subtract(x,y){
  return x - y;
}

function multiply(x,y){
  return x * y;
}

function divide(x,y){
  return x / y;
}

/// 3 variables: num1, operator, num2

let num1 = 0;
let operator = "";
let num2 = 0;

function operate(x,sign, y){
  switch(sign) {
    case "+":
      add(x,y);
      break;
    case "-":
      subtract(x,y)
      break;
    case "*":
      multiply(x,y)
      break;
    case "/":
      divide(x,y)
    break;
  }
}

let input ="";

// I don't know RegEx well enough to make this work for now. Maybe I'll circle back to fix it. Trying something else instead ...
let symbolRegEx = "/\D+/"

/// Trying out an Array element match

let symbolArray = ["/", "*", "-", "+", "Enter", "C"]

function symbolFunc(incomingValue){
  for (let key in symbolArray){
    // console.log (`Testing Key: ${key}`)
    if (incomingValue == symbolArray[key]){
      console.log('Thats a known symbol!')
      if (incomingValue=="Enter"){
        console.log('Thats and Enter. Do an Enter');
      } else if (incomingValue=="C"){
        
      }
    }
  } 
  
  console.log('Thats most likely a number')
}

let x = "";

function submitButtonValue(incomingValue) {
  
  x = String(incomingValue);

  console.log(`${x} ( a ${typeof x})`);

  // if x is a symbol: (if num1 is 0, make the value num1) then (make x a operator) then (update screen with `${num1} + `)

  if (x.search(/\D+/) > -1){
    console.log('got passed the regex');
    if (num1 == 0){
      console.log('it knows num1 ==0');
      num1 = input;
      operator = x;
      currentVisibleEquation.textContent = `${num1} ${x}`;
      input = 0;
    } else if(num1 != 0 ){
      num2=input;
      currentVisibleEquation.textContent = `${num1} ${x} ${num2} =`;
    }

  }else{
    input += `${x}`
  
    currentVisibleNumber.textContent = input ;

  }
}

const calcButtons = [
  ["C","/","*","-"],
  ["7","8","9","+"],
  ["4","5","6",],
  ["1","2","3","Enter"],
  ["0",".",]
];

let buttonField = document.querySelector('#button-field');
// let rowModel = document.createElement('div');
// rowModel.setAttribute('id','row-model')



// console.log(buttonField);
// console.log(calcButtons.length);

// Take 2 of "draw the buttons on the calculator"
//  First part: make rows
for (i=0; i<(calcButtons.length); i++ ){
  let newRow = document.createElement('div');
  newRow.classList.add('row');
  // console.log(`yo`);
  newRow.setAttribute('id', `row${i}`);
  // console.log(newRow);

  // Second part: draw buttons of each row, append to row
  for (let j=0; j<(calcButtons[i].length); j++){
    // console.log(`calcButtons.length[i]-1 ... (${calcButtons[i].length-1})`)
    let newButton = document.createElement('button');
    // console.log(`calcButtons[${i}][${j}] ... (${calcButtons[i][j]})`)
    newButton.textContent = `${calcButtons[i][j]}`;
    // console.log(`.. > newButton.textContent ... ${newButton.textContent}`)
    newButton.setAttribute('id', `r${i}-b${j}`);
    newButton.classList.add('button');
    newButton.setAttribute('onclick', `submitButtonValue(${newButton.textContent})`)
    // console.log(`  (${i}-${j})`)
    newRow.appendChild(newButton);
  }

  //Third part: put each row in the iteration into the button-field div

  buttonField.appendChild(newRow);

}

// Need to put it all together...
// ... take button press ...
// ... ... if button press is a number, append button press to currentVisibleNumber
// ... ... if button press is a symbol, ...
// ... ... ... currentVisibleEquation = "actualCurrentCalc " symbol " currentVisibleNumber = ""
// ... ... ... actualCurrentCalc, currentVisibleNumber = actualyDoThis(actualCurrentCalc " symbol " currentVisibleNumber 
// ... ... if equation button is pressed ...
// ... ... ... currentVisibleEquation = "actualCurrentCalc " symbol " currentVisibleNumber = ""
// ... ... ... currentVisibleNumber = actualyDoThis(actualCurrentCalc " symbol " currentVisibleNumber 





let currentVisibleEquation=document.querySelector('#current-equation');
currentVisibleEquation.textContent = 'test + test = ';


let currentVisibleNumber=document.querySelector('#current-input');

let actualCurrentCalc="";
let history = [];

// if button is pressed, it shows up on the currentVisibleNumber
function buttonPress(x){
  let grab
}

// ==== BELOW ARE FAILURES ====
// //function to spawn a row

// function spawnRow(row) {
//   let `row-${row}`= document.createElement('div');
//   `row-${row}`.setAttribute('id',`row-${row}`);
//   // buttonField.appendChild(`row-${row}`);
//   console.log(`row-${row}`);

// }

// spawnRow(buttons[0]);

// // function to spawn a button

// function spawnButton(row,button){
//   let `button-${row}-${button}` = document.createElement('button'); 
//   `button-${row}-${button}`.textContent = arr[row][button];
//   `button-${row}-${button}`.setAttribute('id',`button-${row}-${button}`);
//   `button-${row}-${button}`.setAttribute('onclick', 'console.log(`button-${row}-${button}`.textContent)');
//   `row-${row}`.appendChild(`button-${row}-${button}`);
// }


// // test model for button creation and append to row, then append row to div container #button-field
// let buttonModel = document.createElement('button');
// buttonModel.textContent = ".test";
// buttonModel.setAttribute('id','period');
// buttonModel.setAttribute('onclick', 'console.log(buttonModel.textContent)');


// rowModel.appendChild(buttonModel);

// buttonField.appendChild(rowModel);

// function createAButton(item[row][button]){
//   let `${item}[${row}][${button}]` = 
  
// }

// // Generate buttons
// for (let row in keys) {
//   spawnRow(row);
//   for (let button in row){
//     spawnButton(row,button);

//   }

// }