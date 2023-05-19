export class Trapezoid {
    constructor(parent, pwidth, pheight, pcolor) {
        this.parent = parent;
        this.width = pwidth;
        this.height = pheight;
        this.color = pcolor;
        this.div = document.createElement('div');
        parent.appendChild(this.div);

        var half = this.width / 2;

        //  Styles
        this.div.style.width = this.width + 'px';
        this.div.style.height = '0px';

        this.div.style.borderBottom = this.width + 'px';
        this.div.style.borderBottomStyle = 'solid';
        this.div.style.borderBottomColor = this.color;

        this.div.style.borderLeft = half + 'px';
        this.div.style.borderLeftStyle = 'solid';
        this.div.style.borderLeftColor = 'transparent';

        this.div.style.borderRight = half + 'px';
        this.div.style.borderRightStyle = 'solid';
        this.div.style.borderRightColor = 'transparent';
    }
}