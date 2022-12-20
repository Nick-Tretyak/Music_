// let btn_prev = document.querySelector('#galary .buttons .prev');
// let btn_next = document.querySelector('#galary .buttons .next');

// let images = document.querySelectorAll('#galary .photos img');
// let i = 0;

// btn_next.onclick = function() {
//     images [i].style.display = "none";
//     i++;
//     if (i >= images.length) {
//     i=0;
//     }
//     images[i].style.display = "block";
  
// }

// btn_prev.onclick = function() {
//     images [i].style.display = "none";
//     i--;
//     if (i < 0) {
//         i = images.length -1;
//     }
//     images[i].style.display = "block";
// }
//    window.onbeforeunload = function () {
//       window.scrollTo(0, 0);
// }


// // for(let num = 8; num--;){
// //     console.log(num);
// //     // alert(num)
// //     // if (num == 3) break;
// // }


// let x ='3';
// switch(x){
//     case'1' : alert('Здесь 1');
//        break;
//     case'2' : alert('Здесь 2');
//        break;
//     case'3' : alert('Здесь 3');
//        break;
//     case'4' : alert('Здесь 4');
//        break;
//     default: alert('совпадений нет') ;
// }
// // }

// const bodyElement = document.body;

// const childNodes = bodyElement.childNodes;
// console.log(childNodes);

// const elemsOne = document.querySelectorAll ('.intro');
// console.log(elemsOne);

// const mainElement = document.documentElement;
// const mainElementWidth = mainElement.clientWidth;
// const mailElementHeight = mainElement.clientHeight;

// console.log (mainElementWidth);
// console.log (mailElementHeight);


// let styles = ['джаз', 'блюз',];

// styles.push("Рок-н-рол");
// styles.splice(1, 1, 'Классика');

// console.log (styles);

// let myStr;
// myStr = "This is the first sentence. ";
// myStr += "This is the second sentence.";

// alert(myStr);







// console.log (user);

// function isEmpty(obj) {
//     for (let key in obj) {
//       // если тело цикла начнет выполняться - значит в объекте есть свойства
//       return false;
//     }
//     return true;
//   }

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (let key in user) {
//     // ключи
//     console.log( key );  // name, age, isAdmin
//     // значения ключей
//     // console.log( user[key] ); // John, 30, true
//   }


// let user = {}
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);

// function isEmpty(obj){
//     for (let key in obj){
//         return false;
//     }
//     return true
// }

// function showMessage(from, text) { // параметры: from, text
//     alert(from + ': ' + text);
//   }
  
//   showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
//   showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)



let next = document.querySelector('#galary .buttons .next')
let prev = document.querySelector('#galary .buttons .prev')

let images = document.querySelectorAll('#galary .photos img')
let i = 0
prev.onclick = function(){
    images [i].style.display = 'none';
    i--;
    if (i < 0){
        i = 3;
    }
    images [i].style.display = 'block';
}

next.onclick =function() {
    images [i].style.display = 'none';
    i++;
    if (i >= images.length){
        i = 0;
    }
    images [i].style.display = 'block';
}

let chenge_collor_red = document.querySelector('.chenge_collor_red')
let chenge_collor_yellow = document.querySelector('.chenge_collor_yellow')
let chenge_collor_green = document.querySelector('.chenge_collor_green')

let red = document.querySelector('.svetofor_red')
let yellow = document.querySelector('.svetofor_yellow')
let green = document.querySelector('.svetofor_green')

valera = function(){

chenge_collor_red = function(){
    red.style.background = 'red';
    if (yellow.style.background = 'yellow', green.style.background = 'green'){
        yellow.style.background = 'none';
        green.style.background = 'none'
    }
}

setTimeout(chenge_collor_red, 3000);

chenge_collor_yellow = function(){
    yellow.style.background = 'yellow';

    if (red.style.background = 'red', green.style.background = 'green'){
        red.style.background = 'none';
        green.style.background = 'none'
    }
}
setTimeout(chenge_collor_yellow, 6000);



chenge_collor_green = function(){
    green.style.background = 'green';
    if (red.style.background = 'red', yellow.style.background = 'green'){
        red.style.background = 'none';
        yellow.style.background = 'none'
    }
}
setTimeout(chenge_collor_green, 9000);

}

setInterval (valera, 12000);