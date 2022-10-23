class Person {
    constructor(n, p, w = "слово", c = "#000", a = 0) {
        this.name = n;
        this.pic = p;
        this.word = w;
        this.color = c;
        this.age = a;
    }
    set el(v) {
        this.tag = v;
    }
    changeWord(w) {
        this.word = w;
        this.tag.firstElementChild.innerText = w;
    }
    changeColor(c) {
        this.color = c;
        this.tag.style.boxShadow = `0 0 5px 0 ${c}`;
        this.tag.firstElementChild.style.textShadow = `0 0 5px ${c}`;
    }
}