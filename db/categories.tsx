export interface Category {
  cat: string;
}
export interface Categories {
  [id: string]: Category;
}
const categories: Categories = {
  "1": { cat: "Arte" },
  "2": { cat: "Banda desenhada" },
  "3": { cat: "Ciências exatas e naturais" },
  "4": { cat: "Ciências sociais e humanas" },
  "5": { cat: "Desenvolvimento pessoal" },
  "6": { cat: "Desporto e lazer" },
  "7": { cat: "Dicionários e enciclopédias" },
  "8": { cat: "Direito" },
  "9": { cat: "Economia e finanças" },
  "10": { cat: "Engenharia" },
  "11": { cat: "Ensino e educação" },
  "12": { cat: "Gastronomia e vinhos" },
  "13": { cat: "Gestão" },
  "14": { cat: "Guias turísticos e mapas" },
  "15": { cat: "História" },
  "16": { cat: "Infantis e juvenis" },
  "17": { cat: "Informática" },
  "18": { cat: "Literatura" },
  "19": { cat: "Medicina" },
  "20": { cat: "Plano nacional de leitura" },
  "21": { cat: "Política" },
  "22": { cat: "Saúde e bem-estar" },
  "23": { cat: "Religião e moral" },
  "24": { cat: "Vida prática" },
};

export default categories;
