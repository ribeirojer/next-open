import Link from "next/link";

const Home = () => {
	return (
		<main className={"flex flex-col items-center p-8"}>
			<div className="flex items-center gap-4">
				<h1 className={"text-2xl font-bold mb-4"}>Open </h1>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z"></path>
				</svg>
			</div>
			<p className={"mb-8"}>
				Boas vindas aos projetos Open Source dos Reactivados
			</p>
			<Link href="/cadastrar-habilidades">
				<span className={"text-blue-500 font-bold text-lg"}>
					Clique aqui para cadastrar suas habilidades
				</span>
			</Link>
			<Link href="/ver-habilidades">
				<span className={"text-blue-500 font-bold text-lg"}>
					Clique aqui para ver as habilidades dos colegas
				</span>
			</Link>
			{/*<Link href="/cadastrar-projetos">
        <span className={"text-blue-500 font-bold text-lg"}>Clique aqui para cadastrar um projeto</span>
      </Link>
      <Link href="/ver-projetos">
        <span className={"text-blue-500 font-bold text-lg"}>Clique aqui para ver os projetos cadastrados</span>
  </Link>*/}
		</main>
	);
};

export default Home;
