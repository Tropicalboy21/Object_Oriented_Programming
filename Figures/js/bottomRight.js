export class BottomRight {
    constructor(parent, pwidth, pheight, pcolor) {
        this.parent = parent;
        this.width = pwidth;
        this.height = pheight;
        this.color = pcolor;
        this.div = document.createElement('div');
        parent.appendChild(this.div);

        // Styles
        this.div.style.width = '0px';
        this.div.style.height = '0px';

        this.div.style.borderBottom = this.height + 'px';
        this.div.style.borderBottomColor = this.color;
        this.div.style.borderBottomStyle = 'solid';

        this.div.style.borderLeft = this.width + 'px';
        this.div.style.borderLeftColor = 'transparent';
        this.div.style.borderLeftStyle = 'solid';
    }
}