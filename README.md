# value-object.js

# About

[Value-Object](https://github.com/Arkady-Skvortsov/value-object.js/blob/main/VALUE-OBJECT.md) implentation for Javascript/Typescript

# Motivation

I'm really tired from that, we are don't have a normally realisation of value-object pattern with cool interface: ;

# How to use it ?

```ts
import { ValueObject } from "value-object.js";

const valueObject = new ValueObject("string", "/[A-Z]$/g");

valueObject.setValue("Sub-Zero");

valueObject.getValue(); // "Sub-Zero"
```
