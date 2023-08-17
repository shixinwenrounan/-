import config from "../config.ts";
import canvasAbstract from "./canvas.ts";
import model from '../model/straw.ts';

export default new (class extends canvasAbstract implements ICanvas {

    render(): void {

        super.createModels();

        super.renderModel();
    };

    num(): number {
        return config.straw.num;
    };

    model(): ModelConstructor {
        return model;
    };
})('straw');