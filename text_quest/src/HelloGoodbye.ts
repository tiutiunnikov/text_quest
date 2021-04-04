import { IHelloGoodbye } from "./interfaces";

export class HelloGoodbye implements IHelloGoodbye {
    hello(): void {
        console.log("Welcome to our quest!");
    }

    goodbye(): void {
        console.log("Thanks for playing!");
    }
}
