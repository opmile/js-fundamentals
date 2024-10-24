In JavaScript, the `if` statement is used to execute code based on a condition. If the condition evaluates to `true`, the block of code inside the `if` statement runs. If it evaluates to `false`, the code in an optional `else` block will be executed.

### Syntax:

```javascript
if (condition) {
  // Code to run if condition is true
} else {
  // Code to run if condition is false (optional)
}
```

- **`condition`**: This is any expression that evaluates to `true` or `false`. For example, `x > 5` or `isLoggedIn === true`.
- **If-else**: The `else` block is optional and is executed when the condition is false.
- **Multiple conditions**: You can add more conditions using `else if`.

### Example:

```javascript
let number = 10;

if (number > 10) {
  console.log("The number is greater than 10.");
} else if (number === 10) {
  console.log("The number is exactly 10.");
} else {
  console.log("The number is less than 10.");
}
```

In this example:
- If `number` is greater than 10, it logs "The number is greater than 10."
- If `number` is exactly 10, it logs "The number is exactly 10."
- If neither condition is true, it logs "The number is less than 10."

### Nesting Conditions:
You can also nest `if` statements inside one another for more complex logic.

```javascript
if (condition1) {
  if (condition2) {
    // Code to run if both condition1 and condition2 are true
  }
}
```

This allows for more refined control over the flow of logic. However, it's important to keep your code readable by using proper indentation and avoiding excessive nesting 【10†source】. 

For further details, you can explore the [MDN Web Docs on `if...else` statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).