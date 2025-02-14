import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import Laptops from "../../components/Products/Laptops";
import Footer from "../../components/Footer/Footer";

const LaptopDetail = () => {
  return (
    <div>
      <Helmet>
        <title>Internet-do'kondan noutbuklarni sotib olish — KATTABOZOR</title>
      </Helmet>
      <Header />
      <Laptops />
      <Footer />
    </div>
  );
};

export default LaptopDetail;
