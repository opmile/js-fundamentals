## Naming Conventions
each programming language has their on patterns 

#### The Case-Sensitive Problem
```javascript
// running without any errors:
const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR);
```
picture this when wetalk about major code... what can go wrong?

so what's the best way to nominate? - conventions!
we use conventions to stat clean and consistent

1. camelCase: begin with lowercase and each first letter of next words are written in uppercase 
 -> `minhaVar`, `sonhaDoUsuario`
 -> used in js for variables and functions

2. snace_case: (underline) _ is used as " " (space) all in lowercase
 -> `minha_var`, `senha_do_usuario`

3. kebab-case: similiar as numb.2 but now with - (hifens) 
 -> `minha-var`, `senha-do-usuario`
 -> can't be used to name variables and functions in js since "-" means mathematical subtraction
 -> commomly used to name archives (practice-variables.js)

 4. PascalCase: similar to the camelCase, however all
 the first letter words begin with uppercase
 -> MinhaVar, SenhaDoCliente

when we talk about convention we mean best practices .
 * if you use any of the options above to name your variables in js, you've still got a running code
 * yet, following a convention is part of improving a legible good written code 

**ps.:** it is a good practice...
-> descriptice names: variabçes should clealy describe their purpose
-> avoid single letters (except for common cases like loop variables i, j, or mathematical variables x, y)