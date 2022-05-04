"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
class ValueObject {
    value;
    regex;
    constructor(regex) {
        this.regex = regex;
    }
    validate(value) {
        if (!this.regex.test(value)) {
            return new Error("Result is invalid!");
        }
        else {
            return value;
        }
    }
    setValue(value) {
        this.value = this.validate(value);
    }
    getValue() {
        return this.value;
    }
}
exports.ValueObject = ValueObject;
const valueObject = new ValueObject(/^[A-Z]*$/);
valueObject.setValue("ARKASHA");
console.log(valueObject.getValue());
//# sourceMappingURL=value-object.js.map