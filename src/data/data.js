class themeColor {
    constructor(color, type) {
        this.color = color;
        this.type = type;
    }
}

class TextSample {
    constructor(type, fs, ls, lh) {
        this.type = type;
        this.fontSize = fs;
        this.letterSpacing = ls;
        this.lineHeight = lh;
    }
}

export const colorsLight = [
    new themeColor({ r: 255, g: 255, b: 255, a: 1 }, 'RGBA'),
    new themeColor({ r: 255, g: 255, b: 255, a: 0.7 }, 'RGBA'),
    new themeColor({ r: 255, g: 255, b: 255, a: 0.24 }, 'RGBA'),
    new themeColor({ r: 255, g: 255, b: 255, a: 0.1 }, 'RGBA'),
    new themeColor({ r: 255, g: 255, b: 255, a: 0.04 }, 'RGBA'),
];

export const colorsDark = [
    new themeColor({ r: 26, g: 26, b: 26, a: 1 }, 'RGBA'),
    new themeColor({ r: 26, g: 26, b: 26, a: 0.7 }, 'RGBA'),
    new themeColor({ r: 26, g: 26, b: 26, a: 0.24 }, 'RGBA'),
    new themeColor({ r: 26, g: 26, b: 26, a: 0.1 }, 'RGBA'),
    new themeColor({ r: 26, g: 26, b: 26, a: 0.04 }, 'RGBA'),
];

export const colorsPrimary = [
    new themeColor('#0055FF', 'HEX'),
    new themeColor('#002BE6', 'HEX'),
    new themeColor('#0000CC', 'HEX'),
];

export const titleSizes = [
    new TextSample('Large', '48px', '-0.5px', '56px'),
    new TextSample('Medium', '34px', '-0.5px', '40px'),
    new TextSample('Regular', '22px', '-0.5px', '26px'),
    new TextSample('Small', '17px', '-0.5px', '20px'),
];

export const bodySizes = [
    new TextSample('Large', '22px', '-0.1px', '32px'),
    new TextSample('Medium', '17px', '-0.1px', '24px'),
    new TextSample('Regular', '15px', '-0.1px', '22px'),
    new TextSample('Small', '13px', '-0.1px', '20px'),
];

export const sampleText =
    'Did you know that Bhutan is a hotspot of wild cat diversity? It is home to 11 species of wild cats which  is about 30% of all wild cat species found in the world. Considering that Bhutan only covers .03% of the earth’s surface, that number seems even more amazing.';

export const sampleTitle = 'Meet the small wild cats of Bhutan';
