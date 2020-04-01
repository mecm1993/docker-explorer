export class CommandOption {
    flag: string;
    message: string;
    constructor(flag: string, message: string) {
        this.flag = flag;
        this.message = message;
    }
}