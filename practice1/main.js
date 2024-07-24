import * as console_app from "./console_app.js"
import { handle_user_info_input } from './input_handler.js'
import { validate_user_info_input } from './input_validator.js'

console_app.start_console_app(
    handle_user_info_input,
    validate_user_info_input
);
