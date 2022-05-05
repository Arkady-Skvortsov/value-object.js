"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
class ValueObject {
    value;
    constructor(value, regex) {
        this.value = this.validate(value, regex);
    }
    validate(value, regex) {
        if (!regex.test(String(value))) {
            return new Error(`${value} is invalid!!`);
        }
        else {
            return value;
        }
    }
    getValue() {
        return this.value;
    }
}
exports.ValueObject = ValueObject;
const valueObject = new ValueObject(["F"], /^[0-9]{4}$/);
console.log(valueObject.getValue());
//# sourceMappingURL=value-object.js.map