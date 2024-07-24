import { format } from './format.js'

export const END_USER_INFO_INPUT                        = "done";

export const HASHTAG_DELIMITOR_START                    = ">######################### USEGOG #########################>";
export const HASHTAG_DELIMITOR_END                      = "<######################### GOGESU #########################<";

export const INTRODUCTORY_DESCRIPTION_MESSAGE           = "Hello! You are using our console-handler for your user info.";
export const INTRODUCTORY_MESSAGE                       = HASHTAG_DELIMITOR_START + '\n'
                                                        + INTRODUCTORY_DESCRIPTION_MESSAGE;
export const ENTER_CHARACTERISTIC_NAME_MESSAGE          = "Please, enter the next characteristic: ";
export const ENTER_CHARACTERISTIC_VALUE_MESSAGE_FORMAT  = "Now enter your {}: "
export const ASK_TO_CONTINUE_OR_END_MESSAGE             = format("Input \"{}\" to end your user info: ", END_USER_INFO_INPUT);
export const RESULT_OUTPUT_MESSAGE                      = "Your user info was handled. The result:\n";

export const INVALID_INPUT_ERROR_MESSAGE                = "Invalid input!";

