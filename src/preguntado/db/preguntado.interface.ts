
export interface IPreguntaRespuesta {
	pregunta: string;
	respuestas: IRespuesta[];
}

export interface IRespuesta {
	respuesta: string;
	correcta: boolean;
}