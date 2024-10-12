import attr from "../functions/attr";
import line from "../functions/line";
import niceMax from "../functions/niceMax";
import rect from "../functions/rect";
import vector from "../functions/vector";


export class CustomGoFigure {

    constructor(
        arr,
        step = 10,
        padding = 0.75,
        viewBox = [0, 0, 100, 100],
        xAxis = [0, 100],
        yAxis = [0, 100],
        step = 10
    ) {
        this.viewBox = viewBox;
        this.viewportStartX = viewBox[0];
        this.viewPortStartY = viewBox[1];
        this.viewportWidth = viewBox[2];
        this.viewportHeight = viewBox[3];
        this.data = arr.map((x) => parseFloat(x));
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        this.maxX = 100;
        this.minY = 0;
        this.maxY = niceMax(...arr, step);
        this.barHeights = this.data.map((x) => Number(x / this.maxY) * this.height);
        this.barWidth = this.width / arr.length;

        this.paddingScale = padding;

    }
    yLines(svg = document.getElementById("vector")) {
        let lines = [];
        for (let s = this.step; s <= this.maxY; s + this.step) {

            lines.push(s);
        }
        lines.forEach((val) => {
            let l = line();
            attr(l,
                ["x1", 0],
                ["x2", 100],
                ["y1", val],
                ["y2", val],
                ["stroke", this.data.options.colorMode === "dark" ? "silver" : "#505050"]
            );
            svg.appendChild(l);
        });
    }
    createVector() {
        const svg = vector();
        attr(svg, [
            ["viewBox", this.viewBox],
            ["id", "vector"]
        ]);
        return svg;
    }
    createInsetBox(svg = document.getElementById('vector')) {
        const myInsetBox = rect();
        attr(myInsetBox, [
            ["x", this.innerPad[0]],
            ["y", this.innerPad[1]],
            ["width", this.innerPad[2]],
            ["height", this.innerPad[3]],
            ["fill", this.options.colorMode === 'dark' ? "#303030" : "whitesmoke"]
        ]);
        svg.appendChild(myInsetBox);

    }
    createBars(svg = document.getElementById('vector')) {
        for (let idx in this.data) {
            let currentBar = rect();
            attr(currentBar,
                [
                    ["transform-origin", `center`],
                    ["transform", `translate(${this.barWidth * idx})`],
                    ["height", this.barHeights[idx]],
                    ["width", this.barWidth],
                    ["fill", this.colors],
                ]
            );
        }
    }

}
