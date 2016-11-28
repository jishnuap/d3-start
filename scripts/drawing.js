///<reference path="../node_modules/d3/build/d3.js" />

class Map {
    constructor(height, width, parent) {
        this.height = height;
        this.width = width;
        this.parent = parent;
        this.path = d3.geoPath();
        this.svg = this.parent.append("svg").attr({ width: this.width, height: this.height });
    }
    
    draw() {
        
    }
    
}
