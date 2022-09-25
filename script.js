let buttons = document.querySelectorAll("button")
let vstup = document.querySelector("#field")


buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.add("delete")
    btn.style.display="none"
    btn.parentElement.addEventListener("animationend", ()=> {
      btn.parentElement.remove()
    })
  })
})

let add = document.querySelector("#add")

add.addEventListener("click", () => {
  if (vstup.value != ""){
    
  
    let newp = document.createElement("p")
    let newb = document.createElement("button")
    newb.innerHTML = "delete"
    newp.innerHTML = vstup.value
    vstup.value = ""
    newp.appendChild(newb)
    document.querySelector("body").appendChild(newp)
    buttons = document.querySelectorAll("button")
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        btn.parentElement.classList.add("delete")
        btn.style.display="none"
        btn.parentElement.addEventListener("animationend",           ()=> {
          btn.parentElement.remove()
          })
        })
      })
    }
  })

