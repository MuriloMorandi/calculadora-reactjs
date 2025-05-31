import { useContext } from "react";
import { CalculatorContext } from "../contexts/CalculatorContext";
import { Card } from "./ui/Card";
import { Text } from "./ui/Text";

export const OperationHistory = () => {
	const {history} = useContext(CalculatorContext);

	return (
		<Card className="py-10 px-8 pt-14">
			<Text as="h1" variant="heading" className="mb-4">
				Historico de Operações
			</Text>
			
			{history.length > 0 ? (
				<ul className="flex flex-col gap-3">
					{history.map((value, index) => (
						<Text key={index} as="li">{value}</Text>
					))}
				</ul>
			) : (
				<Text>
					Nenhuma operação recente		
				</Text>		
			)}
			
		</Card>
	);
};
