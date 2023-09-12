import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { TestServer } from "@/ui/atoms/TestServer";
import Link from "next/link";

export default async function Page() {
	return (
		<div>
			<Link href="/test2" prefetch={true} className="hover:underline">
				Przejdź do tes2
			</Link>
			<ProductCounter>
				<TestServer />
			</ProductCounter>
		</div>
	);
}
