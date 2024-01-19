import React, { useEffect, useState } from "react";
import { technologies } from "../utils/technologies";
import { convertLevel } from "@/utils";
import Link from "next/link";

interface SkillInfo {
	id: number;
	name: string;
	skills: Record<string, string>;
	others: string;
}

interface VerHabilidadesProps {
	data: SkillInfo[];
}

const VerHabilidades: React.FC<VerHabilidadesProps> = () => {
	const [data, setData] = useState<SkillInfo[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/api/habilidades"); // Substitua pela sua URL da API
				const result = await response.json();
				setData(result);
			} catch (error) {
				console.error("Erro ao obter dados:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="container mx-auto">
			<Link href={"/"} className="text-blue-500 hover:text-blue-700 underline">
				Voltar
			</Link>
			<table className="min-w-full divide-y divide-gray-200">
				<thead className="bg-gray-50">
					<tr>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Nome
						</th>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Habilidades
						</th>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Outros
						</th>
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200">
					{data.map((item) => (
						<tr key={item.id}>
							<td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
							<td className="px-6 py-4 whitespace-nowrap">
								{Object.entries(item.skills).map(([skill, level]) => (
									<div key={skill}>
										{technologies[(skill as unknown as number) - 1].name}:{" "}
										{convertLevel(level)}
									</div>
								))}
							</td>
							<td className="px-6 py-4 whitespace-nowrap">{item.others}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default VerHabilidades;
