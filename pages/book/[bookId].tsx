import Header from "../../components/Header";
import BookDisplay from "../../components/Book";
import { useRouter } from "next/router";
import books from "../../db/books";

export default function Books() {
  const router = useRouter();
  if (typeof router.query.bookId !== "string") return null;
  const book = books[router.query.bookId];
  console.log(book);

  return (
    <div>
      <header>
        <Header />
      </header>

      <BookDisplay book={book} />
    </div>
  );
}
