import { Calculator } from "./components/Calculator";
import { OperationHistory } from "./components/OperationHistory";
import { CalculatorProvider } from "./contexts/CalculatorContext";

function App() {
	return (
		<main
			className={`
				text-(--text) font-(--font-sans)
		 		flex items-center justify-center min-h-screen
				bg-gradient-to-t from-violet-500 from-20% to-sky-700 via-70%
			`}
		>
			<div
				className={`
					py-2 px-4 sm:px-10
					flex flex-col sm:flex-row
					items-center sm:items-stretch
					gap-2
					bg-[--primary]
				`}
			>
				<CalculatorProvider>
					<Calculator />
					<OperationHistory />
				</CalculatorProvider>
			</div>
		</main>
	);
}

export default App;
