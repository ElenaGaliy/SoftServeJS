//******************************Task1******************************************************//

const aTags = document.getElementsByTagName('a')

for (i = 0; i < aTags.length; ++i) {
    console.log(aTags[i].href);
    if (aTags[i].href.startsWith('https://')) {
        aTags[i].target = "_blank"
    }
}

//******************************Task2******************************************************//


const head = document.querySelectorAll('h2.head');
console.log('head', head);

for (i = 0; i < head.length; ++i) {
    const hElem = head[i]
    hElem.style.backgroundColor = 'green';

    const span = document.querySelectorAll('span');
    for (i = 0; i < span.length; ++i) {
        const spanElem = span[i]
        spanElem.style.fontSize = '35px';
    }
    if (aTags[i].href.startsWith('https://')) {
        head[i].target = "_blank"
    }
};

//******************************Task3******************************************************//

const app = document.querySelector("#app");
for (let i = 0; i < app.children.length; i++) {
    const currentEl = app.children[i];
    const prevEl = app.children[i].previousElementSibling;

    const isDiv = currentEl.tagName === "DIV";
    const divHasH3Before = isDiv && prevEl?.tagName === "H3";

    if (divHasH3Before) {
        app.insertBefore(currentEl, prevEl);
    }
};


//******************************Task4******************************************************//

const monsterFeatures = document.querySelector("#monster-features");
let checkedEl = [];

monsterFeatures.addEventListener("change", (e) => {
    if (e.target.checked) {
        checkedEl.push(e.target.id);
    } else {
        checkedEl = checkedEl.filter((el) => el !== e.target.id);
    }

    if (checkedEl.length >= 3) {
        const childrenList = monsterFeatures.children;

        Array.from(childrenList).forEach(
            (el) => (el.firstElementChild.disabled = true)
        );
    }
});