# Pure JS learning process.

### Homework 1:
1.  Create separate branch.
    - Push the "Homework 0" (done previously) to lesson0/homework.js to it.
    - Create pull request for the created branch. 
    - Wait until the review is done.
    - Read the comments left in review.
    - Modify the homework so that they meet the requirements mentioned in the comments.
    - Ask for another review.
    - If you receive an approval, merge your pull request.
    - If not, just follow the newly left comments again.

2.  Create separate branch again
    - Also create the "Draft Pull Request" for it AT THE BEGINNING OF YOUR WORK ON THIS PART OF THE HOMEWORK
    - Do the following homework (step 3) in lesson1/homework.js, push the changes to the repo.
        (after that follow the common procedure of managing pull request described in step 1)
    - Try to split your work into several commits consistently, so that each commit's message will briefly describe
        the changes the commit applies. Each commit must contain a single logical part of the task. Do not fit many things in one commit!

3. Actual JS homework:
    - Find the way to traverse keys of an object via regular for loop (and provide an example).
    - Find the way to traverse values of an object via regular for loop (and provide an example).
    - Find the way to traverse both keys and values of an object via regular for loop (and provide an example).
    - There's `some_big_nested_stuff` in lesson1/homework.js. Do the following manipulations with it:
        - Print all the keys of `some_big_nested_stuff`: `"a b c d e f g h i j"`.
        - Get the value "fuck_a" out of the `some_big_nested_stuff`.
        - Print all the elements of the value-array corresponding to `field_f`: `ffff 2_ff`.
        - Print all the keys of the level 1 nested objects: `field_a field_aa field_b field_bb field_c field_cc field_d field_dd field_e field_ee field_f field_ff field_g field_gg field_h field_hh field_i field_ii field_jj`.
        - Print all the values of the `{ i1: "fuck_i", h2: "i_i_i" }` object that is nested inside `some_big_nested_stuff`: `fuck_i`, `i_i_i`
        - (Advanced) Print all the values that are wrapped in quotes in the exact following order: `aaaa, 2_aa, fuck_a, a_a_a, bbbb, 2_bb, fuck_b, b_b_b, ...`
        - Note: It's forbidden to hardcode the wanted values (you can't do `console.log("a b c d e f g h i j")` to do the 3.4.1 step)! Use all the known for-loops.