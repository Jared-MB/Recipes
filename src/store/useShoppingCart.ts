import type { IngredientBasket } from "@/interfaces/recipe";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ShoppingCart {
	items: IngredientBasket[];
	addItem: (item: string) => void;
	addItems: (items: string[]) => void;
	updateItem: (item: string, isChecked: boolean) => void;
	clear: () => void;
}

export const useShoppingCart = create<ShoppingCart>()(
	persist(
		(set) => ({
			items: [],
			addItem: (item: string) =>
				set((state) => {
					const newArray = [...state.items];

					const itemExists = newArray.find((i) => i.label === item);

					if (!itemExists) {
						newArray.push({
							label: item,
							isChecked: false,
						});
					}

					return { items: newArray };
				}),
			addItems: (items: string[]) =>
				set((state) => {
					const newArray = [...state.items];
					for (const item of items) {
						const itemExists = newArray.find((i) => i.label === item);

						if (!itemExists) {
							newArray.push({
								label: item,
								isChecked: false,
							});
						}
					}
					return { items: newArray };
				}),
			updateItem: (item: string, isChecked: boolean) =>
				set((state) => {
					const newItems = state.items.map((i) =>
						i.label === item ? { ...i, isChecked } : i,
					);
					return { items: newItems };
				}),
			clear: () => set(() => ({ items: [] })),
		}),
		{
			name: "shopping-cart",
		},
	),
);
