export class ProductView {
    constructor(parent, product, callback, callback2) {

        this.parent = parent;
        this.product = product;
        this.callback = callback;
        this.callback2 = callback2;

        var container = document.createElement('div');
        container.className = 'product_container';
        container.id = "productContainer";
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

        var buttonsContainer = document.createElement('div');
        container.appendChild(buttonsContainer);
        buttonsContainer.className = "buttons_container";

        var addButton = document.createElement('div');
        addButton.className = 'product_add_button';
        addButton.innerHTML = 'ADD';
        buttonsContainer.appendChild(addButton);
        addButton.onclick = this.onAddButton.bind(this);

        var removebutton = document.createElement('div');
        removebutton.className = 'product_remove_button';
        removebutton.innerHTML = 'REMOVE';
        buttonsContainer.appendChild(removebutton);
        removebutton.onclick = this.onRemoveButton.bind(this);
    }

    onAddButton(event) {
        this.callback(this.product);
    }

    onRemoveButton(event) {
        this.callback2(this.product);
    }

}
