import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { TestServer } from "@/ui/atoms/TestServer";

export default async function Page() {
	return (
		<div>
			<ProductCounter>
				<TestServer />
			</ProductCounter>
		</div>
	);
}
