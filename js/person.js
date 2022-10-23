class Person {
    constructor(n, p, w = "слово", c = "#000", a = 0) {
        this.name = n;
        this.pic = p;
        this.word = w;
        this.color = c;
        this.age = a;
    }
    changeWord(w) {
        this.word = w;
    }
    changeColor(c) {
        this.color = c;
    }
}