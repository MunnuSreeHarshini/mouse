var headtwo=document.getElementById("two");
var headthree=document.getElementById("three");
var headfour=document.getElementById("four");

headtwo.addEventListener("mouseover",function()
{
  headtwo.style.color="skyblue";
  headtwo.textContent="hello munnu";
});
headtwo.addEventListener("mouseout",function()
{
  headtwo.style.color="yellow";
  headtwo.textContent="hey hariii";
});

headthree.addEventListener("click",function()
{
  headthree.style.color="blue";
  headthree.textContent="clickme........";
});

headfour.addEventListener("dblclick",function()
{
  headfour.style.color="red";
  headfour.textContent="hello world ";
});
