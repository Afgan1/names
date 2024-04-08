const output = document.getElementById("output")
const names = ["anugrah", "ainara", "erika", "febi", "nabila", "ray", "surya"]
const index = 0
output.textContent = "Hello World"


setInterval(()=>{
  output.textContent = names[index % names.length]
}, 750)
