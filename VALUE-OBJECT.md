# Value-Object conception

Value-Object pattern - means, that we can imagine our variables through another object for more convenient use and validate;

(⚠️) That concept need a little more time than you think!

# Basics

Wikipedia: https://en.wikipedia.org/wiki/Value_object#:~:text=In%20computer%20science%2C%20a%20svalue,money%20or%20a%20date%20range
Martin Fowler: https://martinfowler.com/bliki/ValueObject.html

Regex in Javascript: https://fireship.io/lessons/regex-cheat-sheet-js/

# When to use it ?

Value-Object is better to use when your application has a lot of entities that need to be validated and it would be easier to store as an object

# Simple example of usage

## With Value-Object

```ts
//price.ts
class Price {
  private readonly value;

  constructor(value: number, regexp: RegExp) {
    this.value = this.checkValue(value, regexp);
  }

  private checkValue(value: number, regex: RegExp) {
    if (!regex.test(value)) {
      return new Error(`${value} is invalid!!`);
    } else {
      return value;
    }
  }

  getValue() {
    return this.value;
  }
}

export { Price };

//car.ts
import { Price } from "./price";

class Car {
  private readonly price;
  private readonly title;

  constructor(price: number, title: string) {
    this.title = title;
    this.price = new Price(price, /^[0-9]{4}/);
  }

  getPrice() {
    return this.price.getValue();
  }

  getTitle() {
    return this.title;
  }
}

export { Car };
```

## Transformer

It's abstraction we need to transform our data to/from current database type

```ts
class Transformer {
  from() {}

  to() {}
}
```

## Tests example

```ts
//car.spec.ts
import { Price } from "./price";
import { Car } from "./car";

describe("Car", () => {
  let price: number;

  beforeEach(() => {
    price = 2009;
  });

  (✔️) it("Should create a new car", () => {
    const newPrice = new Price(2009);
    const newCar = new Car("Semerka", newPrice);

    expect(newPrice).toBeDefined();
    expect(newCar).toBeDefined();
    expect(newPrice.getValue()).toEqual(2009);
    expect(newCar.getPrice()).toEqual(2009);
    expect(newCar.getTitle()).toBe("Semerka");
  });
});
```
