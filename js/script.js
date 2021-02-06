"use strict";

/*
const obl = {
    name: "Jonh",
    age: 25,
    isMarried: false
};


console.log(obl["name"]);


let arr = ['plaum.png', 'ornge.jpeg', 6,  'apple.bmp', {}];
console.log(arr[1]);  */

// alert('Hello word');

//const result = confirm("Where are you from?");
//console.log(result);

//const answer = +prompt("Вам есть 18?", ""); //динамическая типизация  +prompt("Вам есть 18?", "");
//console.log(answer + 5); // вся ниформация от пользователя будет ввиде строк

// alert  promt confirm  document  - только внутри браузера 

//const answers = [];

//answers[0] = prompt("Whats your name?","");
//answers[1] = prompt("Whats your surename?","");
//answers[2] = prompt("How old are you?","");

//document.write(answers);
//console.log(typeof(answers));

//const category = 'toys';
//console.log('https://someurl.com' + category) + '/'  asdasd;

// интерполяция 
  //console.log(`https://someurl.com/${category}/5`);

  //const user = 'Ivan';

  //alert(`Привет, ${user}`)

//let incr = 10,    // incr++  возвращает старое значение 
//    decr = 10;


//console.log(incr++ , decr-- + ` ${incr + decr + 1}`)

//console.log(5===2);  строгое сравнение 

//const isChecked = false,
//        isClose = false;

//console.log(isChecked && isClose);   //  И  правда будет если оба оператора работает  два и более ответить


//console.log(isChecked || !isClose); // Или 

//console.log(2 + 2 );

//

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
//
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("Один из последних просмотренных фильмов?",""),
      b = prompt("На сколько оцените его?",""),
      c = prompt("Один из последних просмотренных фильмов?",""),
      d = prompt("На сколько оцените его?","");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

////////
////
////

