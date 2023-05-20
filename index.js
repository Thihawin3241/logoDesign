const searchIcon = document.querySelector(".search")
const closeIcon = document.querySelector(".closeIcon")
const hideDiv = document.querySelector(".hideDiv")
searchIcon.addEventListener("click",()=> {
    hideDiv.classList.add("clock")
})
closeIcon.addEventListener("click",()=> {
    // hideDiv.classList.add("love")
    hideDiv.classList.remove("clock")
})