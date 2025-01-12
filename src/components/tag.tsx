"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Badge } from "./ui/badge";

export function Tag({ children }: { children: React.ReactNode }) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const handleClick = () => {
		const search = new URLSearchParams(searchParams);
		search.set(children?.toString().toLocaleLowerCase() ?? "", "true");
		router.replace(`${pathname}?${search.toString()}`);
	};

	return (
		<Badge onClick={handleClick} className="mr-2 capitalize">
			{children}
		</Badge>
	);
}
