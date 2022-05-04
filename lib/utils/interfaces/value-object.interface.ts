abstract class IValueObject {
  abstract validate<T>(value: T): any;
  abstract getValue<T>(): T;
  abstract setValue<T>(value: T): void;
}

export { IValueObject };
