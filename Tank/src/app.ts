import straw from './canvas/straw.ts';

import config from './config.ts';

import './style.scss'

import { promises } from './service/image.ts';

import wall from './canvas/wall.ts';

import water from './canvas/water.ts';

import steel from './canvas/steel.ts';

import tank from './canvas/tank.ts';

import bullet from './canvas/bullet.ts';

import boss from './canvas/boss.ts';

import play from './canvas/play.ts';

import music from './service/music.ts';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.style.width = config.canvas.width + 'px';

app.style.height = config.canvas.height + 'px';

export default {

    isStart: false,

    state: 9,

    interval: 0,

    // 初始化
    bootstrap(){
        
        app.addEventListener('click', async () => {

            await this.start();

            this.isStart = true;

            this.interval = setInterval(() => { 
    
                if (tank.models.length === 0) this.state = 1;                
    
                if (play.models.length === 0 || boss.models.length === 0) this.state = 0;
    
                if (this.state !== 9 && this.isStart) this.stop();
            }, 100);
        });
    },

    // 启动游戏
    async start() {

        if (this.isStart) return;

        music.start();

        app.style.backgroundImage = 'unset';
        
        await Promise.all(promises);
        
        straw.render();
        
        wall.render();
        
        water.render();
        
        steel.render();
        
        tank.render();
        
        bullet.render();
        
        boss.render();
        
        play.render();
    },

    text() {

        const canvas = document.createElement('canvas');

        canvas.width = config.canvas.width;

        canvas.height = config.canvas.height;

        const ctx = canvas.getContext('2d')!;

        ctx.fillStyle = 'red';

        ctx.font = '50px NovaMono for Powerline';

        ctx.textBaseline = 'top';

        ctx.textAlign = 'center';

        ctx.fillText(this.state == 1? '游戏胜利' : '呸！啥也不是，(#^.^#)', config.canvas.width / 2, config.canvas.height / 2);

        app.appendChild(canvas);
    },

    // 停止游戏
    async stop() {

        clearInterval(this.interval);

        tank.stop();

        bullet.stop();

        this.text();

        console.log('游戏结束');
    }
};    



