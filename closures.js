function getAdder(numberToAdd) {

    return function(n) {
        return n + numberToAdd;
    };

}


const adderFive = getAdder(5);
const adderTwo = getAdder(2);
const subtracterThree = getAdder(-3);

console.log(adderFive(10));
console.log(adderFive(1));
console.log(adderFive(10.5));



let width = 500;
let height = 123;


console.log('It should be 500', this.width);


function Rectangle() {
    console.log('Who\'s this?', this);

    console.log('It should be 500', this.width);

     return {
        // width: w,
        // height: h,
        perimeter() {
            return this.width * 2 + this.height * 2;
        },
        area() {
                console.log('Who\'s this?', this);

            return this.width * this.height;
        },
        sayHello() {
            return `Area=${this.area()}`;
        }
    }
}


const rect = Rectangle(5, 10);

console.log(rect.area());

rect.width = 20;
rect.height = 10;
console.log(rect.area());













