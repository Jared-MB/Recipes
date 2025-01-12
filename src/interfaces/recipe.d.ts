export interface Recipe {
	name: string;
	id: number;
	tags: string[];
	ingredients: string[];
	description: string;
}

export type RecipePreview = Omit<Recipe, "description">;

export interface IngredientBasket {
	label: string;
	isChecked: boolean;
}
