interface Shape {
    name: string;
}

interface CircleX extends Shape {
    center: { xPos: number, yPos: number };
}

let shape: Shape = { name: 'unkonw shape' };
let circlex: CircleX = { name: 'circle', center: { xPos: 0, yPos: 0 } };

shape = circlex; // 这是类型安全的
// circlex = shape; // 这是类型不安全的

function printShapeInfo(shape: Shape): void {
    console.log(shape.name);
}

function printCircleInfo(circle: CircleX): void {
    console.log(circle.name, circle.center);
}
// 类型不安全的 因为在调用shapeInfoLogger1时，所接受的参数是Shape类型的实参
// 而printCircleInfo实际接受的是circle类型的实参，也就是说printCircleInfo中存在对子类型Circle其他属性的操作,
// 而传入的Shape类型实参无法满足要求
// let shapeInfoLogger1: typeof printShapeInfo = printCircleInfo;
let shapeInfoLogger2: typeof printCircleInfo = printShapeInfo;
