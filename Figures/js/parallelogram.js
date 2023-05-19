export class Parallelogram {
    constructor(parent, pwidth, pheight, pcolor) {
        this.parent = parent;
        this.width = pwidth;
        this.height = pheight;
        this.color = pcolor;
        this.div = document.createElement('div');
        parent.appendChild(this.div);

        // styles
        this.div.style.width = (this.width + 25) + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.transform = "skew(20deg)";
        this.div.style.marginLeft = "18px";
        this.div.style.backgroundColor = this.color;
    }

}