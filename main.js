console.log('It works!');


// this keyword in javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

const name = 'Pankaj';


console.log(name);
console.log(window.name);
console.log(this.name);


console.log(this === window);


function sayHello() {
    console.log('Hello ' + this.name);
}

const user = {
    name: 'Benjamin',
}

// sayHello.bind(user).call();


const test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
  user: {
    name: 'Mr. Robot',
  }
};

const reactangle = {
    width: 100,
    height: 50,
    perimeter: function () {
        return this.width * 2 + this.height * 2;
    },
    area: function () {
        return this.width * this.height;
    },
}


function Rectangle(width, height) {
    return {
        width,
        height,
        perimeter() {
            return this.width * 2 + this.height * 2;
        },
        area() {
            return this.width * this.height;
        },
        sayHello() {
            return `Area=${this.area()}`;
        }
    }
}



console.log(reactangle.area());


const rectangle2 = new Rectangle(12, 23);
console.log(rectangle2.sayHello());



document.querySelector('#numberInput').addEventListener('change', function(){
    const that = this;
    console.log('in event listener', this);
    setTimeout(function() {
        console.log('in timeout callback', this);

        console.log(that.value);
    }, 1000);
})


console.log(test.user.name);
console.log(test.func());
