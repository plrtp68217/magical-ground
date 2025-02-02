export class Square {
    x: number;
    y: number;
    size: number;
    verticalGap: number;
    horizontalGap: number;
    color: string;
    colors: string[] = ['#a749eb', '#9e2fed', '#691da1', '#6006a1'];
    isAnimate: boolean;

    constructor(x: number, y: number, size: number, verticalGap: number, horizontalGap: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.verticalGap = verticalGap;
        this.horizontalGap = horizontalGap;
        this.color = this.getColor();
        this.isAnimate = Math.random() > 0.5 ? true : false;
    }

    getColor(): string {
        const colorsLen: number = this.colors.length;
        const colorIndex: number = Math.floor(Math.random() * colorsLen);
        const color: string = this.colors[colorIndex];
        return color;
    }
}