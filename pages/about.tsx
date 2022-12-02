import AboutDisplay from "../components/About";
import Header from "../components/Header";
import LoginDisplay from "../components/Login";

export default function About() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <AboutDisplay />
    </div>
  );
}
