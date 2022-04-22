# value-object.js

# About

It's implementation of Value-Object pattern solved a couple problems:

1. Immutable data
2. Valid data

# Motivation

I'm really tired from that, we are don't have a normally realisation of value-object pattern with cool interface and serialize/deserialize for database;

# How to use it ?

```ts
import { ValueObject, Transform } from "value-object.js";
import { Repository } from "../db";

const valueObject = new ValueObject("Id", "string", "878675689786", {
  ...validParams,
});

valueObject.getValue(); // "878675689786"

//For SQL database
const transform = new Transform(valueObject.getValue());

const repository = new Repository();

repository.set(transform.from());
```
