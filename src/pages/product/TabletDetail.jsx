import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import Tablets from "../../components/Products/Tablets";
import Footer from "../../components/Footer/Footer";

const TabletDetail = () => {
  return (
    <div>
      <Helmet>
        <title>Internet-do'kondan planshetlar sotib olish — KATTABOZOR</title>
      </Helmet>
      <Header />
      <Tablets />
      <Footer />
    </div>
  );
};

export default TabletDetail;
