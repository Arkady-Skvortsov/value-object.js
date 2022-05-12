# value-object.js

# About

[Value-Object](https://github.com/Arkady-Skvortsov/value-object.js/blob/main/VALUE-OBJECT.md) implentation for Javascript/Typescript

# Motivation

I'm really tired from that, we are don't have a normally realisation of value-object pattern with cool interface: 1) https://www.npmjs.com/package/value-object, 2) https://www.npmjs.com/package/js-value-object, 3) https://www.npmjs.com/package/value-object-js, 4) https://www.npmjs.com/package/value-objects; My realisation includes value with type o value + validate through RegExp, but it's more simple and complex for usage;

# How to use it ?

```ts
import { ValueObject } from "value-object.js";

const valueObject = new ValueObject("HASKELL", /^[A-Z]*$/);

valueObject.getValue(); // "HASKELL"
```

# With Database
