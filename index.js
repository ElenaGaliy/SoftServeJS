//******************************Task1******************************************************//

// const textElement = document.querySelector("#test");

// textElement.innerHTML = "Last";

// document.getElementById("#test").innerHTML = "Last"


//******************************Task2******************************************************//

// const img = document.getElementById("image")

// img.src = "cat.jpg";

// alert(img.src)


//******************************Task3******************************************************//

// const paragraphs = document.querySelectorAll("#text p");

// for (let i = 0; i < paragraphs.length; i++) {
//     const element = paragraphs[i];
//     const el = document.createElement('div')
//     el.innerText = 'Selector text ' + i + ': ' + paragraphs[i].innerText;
//     document.body.appendChild(el)
// };

//******************************Task4******************************************************//

// const liList = document.querySelectorAll("#list > li");

// alert(liList[0].innerHTML);
// alert(liList[liList.length - 1].innerHTML);
// alert(liList[1].innerHTML);
// alert(liList[3].innerHTML);
// alert(liList[2].innerHTML);


//******************************Task5******************************************************//

// const header = document.querySelector('h1');
// const first = document.querySelector('.first');
// const red = document.querySelector('.red');
// const third = document.querySelector('.third');
// const fourth = document.querySelector('.fourth');
// const myList = document.querySelector('#myList');
// const liList = myList.querySelectorAll('li');
// const text = document.querySelector('.text');



// const oneLineEl = document.createElement('div');
// oneLineEl.innerHTML = Array.from(liList).map(function (li) { return li.innerText }).join('')
// myList.parentNode.replaceChild(oneLineEl, myList)

// header.style.background = 'limegreen';
// first.style.fontWeight = 'bolder';
// red.style.color = 'red';
// third.style.textDecoration = 'underline';
// fourth.style.fontStyle = 'italic';
// myList.style.listStyle = 'none';
// myList.style.display = 'flex';
// text.style.display = 'none';



//******************************Task6******************************************************//

// const input1 = document.querySelector("#input1");
// const input2 = document.querySelector("#input2");

// const par1 = prompt();
// const par2 = prompt();

// input1.value = par1;
// input2.value = par2;


// input1.value = par2;
// input2.value = par1;


//******************************Task7******************************************************//

const main = document.createElement('main')
const myDiv = document.createElement('myDiv')
myDiv.id = 'myDiv'
const p = document.createElement('p')
p.innerText = 'First paragraph'

document.body.appendChild(main)
main.appendChild(myDiv)
myDiv.appendChild(p)
console.log(main);