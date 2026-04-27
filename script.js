let signupLink = document.getElementById("signup");
let nameInput = document.getElementById("name");
let button = document.getElementById("login");
let message = document.getElementById("message");
let isSignup = false;


signupLink.onclick = function(e) {
    e.preventDefault();

    isSignup = !isSignup;

    if (isSignup) {
        nameInput.style.display = "block";
        button.innerText = "Sign Up";
        signupLink.innerText = "Log In";
    } else {
        nameInput.style.display = "none";
        button.innerText = "Log In";
        signupLink.innerText = "Sign Up";
    }
};


button.onclick = function() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (isSignup) {
        
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        window.location.href = "home.html";
        
    } else {
        
        let savedEmail = localStorage.getItem("email");
        let savedPassword = localStorage.getItem("password");

        if (email === savedEmail && password === savedPassword) {
             window.location.href = "home.html";
        } else {
            message.style.display="block";
            message.innerText="Wrong email or password!";
        }
    }
};