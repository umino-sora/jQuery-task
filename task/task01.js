// 課題1、2
var answer = prompt('正もしくは負の値を入力してください');
if (answer > 0) {
    alert('正の数です');
} else if (answer < 0) {
    alert('負の数です');
} else if (answer == 0) {
    alert('0です');
} else {
    alert('数値を入力してください');
}

// 課題3
var animals = ['パンダ', 'ライオン', 'キリン',];
var i = 0;
while (i < animals.length) {
    alert(animals[i]);
    i++;
}

// 課題4
var animals = ['パンダ', 'ライオン', 'キリン',];
var animal = prompt('パンダ、ライオン、キリンの中から好きな動物を記入してください');
var i = 0;
while (i < animals.length && animal !== 'ライオン') {
    alert(animals[i]);
    i++;
}

// 課題5
var animals = ['パンダ', 'ライオン', 'キリン',];
var animal = prompt('パンダ、ライオン、キリンの中から好きな動物を記入してください');
var i = 0;
while (i < animals.length && animal !== 'ライオン') {
    alert(animals[i]);
    i++;
} if (animal == 'ライオン') {
    alert(animals.indexOf(animal));
}

// 課題6、7
var animals = [
    {'name': 'パンダ', 'weight': '80'},
    {'name': 'ライオン', 'weight': '200'},
    {'name': 'キリン', 'weight': '300'},
];
var animal = prompt('パンダ、ライオン、キリンの中から好きな動物を入力してください');
var animal_weight
for (i = 0; i < animals.length; i++) {
    if (animals[i].name == animal) {
        animal_weight = animals[i].weight
    }
}
alert(animal_weight);

/* in演算子 使用ver.
var animals = [
    {'name': 'パンダ', 'weight': '80'},
    {'name': 'ライオン', 'weight': '200'},
    {'name': 'キリン', 'weight': '300'},
];
var animal = prompt('パンダ、ライオン、キリンの中から好きな動物を入力してください');
var animal_weight
for (var a in animals) {
    if (a == animal) {
        animal_weight = animals[a].weight
    }
}
alert(animal_weight);
*/

// 課題8
function area(radius) {
    return radius * radius * 3.14
}
alert(area(5));
