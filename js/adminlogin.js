function validate() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;
    if (username == "admin" && password == "admin") {
        alert("Login successfully");
        window.location = "../Admin Home.html";
        return false;
    }
    else {
        alert("Wrong Password");
    }
}