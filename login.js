// LOGIN
document.getElementById("Login").addEventListener('click', function (e){
    e.preventDefault()
    let number = parseInt(document.getElementById("number").value)
    let pin = parseInt(document.getElementById("pin").value)
    const mobileNumber = 1234;
    const pinNumber = 1234;
    if (mobileNumber === number && pinNumber === pin){
        window.location.href="./main.html"
    }else{
        alert("Wrong Number/Pin!⚠️")
    }
});
