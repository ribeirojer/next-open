import { SkillLevels } from "@/interfaces/Skill";
import { supabase } from "@/utils/supabase";

interface Skill {
	id: number;
	name: string;
	skills: string;
}

export const getSkills = async (): Promise<Skill[]> => {
	try {
		const { data, error } = await supabase.from("userskills").select("*");
		if (error) {
			throw error;
		}
		return data || [];
	} catch (error) {
		console.error("Erro ao obter habilidades:", error);
		throw error;
	}
};

export const createSkill = async (
	name: string,
	skills: SkillLevels[],
	others: string,
): Promise<Skill> => {
	console.log(name, skills, others);
	try {
		const { data, error } = await supabase
			.from("userskills")
			.insert({ name, skills, others })
			.select();

		if (error) {
			throw error;
		}
		console.log(data);

		return data as unknown as Skill;
	} catch (error) {
		console.error("Erro ao criar/atualizar habilidade:", error);
		throw error;
	}
};
