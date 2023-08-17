
import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import straw from "../canvas/straw";

export default class extends modelAbstract implements IModel {
    
    public canvas: ICanvas = straw;
    
    name: string = "straw";
    
    render(): void {

        super.draw();
    };

    image(): HTMLImageElement {
        
        return image.get('straw')!; 
    };
}