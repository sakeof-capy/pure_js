# Pure JS learning process.

### Homework 1:
1.  Create separate branch.
    1.1 Push the "Homework 0" (done previously) to lesson0/homework.js to it.
    1.2 Create pull request for the created branch. 
    1.3 Wait until the review is done.
    1.4 Read the comments left in review.
    1.5 Modify the homework so that they meet the requirements mentioned in the comments.
    1.6 Ask for another review.
    1.7 If you receive an approval, merge your pull request.
    1.8 If not, just follow the newly left comments again.

2.  Create separate branch again
    2.1 Also create the "Draft Pull Request" for it AT THE BEGINNING OF YOUR WORK ON THIS PART OF THE HOMEWORK
    2.2 Do the following homework (step 3) in lesson1/homework.js, push the changes to the repo.
        (after that follow the common procedure of managing pull request described in step 1)
    2.3 Try to split your work into several commits consistently, so that each commit's message will briefly describe
        the changes the commit applies. Each commit must contain a single logical part of the task. Do not fit many things in one commit!

3. Actual JS homework:
    3.1. Find the way to traverse keys of an object via regular for loop (and provide an example).
    3.2. Find the way to traverse values of an object via regular for loop (and provide an example).
    3.3. Find the way to traverse both keys and values of an object via regular for loop (and provide an example).
    3.4. There's `some_big_nested_stuff` in lesson1/homework.js. Do the following manipulations with it:
        3.4.1. Print all the keys of `some_big_nested_stuff`: `"a b c d e f g h i j"`.
        3.4.2. Get the value "fuck_a" out of the `some_big_nested_stuff`.
        3.4.3. Print all the elements of the value-array corresponding to `field_f`: `ffff 2_ff`.
        3.4.4. Print all the keys of the level 1 nested objects: `field_a field_aa field_b field_bb field_c field_cc field_d field_dd field_e field_ee field_f field_ff field_g field_gg field_h field_hh field_i field_ii field_jj`.
        3.4.5. Print all the values of the `{ i1: "fuck_i", h2: "i_i_i" }` object that is nested inside `some_big_nested_stuff`: `fuck_i`, `i_i_i`
        3.4.6.* Print all the values that are wrapped in quotes in the exact following order: `aaaa, 2_aa, fuck_a, a_a_a, bbbb, 2_bb, fuck_b, b_b_b, ...`
        Note: It's forbidden to hardcode the wanted values (you can't do `console.log("a b c d e f g h i j")` to do the 3.4.1 step)! Use all the known for-loops.