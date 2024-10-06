interface Human {
    sex: boolean;
    skin: 'yellow' | 'white' | 'black';
}

type P = keyof Human;
let p: P = 'sex';


interface Response {
    data: Array<any> | object;
    code: number;
}
type ResponseKey = keyof Response;
function getResponseByKey(targer: Response, key: ResponseKey): Response[ResponseKey] {
    return targer[key];
}

class Car {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
}
type CarType = InstanceType<typeof Car>; // CarType 是 Car
const myCar: CarType = new Car("Toyota", "Corolla");


type fileName = string | number;
type lang = 'en' | 'zh';

type fileNameWithLang = `${fileName}_${lang}`;