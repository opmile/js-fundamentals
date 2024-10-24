a group of characteres is called a 'string'
-> you can choose '' or "" 
```javascript
let student = "Caroline";
let teacher = 'Ana';
// -> two strings to be stored in the computer's memory

console.log(student, teacher); // Caroline Ana
// to run node.js
```

! we can acess node using the terminal
-> make sure you're using the right folder!
```terminal
node <folder-name>.js
```
-> you can repeat the last command you used by pressing the up arrow on your keyboard

let's think about reassinging `let` variables
```javascript
let student = "Caroline";
let teacher = 'Ana';

student = "Mariana";

console.log(student, teacher); // Mariana Ana
```
comparing the first and the second output:
1. Caroline Ana
2. Mariana Ana
we want to avoid this behavior!
 -> when we reserve a space in computer's memory for a variable, we wouldn't want that another part of the code could have acess it

althugh we call them 'variables', our desire is that their value couldn't be changed in other parts of the code

if we want be consistent, we use constant variables, and that's what you want to adopt
```javascript
const student = "Caroline";
let teacher = 'Ana';

student = "Mariana";

console.log(student, teacher); // Error: Assigment to a constant variable
// constant varaibles can't be reassigned
```

**ps.:** 
when a bug happends use the terminal to locate the error 
```
C:\Users\milen\OneDrive\Documentos\VS Code\JavaScript\introdução-js:4
```
-> ":4" -- error: line 4

**ps.:** 
we have a particularity with `const` and `let`. we can break `let`in two parts
1. line of assignment
2. line of value assignment
```javascript
let teacher;
teacher = "Ana"
// permited in let variables

const student = "Caroline"
// is the only acceptable way to use constant variables
```


resuming the opera...
1. always use `const`, use `let` only when truly necessary to be a reassingable value
2. we don't use `var` anymore (the problem of the global scope)