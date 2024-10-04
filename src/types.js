// 原始类型
var num = 2;
var str = '';
var bool = true;
var bigNum = BigInt(1);
var sym = Symbol('union');
var empty = null;
var unde = undefined;
// 引用类型
var obj = { revocable: [] };
// 包装类型
var numObj = Number(1);
// 集合类型
var arr1 = [];
var arr2 = [];
var map = new Map();
var set = new Set();
// 其他
var json = JSON.parse('{a:1}');
var promise = new Promise(function () { });
var func = function () { };
var me = { name: 'ys', age: 24 };
// 联合类型
var money = 10000;
function printId(id) {
    // 断言
    var inputId = id;
    console.log(inputId.toUpperCase());
    // 判断类型缩小联合
    if (typeof id === 'string') {
        console.log(id.toLocaleUpperCase);
    }
    else {
        console.log(id);
    }
}
function callName(target) {
    console.log(target.name);
}
function callName2(target) {
    console.log(target.name);
}
var animal = { name: 'gd', sayHi: function () { }, age: 1 };
// 非空断言运算符
function liveDangerously(x) {
    console.log(x.toFixed());
}
liveDangerously(null);
// 枚举类型
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// 类型谓词
function isPerson(animal) {
    return animal.sex !== undefined;
}
var dog = { name: 'dog' };
if (isPerson(animal)) {
    // 这里会认为animal是Person类型的
    animal.age;
}
else {
    // 进一步被条件语句缩小类型
    // 这里只能是非Person类型了
    animal;
}
