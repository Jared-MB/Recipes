"use server"

import { recipes } from "@/constants/recipes"
import type { Recipe, RecipePreview } from "@/interfaces/recipe"

export const getRecipesPreview = async (): Promise<RecipePreview[]> => {
    return recipes
}

export const getRecipeByName = async (name: string): Promise<Recipe | undefined> => {
    return recipes.find((recipe) => recipe.name.toLowerCase() === name.toLowerCase())
}