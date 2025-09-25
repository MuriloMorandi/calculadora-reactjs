import type { ComponentProps, ReactNode } from "react";
import { Text } from "./Text";

const buttonVariants = {
	default: "bg-(--background)",
	primary: "bg-(--primary)",
};

export type ButtonProps = ComponentProps<"button"> & {
	children?: ReactNode;
	variant?: keyof typeof buttonVariants;
};

export const Button = ({
	variant = "default",
	children,
	className,
	...props
}: ButtonProps) => {
	return (
		<Text
			as="button"
			className={`
                flex items-center justify-center rounded-xl
                p-3 cursor-pointer text-(--text)
                bg-linear-(--gradient)
                hover:bg-linear-(--gradient-hover)
                shadow-(--shadow)
                ${buttonVariants[variant]} ${className || ""}
                ${className || ""}
            `}
			variant="heading"
			{...props}
		>
			{children}
		</Text>
	);
};
