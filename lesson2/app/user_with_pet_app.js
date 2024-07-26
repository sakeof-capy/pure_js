import { createInterface as readline_create_interface } from "readline";

const readline = readline_create_interface({
    input: process.stdin,
    output: process.stdout
}); 

function free_readline(readline) {
    readline.close();
}

function read_console_input(message) {
    return new Promise((resolve) => {
        readline.question(message, (answer) => resolve(answer));
    });
}

// const penis_size = await read_console_input("Input your penis size: ");
// console.log(`your penis size: ${penis_size}`);

// const anal_diameter = await read_console_input("And also your anal diameter: ");
// console.log(`your anal diameter is: ${anal_diameter}`);

async function unit_io(login_text, output_message) {
    const user_input = await read_console_input(login_text);
    console.log(output_message, user_input);
}

async function unit_authentification(entity) {
    await unit_io(`Input ${entity} login: `, `${entity} login is: `);
    await unit_io(`Input ${entity} password: `, `${entity} password is: `);
}

await unit_authentification("your");

let user_pet_status = await read_console_input("Do you have a pet? ");
if (user_pet_status === "yes") {
    user_pet_status = true  
    await read_console_input("Congratulations!")
} else if (user_pet_status === "no") {
    user_pet_status = false
} else {
    user_pet_status = false
}

if (user_pet_status) {
    await unit_authentification("pet's");
}


 









free_readline(readline);