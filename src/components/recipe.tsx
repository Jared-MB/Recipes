import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import type { RecipePreview as RP } from "@/interfaces/recipe";
import { PackagePlus } from "lucide-react";
import { dashify } from "@/lib/utils";
import { AddIngredients } from "./add-ingredients";
import { Tag } from "./tag";
import { Suspense } from "react";

export function RecipePreview({ name, tags, ingredients }: RP) {
	const slug = dashify(name);

	return (
		<Card>
			<Link href={`/${slug}`}>
				<CardContent className="p-0">
					<img
						src={`/${slug}.avif`}
						alt="food"
						className="w-full h-full object-cover aspect-square rounded-lg"
					/>
				</CardContent>
			</Link>
			<CardHeader>
				<CardTitle className="flex justify-between">
					<h3>
						<Link href={`/${slug}`} className="hover:underline">
							{name}
						</Link>
					</h3>
					<AddIngredients
						ingredients={ingredients}
						variant="outline"
						size="icon"
					>
						<PackagePlus />
					</AddIngredients>
				</CardTitle>
				<CardDescription className="flex flex-wrap">
					<Suspense>
						{tags.map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</Suspense>
				</CardDescription>
			</CardHeader>
		</Card>
	);
}
