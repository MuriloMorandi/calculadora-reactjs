import { Button } from "./ui/Button";

export const CalculatorKeyPad = ({ setOperation }) => {
	const buttons = [
		[
			{ input: "CE" },
			{ input: "C", className: "flex-1 h-16" },
			{ input: "/", variant: "primary" },
		],
		[
			{ input: "7" },
			{ input: "8" },
			{ input: "9" },
			{ input: "*", variant: "primary" },
		],
		[
			{ input: "4" },
			{ input: "5" },
			{ input: "6" },
			{ input: "-", variant: "primary" },
		],
		[
			{ input: "1" },
			{ input: "2" },
			{ input: "3" },
			{ input: "+", variant: "primary" },
		],
		[
			{ input: "0", className: "flex-1 h-16" },
			{ input: "," },
			{ input: "=", className: "w-16 h-16 bg-[#7F45E2]" },
		],
	];

	const handleClick = (value) => {
		setOperation(value);
	};

	return (
		<div className="flex flex-col gap-3">
			{buttons.map(row => (
				<div className="flex gap-3" key={crypto.randomUUID()}>
					{row.map(({ input, className, variant }) => (
						<Button
							key={input}
							className={className || "w-16 h-16"}
							variant={variant}
							onClick={() => handleClick(input)}
						>
							{input}
						</Button>
					))}
				</div>
			))}
		</div>
	);
};
