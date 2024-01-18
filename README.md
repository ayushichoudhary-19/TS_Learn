"# TS_Learn" 


## L1

- TS has types for variables unlike JS, so when type is not specified it gives it the type 'any' by default.

- JS is a dynamic typing language means data type of variable are determined at run time after code is executed. Thus in JS no errors are given at typing/compile time.

- TS is JS with types. 

- TS is a statically typed language - All type checking is done at compile time only

- JS gives no error for below:
` console.log(null*4)` prints 0 instead. But TS gives error.

### Advantages of TS

1. Type Safety
2. Strict Null Checks
3. Improved Code Quality
4. Scalability 
5. Community Support

### How TypeScript Works?

In TS some additional syntax/features are there which are not understood by js environment like browser and node.js etc. So, firstly TS is compiled to a JS code using a TypeScipt Compiler and then it runs.


# L2 
- Install TS
`npm install typescript`
- tsc is command line interface for TS.
- tsc is also converts ts to js code.
`tsc filename.ts`
- A js file is automatically created. Now
`node filename.js`


# L3
- Type Annotation: let var:type = value
- We cant reassign one type var to another type
    ```ts
    let count: number = 24;
    count = "TypeScript"
    ``` 
    is an error.
- When type is not declared, Type inferencing is done and TS infers its type as any
- Sometimes not explicitely defining type can cause errors.

# L4

```ts
let character: any = "hi"
let num:any = 2;
let flag:any = true;
num="two";

```
- Reassigning any type to another type gives no error

# L4
- Defined as: let name: type[] = [values...]
`let names:string[] = ['a','b','c'];`
- Another way: Array<type> = [values....]
`let counts:Array<number> = [1,2,3]`
- We get an array is we change value and set it to anything other than array type.
- We can have heteregenour array as well
`let random = [1,2,"None"]`

# L5
- Fixed length
- Each elements are ordered with each element having a particular type
 `let employee: [number,string,boolean] = [123,"Chandler",true]`
- All elements need to be in order of type defined
  `let employee: [number,string,boolean] = [123,"Chandler",23]` gives error
- Only the number of elements defined in type can be assigned to tuple
 `let employee: [number,string,boolean] = [123,"Chandler",true, 124]` gives error
- Immutable
    `employee[0]=124` gives error

# L6
- Enum is a dataype onsisting of constant values.
- Used to define named constant values, which are used a lot in our program but their values are not changed.
- Similar to `const` in js but in this we can create a group of all constants together

```ts
const Admin = 1
const Moderator = 2
const User=3
```
- We can define the above together like:
```ts
enum UserRole{
    Admin = 1,
    Moderator = 2,
    User=3, 
}
```
- Usage
`let currentUserRole: UserRole = UserRole.User` gives 3 to variable currentUserRole

- If we do not add values to constants in enum they auto assign starting constant with a 0 and following constant are assigned 1,2,3..so on
```ts
enum UserRole{
    Admin
    Moderator
    User
}
```
`let currentUserAdmin: UserRole = UserRole.Admin` gives 0 now
`let currentUserRole: UserRole = UserRole.User` gives 2 now

- Can initiliaze one of them and others will be assigned automatically accordingly

```ts
enum UserRole2{
    Admin=6,
    Moderator, //now 7
    User, //now 8
}
```

-Can be strings also, but here they all must be initialized
```ts
enum UserRole3{
    Admin='Six',
    Moderator='four',
    User='xyz', 
}
```
- Else we get an error in the below
```ts
enum UserRole3{
    Admin='Six',
    Moderator,
    User,
}
```

# L8
- In functions we need to give type of two things one for values passed one for values returned(return type of function)
- 
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

- We can define a default value for each parameter if it is not passed.

```ts
const concat2 = (firstname:string,lastname:string='N/A') => {
    return firstname+' '+lastname;
}

console.log(concat1('Ayushi'));

```