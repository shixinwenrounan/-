// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const el = document.querySelector<HTMLCanvasElement>('#canvas')!;

const app = el.getContext('2d')!;

// app.fillStyle = 'red';

// app.fillRect(0, 0, el.width, el.height);

// app.fillStyle = '#EAC696';

// app.fillRect(el.width / 2 - 50, el.height / 2 - 50, 100, 100);

// app.strokeStyle = '#EAC696';

// app.lineWidth = 10;

// app.lineJoin = 'bevel';

// app.strokeRect(50, 50, 200, 200);

// app.fillStyle = '#EAC696';

// app.arc(100, 100, 50, 0, 2 * Math.PI);

// app.fill();

// app.strokeStyle = '#EAC696';

// app.lineWidth = 10;

// app.arc(100, 100, 80, 0, 2 * Math.PI);

// app.stroke();

// app.beginPath();

// app.strokeStyle = "#EAC696";

// app.lineWidth = 6;

// app.moveTo(el.width / 2, 10);

// app.lineTo(el.width / 2 + 100, el.height / 2);

// app.lineTo(el.width / 2 - 100, el.height / 2);

// app.closePath();

// app.stroke();

// const gradient = app.createLinearGradient(0, 0, 300, 300);

// gradient.addColorStop(0, "#EAC696");
// gradient.addColorStop(0.3, "#241468");
// gradient.addColorStop(1, "#A084E8");

// app.fillStyle = gradient;

// app.fillRect(0, 0, 300, 300);

// app.strokeStyle = gradient;

// app.lineWidth = 20;

// app.lineJoin = "round";

// app.strokeRect(50, 50, 200, 200);

// app.fillStyle = "#EAC696";

// app.fillRect(0, 0, el.width, el.height);

// app.font = "50px NovaMono for Powerline";

// app.fillStyle = "#fff";

// app.strokeStyle = "white";

// app.lineWidth = 2;

// app.textBaseline = "top";

// app.strokeText('xiaoxi', 50, 0);

// const img = document.createElement('img');

// img.src = "../images/tank.webp";

// img.onload = () => {

//   // document.body.insertAdjacentElement('afterbegin', img);

//   const parrern = app.createPattern(img, 'repeat')!;

//   app.fillStyle = parrern;

//   app.fillRect(0, 0, el.width, el.height);
// }

// app.fillStyle = "black";

// app.fillRect(0, 0, el.width, el.height);

// const img = document.createElement('img');

// img.src = "../images/tank.webp";

// img.onload = () => {

//   el.width = img.naturalWidth * scale(img, el);

//   el.height = img.naturalHeight * scale(img, el);

//   app.drawImage(img, 0, 0, el.width, el.height);
// };

// function scale(img: HTMLImageElement, el: HTMLCanvasElement): number {
  
//   return Math.min(el.width / img.naturalWidth, el.height / img.naturalHeight)
// };

app.fillStyle = "black";

app.rect(0,0,300,300);

app.fill();

for (let i = 0; i < 50; i++) { 

  app.beginPath();

  app.fillStyle = ['#9F0D7F', '#A084E8', '#D8D9DA', '#91C8E4', '#FBA1B7', '#ACFADF', '#98EECC'].sort(() => Math.floor(Math.random() * 3) ? 1 : -1)[0];

  app.arc(Math.random() * (el.width / 2), Math.random() * (el.height / 2), Math.random() * 50, 0, 2 * Math.PI);

  app.fill();
}
