import { types } from "./types";

class ValueObject {
  private value: types;

  constructor(value: types, regex: RegExp) {
    this.value = this.validate(value, regex);
  }

  private validate(value: types, regex: RegExp): types | Error {
    if (!regex.test(String(value))) {
      return new Error(`${value} is invalid!!`);
    } else {
      return value;
    }
  }

  public getValue() {
    return this.value;
  }
}

export { ValueObject };
