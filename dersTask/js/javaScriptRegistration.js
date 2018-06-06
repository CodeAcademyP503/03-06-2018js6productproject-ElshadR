// create massiv
let People = [];
location.href = "registration.html?#";

// Person create object
class Login {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get Email() {
        return this.email;
    }
    set Email(email) {
        this.email = email;
    }
    get Password() {
        return this.email;
    }
    set Password(password) {
        this.password = password;
    }
}
class Person extends Login {
    constructor(name, email, password) {
        super(email, password);
        this.name = name;
    }
    get Name() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }
}

// localStorage to People massiv
(function () {
    if (localStorage.length != 0) {

        if (localStorage.people != null) {
            let lsPeople = JSON.parse(localStorage.people);
            for (let k of lsPeople) {
                let lsName = null;
                let lsEmail = null;
                let lsPassword = null;
                for (let a in k) {
                    if (a == "name") {
                        lsName = k[a];
                    }
                    if (a == "email") {
                        lsEmail = k[a];
                    }
                    if (a == "password") {
                        lsPassword = k[a];
                    }
                }
                let lsPerson = new Person(lsName, lsEmail, lsPassword);
                People.push(lsPerson);
            }
        }

    }
})();

// to introduce the id
function $(id) {
    return document.getElementById(id);
}

// create user
function create() {
    let name = $('name').value;
    let email = $('email').value;
    let password = $('password').value;
    Name();
    Password();
    Email();

    if (Name() && Password() && Email()) {
        let newPerson = new Person(name, email, password);
        People.push(newPerson);
        localStorage.people = JSON.stringify(People);
        localStorage.User = JSON.stringify(newPerson);
        location.href = "products.html";
    }
    return false;

}

// whether the user is found or not
let user = null;
function search() {
    let email_login = $('email_login').value;
    let password_login = $('password_login').value;
    let yoxlama = false;
    for (let k of People) {

        if (k.email == email_login && k.password == password_login) {
            yoxlama = true;
            user = k;
        }

    }
    if (yoxlama) {
        localStorage.User = JSON.stringify(user);
        localStorage.people = JSON.stringify(People);
        location.href = "products.html";
    }
    else {
        alert("tapilmadi")
    }
}

// return to the first place after passing through the rigstratch
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.User != null) {
        document.write("Siz artiq registraciyadan kecmisiniz");
    }
})

// Password show or hide
let show = true;
function showPassword() {
    if (show) {
        document.getElementById("password").type = "text";
        document.getElementById("password1").innerText = "hide";
        show = false;
    }
    else {
        document.getElementById("password").type = "password";
        document.getElementById("password1").innerText = "show";
        show = true;
    }
}
let showRew = true;
function showPasswordRew() {
    if (showRew) {
        document.getElementById("passwordrew").type = "text";
        document.getElementById("password2").innerText = "hide";
        showRew = false;
    }
    else {
        document.getElementById("passwordrew").type = "password";
        document.getElementById("password2").innerText = "show";
        showRew = true;
    }
}


// localStorage clear
function clearLStorege() {
    localStorage.clear();
    People = [];
}
function changePage(page) {
    location.href = page;
}


function Name() {
    if ($('name').value.length > 2) {
        $('name').style.border = "2px solid blue"
        return true;
    }
    else {
        $('name').style.border = "2px solid red"
        return false;
    }
}
function Email() {
    let indexOfAt = $('email').value.indexOf('@');
    if ($('email').value.indexOf('@') && (indexOfAt < $('email').value.indexOf('.', indexOfAt))) {

        if(People.length>0){
            for (let k in People) {
                if ($('email').value != People[k].email) {
                    $('email').style.border = "2px solid blue"
                    return true;
                }
            }
        }
        else{
            return true;
        }
    }
    return false;


}
function Password() {
    if ($('password').value == $('passwordrew').value) {
        $('password').style.border = "2px solid blue"
        $('passwordrew').style.border = "2px solid blue"
        return true;
    }
    else {
        $('passwordrew').style.border = "2px solid red"
        return false;
    }
}