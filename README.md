# TypeScript 

## L1 - Introduction to TypeScript

- TypeScript (TS) introduces static typing to JavaScript.
- Default type is 'any' when not specified.
- JS is dynamically typed; errors can occur at runtime.
- TS is JS with types; it's statically typed (compile-time checks).
- JS gives no error for below: `console.log(null * 4)` prints 0 instead. But TS gives an error.

### Advantages of TS

1. Type Safety
2. Strict Null Checks
3. Improved Code Quality
4. Scalability 
5. Community Support

### How TypeScript Works?

In TS, some additional syntax/features are present, not understood by JS environments like browsers and Node.js. So, firstly, TS is compiled to JS code using a TypeScript Compiler and then it runs.

## L2 - Getting Started with TypeScript

- Install TS: `npm install typescript`
- `tsc` is the command-line interface for TS.
- `tsc` also converts TS to JS code: `tsc filename.ts`
- A JS file is automatically created. Now run: `node filename.js`

## L3 - Type Annotations

- Type Annotation syntax: `let var: type = value`
- Reassigning one type var to another type causes an error:
    ```ts
    let count: number = 24;
    count = "TypeScript"; // Error
    ```
- When the type is not declared, Type inferencing is done, and TS infers its type as any.
- Sometimes not explicitly defining the type can cause errors.

## L4 - Working with 'any' Type

```ts
let character: any = "hi";
let num: any = 2;
let flag: any = true;
num = "two"; // No error when reassigning any type.
```

## L5 - Arrays and Tuples

- Defined as: `let name: type[] = [values...]`
  `let names: string[] = ['a', 'b', 'c'];`
- Another way: `Array<type> = [values....]`
  `let counts: Array<number> = [1, 2, 3];`
- Reassigning a value to anything other than the array type gives an error.
- Heterogeneous arrays are allowed: `let random = [1, 2, "None"]`

## L6 - Tuples

- Fixed length.
- Elements are ordered, each with a specific type.
  `let employee: [number, string, boolean] = [123, "Chandler", true]`
- All elements must be in the order of the defined type.
  `let employee: [number, string, boolean] = [123, "Chandler", 23]` gives an error.
- Only the number of elements defined in the type can be assigned to a tuple.
  `let employee: [number, string, boolean] = [123, "Chandler", true, 124]` gives an error.
- Immutable: `employee[0] = 124` gives an error.

## L7 - Enums

- Enum is a datatype consisting of constant values.
- Used to define named constant values.
- Similar to `const` in JS but can create a group of all constants together.

```ts
enum UserRole {
    Admin = 1,
    Moderator = 2,
    User = 3,
}
```

- Usage: `let currentUserRole: UserRole = UserRole.User` gives 3 to the variable `currentUserRole`.
- If values are not added to constants in the enum, they are auto-assigned starting from 0.
```ts
enum UserRole {
    Admin,
    Moderator,
    User,
}
```
`let currentUserAdmin: UserRole = UserRole.Admin` gives 0 now.
`let currentUserRole: UserRole = UserRole.User` gives 2 now.
- Can initialize one of them, and others will be assigned automatically accordingly.
```ts
enum UserRole2 {
    Admin = 6,
    Moderator, // now 7
    User, // now 8
}
```
- Can be strings as well, but all must be initialized.
```ts
enum UserRole3 {
    Admin = 'Six',
    Moderator = 'four',
    User = 'xyz',
}
```
Else, an error occurs in the below:
```ts
enum UserRole3 {
    Admin = 'Six',
    Moderator,
    User,
}
```

## L8 - Functions in TypeScript

- Specify the parameter and return types.
  
 ``` ts
const concat = (firstname:string,lastname:string) => {
    return firstname+' '+lastname;
}
console.log(concat('Ayushi','Choudhary'));
```

- But someone might not have a lastname so to keep it optional we use a '?' before ':' showing this parameter is optional

```ts
const concat1 = (firstname:string,lastname?:string) => {
    return firstname+' '+lastname;
}

console.log(concat1('Ayushi'));
```

- Make parameters optional with `?` and provide default values.

```ts
const concat2 = (firstname: string, lastname: string = 'N/A') => {
    return firstname + ' ' + lastname;
}

console.log(concat2('Ayushi'));
```
