import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import Smartwatches from "../../components/Products/Smartwatches";
import Footer from "../../components/Footer/Footer";

const SmartwatchDetail = () => {
  return (
    <div>
      <Helmet>
        <title>Internet-do'kondan smart soatlar va fitnes brasletlar sotib olish — KATTABOZOR</title>
      </Helmet>
      <Header />
      <Smartwatches />
      <Footer />
    </div>
  );
};

export default SmartwatchDetail;
