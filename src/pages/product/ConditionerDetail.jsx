import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import Conditioners from "../../components/Products/Conditioners";
import Footer from "../../components/Footer/Footer";

const ConditionerDetail = () => {
  return (
    <div>
      <Helmet>
        <title>Internet-do'kondan konditsionerlarni sotib olish — KATTABOZOR</title>
      </Helmet>
      <Header />
      <Conditioners />
      <Footer />
    </div>
  );
};

export default ConditionerDetail;
