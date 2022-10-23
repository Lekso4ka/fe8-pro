const getRandom = (max = 11, min = 0) => Math.floor(Math.random() * (max - min) + min);

const getColor = (r = 255, g = 255, b = 255, a = 100, rm = 0, gm = 0, bm = 0) => `rgba(${getRandom(r, rm)}, ${getRandom(g, gm)}, ${getRandom(b, bm)}, ${a / 100})`;

const setGrad = (a = getColor(), b = getColor(), vector = "to left bottom") => `linear-gradient(${vector}, ${a}, ${b})`;