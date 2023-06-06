const container = document.querySelector("#container");
const clicker = document.querySelector("button");
const containerStyle = getComputedStyle(container);
const containerWidth=containerStyle.width;
const number= containerWidth.split("p")
let squares 


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
    for (let i=0;i<amount*amount;i++)
    {
        squares=document.createElement("div");
        squares.setAttribute("class","placeholder");
        

        squares.textContent="xd";
        container.appendChild(squares);
    } 
 
    document.querySelectorAll(".placeholder").forEach(element => {
        element.style.width=`${(number[0]-3*amount-1)/amount}px`;
        element.style.height=`${(number[0]-3*amount-1)/amount}px`;
        
    });


}

// zmienna.addEventListener("hover",function(){
//     console.log(zmienna);


// })

generateSquares(16);

//let zmienna=document.getElementsByClassName(".placeholder");
console.log(squares)
//console.log(`${number[0]/20}`);


