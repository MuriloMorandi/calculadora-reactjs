import type { ComponentProps, ReactNode } from "react";

type CardProps = ComponentProps<"div"> & {
	children?: ReactNode,
}

export const Card = ({ children, className, ...props }: CardProps) => {
	return (
		<div
			className={`
                bg-(--background) shadow-(--shadow)
                rounded-2xl
                ${className || ""}
            `}
			{...props}
		>
			{children}
		</div>
	);
};
