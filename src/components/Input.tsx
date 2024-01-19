import React, { ChangeEvent, ReactNode } from "react";

interface InputProps {
	label?: string;
	type?: string;
	placeholder?: string;
	value?: string | number;
	setName: (value: string) => void;
	className?: string;
	children?: ReactNode;
}

const Input: React.FC<InputProps> = ({
	label,
	type = "text",
	placeholder,
	value,
	setName,
	className,
	children,
}: InputProps) => {
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	return (
		<div className={`mb-4 ${className || ""}`}>
			{label && (
				<label className="block text-sm font-medium text-gray-700 mb-2">
					{label}
				</label>
			)}
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={handleInputChange}
				className="w-full p-2 border border-gray-300 rounded-md"
			/>
			{children}
		</div>
	);
};

export default Input;
