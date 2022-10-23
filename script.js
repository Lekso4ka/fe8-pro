const pics = ["images/с1.png", "images/с2.png", "images/с3.png", "images/с4.png", "images/с5.png"];
const names = ["Добромир", "Бонифаций","Серафим","Ульяна","Ибрагим","Диана","Федор","Марфа","Афина","Мирослава","Вениамин","Конфуций","Акакий","Денис","Терентий","Хронь","Даздраперма","Вцям","Африкант"];

const wrapper = document.querySelector(".wrapper");
let cnt = getRandom(20, 5);
console.log(cnt);
const persons = [];
while (cnt--) {
    persons.push(new Person(
        names[getRandom(names.length)],
        pics[getRandom(pics.length)],
        words[getRandom(words.length)],
        getColor(),
        getRandom(100)
    ))
}
console.log(persons);

persons.forEach(person => {
    const card = document.createElement("div");
    card.style.boxShadow = `0 0 5px 0 ${person.color}`;
    card.className = "card";
    card.style.backgroundImage = `url(${person.pic})`;

    const name = document.createElement("h3");
    name.innerText = person.name;

    const bg = document.createElement("div");
    if (person.age < 18) {
        bg.style.background = "#fffa";
    } else if (person.age >= 65) {
        bg.style.background = "#808080aa";
    } else {
        bg.style.background = "#000a";
    }
    bg.className = "back";

    const word = document.createElement("div");
    word.style.textShadow = `0 0 5px ${person.color}`;
    word.innerText = person.word;

    card.append(word, name, bg);
    wrapper.appendChild(card);
    person.el = card;
    card.onclick = function() {
        person.changeColor(getColor());
        person.changeWord(words[getRandom(words.length)]);
    }
});