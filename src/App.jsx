import { CalculatorDisplay } from "./components/CalculatorDisplay";
import { Card } from "./components/ui/Card";
import { OperationHistory } from "./components/OperationHistory";
import { CalculatorKeyPad } from "./components/CalculatorKeyPad";
import { useState } from "react";

function App() {
	const [operation, setOperation] = useState("");
	const [result, setResult] = useState("");

	const handleSetOperation = (input) => {
		if (input === "C") {
			setOperation("");
			setResult("");
			return;
		}

		if (input === "CE") {
			setResult("");
			setOperation(operation.slice(0, -1));
			return;
		}

		if (input === "=") {
			const operationResult = eval(operation.replace(/,/g, "."));
			const resultParse = operationResult.toString().replace(/\./, ",");
			setResult(resultParse);
			return;
		}

		if (result) {
			setResult("");
			setOperation(isNaN(input) ? `${result}${input}` : input);
			return;
		}

		if (input === "," && !operation.endsWith(",")) {
			setOperation(`${operation},`);
			return;
		}

		setOperation(`${operation}${input}`);
	};

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
				<Card
					className={`
            flex flex-col gap-[1.5rem] w-[22.25rem]
            pt-14 px-8 pb-8
          `}
				>
					<CalculatorDisplay result={result} operation={operation} />

					<CalculatorKeyPad setOperation={handleSetOperation} />
				</Card>
				<OperationHistory />
			</div>
		</main>
	);
}

export default App;
