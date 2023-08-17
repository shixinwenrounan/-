/// <reference types="vite/client" />

interface ModelConstructor {
    new(x: number, y: number): IModel;
}

interface BulletModelConstructor {
    new(tank: IModel): IModel;
}

// 模型类接口
interface IModel {
    render(): void;
    image(): HTMLImageElement;
    x: number;
    y: number;
    width: number;
    height: number;
    tank?: IModel;
    direction?: string;
    destroy(): void;
    name: string;
};

// 画布类接口
interface ICanvas {
    num(): number;
    model(): ModelConstructor | BulletModelConstructor;
    ctx: CanvasRenderingContext2D;
    removeModel(model: IModel): void;
    renderModel(): void;
    stop?(): void;
}