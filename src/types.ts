// 原始类型
let num: number = 2;
let str: string = '';
let bool: boolean = true;
let bigNum: bigint = BigInt(1);
let sym: symbol = Symbol('union');
let empty: null = null;
let unde: undefined = undefined;

// 引用类型
let obj: object = { revocable: [] };

// 包装类型
let numObj: Number = Number(1);

// 集合类型
let arr1: Array<any> = [];
let arr2: any[] = [];
let map: Map<any, any> = new Map();
let set: Set<any> = new Set();

// 其他
let json: JSON = JSON.parse('{a:1}');
let promise: Promise<any> = new Promise(() => { });
let func: Function = () => { };

// 可选属性
interface Person {
    name: string,
    age: number,
    sex?: boolean
}
let me: Person = { name: 'ys', age: 24 };

// 联合类型
let money: number | bigint = 10000;
function printId(id: number | string) {
    // 断言
    let inputId = id as string;
    console.log(inputId.toUpperCase());

    // 判断类型缩小联合
    if (typeof id === 'string') {
        console.log(id.toLocaleUpperCase);
    } else {
        console.log(id);
    }
}
// !联合类型 的工作原理就是 将所给类型的值进行联合组成的（交集）
interface Dog {
    name: string,
}
function callName(target: Person | Dog) {
    console.log(target.name);
}

// 类型别名 为了更加方便的使用某些常用的联合类型
type Organism = Person | Dog;
function callName2(target: Organism) {
    console.log(target.name);
}

// 接口 命名对象类型的另一种方式
interface Point {
    x: number,
    y: number
}

// 接口 & 类型别名的扩展
// ! 使用接口进行扩展在编译时性能更好，因为接口会被缓存
type Banner = { bannerInfo: string };
type Footer = { footerInfo: string };
type Page = Banner & Footer;

interface Animal extends Person, Dog {
    sayHi: Function
}

let animal: Animal = { name: 'gd', sayHi: () => { }, age: 1 }

// 非空断言运算符
function liveDangerously(x?: number | null) {
    console.log(x!.toFixed());
}

liveDangerously(null);

// 枚举类型
enum Direction {
    Up,
    Down,
    Left,
    Right
}

// 类型谓词
function isPerson(animal: Person | Dog): animal is Person {
    return (animal as Person).sex !== undefined;
}

const dog: Dog = { name: 'dog' };
if (isPerson(animal)) {
    // 这里会认为animal是Person类型的
    animal.age;
} else {
    // 进一步被条件语句缩小类型
    // 这里只能是非Person类型了
    animal
}