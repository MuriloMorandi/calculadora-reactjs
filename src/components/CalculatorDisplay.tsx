import { Text } from "./ui/Text";

type CalculatorDisplayProps ={
	result: string,
	operation: string
}

export const CalculatorDisplay = ({ result, operation }: CalculatorDisplayProps) => {
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
				variant="muded"
			>
				{result && operation}
			</Text>

			<div
				className="flex items-center justify-between h-,
			9"
			>
				<Text variant="muded">=</Text>
				<Text variant="blast">{result || operation}</Text>
			</div>
		</div>
	);
};
