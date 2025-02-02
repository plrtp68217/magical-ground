import { Board } from "./classes/Board.js";
import { Square } from "./classes/Square.js";

const canvas = document.querySelector('#background') as HTMLCanvasElement;
const background = new Board(canvas);

let squaresOnBoard: Square[] = [];

const resizeBackground = () => {
    background.canvas.width = window.innerWidth;
    background.canvas.height = window.innerHeight;

    squaresOnBoard = [];

    const squareSize = 30;

    const rows = Math.ceil(background.canvas.height / squareSize);
    const verticalGapSummary =background.canvas.width % squareSize;
    const verticalGap = (verticalGapSummary / rows) / 2;

    const columns = Math.ceil(background.canvas.width / squareSize);
    const horizontalGapSummary = background.canvas.height % squareSize;
    const horizontalGap = (horizontalGapSummary / rows) / 2;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            const x = col * (squareSize + 5);
            const y = row * (squareSize + 5);
            const square = new Square(x, y, squareSize, verticalGap, horizontalGap)
            background.drawSquare(square)
        }
    }
}

window.addEventListener('resize', resizeBackground);
resizeBackground();