import config from "../config.ts";
import canvasAbstract from "./canvas.ts";
import model from '../model/steel.ts';

export default new (class extends canvasAbstract implements ICanvas {

    num(): number {
        return config.steel.num;
    };

    model(): ModelConstructor {
        return model;
    };

    render(): void {

        super.createModels();

        super.renderModel();
    };
})('steel');