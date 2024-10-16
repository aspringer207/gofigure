import { vector } from "../functions/vector.js";
import { niceMax } from "../functions/niceMax.js";
import { line } from "../functions/line.js";
import { box } from "../box.js";
import { attr } from "../functions/attr.js";
import { GoFigureOptions } from "./GoFigureOptions.js";

export class GoFigure {

    padding = 0.75;
    myX = 0;
    myY = 0;
    viewportWidth = 100;
    viewportHeight = 100;
    viewBox = [0, 0, 100, 100];
    minX = 0;
    maxX = 100;
    minY = 0;
    constructor(
        arr,
        options = [["LightSkyBlue", "LightSalmon", "LightGreen"], "", 0, "preset"],
        step = 10
    ) {
        const ops = GoFigureOptions(...options);
        this.options = ops;
        this.colors = ops.colorSeries(arr);
        this.labels = ops.labelSeries(arr);
        this.data = arr.map((x) => parseFloat(x));
        this.maxY = niceMax(...arr, step);
        this.barHeights = this.data.map((x) => Number(x / this.maxY) * this.height);
        this.barWidth = this.width / arr.length;
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
        const myInsetBox = box();
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
            let currentBar = box();
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
