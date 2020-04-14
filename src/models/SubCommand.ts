import { CommandOption } from './CommandOption';

export class SubCommand {
    value: string;
    label: string;
    usage: string;
    options: Array<CommandOption>;
    constructor(value: string, label: string, usage: string, options: Array<CommandOption>) {
        this.value = value;
        this.label = label;
        this.usage = usage;
        this.options = options;
    }
}