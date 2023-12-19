const Home = document.querySelector(".home");

function checkHeight(){
  if (window.scrollY > 200) {
    Home.style.display = "flex"
  }else{
    Home.style.display = "none"
  }
}
console.log(checkHeight)

Home.addEventListener('click', () =>{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
    console.log(scrollTo)
})

window.addEventListener("scroll", () => {
  checkHeight()
  console.log("scrolling")
})