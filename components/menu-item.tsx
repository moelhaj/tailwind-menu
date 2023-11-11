import { ReactNode } from "react";

type Props = {
	leftIcon: ReactNode;
	rightIcon?: ReactNode;
	text: string;
	handleClick?: () => void;
};

export default function MenuItem({ text, leftIcon, rightIcon, handleClick }: Props) {
	return (
		<div
			className="flex items-center gap-3 p-3 hover:bg-gray-200 duration-300 rounded-md cursor-pointer"
			onClick={handleClick}
		>
			<span>{leftIcon}</span>
			<span>{text}</span>
			{rightIcon && <span className="ml-auto">{rightIcon}</span>}
		</div>
	);
}
