// for(let i = 100; i > 0; i -=2) {
//     console.log("i", i)
// };

// let i = 100;

// while (i > 0) {
//     console.log('i', i);
//     i-=2;
// }


// let age = 101;
// if (age >=  1 && age < 120) {
//     if (age > 50) {
//         console.log("you are an old man")                   
//     } else {
//         console.log("you are Maximus")
//     }
// } else {console.log("no way")}

// function verifyAge () {
//     let DimassAge = 0;
//     if (DimassAge < 1 || DimassAge >= 120) {
//         console.log("no way")
//         return;
//     }
//     if (age > 50) {
//         console.log("you are an old man")                   
//     } else {
//         console.log("you are Maximus")
//     }
// }

// let n = 100;

let SerduckInfo = {
    age: 0,
    description: "Looking for Diana",
    names: ["God", "Vasiyl", "Tyoma", "Dekan", "Palkan", "Starosta"]
};

for (let i = 1; i <=100; i ++) {
    SerduckInfo.age +=i
};

if (SerduckInfo.age > 5000) {
    SerduckInfo.description = "YOu are gay"
} else { SerduckInfo.description = "Looking for Diana"
}

let SerducksStrings = "";

for (i = 0; i < SerduckInfo.names.length; i++) {
    SerducksStrings += SerduckInfo.names[i] + ", "
}
// console.log(SerduckInfo)
// console.log(SerducksStrings)

// Home work
// 1. Make SerducksStrings end with dot instead of comma;
// 2. Create SerducksNewLineStrings that have new line characters instead of commas;
// 3. Recall what a forEach loop is in JS;


// 1.

    SerducksStrings = SerducksStrings.replace(/,/g, ".");
    console.log(SerducksStrings, '//SerducksStrings end with dot instead of comma')

// 2.

    let SerducksNewLineStrings = SerducksStrings.replace(/[.]/g, ' &')
    console.log(SerducksNewLineStrings, '//SerducksNewLineStrings that have new line characters instead of commas')



