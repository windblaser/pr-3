'use strict'
let price = +prompt('Введите цену');
let money = +prompt('Сколько у вас денег?');
if(price === money){
    alert('Покупка совершена');
}else if(price>money){
    alert("Для покупки не хватает " + (price-money) + ' р.');
}
else if(price<money){
    alert('Покупка совершена. Сдача ' + (money - price) + ' р.');
}



let num = +prompt('Введите число');
if (num>0){
    alert(1);
}
else if(num<0){
    alert(-1);
}
else{
    alert(0);
}


let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');
let result = a+b<4 ? 'Мало' : 'Много';
alert(result);

let login = prompt('Введите логин');
let message = login == 'Сотрудник' ? 'Привет' : login == 'Директор' ? 'Здравствуйте' : login == '' ? 'Нет логина' : "Пусто";
alert(message)