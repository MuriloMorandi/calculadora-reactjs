import React from "react";

const textVariants = {
	default: "text-xl",
	muded: "text-lg text-(--text-primary)",
	heading: "text-2xl",
	blast: "text-3xl font-bold",
};

export const Text = ({
	as = "span",
	variant = "default",
	children,
	className,
	...props
}) => {
	return React.createElement(
		as,
		{
			className: `${textVariants[variant]} ${className || ""}`,
			...props,
		},
		children
	);
};
