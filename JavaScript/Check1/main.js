//問１
let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(num) {
    for (let i= 0; i<num.length; i++){
        if(num[i]%2==0){
            console.log( num[i] + 'は偶数です');
        }
    }
}
isEven(numbers);

//問２
class Car {
    constructor(gas,number) {
        this.gas = gas;
        this.number = number;
    }
    getNumGas() {
        console.log(`ガソリンは${this.gas}です。ナンバーは${this.number}です。`);
    }
}
let car1 = new Car('ポルシェ','20');
car1.getNumGas();

