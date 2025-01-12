"use client";

import { useShoppingCart } from "@/store/useShoppingCart";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

export function IngredientsList() {
	const ingredients = useShoppingCart((state) => state.items);
	const updateItem = useShoppingCart((state) => state.updateItem);

	const toggleChecked = ({
		item,
		isChecked,
	}: { item: string; isChecked: boolean }) => {
		updateItem(item, isChecked);
	};

	if (ingredients.length === 0) {
		return (
			<p className="text-center my-8">No tienes ingredientes en la cesta</p>
		);
	}

	return ingredients.map(({ isChecked, label }) => (
		<div key={label} className="flex items-center mb-2">
			<Checkbox
				onCheckedChange={(value) =>
					toggleChecked({ item: label, isChecked: Boolean(value) })
				}
				className="mr-2"
				checked={isChecked}
				id={label}
			/>
			<Label className="capitalize" htmlFor={label}>
				{label}
			</Label>
		</div>
	));
}
