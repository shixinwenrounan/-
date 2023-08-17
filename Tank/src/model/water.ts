
import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import water from "../canvas/water";

export default class extends modelAbstract implements IModel {
    
    public canvas: ICanvas = water;
    
    name: string = "water";
    
    render(): void {
        
        super.draw();
    };

    image(): HTMLImageElement {
        
        return image.get('water')!; 
    };
}