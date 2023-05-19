export class Right {
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

        this.div.style.borderTop = (this.width / 2) + 'px';
        this.div.style.borderTopColor = 'transparent';
        this.div.style.borderTopStyle = 'solid';

        this.div.style.borderLeft = this.height + 'px';
        this.div.style.borderLeftColor = this.color;
        this.div.style.borderLeftStyle = 'solid';


        this.div.style.borderBottom = (this.width / 2) + 'px';
        this.div.style.borderBottomColor = 'transparent';
        this.div.style.borderBottomStyle = 'solid';
    }
}