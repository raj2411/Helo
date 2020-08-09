function validate() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;
    if (username == "admin" && password == "admin") {
        // alert("Login successfully");
        location.replace("https://raj2411.github.io/Online-Video-Streaming/User%20Home.html");
       // window.open("C:\Users\rajp2\Desktop\Online video sharing\User Home.html",'_self');
        //return false;
    }
    else {
        alert("Wrong Password");
    }
}