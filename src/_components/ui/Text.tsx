import { cn } from "@/libs/utils/tailwindMerge";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const textVariants = cva("", {
	variants: {
		variant: {
			promoText: "text-[1rem] md:text-[1.375rem] leading-[100%] ",
			navText: "text-[1.125rem] leading-[100%] ",
			heroTitle: "text-[1.5625rem] md:text-[2.1875rem] leading-[1.2] ",
			subTitle: "text-[1.5625rem] md:text-[2.1875rem] leading-[1.2]",
			body: "text-[1rem] leading-[22px]",
			small: "text-sm leading-5 font-normal",
			// If you have an "extra small" or "tiny" style, you can add it:
			tiny: "text-xs leading-4 font-normal",
		},
		weight: {
			promoText: "font-extrabold",
			navText: "font-semibold",
			heroTitle: "font-bold",
			subTitle: "font-bold",
			body: "font-semibold",
			bold: "font-bold",
		},
		align: {
			left: "text-left",
			center: "text-center",
			right: "text-right",
		},
		color: {
			primary: "text-text-primary",
			secondary: "text-text-secondary",
		},
	},
	defaultVariants: {
		variant: "body",
		weight: "body",
		align: "left",
		color: "primary",
	},
});

interface TextProps
	extends Omit<React.HTMLAttributes<HTMLParagraphElement>, "color">,
		VariantProps<typeof textVariants> {
	asChild?: boolean;
	as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "strong";
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
	(
		{
			className,
			variant,
			weight = "body",
			align,
			color = "primary",
			as = "p",
			children,
			...props
		},
		ref
	) => {
		const Component = as;

		return (
			<Component
				ref={ref}
				className={cn(
					textVariants({ variant, weight, align, color }),
					className
				)}
				{...props}
			>
				{children}
			</Component>
		);
	}
);

Text.displayName = "Text";

export { Text, textVariants };
