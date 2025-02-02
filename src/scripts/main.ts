import { Board } from "./classes/Board.js";
import { Square } from "./classes/Square.js";

const canvas = document.querySelector('#background') as HTMLCanvasElement;
const background = new Board(canvas);

let squaresOnBoard: Square[] = [];

// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем канвас

//     // Устанавливаем цвет на основе значения hue
//     ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
//     ctx.fillRect(x, y, squareSize, squareSize); // Рисуем квадрат

//     hue = (hue + 1) % 360; // Увеличиваем hue и сбрасываем его после 360

//     requestAnimationFrame(animate); // Запрашиваем следующий кадр анимации
// }

// animate(); // Запускаем анимацию

const resizeBackground = () => {
    background.canvas.width = window.innerWidth;
    background.canvas.height = window.innerHeight;

    background.updateBoardSize();

    squaresOnBoard = [];

    const squareSize = 30;

    const rows = Math.ceil(background.height / squareSize);
    const verticalGapSummary =background.width % squareSize;
    const verticalGap = (verticalGapSummary / rows) / 2;

    const columns = Math.ceil(background.width / squareSize);
    const horizontalGapSummary = background.height % squareSize;
    const horizontalGap = (horizontalGapSummary / rows) / 2;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            const x = col * (squareSize + 5);
            const y = row * (squareSize + 5);
            const square = new Square(x, y, squareSize, verticalGap, horizontalGap);
            squaresOnBoard.push(square);
            background.drawFillSquare(square)
        }
    }
}

window.addEventListener('resize', resizeBackground);
resizeBackground();