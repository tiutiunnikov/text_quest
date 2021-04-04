import { ILevel } from "./interfaces";
import { UserInterface } from "./UserInterface";

const userInterface = new UserInterface();

/*
 - сдача задания
 - мы в аудитории, там есть препод и студенты
 надо узнать:
 - какие задачи сдавать
 - когда сдавать
 - попросить книгу
*/
export class Level implements ILevel {
    private taskKnown: boolean = false;
    private dateKnown: boolean = false;
    private textbookAcquired: boolean = false;

    nextStep(): Promise<void> {
        if (!this.taskKnown) {
            // узнать, что сдавать
            const situation =
                "You entered the room, you see the teacher and students.\n" +
                "You have no idea what are tasks to be sovled.\n";
            const responses = ["Ask the teacher", "Ask lazy student", "Ask nerdy student"];
            return userInterface.askUser(situation, responses)
                .then(response => { // асинхронный ответ от пользователя
                    switch (response) {
                        case 0:
                            userInterface.tellUser("Teacher: It is already posted on the site!");
                            break;
                        case 1:
                            userInterface.tellUser("Lazy student: I don't know, I hoped you will tell me and we'll go the the club tonight.");
                            break;
                        case 2:
                            userInterface.tellUser("Nerdy student: Sigh... tasks 76-77 from the book.");
                            this.taskKnown = true;
                            break;
                    }
                });
        }
        userInterface.end();
        return Promise.resolve();
    }

    levelOne(): boolean {
        return this.taskKnown;
    }

    levelTwo(): boolean {
        return this.dateKnown;
    }

    levelThree(): boolean {
        return this.textbookAcquired;
    }
}
