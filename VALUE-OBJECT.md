# Value-Object conception

Value-Object pattern - means, that we can imagine our variables through another object for most ..... usage and validate;
Here I implemented method B because I had to create for you guys)) a convenient JS-style interface for interacting with this pattern, which violates the Value-Object principle itself, but THIS is just a convenient interface and that's it; I want to give a real implementation under OOP style, not consturctor):

(⚠️) That concept need a little more time than you think!

# Basics

Wikipedia: https://en.wikipedia.org/wiki/Value_object#:~:text=In%20computer%20science%2C%20a%20value,money%20or%20a%20date%20range.
Martin Fowler: https://martinfowler.com/bliki/ValueObject.html

# When to use it ?

Value-Object is better to use when your application has a lot of entities that need to be validated and it would be easier to store as an object

# Simple example of usage

## With Value-Object

```ts
//price.ts
class Price {
  private readonly value;

  constructor(value: number, regex: string) {
    this.checkValue(value, regex);
    this.value = value;
  }

  private checkValue(value: number, regex: string) {
    return new RegEx(regex).test(value);
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
    this.price = new Price(price);
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
    expect(newCar.getPrice).toEqual(2009);
    expect(newCar.getTitle).toBe("Semerka");
  });
});
```
