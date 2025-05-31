import { Calculator } from "./components/Calculator";
import { OperationHistory } from "./components/OperationHistory";
import { CalculatorProvider } from "./contexts/CalculatorContext";

function App() {

	return (
		<main className="text-(--text) font-(--font-sans) flex justify-center align-center">
			<div
				className={`
					leapy-8 px-4
					flex flex-col sm:flex-row
					items-center sm:items-stretch
					gap-2
				`}
			>
				<CalculatorProvider>
					<Calculator/>
					<OperationHistory />
				</CalculatorProvider>
			</div>
		</main>
	);
}

export default App;
