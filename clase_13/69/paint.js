class Paint {
    constructor() {
        this.rectangleMap = new Array(1280);
        this.iniMap(this.rectangleMap);
    }

    iniMap() {
        for (let i = 0; i < this.rectangleMap.length; i++) {
            this.rectangleMap[i] = new Array(1280);
        }
    }

    mapToArray(map) {
        const array = [];
        for (let x = 0; x < map.length; x++) {
            for (let y = 0; y < map[x].length; y++) {
                const r = map[x][y];
                if (r != null) {
                    array.push(r);
                }
            }
        }
        return array;
    }

    shape(_x, _y, _w, _h, _r, _g, _b) {
        return {x: _x, y: _y, w: _w, h: _h, r: _r, g: _g, b: _b}
    }
}

module.exports = new Paint();