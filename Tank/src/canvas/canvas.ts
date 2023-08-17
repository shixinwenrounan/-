import config from '../config.ts';
import position from '../service/position.ts';

export default abstract class canvasAbstract{
    
    public models: IModel[] = [];

    abstract render(): void;

    abstract num(): number;

    abstract model(): ModelConstructor | BulletModelConstructor;

    constructor(
        protected name: string, 
        protected app = document.querySelector('#app') as HTMLDivElement,
        protected el = document.createElement('canvas'),
        public ctx = el.getContext('2d')!
    ) {

        this.createCanvas();
    }

    protected createCanvas() {

        this.el.width = config.canvas.width;

        this.el.height = config.canvas.height;

        this.el.setAttribute('name', this.name);

        this.app.insertAdjacentElement('afterbegin', this.el);
    };

    // 创建模型，生成模型实例
    protected createModels() {
        
        position.getCollection(this.num()).forEach(position => {

            let model = this.model() as ModelConstructor;

            const instance = new model(position.x, position.y);

            this.models.push(instance);
        });
    };

    // 循环渲染模型
    public renderModel() {

        this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
        
        this.models.forEach(model => model.render());
    };

    public removeModel(model: IModel) {

        this.models = this.models.filter(m => m != model);
    };
};