import { Card } from "./ui/Card";
import { CalculatorDisplay } from "./CalculatorDisplay";
import { CalculatorKeyPad } from "./CalculatorKeyPad";
import { useContext, useState } from "react";
import { CalculatorContext } from "../contexts/CalculatorContext";
import { useCalculator } from "../hooks/useCalculator";

export const Calculator = () => {
	const { doOperation, operation, result } = useCalculator();

	return (
		<Card
			className={`
                flex flex-col gap-[1.5rem] w-[22.25rem]
                pt-14 px-8 pb-8
            `}
		>
			<CalculatorDisplay result={result} operation={operation} />
			<CalculatorKeyPad setOperation={doOperation} />
		</Card>
	);
};
