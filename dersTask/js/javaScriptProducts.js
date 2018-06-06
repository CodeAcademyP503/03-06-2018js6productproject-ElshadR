


let people = JSON.parse(localStorage.people);
function logout() {
    if (localStorage.User != null) {
        delete localStorage.User;
        location.href = "login.html";
    }
}

//object
function Product(name, model, price, color) {
    this._name = name;
    this._model = model;
    this._price = price;
    this._color = color;
    return this;
}



//massiv
let Products = [];

//localStorage to Products 
(function () {
    let k
    if (localStorage.getItem("products") != null) {
        k = JSON.parse(localStorage.products);
        for (let a of k) {
            let name;
            let model;
            let price;
            let color;
            for (let b in a) {
                if (b == "_name") {
                    name = a[b];
                }
                if (b == "_model") {
                    model = a[b];
                }
                if (b == "_price") {
                    price = a[b];
                }
                if (b == "_color") {
                    color = a[b];
                }
            }
            let newProduct = new Product(name, model, price, color)
            Products.push(newProduct);
        }
    }
    else{
        let newProduct=new Product("samsung","A3 2017",500,"white");
        let newProduct1=new Product("samsung","A3 2018",600,"black");
        let newProduct2=new Product("samsung","A7 2018",1000,"green");
        Products.push(newProduct);
        Products.push(newProduct1);
        Products.push(newProduct2);
    }
})();
//create products
(function () {

    for (let k of Products) {
        let _elementDiv = document.createElement("div");
        _elementDiv.id = "secoundBox";
        secound.appendChild(_elementDiv);

        let _elementP1 = document.createElement("p");
        _elementP1.innerText = k._name;
        _elementDiv.appendChild(_elementP1);

        let _elementP2 = document.createElement("p");
        _elementP2.innerText = k._model;
        _elementDiv.appendChild(_elementP2);

        let _elementP3 = document.createElement("p");
        _elementP3.innerText = k._price;
        _elementDiv.appendChild(_elementP3);

        let _elementP4 = document.createElement("div");
        _elementP4.style.background = k._color;
        _elementDiv.appendChild(_elementP4);
    }




})();

// to third page and massiv Products add localStorag.products
function changePage() {
    localStorage.products = JSON.stringify(Products)
    location.href = "sellProduct.html"
}