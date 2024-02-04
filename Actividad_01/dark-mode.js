var contenido = document.getElementsByTagName("body")[0]
var darkMode = document.getElementById("dark-mode")

darkMode.addEventListener("click", function(){
  darkMode.classList.toggle("active")
  contenido.classList.toggle("night")
})