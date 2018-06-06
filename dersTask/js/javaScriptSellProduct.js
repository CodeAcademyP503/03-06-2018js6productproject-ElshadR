// massiv 
let sellProducts = []

// massiv sellProducts add localStorage.products
if (localStorage.getItem("products") != null) {
    let k = JSON.parse(localStorage.products);
    sellProducts = k;
}

// create Product object
class Product {
    constructor(name, model, price, color) {
        this._name = name;
        this._model = model;
        this._price = price;
        this._color = color;
    }
    get Name() {
        return this._name
    }
    set Name(n) {
        this._name = n;
    }
    get Model() {
        return this._model
    }
    set Model(m) {
        this._model = m;
    }
    get Price() {
        return this._price
    }
    set Price(p) {
        this._price = p;
    }
    get Color() {
        return this._color
    }
    set Color(c) {
        this._color = c;
    }

}

// to introduce the id
function $(id) {
    return document.getElementById(id);
}

// newProduct add sellProducts and localStorage.products add sellProducts
function sellProduct() {
    let nameInput = $('name').value;
    let modelInput = $('model').value;
    let priceInput = parseInt($('price').value);
    let colorInput = $('color').value;

    if (priceInput > 50) {
        let newProduct = new Product(nameInput, modelInput, priceInput, colorInput);
        sellProducts.push(newProduct)
        localStorage.products = JSON.stringify(sellProducts)
        location.href = "products.html";
    }

}
