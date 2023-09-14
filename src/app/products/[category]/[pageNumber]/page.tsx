export const generateStaticParams = async ({
	params,
}: {
	params: { category: string };
}) => {
	if (params.category === "t-shirts") {
		return [{ pageNumber: "1" }];
	} else if (params.category === "Elecrtonics") {
		return [{ pageNumber: "1" }];
	} else if (params.category === "Health") {
		return [{ pageNumber: "1" }];
	} else if (params.category === "Tools") {
		return [{ pageNumber: "1" }];
	} else if (params.category === "Sports") {
		return [{ pageNumber: "1" }];
	} else if (params.category === "Shoes") {
		return [{ pageNumber: "1" }];
	} else if (params.category === "Boots") {
		return [{ pageNumber: "1" }];
	} else if (params.category === "Garden") {
		return [{ pageNumber: "1" }];
	} else if (params.category === "Games") {
		return [{ pageNumber: "1" }];
	} else if (params.category === "Home") {
		return [{ pageNumber: "1" }];
	} else if (params.category === "Toys") {
		return [{ pageNumber: "1" }];
	} else if (params.category === "Automatics") {
		return [{ pageNumber: "1" }];
	} else if (params.category === "Computers") {
		return [{ pageNumber: "1" }];
	} else if (params.category === "Kids") {
		return [{ pageNumber: "1" }];
	} else if (params.category === "Outdoors") {
		return [{ pageNumber: "1" }];
	} else if (params.category === "Jewelery") {
		return [{ pageNumber: "1" }];
	} else {
		return [{ pageNumber: "1" }];
	}
};

export default function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	return (
		<>
			<h1>
				Produkty z kategorii {params.category} na stronie{" "}
				{params.pageNumber}
			</h1>
		</>
	);
}
