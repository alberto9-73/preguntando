import { IPreguntaRespuesta } from './preguntado.interface';

export const PreguntasRespuestas: IPreguntaRespuesta[] = [
	{
		pregunta: '¿cuanto es 1+1?',
		respuestas: [
			{ respuesta: '2', correcta: true },
			{ respuesta: '3', correcta: false },
			{ respuesta: '4', correcta: false },
		],
	},
	{
		pregunta: '¿cuanto es 5x5?',
		respuestas: [
			{ respuesta: '25', correcta: true },
			{ respuesta: '33', correcta: false },
			{ respuesta: '41', correcta: false },
			{ respuesta: '41', correcta: false },
		],
	},

	{
		pregunta: '¿Cual es el continente mas grande?',
		respuestas: [
			{ respuesta: 'Europa', correcta: false },
			{ respuesta: 'America', correcta: false },
			{ respuesta: 'Africa', correcta: true },
			{ respuesta: 'Asia', correcta: false },
			{ respuesta: 'Oceania', correcta: false },
		],
	},


	{
		pregunta: '¿Cual es el rio mas largo?',
		respuestas: [
			{ respuesta: 'Rio de la plata', correcta: false },
			{ respuesta: 'Amasonas', correcta: false },
			{ respuesta: 'Nilo', correcta: true },
			{ respuesta: 'Salado', correcta: false },
			{ respuesta: 'Tamesis', correcta: false },
		],
	},






];
