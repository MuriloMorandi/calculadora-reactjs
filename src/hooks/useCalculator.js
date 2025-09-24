import { useContext } from "react";
import { useState } from "react";
import { CalculatorContext } from "../contexts/CalculatorContext";

export const useCalculator = () => {
	const [operation, setOperation] = useState("");
	const [result, setResult] = useState("");
	const { updateHistory } = useContext(CalculatorContext);

	const doOperation = (input) => {
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
			// biome-ignore lint/security/noGlobalEval: <explanation>
			const operationResult = eval(operation.replace(/,/g, "."));
			const resultParse = operationResult.toString().replace(/\./, ",");
			setResult(resultParse);
			updateHistory(operation, resultParse);
			return;
		}

		if (result) {
			setResult("");
			setOperation(Number.isNaN(input) ? `${result}${input}` : input);
			return;
		}

		if (input === "," && !operation.endsWith(",")) {
			setOperation(`${operation},`);
			return;
		}

		setOperation(`${operation}${input}`);
	};

	return {
		doOperation,
		operation,
		result,
	};
};
