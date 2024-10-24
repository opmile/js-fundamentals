### Easy Questions (1-10)

1. What does an `if` statement do in JavaScript?
2. Write the syntax of a basic `if` statement in JavaScript.
3. How does an `else` block work in an `if-else` statement?
4. What happens if the condition inside an `if` statement evaluates to `false` and there is no `else` block?
5. Can you nest an `if` statement inside another `if` statement? Provide an example.
6. What value types can be used as conditions inside an `if` statement?
7. What does `===` mean in JavaScript compared to `==`?
8. What is the purpose of the `else if` statement?
9. Can you have multiple `else if` conditions in a single `if` block?
10. What will be the output of the following code?
   ```javascript
   let num = 5;
   if (num > 10) {
     console.log("Greater");
   } else {
     console.log("Smaller");
   }
   ```

### Medium Questions (11-30)

11. Explain the difference between `if` and `else if`.
12. What is the significance of using curly braces `{}` in `if` statements?
13. Is the following code valid? If not, explain why:
   ```javascript
   if (5 > 3)
     console.log("True");
     console.log("Still True");
   ```
14. How can you make a condition check multiple conditions at once? Provide an example using logical operators (`&&`, `||`).
15. How would you refactor the following nested `if` statements using `else if`?
   ```javascript
   if (condition1) {
     // do something
   } else {
     if (condition2) {
       // do something else
     }
   }
   ```
16. Write a JavaScript code block that checks if a number is positive, negative, or zero.
17. How can you check if a variable is undefined or null in an `if` statement?
18. What is a ternary operator, and how is it used in place of an `if-else` statement? Provide an example.
19. Write a function that takes a number and returns "Even" if the number is even and "Odd" if it is odd using an `if` statement.
20. Can you use a switch statement instead of multiple `else if` conditions? Explain with an example.
21. What is the output of the following code and why?
   ```javascript
   let x = 10;
   if (x > 5 && x < 15) {
     console.log("In range");
   }
   ```
22. What are falsy values in JavaScript? Name at least 4 examples.
23. How can you combine multiple conditions into one using `&&` and `||` operators?
24. Refactor the following `if` statements using a logical OR (`||`) operator:
   ```javascript
   if (day === "Saturday") {
     console.log("Weekend");
   } else if (day === "Sunday") {
     console.log("Weekend");
   }
   ```
25. Can `if` statements be used inside a function? Provide an example.
26. Explain what short-circuit evaluation is with respect to `&&` and `||`.
27. What is the difference between checking a condition using `if (x)` and `if (x === true)`?
28. How would you check if a number is between two other numbers using an `if` statement?
29. What is a guard clause, and how can it be useful in `if` statements? Provide an example.
30. Can `if` statements affect the return value of a function? Demonstrate with an example.

### Challenging Questions (31-50)

31. Write a function that takes in a year and checks if it is a leap year using an `if` statement.
32. What is the output of this code, and why? 
    ```javascript
    let score = 85;
    if (score >= 90) {
      console.log("A");
    } else if (score >= 80) {
      console.log("B");
    } else {
      console.log("C");
    }
    ```
33. How does the JavaScript engine handle floating-point comparisons in `if` statements? Demonstrate with an example.
34. Can you use an `if` statement to filter an array of numbers that are greater than 10? Write a function to do this.
35. What is the difference between `if (x)` and `if (!x)`? Provide examples where both forms could be useful.
36. Write a JavaScript function that checks if a string is a palindrome using `if` statements.
37. Can an `if` statement inside a loop cause an infinite loop? Provide an example where this might happen.
38. How would you handle multiple conditions efficiently without using many `else if` statements? Provide two alternative strategies.
39. How would you debug an issue where an `if` condition is always evaluated as false, even though the value seems correct?
40. Write a function that takes a number and returns its factorial using recursion and `if` statements.
41. What are the performance implications of deeply nested `if` statements in a complex web application?
42. How can you refactor a large set of `if` conditions into a more maintainable code structure?
43. What are the risks of writing `if` statements with side effects (e.g., modifying variables or making function calls inside the condition)?
44. Write a function that takes an object and checks if it has a specific key, using an `if` statement.
45. Explain how JavaScript’s coercion rules might affect the behavior of `if` conditions involving non-boolean values.
46. What is the output of the following code and why?
    ```javascript
    let a = 0;
    if (a === false) {
      console.log("False");
    } else {
      console.log("True");
    }
    ```
47. How can you optimize an `if` statement that checks for multiple different string values? 
48. Write a function that simulates a basic login system, returning "Access granted" if the username and password match certain values, and "Access denied" otherwise.
49. Can `if` statements be used to create early exits from a function? Provide an example where this is useful.
50. How can you refactor this code using an `if` statement inside a loop?
    ```javascript
    let arr = [5, 10, 15];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 10) {
        console.log("Found 10");
        break;
      }
    }
    ``` 

These questions are designed to test a variety of skills from basic `if` logic to more complex conditional structures and performance considerations in real-world development.