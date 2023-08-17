import config from "../config.ts";
import canvasAbstract from "./canvas.ts";
import model from '../model/water.ts';

export default new (class extends canvasAbstract implements ICanvas {

    render(): void {

        super.createModels();

        super.renderModel();
    };

    num(): number {
        return config.water.num;
    };

    model(): ModelConstructor {
        return model;
    };
})('water');