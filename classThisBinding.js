class Counter {
  constructor(count) {
    this.count = count;

    // Binding methods in the constructor
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.count++;
    console.log("Incremented count:", this.count);
  }

  decrement() {
    this.count--;
    console.log("Decremented count:", this.count);
  }
}

const counter = new Counter(2);
const incrementFunc = counter.increment;
// Calling methods
//Would've returned type error if inceremnt function was not bound to the constructor because, incrementFunc is called without a context and this refers to the global scope where the value is undefined
incrementFunc();
