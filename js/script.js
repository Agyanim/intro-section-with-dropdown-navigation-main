const featureList = document.getElementById("features");
const company = document.getElementById("company");
const subList1 = document.querySelector(".sub-list-1");
const subList2 = document.querySelector(".sub-list-2");


const displayFeatures =()=>{
    featureList.addEventListener("click",()=>{
        subList1.classList.toggle("toggle-1");
        subList2.classList.remove("toggle-2");
    })
}
const displayCompany=()=>{
    company.addEventListener("click",()=>{
        subList2.classList.toggle("toggle-2")
        subList1.classList.remove("toggle-1");
    })
}
// displayFeatures();
// displayCompany();