import { createInterface as readline_create_interface } from "readline";

export function provide_readline() {
    return readline_create_interface({
        input: process.stdin,
        output: process.stdout
    }); 
}

export function free_readline(readline) {
    readline.close();
}

export function read_console_input(readline, message) {
    return new Promise((resolve) => {
        readline.question(message, (answer) => resolve(answer));
    });
}

export function write_console_ouput(message) {
    console.log(message);
}
