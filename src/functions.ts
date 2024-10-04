// 函数表达式
let fn: (param: string) => void = () => {

};
let fn2: (param: string) => void = function () {

}

// 调用签名
type SumFunction = {
    innerProperty: any; // 函数的属性
    (a: number, b: number): number// !使用: 而不是 => 来表示函数；这个函数接受两个number类型的参数，返回一个number类型
}

// test
function doSum(fn: SumFunction, a: number, b: number): number {
    console.log(fn.innerProperty);
    return fn(a, b);
}

// 构造签名
interface IPerson {
    innerProperty: any;
    new(name: string, age: number): object;
}

function PersonFactory(ctor: IPerson, name: string, age: number) {
    console.log(ctor.innerProperty);
    return new ctor(name, age);
}

// 泛型函数
function firstElement<T>(arr: Array<T>): T {
    return arr[0];
}

firstElement([1, 2, 3]);
// firstElement<string>([1, 2, 3]);


// 回调函数
function myForEach(arr: any[], callback: (item: any, index?: number) => void): void {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

myForEach([1, 2, 3], (item, index) => {
    console.log(item, index?.toFixed());
})


// 函数重载
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);

// 声明this
interface UserMapper {
    filterUsers(filter: (this: IPerson) => boolean): Array<IPerson>
}
// 函数表达式
const fun: () => void = () => {
    return true;
}
const fun2: () => void = function () {
    return true;
}

// 字面量函数
function fun3(): void {
    // 报错
    // return true;
    return;
}
