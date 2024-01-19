import { createSkill, getSkills } from "@/services/skills";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === "GET") {
		const skills = await getSkills();
		return res.status(200).json(skills);
	} else if (req.method === "POST") {
		const { name, data, others } = req.body;
		const newSkills = await createSkill(name, data, others);
		return res.status(201).json(newSkills);
	} else {
		return res.status(405).end(); // Method Not Allowed
	}
}
