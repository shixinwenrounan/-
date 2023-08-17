
import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import { directionEnum } from "../directionEnum";
import config from "../config";
import _ from 'lodash';
import tank from "../canvas/tank";
import utils from "../utils";

export default class extends modelAbstract implements IModel {
    
    public canvas: ICanvas = tank;
    
    name: string = "tank";

    render(): void {

        this.move();

        if (_.random(20) == 1) this.direction = directionEnum.bottom;
    };

    protected move(): void {

        while (true) {

            let x = this.x;
    
            let y = this.y;
    
            switch (this.direction) { 
    
                case directionEnum.top: y--;
                    break;
                case directionEnum.right: x++;
                    break;
                case directionEnum.bottom: y++;
                    break;
                case directionEnum.left: x--;
                    break;
            };
        
            if (utils.isModelTouch(x, y) || utils.isCanvasTouch(x, y)) { 

                this.randomDirection();
            } else {
                
                this.x = x;

                this.y = y;
            
                break;
            };
        };

        super.draw();
    }; 

    image() {

        let direction = this.name + _.upperFirst(this.direction); 

        return image.get(direction as keyof typeof config.images)!;
    };

    // protected isTouch(x: number, y: number): boolean {
        
    //     if (x == 0 || x + this.width > config.canvas.width || y < 0 || y + this.height > config.canvas.height) return true;

    //     const models = [...water.models, ...wall.models, ...steel.models];

    //     return models.some(model => {

    //         const state = x + this.width <= model.x || x > model.x + model.width || y + this.height <= model.y || y >= model.y + model.height;

    //         return !state;
    //     });
    // }
}