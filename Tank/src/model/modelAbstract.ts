import config from "../config";
import { directionEnum } from "../directionEnum";
import music from "../service/music";

export default abstract class modelAbsract{
    
    abstract render(): void;

    abstract image(): HTMLImageElement;

    abstract name: string;

    public abstract canvas: ICanvas;

    public direction: directionEnum = directionEnum.bottom;

    public width = config.model.width;

    public height = config.model.height;

    constructor(public x: number, public y: number) {

        this.randomDirection();
    };

    protected draw() {

        this.canvas.ctx.drawImage(this.image(), this.x, this.y, config.model.width, config.model.height);
    }

    // 随机方向
    protected randomDirection() {

        const index = Math.floor(Math.random() * 4);

        this.direction = Object.keys(directionEnum)[index] as directionEnum;
    };

    public destroy() {
        
        this.canvas.removeModel(this);

        this.canvas.renderModel();
    };

    protected blast(model: IModel) {

        music.blast();

        Array(...Array(8).keys()).reduce((promise, index) => {

            return new Promise(resolve => {

                setTimeout(() => {

                    const img = new Image();

                    img.src = `/src/static/images/blasts/blast${index}.gif`;

                    img.onload = () => {

                        this.canvas.ctx.drawImage(img, model.x, model.y, model.width, model.height);

                        resolve(promise);
                    };
                }, 100);
            })
        }, Promise.resolve());
    }
};