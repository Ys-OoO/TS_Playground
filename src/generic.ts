// 泛型类
interface withLength {
    length: number;
}

class IArrayLike<T extends withLength> {
    target: T;

    constructor ( target: T ) {
        this.target = target;
    }

    forEach ( cb: ( ( item: any, index: number ) => void ) ): void {
        for ( let i = 0; i < this.target.length; i++ ) {
            cb.call( this, this.target[ i ], i );
        }
    };
};

const arraylike = new IArrayLike<Array<number>>( [ 1, 2, 3 ] );

arraylike.forEach( ( item ) => {
    console.log( item );
} );

// 泛型接口
interface Generic<Type> {
    ( arg: Type ): Type; // 调用签名
}

function identity<T> ( arg: T ): T {
    return arg;
}

// 使用时指明类型
let myIdentityFn: Generic<number> = identity;