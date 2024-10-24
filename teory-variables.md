## whe can define each type of variable declarion

#### 1. var
 -> function scope and global scope
  => if you declare a variable inside a fuction, it will
  only exist in that same function
  => in the same way, if you declare it out of any fuction, it will beacame a global variable, acessible in any part of the code
 -> reatribution is on
  => you can reatribute var variables any time you need
 -> hoisting is on
  => js elevates the var declaration to the top of the scope before runnning the code
    = the variable can be considered defined, even if you try to use it before the line it was declaraded (undefined until atribution event)
```javascript
console.log(nome); // undefined (hoisting effect)
var nome = 'Maria';
console.log(nome) // Maria
```

#### 2. let
 -> block scope
  => only exists inside the block it was created
    a block can be
    -> function
    -> loop
    -> condicional if
 -> reatribution is on
 -> hoisting is on
  => diffently from var variables, they're not initialized until the line of execution
   (it means that:
   if you try to acess a let variable before its
   declaration, you're getting a reference error)
```javascript
console.log(name); // Error: name is not defined
let nome = "João";
console.log(name); // João
```

#### 3. const
 -> block scope
  => only acessible inside the block it was defined
 -> reatribution is OFF
  => once attributed, the value can't be changed.
  however, if the value is an object or an array,
  your properties ou elements can be changed
```javascript
const idade = 25;
idade = 30; // Error: Assigment to constant variable
```

 -> hoisting is on
  => reference error until the line of declaration
```javascript
console.log(name); // Error: name is not defined
let nome = "João";
console.log(name); // João
```

## Global Scope
it means that a variable can be acessed at any part of
the code 
 -> when a variable is declared out of any function or 
 block, it's now accessible and can be used by anyone
```javascript
var glovalVar = "I'm at the global scope!";

function testarEscopo() {
    console.log(globalVar); // Acess the global variable
}

testarEscopo(); // "I'm at the global scope!

// var inside a function

function exemple() {
    var localVar = "I'm at the local scope!";
}

console.log(localVar); // Error: local var is not defined
```
