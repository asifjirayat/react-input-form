import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Form from "./components/Form.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Form />
      </main>
      <Footer />
    </>
  );
}
