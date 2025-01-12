"use client";

import { IngredientsList } from "@/components/ingredients-list";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "@/store/useShoppingCart";
import { toast } from "sonner";

export default function ShoppingCartPage() {
	const clear = useShoppingCart((state) => state.clear);

	const clearBasket = () => {
		clear();
		toast.success("Cesta vaciada");
	};

	return (
		<main>
			<header>
				<h2 className="text-3xl font-medium">Ingredientes en la cesta</h2>
			</header>
			<section className="flex flex-col my-4">
				<IngredientsList />
			</section>
			<footer className="flex justify-end mb-4">
				<Button onClick={clearBasket}>Limpiar cesta</Button>
			</footer>
		</main>
	);
}
