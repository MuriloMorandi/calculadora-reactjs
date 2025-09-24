import { Text } from "./ui/Text";

export const CalculatorDisplay = ({ result, operation }) => {
	return (
		<div
			className={`
            flex flex-col gap-2 px-[1.375rem] 
            cursor-default select-none
            `}
		>
			<Text
				as="div"
				className="flex items-center justify-end h-7"
				variant="muted"
			>
				{result && operation}
			</Text>

			<div
				className="flex items-center justify-between h-,
			9"
			>
				<Text variant="muted">=</Text>
				<Text variant="blast">{result || operation}</Text>
			</div>
		</div>
	);
};
