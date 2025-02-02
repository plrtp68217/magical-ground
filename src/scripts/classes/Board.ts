import { Square } from "./Square";

export class Board {
    width: number;
    height: number;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d')!;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }

    drawSquare(square: Square): void {
        this.context.strokeStyle = square.color;
        this.context.lineWidth = 2;
        this.context.strokeRect(square.x, square.y, square.size, square.size);
    }
}