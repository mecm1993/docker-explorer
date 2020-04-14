import { CommandOption } from './CommandOption';

export class Command {
    value: string;
    label: string;
    usage: string;
    nb: string;
    options: Array<CommandOption>;
    constructor(value: string, label: string, usage: string, nb: string, options: Array<CommandOption>) {
        this.value = value;
        this.label = label;
        this.usage = usage;
        this.nb = nb;
        this.options = options;
    }
}