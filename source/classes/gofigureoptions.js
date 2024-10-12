import { optionMap } from "../functions/optionMap";


export class GoFigureOptions {
    constructor(
        colors = ["LightSkyBlue", "LightSalmon", "LightGreen"],
        labels = "",
        colorMode = 0,
        str = `preset_${Date.now()}`
    ) {
        this.colorMode = colorMode > 0 ? "dark" : "light";
        this.colors = colors;
        this.labels = labels;
        this.name = str;

    }

    colorSeries(arr) {
        return optionMap(arr, this.colors);
    }
    labelSeries(arr) {
        return optionMap(arr, this.labels);
    }
}
