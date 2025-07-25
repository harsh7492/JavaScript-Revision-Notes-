function form() {
    var fn = document.querySelector("#fn").value;
    var gn = document.querySelector("input[name='gender']:checked");
    var e = document.querySelector("#email").value;
    var s = document.querySelectorAll("input[name='skill']:checked");
    var c = document.querySelector("#city").value;
    var sp = document.querySelector("#name");
    if (fn === "") {
        sp.innerHTML="Full name is required";
        return false;
    }
    if (!gn) {
        sp.innerHTML ="Please select a gender";
        return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e)) {
        sp.innerHTML = "Invalid email id";  
        return false;
    }
    if (s.length === 0) {
        sp.innerHTML ="Select at least one skills";
        return false;git 
    }

    if (c === "") {
        sp.innerHTML = "Select a City"; 
        return false;
    }

    return true;
}