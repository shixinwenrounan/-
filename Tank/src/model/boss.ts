
import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import boss from "../canvas/boss";

export default class extends modelAbstract implements IModel {
    
    public canvas: ICanvas = boss;
    
    name: string = "boss";
    
    render(): void {

        super.draw();
    };

    image(): HTMLImageElement {
        
        return image.get('boss')!; 
    };
}