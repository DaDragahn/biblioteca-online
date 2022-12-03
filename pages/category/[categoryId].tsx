import { useRouter } from "next/router";
import CategoryDisplay from "../../components/Category";
import Header from "../../components/Header";
import categories from "../../db/categories";

export default function Categories() {
  const router = useRouter();
  if (typeof router.query.categoryId !== "string") return null;
  const category = categories[router.query.categoryId];
  console.log(category);

  return (
    <div>
      <header>
        <Header />
      </header>

      <CategoryDisplay category={category} />
    </div>
  );
}
