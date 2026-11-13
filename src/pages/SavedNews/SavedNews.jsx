import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SavedNewHeader from "./SavedNewsHeader";
import SavedNewsCards from "./SavedNewsCards";

function SavedNews() {
  return (
    <>
      <Header />
      <SavedNewHeader />
      <SavedNewsCards />
      <Footer />
    </>
  );
}

export default SavedNews;
