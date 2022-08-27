//******************************Task1******************************************************//

// const windowFeatures = "width=300,height=300";
// function windowToOpen() {
//     const w = window.open("", "_blank", windowFeatures)
//     setTimeout(() => {
//         w.resizeTo(500, 500)
//         setTimeout(() => {
//             w.moveTo(200, 200)
//             setTimeout(() => w.close(), 2000)
//         }, 2000)
//     }, 2000)
// }
// windowToOpen()



//******************************Task2******************************************************//

// let btn = document.querySelector('.btn');
// let text = document.querySelector('#text');

// btn.addEventListener('click', function changeCSS() {
//     text.style.color = 'orange';
//     text.style.fontSize = '20px';
//     text.style.fontFamily = 'Comic Sans MS';

// })

//******************************Task3******************************************************//

// let btnOne = document.querySelector('#btnOne');
// let btnTwo = document.querySelector('#btnTwo');
// let btnThree = document.querySelector('#btnThree');
// let link = document.querySelector('#link');


// btnOne.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'blue';
// });

// btnTwo.addEventListener('dblclick', function () {
//     document.body.style.backgroundColor = 'pink';
// });

// let mouseIsDown = false;
// let idTimeout;

// btnThree.addEventListener('mousedown', function () {
//     mouseIsDown = true;
//     idTimeout = setTimeout(function () {
//         if (mouseIsDown) {
//             document.body.style.backgroundColor = 'brown';
//         }
//     }, 1000);
// });

// btnThree.addEventListener('mouseup', function () {
//     clearTimeout(idTimeout);
//     mouseIsDown = false;
//     document.body.style.backgroundColor = 'white';
// });

// link.addEventListener('mouseover', function () {
//     document.body.style.backgroundColor = 'yellow';
// });

// link.addEventListener('mouseleave', function () {
//     document.body.style.backgroundColor = 'white';
// });



//******************************Task4******************************************************//

// let list = ['Peter', 'John', 'Alice', 'Alex', 'Iren']
// const dropdown = document.querySelector('#dropdown');
// const btnDelete = document.querySelector('#btnDelete');

// let currentElement; //выбранный элемент

// const render = function () {
//     dropdown.innerHTML = null; //очищаем, если это не первый рендер и там уже есть список
//     for (const item of list) {
//         const option = document.createElement('option');
//         option.innerText = item;
//         dropdown.appendChild(option);
//     }
//     currentElement = list[0] //устанавливаем снова 1 элемент
// }

// btnDelete.addEventListener('click', function () {
//     list = list.filter(el => el !== currentElement)//возвращаем все элементы, которые не являются текущим
//     render()
// })

// dropdown.addEventListener('change', function (e) {
//     currentElement = e.target.value;
// })

// render()


//******************************Task5******************************************************//

// let button = document.querySelector('.button');

// button.addEventListener('click', function () {

//     let el = document.createElement('div');
//     el.innerText = "I was pressed!";
//     button.parentElement.appendChild(el);
// });

// button.addEventListener('mouseover', function () {

//     let el = document.createElement('div');
//     el.innerText = "Mouse on me!";
//     button.parentElement.appendChild(el);
// });

// button.addEventListener('mouseleave', function () {

//     let el = document.createElement('div');
//     el.innerText = "Mouse is not on me!";
//     button.parentElement.appendChild(el);
// });

//******************************Task6******************************************************//

// window.addEventListener('resize', function (e) {
//     let size = document.querySelector('#size')
//     size.innerText = "Width: " + e.target.innerWidth + ", Hight: " + e.target.innerHeight;
// }, true);

//******************************Task7******************************************************//

let country = document.querySelector('#country');
let cities = document.querySelector('#cities');

const countryCityMap = {
    ukr: ['Kiev', 'Dnipro', 'Lviv'],
    usa: ['Austin', 'Chicago', 'New York'],
    ger: ['Berlin', 'Dortmund', 'Dresden']
}

const setListOfCities = function (cityList) {
    for (const city of cityList) {
        const option = document.createElement('option');
        option.innerText = city;
        cities.appendChild(option);
    }
}

country.addEventListener('change', function (e) {
    cities.innerHTML = '';
    const val = e.target.value;
    const cityList = countryCityMap[val];
    setListOfCities(cityList)
}, true);

setListOfCities(countryCityMap["ger"])