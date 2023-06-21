import { PreguntasRespuestas } from './preguntado/db/database';
import { dibujarPreguntasRespuestas } from './preguntado/db/preguntando';
import './style.css';
const divApp = document.querySelector<HTMLDivElement>('#app')!;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<h2>Binevenidos al juego de las preguntas</h2>
<h3>Si deseas jugas presiona siguiente</h3><br>  `;

const db = PreguntasRespuestas;

let numero = -1;
const b = document.querySelectorAll('button')!;

b.forEach((btn) => { btn.addEventListener('click',() => {
	btn.addEventListener('click',()=>{
		const sel=btn.value		
		if(sel=='Nilo'){console.log('ahora');
		}
		

	})
	numero++;
	dibujarPreguntasRespuestas(db[numero], divApp)
	
});

});


  






























	// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 
	// `;
	
	// const divApp = document.querySelector<HTMLDivElement>('#app')!;
	// //const puntos= document.querySelector('#puntos')
	
	// const db = PreguntasRespuestas;
	
	// dibujarPreguntasRespuestas(db[0], divApp);
	// const b = document.querySelectorAll('button')!;
	// console.log(db);
	// let contador=-1
	// b.forEach((btn) => {
	// 	btn.addEventListener('click', () => {
			
	// 		dibujarPreguntasRespuestas(db[contador+4], divApp);
		
	
	// 	});
	  



//});









