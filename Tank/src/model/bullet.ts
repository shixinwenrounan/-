
import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import bullet from "../canvas/bullet.ts";
import config from "../config.ts";
import { directionEnum } from "../directionEnum.ts";
import utils from "../utils.ts";
import wall from "../canvas/wall.ts";
import steel from "../canvas/steel.ts";
import boss from "../canvas/boss.ts";
import tank from "../canvas/tank.ts";
import play from "../canvas/play.ts";

export default class extends modelAbstract implements IModel {
    
    public canvas: ICanvas = bullet;
    
    name: string = "bullet";

    constructor(public tank: IModel) {

        super(tank.x + config.model.width / 2, tank.y + config.model.height / 2);

        this.direction = tank.direction as unknown as directionEnum;
    };

    render(): void {

        let x = this.x;

        let y = this.y;

        let step = this.tank.name === 'play' ? 10 : 6;

        switch (this.direction) {
            case directionEnum.top: y-=step; break;
            case directionEnum.right: x+=step; break;
            case directionEnum.bottom: y+=step; break;
            case directionEnum.left: x-=step; break;
        };

        // 碰撞检测
        const touchModel = utils.isModelTouch(x, y, 2, 2, [...wall.models, ...steel.models, ...boss.models, ...tank.models, ...play.models]);

        if (utils.isCanvasTouch(x, y, 2, 2)) {
            
            this.destroy();
        } else if (touchModel && touchModel.name !== this.tank.name) {

            this.destroy();

            if(touchModel.name != 'steel') touchModel.destroy();        
            
            this.blast(touchModel);
        } else {
            
            this.x = x;

            this.y = y;

            this.draw();
        };    
    };

    image() {

        return image.get("bullet")!;
    };

    protected draw() {

        this.canvas.ctx.drawImage(this.image(), this.x, this.y, 2, 2);
    }
}