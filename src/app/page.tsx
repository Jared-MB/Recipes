import { RecipePreview } from "@/components/recipe";
import { getRecipesPreview } from "@/services/recipe";

export default async function Home() {
	const recipes = await getRecipesPreview();

	return (
		<main className="grid sm:grid-cols-2 lg:grid-cols-3 pb-4 gap-4">
			{recipes.map((recipe) => (
				<RecipePreview key={recipe.id} {...recipe} />
			))}
		</main>
	);
}
