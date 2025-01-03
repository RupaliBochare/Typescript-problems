class Counter {

    static count:number = 0;

    static incrementCount () {
        this.count++;
    }

    static decrementCount() {
        this.count --;
    }

    static getCount() {
        return this.count;
    }
}

class AnotherClass {
    static showCount() {
        console.log(`The shared count is${Counter.getCount()}`)
    }
}

// Increment the count using Counter class
Counter.incrementCount();
Counter.incrementCount();
console.log(`Current count: ${Counter.getCount()}`); // Output: Current count: 2
AnotherClass.showCount(); // Output: The shared count is: 2