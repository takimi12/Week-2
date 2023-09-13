import { type ProductItemType } from "../Types";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductItemType;
};

export const ProductListItemDescription = ({
	product: { category, description, name, price },
}: ProductListItemDescriptionProps) => {
	return (
		<>
			<div className="mt-2 flex justify-between">
				<div>
					<h1 className="text-sm font-semibold text-gray-700">
						{name}
					</h1>
					<p className="mt-1 text-sm text-gray-500">
						<span className="sr-only">Kategoria</span>
						{description}
					</p>
					<p className="mt-1 text-sm text-gray-500">
						<span className="sr-only">Kategoria</span>
						{category}
					</p>
				</div>
				<p className="text-sm font-medium text-gray-900">
					<span className="sr-only">Cena:</span>

					{formatMoney(price / 100)}
				</p>
			</div>
		</>
	);
};
