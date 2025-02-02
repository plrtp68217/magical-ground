import { Board } from "./classes/Board.js";
import { Square } from "./classes/Square.js";

const canvas = document.querySelector('#background') as HTMLCanvasElement;
const background = new Board(canvas);

let squaresOnBoard: Square[] = [];
let lastTime: number = 0;
const frameInterval = 50;


requestAnimationFrame(animateSquares);

function animateSquares(timestamp: number) {
    if (!lastTime) {
        lastTime = timestamp;
    }

    const elapsed = timestamp - lastTime;

    if (elapsed > frameInterval) {
        background.clearBoard()

        for (let square of squaresOnBoard) {
            if (square.isAnimate) {
                square.changeHsl();
            }
            else {
                square.isAnimate = Math.random() <= 0.1 ? true : false;
            }
            background.drawFillSquare(square);
        }
        lastTime = timestamp;
    }
    requestAnimationFrame(animateSquares);
}


const resizeBackground = () => {
    background.canvas.width = window.innerWidth;
    background.canvas.height = window.innerHeight;

    background.updateBoardSize();

    squaresOnBoard = [];

    const squareSize = 30;

    const rows = Math.ceil(background.height / squareSize);
    const columns = Math.ceil(background.width / squareSize);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            const x = col * (squareSize + 5);
            const y = row * (squareSize + 5);
            const square = new Square(x, y, squareSize);
            squaresOnBoard.push(square);
        }
    }
}

window.addEventListener('resize', resizeBackground);
resizeBackground();