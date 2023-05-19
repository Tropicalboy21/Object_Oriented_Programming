// #triangle - up {
//     width: 0;
//     height: 0;
//     border - left: 50px solid transparent;
//     border - right: 50px solid transparent;
//     border - bottom: 100px solid red;
// }
export class Triangle {
    constructor(parent, pwidth, pheight, pcolor) {
        this.parent = parent;
        this.width = pwidth;
        this.height = pheight;
        this.color = pcolor;
        this.div = document.createElement('div');
        parent.appendChild(this.div);

        //Set div style
        this.div.style.width = '0px';
        this.div.style.height = '0px';

        this.div.style.borderBottom = this.height + 'px';
        this.div.style.borderBottomColor = this.color;
        this.div.style.borderBottomStyle = 'solid';

        this.div.style.borderLeft = (this.width / 2) + 'px';
        this.div.style.borderLeftColor = 'transparent';
        this.div.style.borderLeftStyle = 'solid';

        this.div.style.borderRight = (this.width / 2) + 'px';
        this.div.style.borderRightColor = 'transparent';
        this.div.style.borderRightStyle = 'solid';
    }
}