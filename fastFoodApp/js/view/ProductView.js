export class ProductView {
    constructor(parent, product, callback) {

        this.parent = parent;
        this.product = product;
        this.callback = callback;

        var container = document.createElement('div');
        container.className = 'product_container';
        this.parent.appendChild(container);

        var title = document.createElement('p');
        title.className = 'product_title';
        title.innerHTML = this.product.name;
        container.appendChild(title);

        var price = document.createElement('p');
        price.className = 'product_price';
        price.innerHTML = `$${this.product.price}`;
        container.appendChild(price);

        var image = document.createElement('img');
        image.className = 'product_image';
        image.src = this.product.image;
        container.appendChild(image);

        var addButton = document.createElement('div');
        addButton.className = 'product_add_button';
        addButton.innerHTML = 'ADD';
        container.appendChild(addButton);
        addButton.onclick = this.onAddButton.bind(this);
    }

    onAddButton(event) {
        this.callback(this.product);
    }
}
