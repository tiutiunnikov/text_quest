import { HelloGoodbye } from "./HelloGoodbye";
import { Scene } from "./Scene";
import { IScene, IHelloGoodbye } from "./interfaces";

const helloGoodbyer: IHelloGoodbye = new HelloGoodbye(); // создаём экземпляр класса
const scene: IScene = new Scene();

helloGoodbyer.hello(); // вызываем метод у экземпляра класса
function go() {
    scene.nextStep().then(() => {
        if (scene.progress) {
            go();
        } else {
            helloGoodbyer.goodbye();
        }
    });    
}
go();


