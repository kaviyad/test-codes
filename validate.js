function validate() {

    
    var password = document.getElementById("pass").value;
    var confirm_password = document.getElementById("rp").value;
    if (password != confirm_password) {
        alert("password doesnt match");
    }
    else {
        alert("password match");
    }
}
