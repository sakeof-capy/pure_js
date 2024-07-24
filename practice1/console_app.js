import * as io from './console_io.js'
import * as messages from './message_constants.js'
import { format } from './format.js'

export async function start_console_app(user_info_input_handler, user_info_input_validator) {
    const readline = io.provide_readline();
    const read_input = async (message) => await io.read_console_input(readline, message);

    greet();

    const user_info = await read_user_info_object(read_input);
    const output = map_input_to_output(user_info, user_info_input_handler, user_info_input_validator);
    io.write_console_ouput(output);

    io.free_readline(readline);
}

function greet() {
    io.write_console_ouput(messages.INTRODUCTORY_MESSAGE);
}

async function read_user_info_object(read_input) {
    let accumulated_object = {};
    let keep_running = true;

    while (keep_running) {
        io.write_console_ouput(messages.HASHTAG_DELIMITOR_START);

        const characteristic_name = await read_input(messages.ENTER_CHARACTERISTIC_NAME_MESSAGE);
        const formatted_value_request = format(messages.ENTER_CHARACTERISTIC_VALUE_MESSAGE_FORMAT, characteristic_name);
        const characteristic_value = await read_input(formatted_value_request);
        
        accumulated_object[characteristic_name] = characteristic_value;
        keep_running = await ask_if_continue_filling_user_info(read_input);
        
        io.write_console_ouput(messages.HASHTAG_DELIMITOR_END);
    }

    return accumulated_object;
}

function map_input_to_output(user_info, user_info_input_handler, user_info_input_validator) {
    if (!user_info_input_validator(user_info)) {
        return messages.INVALID_INPUT_ERROR_MESSAGE;
    }

    const handled_user_info = user_info_input_handler(user_info);
    const successful_output = messages.RESULT_OUTPUT_MESSAGE + handled_user_info;
    return successful_output;
}

async function ask_if_continue_filling_user_info(read_input) {
    const done_or_not_input = await read_input(messages.ASK_TO_CONTINUE_OR_END_MESSAGE);
    return done_or_not_input.toLowerCase() !== messages.END_USER_INFO_INPUT.toLowerCase();
}
