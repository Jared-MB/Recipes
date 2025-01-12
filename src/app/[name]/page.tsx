import { AddIngredients } from "@/components/add-ingredients";
import { Badge } from "@/components/ui/badge";
import { unDashify } from "@/lib/utils";
import { getRecipeByName } from "@/services/recipe";
import { notFound } from "next/navigation";

interface Props {
	params: Promise<{ name: string }>;
}

export default async function RecipePage({ params }: Props) {
	const recipeName = (await params).name;
	const parsedName = unDashify(recipeName);
	const recipe = await getRecipeByName(parsedName);

	if (!recipe) {
		notFound();
	}

	return (
		<main>
			<section className="mb-4 grid md:grid-cols-2 gap-x-4">
				<article>
					<img
						src={`/${recipeName}.avif`}
						alt="food"
						className="w-full h-full object-cover aspect-square rounded-lg"
					/>
				</article>
				<div className="flex flex-col gap-y-2 col-span-1">
					<header className="mt-4">
						<h2 className="capitalize text-3xl font-bold">{parsedName}</h2>
						<div className="flex flex-wrap mt-1">
							{recipe.tags.map((tag) => (
								<Badge key={tag} className="mr-2 capitalize">
									{tag}
								</Badge>
							))}
						</div>
					</header>
					<article>
						<p className="text-pretty">{recipe.description}</p>
					</article>
					<article>
						<h3 className="text-lg font-bold">Ingredientes</h3>
						<ul>
							{recipe.ingredients.map((ingredient) => (
								<li key={ingredient} className="capitalize list-disc ml-4">
									{ingredient}
								</li>
							))}
						</ul>
					</article>
					<footer className="flex justify-end">
						<AddIngredients ingredients={recipe.ingredients}>
							Agregar a la lista
						</AddIngredients>
					</footer>
				</div>
			</section>
		</main>
	);
}
