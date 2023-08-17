import canvasAbstract from "./canvas.ts";
import model from "../model/tank.ts";
import config from "../config.ts";
import position from "../service/position.ts";

export default new (class extends canvasAbstract implements ICanvas {

    interval: number = 0;

    render(): void {

        this.createModels();

        this.renderModel();

        this.interval = setInterval(() => this.renderModel(), config.timeout);
    };

    num(): number {
        return config.tank.num;
    };

    model(): ModelConstructor {
        return model;
    };

    // 创建模型，生成模型实例
    protected createModels() {

        for (let i = 0; i < this.num(); i++) {

            const pos = position.position();

            let model = this.model();

            const instance = new model(pos.x, 0);

            this.models.push(instance);
        }
    };

    // 循环渲染模型
    public renderModel() {
        
        this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
        
        super.renderModel();
    };

    public stop() {

        clearInterval(this.interval);
    };
})('tank');