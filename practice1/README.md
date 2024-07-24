# Practice 1

## Intro

Practice tasks are aimed to clarify the actual value of programming tools being learned in the context of real projects. Practice tasks are made up by a not that simple codebase that is at some scale reflecting the complexity and the structure of real projects.

You are mainly not expected to make many changes to the codebase. You are to modify just a few files, implementing just a small module of the whole project. That simulates the real work of programmers, so practices must be a valid experience indeed.

## Domain Description

You are provided with a mostly implemented console app. It is designed to user input via CLI and interpret is as a "User Info". User Info is just a set of key-value pairs that satisfies the following set of conditions:
- it contains a pair with "Name" as a key;
- each string (either key or value) starts with a capital letter or a digit.

Example of validating a user info:
- `{ "Age": "18" }` is invalid (because there's no "Name");
- `{ "age": "19", "Name": "Gogi" }` is invalid (because "age" is not capitalized);
- `{ "Age": "20", "Name": "Gogi" }` is valid.

User inputs this User Info and the app validates user's input and handles it (maps to an output). The output of handling a VALIDATED user info is the representation of the user info satisfying the conditions:
- each key is capitalized;
- value is left as it is;
- there's a " - " separator between each key and value;
- all the pairs are separated by "; " and the last one has a trailing ".".

If the behaviour of handling an INVALID user info is undefined.

Example of handling a user info:
- `{ "Age": "20", "Name": "Gogi", "Interest": "Sausages" }` -> `"AGE - 20; NAME - Gogi; INTEREST - Sausages."`
- `{ "Age": "19" }` -> `"AGE - 19."`
- `{}` -> `""`

## Usage

To run the console app run the following command from the `practice1` subfolder:
```bash
npm start
```

After that follow the instructions forwarded via CLI. An example of using the app:
```
>######################### USEGOG #########################>
Hello! You are using our console-handler for your user info.
>######################### USEGOG #########################>
Please, enter the next characteristic: Name
Now enter your Name: Gogi
Input "done" to end your user info: not done yet
<######################### GOGESU #########################<
>######################### USEGOG #########################>
Please, enter the next characteristic: Age
Now enter your Age: 20
Input "done" to end your user info: done
<######################### GOGESU #########################<
Your user info was handled. The result:
TODO: Implement the handling functionality
```

In the example you can see inputing the following user info: `{ "Name": "Gogi", "Age": "20" }`.

## Task

You may have noticed the `TODO: Implement the handling functionality` line in the usage example. This is actually the place where your task starts. After the user inputs the user info, two crucial things happen:
1. `validate_user_info_input` function is called. The object representing the input user info is passed to it as a single parameter.
2. If `validate_user_info_input` returns `false`, nothing is done then; otherwise, `handle_user_info_input` is called on the already validated user info.

Your task is to:
- Implement `validate_user_info_input`, which accepts a user info and returns true if the user info is valid according to Domain Description; false otherwise;
- Implement `handle_user_info_input`, which accepts an ALREADY VALICATED USER INFO and returns the string representing the handled version of the user info (according to Domain Description).

Note: you are to modify only `./practice1/input_validator.js` and `./practice1/input_handler.js`. Do not touch any other files.
