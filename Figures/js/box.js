export class Box {
    constructor(parent, pwidth, pheight, pcolor) {
        this.parent = parent;
        this.width = pwidth;
        this.height = pheight;
        this.color = pcolor;
        this.div = document.createElement('div');
        parent.appendChild(this.div);

        //Set div style
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.backgroundColor = this.color;
        console.dir(this.div.style);
    }
}