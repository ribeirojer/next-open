export const convertLevel = (level: string): string => {
	switch (level.toLowerCase()) {
		case "beginner":
			return "Iniciante";
		case "novice":
			return "Novato";
		case "intermediate":
			return "Intermediário";
		case "advanced":
			return "Avançado";
		case "expert":
			return "Especialista";
		default:
			return level; // Retorna o próprio valor se não for reconhecido
	}
};
