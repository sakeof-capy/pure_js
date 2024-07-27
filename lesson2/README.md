# Homework 2

## Title: Functions

### Theory
- Revise how the functions return the values.
- Recall the applications of `return` keyword.

### homework.js

#### Basic Complexity

You have to implement the following functions in `homework.js`:
1. a function that replaces all the commas in a (specified) string with dots;
2. a function that replaces all commas in a (specified) string with another (specified) string;
3. a function that replaces all commas in a (specified) string with any other (specified) CHARACTER; inputting a multy-char string instead of character must lead to an `undefined` to be returned;
4. a function that replaces all the occurences of the (specified) character in a (specified) string with another (specified) string; inputting a mmulty-char string instead of a character must lead to an `undefined` to be returned; 
5. (*) a function that replaces all the occurences of a (specified) substring in a (specified) string with another (specified) substring. No replaces must be done in case of blank FIRST substring input.

Examples to each step:
1. f1(`"a,b,c,dg,"`)        -> `"a.b.c.dg."`
2. f2(`"a,b,c"`, `"GOGI"`)  -> `"aGOGIbGOGIc"`
3. f3(`"a,b,c"`, `'K'`)     -> `"aKbKc"`                |       f3(`"a,b,c"`, `'GOGI'`) -> `undefined` (multy-string instead of character error)
4. f4(`"akbka"`, `'k'`, `"GOGI"`) -> `"aGOGIbGOGIa"`    |       f4(`"akbka"`, `'kb'`, `"GOGI"`) -> `undefined` (multy-string instead of character error)
5. f5(`"abcdef"`, `"cd"`, `GOGI`) -> `"abGOGIef"`       |       f5(`"abcdef"`, `""`, `GOGI`) -> `"abcdef"` (blank FIRST substring input case)

*WARNING: DO NOT NAME FUNCTIONS AS `f1`, `f2` AND SO ON. GIVE THEM CONSISTENT NAMES!*

#### Advanced Complexity

In `lesson2/homework.js` you can see constant strings: `f1_name`, `f2_name`, `f3_name`, `f4_name`, `f5_name`, and constant object `test_cases`. `f*_name` strings are meant to point to the names of the functions you will implement for each step of "Basic Complexity" task. So you are to modify those constants to correspond to the names of your functions.

The `test_cases` object contains the data that can be used to test the functions you implemented. You can refer to a "Test Case" as to a set of parameters the function will be called with during testing + the expected result of the function. Each test case in the `test_cases` objects is related to the specific function.

For example, suppose we have function `add` which adds two numbers and function `subtract` that subtracts two numbers:

```js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
```

To test those two functions, let's design a `test_cases` object for them (absolutely similar to the one in `homework.js`). It would look like that:

```js
const test_cases = {
    add: [
        [[2, 2], 4],  // 2 + 2 === 4
        [[1, 0], 1],  // 1 + 0 === 1
    ],
    subtract: [
        [[3, 2], 1],  // 3 - 2 === 1
        [[4, 0], 4],  // 4 - 0 === 4
        [[3, 4], -1], // 3 - 4 === -1
    ],
};
```

To intuitively understand this, you can read it as follows: "To test function add we check if add(2, 2) === 4 and add(1, 0) === 1; if the checks are correct then function add works correctly. After that, to test function subtract we check if subtract(3, 2) === 1 and subtract(4, 0) === 4 and subtract(3, 4) === -1; if the checks are correct, then function subtract works correctly."

The structure is the following:
- Each entry of the `test_cases` object has the following structure: <function_name> : <array_of_its_test_cases>;
- Each test case has the following structure: [<function_parameter_values>, <expected_result>];
- Function parameter values is just an array of values: [value1, value2, value3, ...];

Your task is to run all the test cases present in the `test_cases` object in lesson2/homework.js and check if the functions you implemented work. If the test cases for some function pass, do the console.log('Passed tests for <function_name>.'). If at least one test case fails for the function, for each failed test case do console.log("Failed test case for <function_name>:", failed_test_case).

For example, the output of testing the `add` and `subtract` functions are:
```
Passed tests for add.
Passed tests for subtract.
```
