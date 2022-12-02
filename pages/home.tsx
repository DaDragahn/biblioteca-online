import FooterDisplay from "../components/Footer";
import Header from "../components/Header";
import HomeDisplay from "../components/Home";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <HomeDisplay />
      </main>

      <footer>
        <FooterDisplay />
      </footer>
    </div>
  );
}
