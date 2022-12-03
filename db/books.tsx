export interface Book {
  img: string;
  title: string;
  author: string;
  rental: number;
  tag?: string;
}
export interface Books {
  [id: string]: Book;
}
const books: Books = {
  "1": {
    img: "/book1.png",
    title: "Tudo o que somos juntos",
    author: "Alice Kellen",
    rental: 2,
  },
  "2": {
    img: "/book2.png",
    title: "O Sanatório",
    author: "Richard Osman",
    rental: 2,
  },
  "3": {
    img: "/book3.png",
    title: "Vidas Seguintes",
    author: "Abdulrazak Gurnah",
    rental: 2,
  },
  "4": {
    img: "/book4.png",
    title: "Diário de Anne Frank",
    author: "Anne Frank",
    rental: 2,
  },
  "5": {
    img: "/book5.png",
    title: "War & Peace",
    author: "Leo Tolstoy",
    rental: 2,
  },
  "6": {
    img: "/book6.png",
    title: "Torne-se um decifrador de pessoas",
    author: "Alexandre Monteiro",
    rental: 2,
    tag: "Desenvolvimento Pessoal",
  },
  "7": {
    img: "/book7.png",
    title: "A Powerful Path",
    author: "Haven Obrien",
    rental: 1.5,
  },
  "8": {
    img: "/book8.png",
    title: "Grandes Palavras Pequenas Ações",
    author: "Joana Santos",
    rental: 1.3,
    tag: "Desenvolvimento Pessoal",
  },
};

export default books;
