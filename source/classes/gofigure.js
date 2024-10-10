
import { GoFigureOptions } from "../../gofigureoptions";
import { attr, box, defs, niceMax, scale, sym, useEl, vector } from "../functions";
export class GoFigure {
    constructor(
        arr,
        myX = 0,
        myY = 0,
        width = 100,
        height = 100,
        step = 10,
        padding = 0.75,
    ) {
        this.viewBox = [myX, myY, width, height]
        this.width = width;
        this.height = height;
        this.data = arr.map((x) => parseFloat(x));
        this.x = myX;
        this.y = myY;
        this.minX = 0
        this.maxX = 100
        this.minY = 0
        this.maxY = niceMax(...arr, step);

        this.paddingScale = padding

    }

}
export class GoFigureBar extends GoFigure {
    constructor(
        arr,
        options = [["LightSkyBlue", "LightSalmon", "LightGreen"], "", 0, "preset"],
        myX = 0,
        myY = 0,
        width = 100,
        height = 100,
        step = 10,
        padding = 0.75,
        

    ) {
        super(
            arr,
            myX,
            myY,
            width,
            height,
            step,
            padding
        )
        this.options = new GoFigureOptions(...options)
        this.barHeights = this.data.map((x) => Number(x / this.maxY) * this.height)
        this.barWidths = this.data.map(() => this.width / arr.length)
        this.padScale = scale(padding);
        this.innerPad = this.viewBox.map((value, index)=>{
            let whiteSpace = 1 - padding / 2;
            let xPad = whiteSpace * this.width;
            let yPad = whiteSpace * this.height;
            var result
            switch(index){
                case (index === 0): result =  value + xPad; break;
                case (index === 1): result =  value + yPad; break;
                case (index === 2): result =  value - xPad; break;
                case (index === 3): result =  value - yPad; break;
                default: return; 
            }
            return result;
        })
    }
    yLines(){
        for (let s = this.step; s <= this.maxY; s + this.step) {
            let lines = [];
            lines.push(s);
            return lines;
        }
    }
    createInsetBox(svg = vector) {
        const myInsetBox = box();
        attr(myInsetBox, [
            ["x", this.innerPad[0]],
            ["y", this.innerPad[1]],
            ["width", this.innerPad[2]],
            ["height", this.innerPad[3]],
            
        ])
        const mySymbol = sym(myInsetBox)
        attr(mySymbol, [
            ["id", "symbol_inset_box"],
            ["viewBox", this.innerPad.join(' ')],
            
        ])
        const mySymbolInstance = useEl("symbol_inset_box")
        attr(mySymbolInstance, [
            ["fill", this.options.colorMode === 'dark' ? "#303030" : "whitesmoke"]
        ])
        vector.appendChild(mySymbol);
        vector.appendChild(mySymbolInstance);

    }

}
export class GoFigureScatter extends GoFigure {
    constructor(
        arr,
        myX = 0,
        myY = 0,
        width = 100,
        height = 100,
        step = 10,
        padding = 0.75,
    ) {
        super(
            arr,
            myX,
            myY,
            width,
            height,
            step,
            padding
        )
    }

}