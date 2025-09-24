import { useCalculatorContext } from "../contexts/CalculatorContext";
import { Card } from "./ui/Card";
import { Text } from "./ui/Text";

export const OperationHistory = () => {
	const { history } = useCalculatorContext();

	return (
		<Card className="py-10 px-8 pt-14">
			<Text as="h1" className="mb-4" variant="heading">
				Histórico de Operações
			</Text>

			{history.length > 0 ? (
				<ul className="flex flex-col gap-3">
					{history.map(value => (
						<Text as="li" key={crypto.randomUUID()}>
							{value}
						</Text>
					))}
				</ul>
			) : (
				<Text>Nenhuma operação recente</Text>
			)}
		</Card>
	);
};
