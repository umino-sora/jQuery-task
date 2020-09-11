// alert('外部ファイル');
var a = 1;
// alert(a);
var b = 2;
var c = a + b;
alert(c);

var A ='りんご';
var B = 'バナナ';
var C = A + B;
alert(C);

//配列
var fruits = ['りんご', 'バナナ'];
alert(fruits[0]);
alert(fruits[1]);

//オブジェクト変数
var fruits = {'name': 'りんご', 'price': 100};
alert(fruits['name']);
alert(fruits.name);

//オブジェクト変数の配列
var fruits = [
    {'name': 'りんご', 'price': '100'},
    {'name': 'バナナ', 'price': '150'},
    {'name': 'いちご', 'proce': '200'},
];
alert(fruits[1].price);

var answer = prompt('1 + 1 は?');
alert(answer);
// prompt:''メッセージとキーボードからの入力を受け付けるための関数

var answer = prompt('1 + 1は?');
if (answer == 2) {
    alert('正解');
} else {
    alert('不正解');
}

var answer = prompt('りんごとバナナのどちらが好きですか?');
if (answer == 'りんご') {
    alert('りんごは英語でappleです');
} else if (answer == 'バナナ') {
    alert('バナナは英語でbananaです');
} else {
    alert('りんご or バナナを入力してください');
}

var answer = prompt('りんごとバナナどちらが好きですか?');
switch (answer) {
    case 'りんご':
        alert('りんごは英語でappleです');
        break;
    case 'バナナ':
        alert('バナナは英語でbananaです');
        break;
    default:
        alert('りんご or バナナを入力してください')
        break;
}
