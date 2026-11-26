import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SavedNewHeader from "./SavedNewsHeader";
import SavedNewsCards from "./SavedNewsCards";

function SavedNews({ savedArticles, handleRemoveArticle, setSavedArticles }) {
  return (
    <>
      <Header setSavedArticles={setSavedArticles} />
      <SavedNewHeader savedArticles={savedArticles} />
      <SavedNewsCards
        savedArticles={savedArticles}
        handleRemoveArticle={handleRemoveArticle}
      />
      <Footer />
    </>
  );
}

export default SavedNews;
