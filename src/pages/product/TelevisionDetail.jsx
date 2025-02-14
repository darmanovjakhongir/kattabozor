import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import Televisions from "../../components/Products/Televisions";
import Footer from "../../components/Footer/Footer";

const TelevisionDetail = () => {
  return (
    <div>
      <Helmet>
        <title>Internet-do'kondan televizorlarni sotib olish — KATTABOZOR</title>
      </Helmet>
      <Header />
      <Televisions />
      <Footer />
    </div>
  );
};

export default TelevisionDetail;
