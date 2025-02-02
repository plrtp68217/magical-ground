"use strict";
const canvas = document.querySelector('#background');
const ctx = canvas.getContext('2d');
const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
