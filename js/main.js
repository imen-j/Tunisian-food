const year = document.getElementById("year")

const thisYear = new Date().getFullYear()

year.setAttribute("datetime", thisYear)

year.textContent = thisYear

//const toTop=document.querySelector(".to-top");

//window.addEventListener("scroll",()=>)
//{
//  if(window.pageXOffset<100) {

 //      toTop.classList.add("active");
 // }else {

     //  toTop.classList.remove("active");
    //}
//}
