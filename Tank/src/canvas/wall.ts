import config from "../config.ts";
import canvasAbstract from "./canvas.ts";
import model from '../model/wall.ts';

export default new (class extends canvasAbstract implements ICanvas {

    render(): void {

        super.createModels();

        this.createBossWall();

        super.renderModel();
    };

    num(): number {
        return config.wall.num;
    };

    model(): ModelConstructor {
        return model;
    };

    createBossWall() {

        const cw = config.canvas.width;

        const ch = config.canvas.height;

        const mw = config.model.width;

        const mh = config.model.height;

        const pos = [
            { x: cw / 2 - mw, y: ch - mh },
            { x: cw / 2 - mw, y: ch - mh * 2 },
            { x: cw / 2 - mw, y: ch - mh * 2 },
            { x: cw / 2 - mw, y: ch - mh * 2 },
            { x: cw / 2, y: ch - mh * 2 },
            { x: cw / 2 + mw , y: ch - mh * 2 },
            { x: cw / 2 + mw, y: ch - mh * 2 },
            { x: cw / 2 + mw, y: ch - mh }
        ];

        pos.forEach(position => {

            let model = this.model() as ModelConstructor;

            const instance = new model(position.x, position.y);

            this.models.push(instance);
        });
    }
})('wall');