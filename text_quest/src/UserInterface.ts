import * as readline from 'readline';
import { IUserInterface } from './interfaces';

export class UserInterface implements IUserInterface {
    readline: readline.Interface;
    constructor() {
        this.readline = readline.createInterface({ input: process.stdin, output: process.stdout });
    }

    askUser(situation: string, responses: string[]): Promise<number> {
        // SITUATION
        //
        // 1) RESPONSE A
        // 2) RESPONSE B
        // ...
        const text = situation + '\n'
            + responses.map((text, index) => `${index + 1}) ${text}`).join('\n') + '\n';
        return new Promise(resolve => {
            const ask = () => {
                this.readline.question(text, (answer: string) => {
                    const num = parseInt(answer);
                    if (Number.isNaN(num) || num <= 0 || num > responses.length) {
                        ask();
                    } else {
                        resolve(num - 1);
                    }
                });
            }
            ask();
        });
    }

    tellUser(text: string): void {
        this.readline.write(text + '\n');
    }

    end() {
        this.readline.close();
    }
}
