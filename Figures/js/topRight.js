export class TopRight {
    constructor(parent, pwidth, pheight, pcolor) {
        this.parent = parent;
        this.width = pwidth;
        this.pheight = pheight;
        this.color = pcolor;
        this.div = document.createElement('div');
        parent.appendChild(this.div);

        // Styles 
        this.div.style.width = '0px';
        this.div.style.height = '0px';

        this.div.style.borderTop = this.width + 'px';
        this.div.style.borderTopStyle = 'solid';
        this.div.style.borderTopColor = this.color;

        this.div.style.borderLeft = this.width + 'px';
        this.div.style.borderLeftStyle = 'solid';
        this.div.style.borderLeftColor = 'transparent';

    }
}