interface IValueObject<T, R> {
  validate(value: T, regex: R): boolean;
  getValue(): T;
}

export { IValueObject };
