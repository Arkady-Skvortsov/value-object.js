import { types } from "../lib/utils/types";
import { ValueObject } from "../lib/utils/value-object";

describe("Value-Object", () => {
  let value: types;
  let regexp: RegExp;

  beforeAll(() => jest.clearAllMocks());

  describe("Should be create a new value-object with string type", () => {
    let name: ValueObject;
    regexp = /^[A-Z]*$/;

    it("Successfull", () => {
      value = "ARKASHA";
      name = new ValueObject(value, regexp);

      expect(name).toBeDefined();
      expect(name.getValue()).toBe(value);
    });

    it("With exception", () => {
      value = "aRKASHA";
      name = new ValueObject(value, regexp);

      expect(name.getValue()).toBeInstanceOf(Error);
    });
  });

  describe("Should be create a new value-object with number type", () => {
    let price: ValueObject;
    regexp = /^[0-9]{3}$/;

    it("Successfull", () => {
      value = 500;
      price = new ValueObject(value, regexp);

      expect(price).toBeDefined();
      expect(price.getValue()).toEqual(value);
    });

    it("With exception", () => {
      value = 5000;
      price = new ValueObject(value, regexp);

      expect(price).toBeDefined();
      expect(price.getValue()).toBeInstanceOf(Error);
    });
  });

  // describe("Should be create a new value-object with boolean type", () => {
  //   let bool: ValueObject;

  //   it("", () => {});

  //   it("", () => {});
  // });

  describe("Should be create a new value-object with array type", () => {
    let fruits: ValueObject;
    regexp = /\[[A-Z, ]+[A-Z]*\]/;

    it("Success", () => {
      value = ["APPLE", "BANANA", "WATERMELON"];
      fruits = new ValueObject(value, regexp);

      expect(fruits).toBeDefined();
      expect(fruits.getValue()).toBe(value);
    });

    it("With exception", () => {
      value = [12, "F", "F"];
      fruits = new ValueObject(value, regexp);

      expect(fruits).toBeDefined();
      expect(fruits.getValue()).toBeInstanceOf(Error);
    });
  });

  describe("Should be create a new value-object with array type", () => {});
});
