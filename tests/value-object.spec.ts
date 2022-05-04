import { ValueObject } from "../lib/utils/value-object";

describe("Value-Object", () => {
  let valueObject: any;

  beforeEach(() => {
    valueObject = new ValueObject(/^[A-Z]*$/);
  });

  it("Should be defined", () => {
    expect(valueObject).toBeDefined();
  });

  it("Should set new value and validate", () => {
    expect(valueObject.setValue("ARKASHA")).not.toBeInstanceOf(Error);
  });

  it("Should get a value from object", () => {
    expect(valueObject.getValue()).toBe("ARKASHA");
  });
});
