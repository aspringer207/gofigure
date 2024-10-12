import { GoFigureBar } from "../source/classes/gofigure";
import { GoFigureOptions } from "../source/classes/GoFigureOptions";

const chart = GoFigureBar(
    [
        41,
        26,
        85,
        56,
        39,
        46,
        5,
        77,
        14,
        90,
    ]
)
const chartOptions = GoFigureOptions(
    [
        "#f1948a", "#a3e4d7", "#bb8fce", "#f9e79f", "#85c1e9" 
    ], [
    [
        "41 mph",
        "26 mph",
        "85 mph",
        "56 mph",
        "39 mph",
        "46 mph",
        "5 mph",
        "77 mph",
        "14 mph",
        "90 mph",
    ]
])