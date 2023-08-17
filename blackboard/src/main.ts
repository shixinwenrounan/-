import './style.css'

class Blackboard {

  constructor(
    private el = document.querySelector<HTMLCanvasElement>('#canvas')!,
    private app = el.getContext('2d')!,
    private width: number = el.width,
    private height: number = el.height,
    private btns: HTMLDivElement = document.createElement('div'),
    private bgColor: string = "#000",
    private lineColor: string = "#fff"
  ) {

    this.initCanvas();

    this.bindEvent();

    this.draw();
  };

  private initCanvas() {

    this.app.strokeStyle = this.lineColor;

    this.app.fillRect(0, 0, this.width, this.height);

    this.btns.classList.add('btns');
  
    this.el.insertAdjacentElement('afterend', this.btns);
  };

  private bindEvent() { 

    const callback = this.drawLine.bind(this);

    this.el.addEventListener('mousedown', () => {

      this.app.beginPath();

      this.el.addEventListener('mousemove', callback);
    });

    document.addEventListener('mouseup', () => {

      this.el.removeEventListener('mousemove', callback);
    });
  };

  private drawLine(event: MouseEvent) {

    this.app.strokeStyle = this.lineColor;
    
    this.app.lineTo(event.offsetX, event.offsetY);

    this.app.stroke();
  };

  public setBgColor(color: string) { 

    this.bgColor = color;

    this.app.fillStyle = this.bgColor;

    this.app.fillRect(0, 0, this.el.width, this.el.height);
    
    return this;
  };

  public setLineColor() {

    const colors = ['#F2EAD3', '#4FC0D0', '#98EECC', '#2B2730', '#ffffff'];
    
    const container = document.createElement('div');

    container.classList.add('colorList');

    colors.forEach(color => {

      const div = document.createElement('div');

      div.style.cssText = `width: 16px; height: 16px;  background-color: ${color}`;

      container.insertAdjacentElement('afterbegin', div);

      div.addEventListener('click', () => {

        this.lineColor = color;
      })
    });

    this.btns.insertAdjacentElement('beforeend', container);
  }

  public clear() {
    
    const el = document.createElement('button');

    el.innerText = '清屏';

    this.btns.insertAdjacentElement('afterbegin', el);

    el.addEventListener('click', () => {

      this.app.fillStyle = this.bgColor;

      this.app.fillRect(0, 0, this.el.width, this.el.height);
    });

    return this;
  }

  public erase() {

    const el = document.createElement('button');

    el.innerText = '橡皮';

    this.btns.insertAdjacentElement('afterbegin', el);

    el.addEventListener('click', () => {

      this.lineColor = this.bgColor;

      this.app.lineWidth = 5;
    });

    return this;
  };

  public draw() {
    
    const el = document.createElement('button');

    el.innerText = '写字';

    this.btns.insertAdjacentElement('afterbegin', el);

    el.addEventListener('click', () => {

      this.lineColor = '#fff';

      this.app.lineWidth = 1;
    });

    return this;
  };

  public short() {
    
    const el = document.createElement('button');

    el.innerText = '截图';

    this.btns.insertAdjacentElement('afterbegin', el);

    const img = document.createElement('img');

    el.addEventListener('click', () => {

      img.src = this.el.toDataURL('image/jpeg');

      img.classList.add('img-short');
    });

    this.btns.insertAdjacentElement('afterend', img);

    return this;
  }

};

const instance = new Blackboard();

instance.clear().setBgColor('#FF6666').erase();

instance.setLineColor();

instance.short();