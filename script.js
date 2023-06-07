const container = document.querySelector("#container");
const clicker = document.querySelector("button");
const containerStyle = getComputedStyle(container);
const containerWidth=containerStyle.width;
const number= containerWidth.split("p")// get the width of the container
let squares; 


clicker.addEventListener("click",()=>{
    let squareAmount=prompt("How many squares do you want to generate",1);
    while(squareAmount>100)
    {
        squareAmount=prompt("The number of must be lower then 100, plese input the number",1);
    }
    generateSquares(squareAmount);
})

function generateSquares(amount)
{
    
    remover=document.querySelectorAll(".placeholder")  //deletes all the squares for genereating new ones
    for(node of remover)
    {
    container.removeChild(document.querySelector(".placeholder"));
    }
    for (let i=0;i<amount*amount;i++)
    {
        squares=document.createElement("div");
        squares.setAttribute("class","placeholder");
        container.appendChild(squares);
    } 
    document.querySelectorAll(".placeholder").forEach(element => {
        element.style.width=`${(number[0]-3*amount-1)/amount}px`;
        element.style.height=`${(number[0]-3*amount-1)/amount}px`;
        
    });
   
    elements=document.querySelectorAll(".placeholder");
    let array=Array.from(elements);
    for(element of array)
    {
        element.addEventListener("mouseover",(element)=>
        {        
            element.target.classList.add("colorChange");            
        })
    }
}

generateSquares(16);









