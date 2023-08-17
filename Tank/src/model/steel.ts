
import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import steel from "../canvas/steel";

export default class wall extends modelAbstract implements IModel {
    
    public canvas: ICanvas = steel;

    name: string = "steel";

    render(): void {
        
        super.draw();
    };

    image(): HTMLImageElement {
        
        return image.get('steel')!; 
    };
}