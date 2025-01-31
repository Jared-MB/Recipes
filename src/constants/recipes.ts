import type { Recipe } from "@/interfaces/recipe";

export const recipes: Recipe[] = [
	{
		name: "Pasta aglio e olio",
		tags: ["pasta"],
		id: 1,
		ingredients: ["Ajo", "Pasta", "Perejil", "Aceite de oliva", "Pepperoncino"],
		description: "Una pasta aglio e olio con pepperoncino y perejil",
	},
	{
		name: "Huevos turcos",
		tags: ["huevos", "desayuno"],
		id: 2,
		ingredients: [
			"Huevos",
			"Yogurt griego",
			"Ajo",
			"Creme Fraiche",
			"Aceite de oliva",
			"Perejil",
			"Chiles triturados",
			"Cayena",
			"Za'tar",
		],
		description: "Huevos y yogurt griego con ajo y creme fraiche",
	},
	{
		name: "Huevos con tomate chinos",
		tags: ["huevos", "desayuno"],
		id: 3,
		ingredients: [
			"Tomate",
			"Huevos",
			"Cebollines",
			"Ajo",
			"Jengibre",
			"Aceite",
			"Glutamato monosodico",
			"Vino de arroz",
			"Salsa de soya",
			"Vinagre de jerez",
			"Arroz",
		],
		description: "Tomate, huevos y jengibre con ajo y vino de arroz",
	},
	{
		name: "Tortillas de trigo",
		tags: ["tortillas", "trigo"],
		id: 4,
		ingredients: [
			"Harina de trigo",
			"Sal",
			"Levadura química",
			"Azúcar",
			"Aceite",
			"Leche",
		],
		description: "Tortillas de trigo",
	},
];
