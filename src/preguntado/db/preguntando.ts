import { PreguntasRespuestas } from './database';

let contador = 0;
let puntos = 0;
let puntaje = 0;
const db = PreguntasRespuestas;


export function dibujarPreguntasRespuestas(elemento: HTMLDivElement) {

	if (contador != db.length) {
		elemento.innerHTML = `<h1>${db[contador].pregunta}</h1>`;
		const ul = document.createElement('ul');
		db[contador].respuestas.filter((r) => {
			const li = document.createElement('li');
			const btn = document.createElement('button');
			btn.value = String(r.correcta);
			btn.classList.add('botonclick');
			btn.textContent = r.respuesta;
			btn.addEventListener('click', () => {
				console.log(r.correcta);
				if (r.correcta) {
					
					puntos += 1;
					puntaje += 10;
				}



				dibujarPreguntasRespuestas(elemento);


			});
			li.appendChild(btn);
			ul.appendChild(li);
		});
		contador++;
		elemento.appendChild(ul);


	} else {
		elemento.innerHTML = `<h1>COMPLETADO!!!  </h1> <h3>puntos: ${puntos} / ${db.length}  </h3> <h3> Tu puntaje final es: ${puntaje}</h3>`;
	}
}













































//🎆 🔥
