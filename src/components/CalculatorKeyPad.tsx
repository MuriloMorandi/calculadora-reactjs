import { Button, type ButtonProps } from "./ui/Button";

type CalculatorKeyPadProps = {
	setOperation: (value: string) => void;
};

type ButtonType = (
	| {
			input: string;
			className?: undefined;
			variant?: undefined;
	  }
	| {
			input: string;
			className: string;
			variant?: undefined;
	  }
	| {
			input: string;
			className?: undefined;
			variant: ButtonProps["variant"];
	  }
)[][];

export const CalculatorKeyPad = ({ setOperation }: CalculatorKeyPadProps) => {
	const buttons: ButtonType = [
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

	const handleClick = (value: string) => {
		setOperation(value);
	};

	return (
		<div className="flex flex-col gap-3">
			{buttons.map(row => (
				<div className="flex gap-3" key={crypto.randomUUID()}>
					{row.map(({ input, className, variant }) => (
						<Button
							className={className || "w-16 h-16"}
							key={input}
							onClick={() => handleClick(input)}
							variant={variant}
						>
							{input}
						</Button>
					))}
				</div>
			))}
		</div>
	);
};
