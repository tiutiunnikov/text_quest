export interface ILevel {
    levelOne(): boolean;
    levelTwo(): boolean;
    levelThree(): boolean;
    nextStep(): Promise<void>;
}

export interface IUserInterface {
    askUser(question: string, answers: string[]): Promise<number>;
    tellUser(text: string): void;
    end(): void;
}

export interface IHelloGoodbye {
    hello(): void;
    goodbye(): void;
}

export interface IScene {
    progress: boolean;
    nextStep(): Promise<void>;
}
