import joi from "joi";
import { ValueObject } from "./utils/value-object";

class Id implements ValueObject {
  private readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}

const id = new Id("Super F to pay respect!");

console.log(id.getValue());
