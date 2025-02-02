import { Square } from "./Square";

export class Board {
    width: number;
    height: number;
    context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D, width: number, height: number) {
        this.context = context;
        this.width = width;
        this.height = height;
    }

    drawSquare(square: Square): void {
        this.context.strokeStyle = square.color;
        this.context.lineWidth = 2;
        this.context.strokeRect(square.x, square.y, square.size, square.size); // Рисуем квадрат
    }
}