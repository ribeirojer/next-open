import Input from "@/components/Input";
import Select from "@/components/Select";
import Tab from "@/components/Tab";
import { technologies } from "@/utils/technologies";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const CadastrarHabilidades: React.FC<Props> = () => {
	const [name, setName] = useState("");
	const [others, setOthers] = useState("");
	const [techData, setTechData] = useState<Record<number, string>>({});
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState("");
	const [activeTab, setActiveTab] = useState("Front-end");

	const handleSelectChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
		id: number,
	) => {
		event.preventDefault();
		setTechData((prevTechData) => ({
			...prevTechData,
			[id]: event.target.value,
		}));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSuccess(false);
		setIsError("");

		try {
			// Filtra apenas as tecnologias que têm níveis selecionados
			const selectedTechData = Object.entries(techData).reduce(
				(selectedTech, [techId, level]: any) => {
					if (level) {
						selectedTech[techId] = level;
					}
					return selectedTech;
				},
				{} as Record<number, string>,
			);

			if (!name) {
				setIsError("Por favor, preencha o nome.");
				return;
			}

			// Verifica se pelo menos uma tecnologia foi selecionada
			if (Object.keys(selectedTechData).length === 0) {
				setIsError("Por favor, selecione pelo menos uma tecnologia.");
				return;
			}

			try {
				const apiUrl = "/api/habilidades";

				await axios.post(apiUrl, { name, data: techData, others });
				setIsSuccess(true);
				setIsError("");

				console.log("Dados enviados com sucesso!");
			} catch (error) {
				setIsError("Erro ao enviar dados.");
				console.error("Erro ao enviar dados:", error);
			}
		} catch (error) {
			setIsError("Erro ao enviar dados.");
			console.error("Erro ao enviar dados:", error);
		}
	};

	const filteredTechnologies = technologies.filter((tech) =>
		tech.category.includes(activeTab),
	);

	return (
		<div className="py-8 flex flex-col items-center justify-center">
			<h2 className="text-2xl font-bold mb-4">Formulário de Tecnologias</h2>
			<p className="font-semibold">
				Selecione o seu nível de habilidade para cada tecnologia:{" "}
			</p>
			<p>Iniciante - Tem conhecimento básico ou está aprendendo.</p>
			<p>Novato - Tem alguma experiência prática, mas ainda em aprendizado.</p>
			<p>Intermediário - Possui experiência prática substancial.</p>
			<p>Avançado - Tem conhecimento aprofundado e experiência extensiva.</p>
			<p>Especialista - É reconhecido como uma autoridade na tecnologia.</p>

			<div className="my-4">
				<Tab label="Front-end" onClick={() => setActiveTab("Front-end")} />
				<Tab label="Back-end" onClick={() => setActiveTab("Back-end")} />
				<Tab label="Mobile" onClick={() => setActiveTab("Mobile")} />
				<Tab
					label="Banco de Dados"
					onClick={() => setActiveTab("Banco de Dados")}
				/>
				<Tab label="DevOps" onClick={() => setActiveTab("DevOps")} />
			</div>

			<Input label="Nome: " type="text" value={name} setName={setName} />

			<form
				onSubmit={handleSubmit}
				className="p-4 border border-gray-300 shadow-md rounded-md"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
					{filteredTechnologies.map((tech) => (
						<Select
							key={tech.id}
							tech={tech}
							handleSelectChange={handleSelectChange}
						/>
					))}
				</div>
				<Input
					label="Outras: "
					type="text"
					value={others}
					setName={setOthers}
				/>

				<button
					type="submit"
					className="px-4 py-2 bg-green-500 text-white rounded-md"
				>
					Enviar
				</button>

				{isSuccess && (
					<p className="text-green-500 mt-2">Dados enviados com sucesso!</p>
				)}
				{isError && <p className="text-red-500 mt-2">{isError}</p>}
			</form>
			<p className="mt-4">
				<Link href={"/"}>Voltar</Link>
			</p>
		</div>
	);
};

export default CadastrarHabilidades;
