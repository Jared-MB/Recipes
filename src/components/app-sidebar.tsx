import { IngredientsList } from "./ingredients-list";
import { Sidebar, SidebarContent, SidebarHeader } from "./ui/sidebar";

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<h4 className="font-semibold">Ingredientes</h4>
			</SidebarHeader>
			<SidebarContent>
				<div className="mx-4">
					<IngredientsList />
				</div>
			</SidebarContent>
		</Sidebar>
	);
}
