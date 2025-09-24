import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

const textVariants = {
  default: "text-xl",
  muded: "text-lg text-(--text-primary)",
  heading: "text-2xl",
  blast: "text-3xl font-bold",
};

type TextProps<T extends ElementType> = {
  children?: ReactNode;
  variant?: keyof typeof textVariants;
  as?: T;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Text = <T extends ElementType = "span">({
  as,
  variant = "default",
  children,
  className,
  ...props
}: TextProps<T>) => {
  const Component = as || "span";

  return (
    <Component
      className={`${textVariants[variant]} ${className || ""}`}
      {...props}
    >
      {children}
    </Component>
  );
};
