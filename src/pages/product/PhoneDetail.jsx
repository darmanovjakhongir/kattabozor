import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import Phones from "../../components/Products/Phones";
import Footer from "../../components/Footer/Footer";

const PhoneDetail = () => {
  return (
    <div>
      <Helmet>
        <title>Internet-do'konda mobil telefonlar harid qilish — KATTABOZOR</title>
      </Helmet>
      <Header />
      <Phones />
      <Footer />
    </div>
  );
};

export default PhoneDetail;
