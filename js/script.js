//1)

let a = 4;
let b = 0;
console.log(a, "a", b, "b");

let c = ++a;
console.log(a, "a", c, "c");

let d = b++;
console.log(b, "b", d, "d");

//2)

let e = 3;
let f = 2;
let x = 0;
let y = 0;

//let x = 1 + (e += 2);
//let у = 1 + (f *= 2);

e = e + 2; // 5
f = f * 2; // 4

x = 1 + e; // 6
y = 1 + f; // 5

alert(e);
alert(f);
alert(x);
alert(y);


//3)

let year = +prompt('Чемпионы Англии по футболу (с 2011-2022)', '');

if (year < 2011) {
    console.log('Статистика еще не велась');
} else if (year > 2022) {
    console.log('Все лучшее впереди!');
} else if (year === 2022) {
    console.log('Сезон еще идет');
} else if (year === 2015 || year === 2017) {
    console.log('Челси')
} else if (year === 2012 || year === 2014 || year === 2018 || year === 2019 || year === 2021) {
    console.log('Манчестер Сити');
} else if (year === 2011 || year === 2013) {
    console.log('Манчестер Юнайтед');
} else if (year === 2020) {
    console.log('Ливерпуль');
} else if (year === 2016) {
    console.log('Лестер Сити');
}


let message =
    year < 2011 ?
    "Статистика еще не велась" :
    year > 2022 ?
    "Все лучшее впереди!" :
    year === 2022 ?
    "Сезон еще идет" :
    year === 2015 || year === 2017 ?
    "Челси" :
    year === 2012 ||
    year === 2014 ||
    year === 2018 ||
    year === 2019 ||
    year === 2021 ?
    "Манчестер Сити" :
    year === 2011 || year === 2013 ?
    "Манчестер Юнайтед" :
    year === 2020 ?
    "Ливерпуль" :
    year === 2016 ?
    "Лестер Сити" :
    "";

console.log(message);

// 4)
let login = prompt('Ваш логин');

if (login === 'Админ') {
    let password = prompt('Введите пароль');

    if (password === 'Я главный') {
        console.log('Здравствуйте!');
    } else if (password === null) {
        console.log('Отменено');
    } else {
        console.log('Неверный пароль');
    }
}

// 5)
for (i = 7; i < 15; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }

    if (i === 12) {
        console.log('12. Цикл прерван');
        break;
    }
}

// 6)

let j = 0;

while (j < 5) {
    console.log(`number ${j}!`);
    j++;
}