// to ferst page
localStorage.page = "FerstPageLogin";

// localStorage people parse 
let People
if (localStorage.people != null) {
    People = JSON.parse(localStorage.people);
}
// function found id
function $(id) {
    return document.getElementById(id);
}

// search user
let user;
let found = false;
function search() {
    for (let person in People) {
        if (($('email_login').value == People[person]["email"]) && ($('password_login').value == People[person]["password"])) {
            user = People[person];
            found = true;
        }
    }
    if (found) {
        localStorage.User = JSON.stringify(user);
        location.href = "products.html";
    }
    else {
        alert("bele bir istifadeci yoxdur");
    }
}

// login password show and or
let showLogin = true;
function showPasswordLogin() {
    if (showLogin) {
        document.getElementById("password_login").type = "text";
        document.getElementById("password3").innerText = "hide";
        showLogin = false;
    }
    else {
        document.getElementById("password_login").type = "password";
        document.getElementById("password3").innerText = "show";
        showLogin = true;
    }
}

// in registration page 
function registration() {
    delete localStorage.User;
    location.href = "registration.html";
}
location.href = "login.html?#";