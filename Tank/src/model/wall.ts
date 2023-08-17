
import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import wall from "../canvas/wall";

export default class extends modelAbstract implements IModel {
    
    public canvas: ICanvas = wall;

    name: string = "wall";

    render(): void {
        
        super.draw();
    };

    image(): HTMLImageElement {
        
        return image.get('wall')!; 
    };
}