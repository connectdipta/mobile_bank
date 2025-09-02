transactionData = [];
// LOGOUT
document.getElementById("logOut").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "./index.html";
  });

// TOGGLE
// ADD MONEY
document.getElementById('1').addEventListener('click', function (){
  const forms = document.getElementsByClassName("form")
  const services = document.getElementsByClassName("service")
  for(const form of forms){
    form.style.display = "none"
  }
  for(const service of services){
    service.style.backgroundColor = "rgba(8,8,8,0.1)"
  }

  document.getElementById('one').style.display = "block";
  document.getElementById("1").style.backgroundColor = "#BFDBFE";
})

// CASHOUT
document.getElementById('2').addEventListener('click', function (){
  const forms = document.getElementsByClassName("form")
  const services = document.getElementsByClassName("service")
  for(const form of forms){
    form.style.display = "none"
  }
  for(const service of services){
    service.style.backgroundColor = "rgba(8,8,8,0.1)"
  }
  document.getElementById('two').style.display = "block";
  document.getElementById("2").style.backgroundColor = "#BFDBFE";
})
// TRANSFER BUTTON
document.getElementById('3').addEventListener('click', function (){
   const forms = document.getElementsByClassName("form")
   const services = document.getElementsByClassName("service")
   for(const form of forms){
    form.style.display = "none"
  }
  for(const service of services){
    service.style.backgroundColor = "rgba(8,8,8,0.1)"
  }
  document.getElementById('three').style.display = "block";
  document.getElementById("3").style.backgroundColor = "#BFDBFE";
})
// TRANSACTIONS
document.getElementById('4').addEventListener('click', function (){
   const forms = document.getElementsByClassName("form")
   const services = document.getElementsByClassName("service")
   for(const form of forms){
    form.style.display = "none"
  }
  for(const service of services){
    service.style.backgroundColor = "rgba(8,8,8,0.1)"
  }
  document.getElementById('four').style.display = "block";
  document.getElementById("4").style.backgroundColor = "#BFDBFE";

  // NOTIFICATIONS
  const container = document.getElementById("transactionContainer")
  for(const data of transactionData){
    const div = document.createElement("div")
    div.innerHTML = `
    <div class="flex justify-between items-center h-18 rounded-xl bg-white shadow-lg px-4 mb-3">
         <!-- Left -->
         <div class="flex items-center gap-3">
            <div class="p-3 rounded-full bg-[#0808081A]">
                <img src="./assets/wallet1.png" alt="" class="w-6 h-6" />
            </div>
            <div>
                <p class="font-extrabold text-base text-[#080808b3]">${data.name}</p>
                <p class="text-[#080808b3] text-xs">Today ${data.date}</p>
             </div>
         </div>
         <!-- Right-->
         <i class="fa-solid fa-ellipsis-vertical text-[#080808B3] text-lg"></i>
       </div>
    `
    container.appendChild(div)
  }
})

// ADD MONEY 
document.getElementById("addMoney").addEventListener('click', function (e){
    e.preventDefault()
    let accountNumber = parseInt(document.getElementById("account").value)
    let bankName = document.getElementById("bank").value
    let existMoney = parseInt(document.getElementById("exist").innerText)
    let addAmount = parseInt(document.getElementById("amount").value)
    let pin = parseInt(document.getElementById("pin").value)
    const pinNumber = 1234;

    if (!isNaN(accountNumber) && bankName !== "" && !isNaN(addAmount) && !isNaN(pin)){
        console.log(accountNumber, bankName, addAmount, pin);
        if (pinNumber === pin){
          let total = existMoney + addAmount;
          document.getElementById("exist").innerText = total;
          alert("Money Successfully Added to your Account! 👌")
        }else{
          alert("Wrong Pin!⚠️")
    }
    } else{
        alert("Fill the Form!⚠️")
    }
    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    }
    transactionData.push(data)
});

// WITHDRAW
document.getElementById("withDraw").addEventListener("click", function (e) {
  e.preventDefault();

  const accountInput = document.getElementById("withdrawAcNumber").value.trim();
  const amountInput = document.getElementById("withdrawAmount").value.trim();
  const pinInput = document.getElementById("withdrawPin").value.trim();

  const accountNumber = parseInt(accountInput);
  const withdrawMoney = parseInt(amountInput);
  const pin = parseInt(pinInput);
  const existMoney = parseInt(document.getElementById("exist").innerText);
  const pinNumber = 1234;

  if (
    accountInput !== "" &&
    amountInput !== "" &&
    pinInput !== "" &&
    !isNaN(accountNumber) &&
    !isNaN(withdrawMoney) &&
    !isNaN(pin)
  ) {
    if (pin === pinNumber) {
      if (withdrawMoney <= existMoney) {
        document.getElementById("exist").innerText = existMoney - withdrawMoney;
        alert("Money Successfully Withdrawn! 👌");
      } else {
        alert("Insufficient Balance! ⚠️");
      }
    } else {
      alert("Wrong Pin! ⚠️");
    }
  } else {
    alert("Fill the Form! ⚠️");
  }
  const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    }
    transactionData.push(data)
});

// TRANSFER MONEY
document.getElementById("transfer").addEventListener("click", function (e) {
  e.preventDefault();

  const accountInput = document.getElementById("transferAcNumber").value.trim();
  const amountInput = document.getElementById("transferAmount").value.trim();
  const pinInput = document.getElementById("transferPin").value.trim();

  const accountNumber = parseInt(accountInput);
  const transferAmount = parseInt(amountInput);
  const pin = parseInt(pinInput);
  const existMoney = parseInt(document.getElementById("exist").innerText);
  const pinNumber = 1234;

  if (
    accountInput !== "" &&
    amountInput !== "" &&
    pinInput !== "" &&
    !isNaN(accountNumber) &&
    !isNaN(transferAmount) &&
    !isNaN(pin)
  ) {
    if (pin === pinNumber) {
      if (transferAmount <= existMoney) {
        const newBalance = existMoney - transferAmount;
        document.getElementById("exist").innerText = newBalance;
        alert("Money Successfully Transferred! 🚀");
      } else {
        alert("Insufficient Balance! ⚠️");
      }
    } else {
      alert("Wrong Pin! ⚠️");
    }
  } else {
    alert("Fill the Form Properly! ⚠️");
  }
  const data = {
      name: "Send Money",
      date: new Date().toLocaleTimeString(),
    }
    transactionData.push(data)
});
// CLEAR
document.getElementById("clear").addEventListener("click", function(){
  transactionData = [];
   document.getElementById("transactionContainer").innerHTML = "";
})