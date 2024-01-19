import React from "react";

type Props = { label: string; onClick: () => void };

const Tab = ({ label, onClick }: Props) => {
	return (
		<button
			className="text-sm px-4 py-2 mr-2 bg-gray-300 hover:bg-gray-400 rounded-md focus:outline-none"
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default Tab;
