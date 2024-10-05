// 属性修饰符
// 可选属性
interface Shape {
    name: string;
    xPos?: number,
    yPos?: number;
}

let circle: Shape = {
    name: 'circle'
};

// 只读属性
interface Circle {
    readonly name: string;
}
let circle2: Circle = {
    name: 'circle'
};
// circle2.name = 'Circle'; // 只读无法修改
// 绕过只读
type CreateWritable<T> =
    {
        -readonly [ P in keyof T ]: T[ P ];
    };
type WritableCircle = CreateWritable<Circle>;
let cycle2: WritableCircle = {
    name: 'circle'
};
cycle2.name = 'writable';

// 扩展类型
type BasicAddress =
    {
        name?: string;
        street?: string;
        city: string;
        country?: string;
        postalCode?: string;
    };

interface AddressWithUnit extends BasicAddress {
    unit: string;
}

let addr: AddressWithUnit = {
    unit: "2",
    city: 'WH'
};

// 同名接口扩展
interface A {
    a: number;
}

interface A {
    b: number;
}

let iA: A = {
    a: 1,
    b: 2
};

// 交叉类型
interface Color {
    color: string;
}
type ColorCircle = Color & Circle;
let redCircle: ColorCircle = {
    name: 'circle',
    color: 'red'
};
/**
 * 扩展类型extends 产生 interface
 * 交叉类型& 产生type
 * 在相同属性名，不同类型时：扩展类型取并集，交叉类型取交集
 *
 * interface A {}
 * interface A {} === interface A extends A {}
 */


