# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded. 

As a quick guide, check the following before submitting:
- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming? 

Provide a code snippet to illustrate _encapsulation_.

## Response 1

**Encapsulation** is an object-oriented programming principle that bundles data (properties) and the methods that operate on that data into a single unit, typically a **class**. Its primary purpose is to prohibit direct access to an object's hidden variables, ensuring that data is not modified unexpectedly.\
A common analogy is a smartphone: users can interact with it through buttons and apps, but they cannot directly manipulate the internal hardware. Encapsulation provides the same kind of protection for software components. 
#### Example
```js
class BankAccount {
  #balance = 0; // private property
  deposit(amount) {
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}

const acct = new BankAccount();
acct.deposit(100);
console.log(acct.getBalance()); // 100

// console.log(acct.#balance); Error. Can't access private property.
```

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
	constructor() {
		this.count = 0;
	}
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2

In JavaScript, `this` refers to the object that is currently invoking the function. Within a class, `this` represents the specific instance that is being created or used. The important part is that the value of `this` depends on **how** a function is called, not where the function is defined.\
In the aforementioned code snippet, `this` refers to the specific `Counter` object that calls the `increment()` method. So when `counterA.increment()` runs, `this` is `counterA`, and when `counterB.increment()` runs, `this` is `counterB`. That’s why `counterA.count` becomes 3 while `counterB.count` is only 1.

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3

**Polymorphism** comes from the idea of “many forms.” In object-oriented programming, it means that different classes can define the same method name, but each implementation behaves in a way that is specific to that class. This allows you to write code that can call a method (such as `.perimeter()`, `.area()`, or `.circumference()`) on different types of objects and rely on each object to respond appropriately.
#### Example 
```js
class Shape {
  area() { 
    return 0; 
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  } 
  area() { 
    return this.side * this.side; 
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  area() { 
    return Math.PI * (this.radius ** 2); 
  }
}
// Both use .area(), but each class provides its own implementation.
```
**Polymorphism** makes code more flexible and reusable because you can handle objects through a common interface without needing to know their specific **class**.


## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4

#### Part A:
I would start by creating a main `Pet` class that holds all the shared properties and behaviors like `name`, `energy`, `happiness`, and a `sleep()` method. According to MDN, inheritance lets a class “extend” another class so it can reuse its code, so I’d have the other pets extend this base `Pet` class. Then I’d make three subclasses: `Cat`, `Dog`, and `Bird`. Each subclass would automatically get everything from `Pet`, but would also have its own special method like `hunt()` for cats, `chase()` for dogs, and `fly()` for birds.
#### Part B:
One big advantage of using **inheritance** is that I don’t have to rewrite the same properties and methods three times. All the shared properties and methods live in the `Pet` class, so the code is easier to maintain. If I ever need to change how pets sleep or adjust their stats, I can update it in one place and all the pet types will get the update automatically. This makes the project cleaner and reduces repeated code.