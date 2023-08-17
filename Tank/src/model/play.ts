
import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import { directionEnum } from "../directionEnum";
import _ from 'lodash';
import utils from "../utils";
import play from "../canvas/play";
import bullet from "../canvas/bullet";

export default class extends modelAbstract implements IModel {
    
    public canvas: ICanvas = play;
    
    name: string = "play";

    bindEventState = false;

    render(): void {

        super.draw();

        !this.bindEventState && this.bindEvent();
    };

    image() {

        let direction = this.name + _.upperFirst(this.direction); 

        return image.get(direction as any)!;
    };

    bindEvent() {
        document.addEventListener("keydown", e => { 

            this.bindEventState = true;

            this.changeDirection(e);
        });

        document.addEventListener("keydown", e => {

            if (e.code == 'Space') {
                
                bullet.addPlayBullet();
            }            
        });
    };

    changeDirection(event: KeyboardEvent) {

        let x = this.x;

        let y = this.y;

        switch (event.code) { 

            case 'ArrowUp':
                this.direction = directionEnum.top;
                y -= 5;
                break;
            case 'ArrowRight':
                this.direction = directionEnum.right;
                x += 5;
                break;
            case 'ArrowDown':
                this.direction = directionEnum.bottom;
                y += 5;
                break;
            case 'ArrowLeft':
                this.direction = directionEnum.left;
                x -= 5;
                break;
        };

        if (utils.isCanvasTouch(x, y) || utils.isModelTouch(x, y)) {
          
            return;
        };

        this.x = x;

        this.y = y;

        this.canvas.renderModel();
    };
}