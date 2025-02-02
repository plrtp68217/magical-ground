interface Hsl {
    hue: number;
    saturation: number;
    lightness: number;
}

export class Square {
    x: number;
    y: number;
    size: number;
    verticalGap: number;
    horizontalGap: number;
    colorShift: number = 30;
    colorDirection: -1 | 1 = -1;
    hsl: Hsl;
    hslList: Hsl[] = [
        {hue: 280, saturation: 100, lightness: 79},
        {hue: 280, saturation: 100, lightness: 73},
        {hue: 280, saturation: 100, lightness: 69},
        {hue: 280, saturation: 100, lightness: 63},
    ];
    isAnimate: boolean = Math.random() <= 0.2 ? true : false;

    constructor(x: number, y: number, size: number, verticalGap: number, horizontalGap: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.verticalGap = verticalGap;
        this.horizontalGap = horizontalGap;
        this.hsl = this.getHsl();
    }

    get color(): string {
        const color: string = `hsl(${this.hsl.hue}, ${this.hsl.saturation}%, ${this.hsl.lightness}%)`;
        return color;
    }

    changeColor() {
        this.hsl.saturation += this.colorDirection;
        this.hsl.lightness += this.colorDirection;

        if (this.hsl.saturation === 70) {
            this.colorDirection = 1;
        }
        else if (this.hsl.saturation === 100) {
            this.colorDirection = -1;
        }
    }

    getHsl() {
        const hslListLen: number = this.hslList.length;
        const hslIndex: number = Math.floor(Math.random() * hslListLen);
        const hsl = this.hslList[hslIndex];
        return hsl;
    }

}