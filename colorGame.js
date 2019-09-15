
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
init();


function init(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            //**** REPLACED BY BEFORE LINE */
            // if(this.textContent === "Easy"){
            //     numSquares = 3;
            // }else{
            //     numSquares = 6;
            // }
             
            //Figure out how many color to show
            //Pick new colors
            //Pick a new picked colors
            //Update page to reflect changes      
            reset();
        });
    }
    for (var i = 0; i < squares.length; i++){    
        //add click listener to squares
        squares[i].addEventListener("click", function(){
            //grab colro of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
    reset();
}



function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color form array
    pickedColor = pickColor();
    //Change color display
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    message.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// ***** ****** REPLACED BY MODE BUTTONS
// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }else{
//             squares[i].style.display = "none";
//         }
//     }
// });
// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];        
//         squares[i].style.display = "block";
//             }
// });

//  ******    ******   REPLACED BY RESET FUNCTION
resetButton.addEventListener("click", function(){
    reset();
    // //Generate all new colors
    // colors = generateRandomColors(numSquares);
    // //pick a new random color form array
    // pickedColor = pickColor();
    // //Change color display
    // colorDisplay.textContent = pickedColor;

    // this.textContent = "New Colors";

    // message.textContent = "";
    // //change colors of squares
    // for(var i = 0; i < squares.length; i++){
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor = "steelblue";
});



colorDisplay.textContent = pickedColor;




function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color
    }
}


function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    //make array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that aray
    return arr;
}


function randomColor(){
    //PICK A "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //PICK A "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //PICK A "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

    
}