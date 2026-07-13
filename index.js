const btnClick = document.querySelector(".btn");
const inpuEl = document.getElementById("inputBox");
const copyIcon = document.querySelector(".fa-copy ");
const alertContainer = document.querySelector(".alert-container ");

btnClick.addEventListener("click", () => {
  createPassword();
})

copyIcon.addEventListener("click", () => {
  SelecText();
  if(inpuEl.value){
 alertContainer.classList.remove("active");
 setTimeout(() => {
  alertContainer.classList.add("active");
 }, 2000)

  }
})
function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passLentgh = 14;
    let password = "";
    for(i=0; i<passLentgh; i++){
      const randomNum = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNum, randomNum+1)
    }
    inpuEl.value = password;
    alertContainer.innerText =
     password + " Copied!";
}
function SelecText() {
  inpuEl.select();
  inpuEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inpuEl.value)
}