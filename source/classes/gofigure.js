
import { GoFigureOptions } from "../../gofigureoptions";
import { attr, box, line, niceMax, scale, vector } from "../functions";
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
        const ops = new GoFigureOptions(...options)
        this.options = ops
        this.colors = ops.colorSeries(arr);
        this.labels = ops.labelSeries(arr);
        this.barHeights = this.data.map((x) => Number(x / this.maxY) * this.height)
        this.barWidth = this.width / arr.length 
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
    yLines(svg = document.getElementById("vector")){
        let lines = [];
        for (let s = this.step; s <= this.maxY; s + this.step) {
            
            lines.push(s);
        }
        lines.forEach((val)=>{
            let l = line()
            attr(l,
                ["x1", 0],
                ["x2", 100],
                ["y1", val],
                ["y2", val],
                ["stroke", this.data.options.colorMode === "dark" ? "silver" : "#505050"]
            );
            svg.appendChild(l)
        })
    }
    createVector(){
        const svg = vector()
        attr(svg, [
            ["viewBox", this.viewBox],
            ["id", "vector"]
        ])
        return svg;
    }
    createInsetBox(svg = document.getElementById('vector')) {
        const myInsetBox = box();
        attr(myInsetBox, [
            ["x", this.innerPad[0]],
            ["y", this.innerPad[1]],
            ["width", this.innerPad[2]],
            ["height", this.innerPad[3]],
            ["fill", this.options.colorMode === 'dark' ? "#303030" : "whitesmoke"]
            
        ])
        svg.appendChild(myInsetBox)

    }
    createBars(svg = document.getElementById('vector')){
        for (let idx in this.data){
            let currentBar = box()
        attr(currentBar,
            [
                ["transform-origin", `center`],
                ["transform", `translate(${this.barWidth * idx})`],
                ["height", this.barHeights[idx]],
                ["width", this.barWidth],
                ["fill", this.colors],


            ]
        )}
        


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