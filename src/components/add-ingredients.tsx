"use client";

import { useShoppingCart } from "@/store/useShoppingCart";
import { Button, type ButtonProps } from "./ui/button";
import type { Recipe } from "@/interfaces/recipe";
import { toast } from "sonner";

interface Props extends ButtonProps {
	ingredients: Recipe["ingredients"];
}

export function AddIngredients({ ingredients, children, ...props }: Props) {
	const addItems = useShoppingCart((state) => state.addItems);

	const handleClick = () => {
		toast.success("Agregado a la cesta");
		addItems(ingredients);
	};

	return (
		<Button onClick={handleClick} {...props}>
			{children}
		</Button>
	);
}
