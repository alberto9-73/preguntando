import { IPreguntaRespuesta } from './preguntado.interface';

export function dibujarPreguntasRespuestas(
	pr: IPreguntaRespuesta,
	elemento: HTMLDivElement
) {
	elemento.innerHTML = `<h1>${pr.pregunta}</h1>`;

	var ul = document.createElement('ul');

	pr.respuestas.forEach((r) => {
		var li = document.createElement('li');
		var btn = document.createElement('button');
		btn.value = String(r.correcta);
		btn.textContent = r.respuesta;
		li.appendChild(btn);
		ul.appendChild(li);
	});

	elemento.appendChild(ul);
}