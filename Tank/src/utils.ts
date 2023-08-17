import config from "./config";
import wall from "./canvas/wall";
import steel from "./canvas/steel";
import boss from "./canvas/boss";

export default {
    isModelTouch(x: number, y: number, width = config.model.width, height = config.model.height, models=[...wall.models, ...steel.models, ...boss.models]): IModel | undefined{
        
        // if (x == 0 || x + width > config.canvas.width || y < 0 || y + height > config.canvas.height) return true;

        return models.find(model => {

            const state = x + width <= model.x || x > model.x + model.width || y + height <= model.y || y >= model.y + model.height;

            return !state;
        });
    },

    isCanvasTouch(x: number, y: number, width = config.model.width, height = config.model.height): boolean {
        
       return x == 0 || x + width > config.canvas.width || y < 0 || y + height > config.canvas.height; 
    }
};