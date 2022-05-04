import { IValueObject } from "./interfaces/value-object.interface";

class ValueObject {
  private value: any;
  private readonly regex: RegExp;

  constructor(regex: RegExp) {
    this.regex = regex;
  }

  private validate(value: any): any {
    if (!this.regex.test(value)) {
      return new Error("Result is invalid!");
    } else {
      return value;
    }
  }

  public setValue(value: any) {
    this.value = this.validate(value);
  }

  public getValue() {
    return this.value;
  }
}

const valueObject = new ValueObject(/^[A-Z]*$/);
valueObject.setValue("ARKASHA");
console.log(valueObject.getValue());

export { ValueObject };
