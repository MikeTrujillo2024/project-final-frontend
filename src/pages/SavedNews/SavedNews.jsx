import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SavedNewHeader from "./SavedNewsHeader";
import SavedNewsCards from "./SavedNewsCards";

function SavedNews({savedArticles,handleRemoveArticle}) {
  return (
    <>
      <Header />
      <SavedNewHeader savedArticles={savedArticles} />
      <SavedNewsCards savedArticles={savedArticles} handleRemoveArticle={handleRemoveArticle}/>
      <Footer />
    </>
  );
}

export default SavedNews;
