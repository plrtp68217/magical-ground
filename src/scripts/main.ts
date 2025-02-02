import { Board } from "./classes/Board.js";
import { Square } from "./classes/Square.js";

const canvas = document.querySelector('#background') as HTMLCanvasElement;
const background = new Board(canvas)

const resizeBackground = () => {
    background.canvas.width = window.innerWidth;
    background.canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeBackground);
resizeBackground();