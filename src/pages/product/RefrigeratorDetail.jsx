import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import Refrigerators from "../../components/Products/Refrigerators";
import Footer from "../../components/Footer/Footer";

const RefrigeratorDetail = () => {
  return (
    <div>
      <Helmet>
        <title>Internet-do'kondan muzlatgichlarni sotib olish — KATTABOZOR</title>
      </Helmet>
      <Header />
      <Refrigerators />
      <Footer />
    </div>
  );
};

export default RefrigeratorDetail;
