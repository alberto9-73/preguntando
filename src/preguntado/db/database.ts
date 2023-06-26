import { IPreguntaRespuesta } from './preguntado.interface';

export const PreguntasRespuestas: IPreguntaRespuesta[] = [
	{
		pregunta: '¿Cual es primero de los numeros primos?',
		respuestas: [
			{ respuesta: '1', correcta: false },
			{ respuesta: '2', correcta: true },
			{ respuesta: '3', correcta: false },
			{ respuesta: '5', correcta: false },
			{ respuesta: '7 ', correcta: false },
		],
	},
	{
		pregunta: '¿cuanto es 25x5?',
		respuestas: [
			{ respuesta: '125', correcta: true },
			{ respuesta: '233', correcta: false },
			{ respuesta: '411', correcta: false },
			{ respuesta: '535', correcta: false },
		],
	},

	{
		pregunta: '¿Cual es el continente mas pequeño en superficie?',
		respuestas: [
			{ respuesta: 'Europa', correcta: false },
			{ respuesta: 'America', correcta: false },
			{ respuesta: 'Africa', correcta: false },
			{ respuesta: 'Asia', correcta: false },
			{ respuesta: 'Oceania', correcta: true },
		],
	},


	{
		pregunta: '¿Cual es el rio mas largo?',
		respuestas: [
			{ respuesta: 'Rio de la plata', correcta: false },
			{ respuesta: 'Amasonas', correcta: false },
			{ respuesta: 'Sena', correcta: false },
			{ respuesta: 'Salado', correcta: false },
			{ respuesta: 'Nilo', correcta: true },
		],
	},

	{
		pregunta: '¿Cual es el pais mas pequeño del mundo en superficie?',
		respuestas: [
			{ respuesta: 'Tucumán', correcta: false },
			{ respuesta: 'Monaco', correcta: false },
			{ respuesta: 'Vaticano', correcta: true },
			{ respuesta: 'Uruguay', correcta: false },
			{ respuesta: 'Japon', correcta: false}
		],
	},
	{
		pregunta: '¿Cual es el elemento más pesado que se conoce en la naturaleza?',
		respuestas: [
			{ respuesta: 'Mercurio', correcta: false },
			{ respuesta: 'Plomo', correcta: false },
			{ respuesta: 'Uranio', correcta: true },
			{ respuesta: 'Cobre', correcta: false },
		],
	},
	{
		pregunta: '¿Cuantas misiones alunizaron con exito?',
		respuestas: [
			{ respuesta: '6', correcta: true },
			{ respuesta: '8', correcta: false },
			{ respuesta: '4', correcta: false },
			{ respuesta: '2', correcta: false },
		],
	},
	{
		pregunta: '¿Quien fue el cientifico que descubrio los rayos X?',
		respuestas: [
			{ respuesta: 'Isaac Newton', correcta: false },
			{ respuesta: 'Conrad Röntgen', correcta: true },
			{ respuesta: 'Marie Curie', correcta: false },
			{ respuesta: 'Tomas Edison', correcta: false },
		],
	}, 
	{
		pregunta: '¿Cual es el pais con mayor cantidad de islas?',
		respuestas: [
			{ respuesta: 'EEUU', correcta: false },
			{ respuesta: 'Chile', correcta: false },
			{ respuesta: 'Islandia', correcta: false },
			{ respuesta: 'Suecia', correcta: true },
			{ respuesta: 'Japon', correcta: false}
		],
	},
	{
		pregunta: '¿Cual era el nombre de la primera computadora del mundo?',
		respuestas: [
			{ respuesta: 'ATTARI', correcta: false },
			{ respuesta: 'COMODORE', correcta: false },
			{ respuesta: 'ENIAC', correcta: true },
			{ respuesta: 'TK90X', correcta: false },
			{ respuesta: 'LENOVO', correcta: false}
		],
	}, 

];
