import config from "../config.ts";
import canvasAbstract from "./canvas.ts";
import model from '../model/boss.ts';

export default new (class extends canvasAbstract implements ICanvas {

    render(): void {

        this.createModels();

        super.renderModel();
    };

    num(): number {
        return 1;
    };

    model(): ModelConstructor {
        return model;
    };

    protected createModels() {
        
        [{ x: config.canvas.width / 2, y: config.canvas.height - config.model.height }].forEach(position => {

            let model = this.model() as ModelConstructor;

            const instance = new model(position.x, position.y);

            this.models.push(instance);
        });
    };
})('boss');