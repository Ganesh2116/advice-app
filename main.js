const Btn = document.querySelector("#btn")



const fetchAdvice = async() => {
  const rec = await fetch("https://api.adviceslip.com/advice")
  const data = await rec.json()
  
  document.querySelector("#title").textContent = `Advice #${data.slip.id}`
  document.querySelector("#text").textContent = `${data.slip.advice}`
}

fetchAdvice();

Btn.addEventListener('click', () =>{
  fetchAdvice()
})