import config from "../config.ts";
import canvasAbstract from "./canvas.ts";
import model from '../model/bullet.ts';
import tank from "./tank.ts";
import play from "./play.ts";
import music from "../service/music.ts";

export default new (class extends canvasAbstract implements ICanvas {

    interval: number = 0;

    num(): number {
        return config.steel.num;
    };

    model(): BulletModelConstructor {
        return model;
    };

    render(): void {

        this.interval = setInterval(() => {

            this.createBullet();
            
            this.renderModel();
        }, 40);
    };

    createBullet() {
        
        tank.models.forEach(tank => {

            const isExists = this.models.some(m => m.tank == tank);

            if (!isExists) { 

                this.models.push(new model(tank));
            };
        });
    };

    public addPlayBullet() {

        this.models.push(new model(play.models[0]));

        music.fire();
    }

    public stop () {
    
        clearInterval(this.interval);
    }
})('bullet');