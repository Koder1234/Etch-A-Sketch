const container = document.querySelector("#container");
let squares 
for (let i=0;i<16*16;i++)
{
    squares=document.createElement("div");
    squares.setAttribute("class","placeholder")
    squares.textContent="xd";

    container.appendChild(squares);
}
console.log(squares);
container.appendChild(squares);