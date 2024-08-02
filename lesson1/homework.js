const some_big_nested_stuff = {
    a: {
        field_a: ["aaaa", "2_aa"],
        field_aa: [{ a1: "fuck_a", h2: "a_a_a" }]
    },
    b: {
        field_b: ["bbbb", "2_bb"],
        field_bb: [{ b1: "fuck_b", h2: "b_b_b" }]
    },
    c: {
        field_c: ["cccc", "2_cc"],
        field_cc: [{ c1: "fuck_c", h2: "c_c_c" }]
    },
    d: {
        field_d: ["dddd", "2_dd"],
        field_dd: [{ d1: "fuck_d", h2: "d_d_d" }]
    },
    e: {
        field_e: ["eeee", "2_ee"],
        field_ee: [{ e1: "fuck_e", h2: "e_e_e" }]
    },
    f: {
        field_f: ["ffff", "2_ff"],
        field_ff: [{ f1: "fuck_f", h2: "f_f_f" }]
    },
    g: {
        field_g: ["gggg", "2_gg"],
        field_gg: [{ g1: "fuck_g", h2: "g_g_g" }]
    },
    h: {
        field_h: ["hhhh", "2_hh"],
        field_hh: [{ h1: "fuck_h", h2: "h_h_h" }]
    },
    i: {
        field_i: ["iiii", "2_ii"],
        field_ii: [{ i1: "fuck_i", h2: "i_i_i" }]
    },
    j: {
        field_j: ["jjjj", "2_jj"],
        field_jj: [{ j1: "fuck_j", h2: "j_j_j" }]
    },
}


//1.1
// let object = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// let entries_array_from_object = Object.entries(object)

// for (let i = 0; i < entries_array_from_object.length; i++) {
//    console.log(entries_array_from_object[i])
// }

//1.2

// let keys_array_from_object = Object.keys(object)

// for (let i = 0; i < keys_array_from_object.length; i++) {
//     console.log(keys_array_from_object[i])
// }

//1.3

// let values_array_from_object = Object.values(object)

// for (let i = 0; i < values_array_from_object.length; i++) {
//     console.log(values_array_from_object[i])
// }

//2.1
// - Print all the keys of `some_big_nested_stuff`: `"a b c d e f g h i j"`.

// let keys_array_from_object = Object.keys(some_big_nested_stuff)

// for (let i = 0; i < keys_array_from_object.length; i++) {
//     console.log(keys_array_from_object[i])
// }

// for (let key in some_big_nested_stuff) {
//     console.log(key)
// }

//2.2
// - Get the value "fuck_a" out of the `some_big_nested_stuff`.

// console.log(some_big_nested_stuff.a.field_aa[0].a1)

//2.3
// - Print all the elements of the value-array corresponding to `field_f`: `ffff 2_ff`.

// let field_f_array = some_big_nested_stuff.f.field_f

// for (let value of field_f_array) {
//     console.log("filed_f_array values:",value)
// } 

//2.4
// - Print all the keys of the level 1 nested objects:

// let entries_array_from_some_stuff 
//     = Object.entries(some_big_nested_stuff);

// for (let entry of entries_array_from_some_stuff) {
//     const [_, field_key] = entry
//     console.log("outer loop iteration")
//     for (let key in field_key) {
//         console.log("inner loop iteration")
//         console.log(key)
//     }
// }

//2.5
// - Print all the values of the `{ i1: "fuck_i", h2: "i_i_i" }` object that is nested inside `some_big_nested_stuff`: `fuck_i`, `i_i_i`

let object_element = some_big_nested_stuff.i

// console.log(object_element)

let entries_element = Object.entries(object_element)[1];

    if (entries_element !== undefined) { 
        let [_ , values] = entries_element
        if (values[0] !== undefined) {
            for (let value of Object.values(values[0])) {
                console.log("value", value)
            }
        } else {
            console.log("elemeny does not exist")
        }
        } else {
            console.log("elemeny does not exist")
        }
        

