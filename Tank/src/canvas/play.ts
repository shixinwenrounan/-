import canvasAbstract from "./canvas.ts";
import model from "../model/play.ts";
import config from "../config.ts";

export default new (class extends canvasAbstract implements ICanvas {

    render(): void {

        this.createModels();

        super.renderModel();

        // setInterval(() => this.renderModel(), config.timeout);
    };

    num(): number {
        return 0;
    };

    model(): ModelConstructor {
        return model;
    };

    // 创建模型，生成模型实例
    protected createModels() {

        const cw = config.canvas.width;

        const ch = config.canvas.height;

        const mw = config.model.width;

        const mh = config.model.height;

        [{ x: cw / 2 + mw * 3, y: ch - mh }].forEach(position => {

            let model = this.model() as ModelConstructor;

            const instance = new model(position.x, position.y);

            this.models.push(instance);
        });
    };

    // 循环渲染模型
    public renderModel() {
        
        this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
        
        super.renderModel();
    }
})('play');