/// Class Work: for-in and for-of operators in JS

/*
    1. for-in iterates over keys of an entity 
    in case of arrays the keys are the indices so it iterates over indices 
    in case of objects it iterates over its keys (not values)
    
    Syntax:
        for (let key in entity) {
            // do smth with key:
            console.log(key)
        }

    2. for-of iterates over the main logical content of an entity
    in case of arrays it iterates over arrays' elements
    in case of objects it cannot decide what main logical contents are so it does not work for objects purely

    Syntax:
        for (let elem of entity) {
            // do smth with elem:
            console.log(elem)
        }
*/

{
    console.log("################## Array Entity ##################")

    // Creating an entity: array
    const array = [1, 2, 3, 4, 5]

    console.log("Traversing the contents of the array via regular for loop:")

    for (let i = 0; i < array.length; i++) {
        process.stdout.write(array[i] + ' ')
    }

    console.log()
    console.log("Traversing the indices of the array via for-in loop:")

    // Index is a key in an array
    for (let index in array) {
        process.stdout.write(index + ' ')
    }

    console.log()
    console.log("Traversing the contents of the array via for-of loop:")

    for (let elem of array) {
        process.stdout.write(elem + ' ')
    }
}

console.log("\n")

{
    console.log("################## String Entity ##################")

    // Creating an entity: string
    // Note: string can be referred to as an array of chars in this context
    const string = "Serduck loves Dianas feet"

    // This demonstrates that the string is just an array of chars
    console.log("printing char at index 6:", string[6]) 

    console.log("Traversing the contents of the string via regular for loop:")

    for (let i = 0; i < string.length; i++) {
        process.stdout.write(string[i] + ' ')
    }

    console.log()
    console.log("Traversing the indices of the string via for-in loop:")

    // Index is a key in a string
    for (let index in string) {             
        process.stdout.write(index + ' ')
    }

    console.log()
    console.log("Traversing the contents of the string via for-of loop:")

    // The contents of a string is its char set
    for (let char of string) {
        process.stdout.write(char + ' ')
    }
}

console.log("\n")

{
    console.log("################## Object Entity ##################")

    // Creating an entity: object
    const object = {
        name: 'serduck',
        love: 'diana', 
        enemy: 'maximus',
        weapon: 'beak'
    }

    console.log("Regular (\"static\") accessing of a value in the object:")
    console.log("name:", object.name)
    
    console.log("Dynamic accessing of a value in the object:")
    console.log("name:", object["name"])

    console.log("Traversing the values of the object via for-in loop:")
    for (let key in object) {
        // Accessing each value dynamically
        process.stdout.write(object[key] + ' ')
    }

    console.log()
    console.log("Direct traversal of the object via for-of loop is IMPOSSIBLE!!!")
    // It is impossible, because we cannot define the main logical contents of an object.
    // Are keys or values its main logical contents? Which one exactly?
    // Because of this ambiguity, it is decided to make objects non-iterable. 

    // Uncomment if you want to see an error:
    /*
        for (let elem of object) {
            process.stdout.write(elem + ' ')
        }
    */
}

// The Homework 1 is moved to lesson1/README.md
