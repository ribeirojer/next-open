import React from "react";

type Props = {
	tech: {
		id: number;
		name: string;
		category: string;
	};
	handleSelectChange: (
		e: React.ChangeEvent<HTMLSelectElement>,
		id: number,
	) => void;
};

const Select = ({ tech, handleSelectChange }: Props) => {
	return (
		<div key={tech.id} className="mb-4">
			<label
				htmlFor={tech.name}
				className="block text-sm font-medium text-gray-700 mb-2"
			>
				{tech.name}
			</label>
			<select
				id={tech.name}
				name={tech.name}
				onChange={(e) => handleSelectChange(e, tech.id)}
				className="w-full p-2 border border-gray-300 rounded-md"
			>
				<option value="">Selecione o nível</option>
				<option value="beginner">Iniciante</option>
				<option value="novice">Novato</option>
				<option value="intermediate">Intermediário</option>
				<option value="advanced">Avançado</option>
				<option value="expert">Especialista</option>
			</select>
		</div>
	);
};

export default Select;
