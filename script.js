const container = document.querySelector("#container");
const clicker = document.querySelector("button");
let squares 
console.log(clicker);


clicker.addEventListener("click",()=>{
    let squareAmount=prompt("How many squares do you want to generate",1);
    generateSquares(squareAmount);
})


function generateSquares(amount)
{
    remover=document.querySelectorAll(".placeholder")
    for(node of remover)
    {
    container.removeChild(document.querySelector(".placeholder"));
    }
    for (let i=0;i<amount;i++)
    {
        squares=document.createElement("div");
        squares.setAttribute("class","placeholder");
        squares.textContent="xd";
        container.appendChild(squares);
    } 
}

generateSquares(16*16);
console.log(document.querySelectorAll(".placeholder"));



//console.log(squares);
//container.appendChild(squares);