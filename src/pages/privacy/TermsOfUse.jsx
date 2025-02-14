import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import TermsOfService from "../../components/TermsOfService/TermsOfService";
import Footer from "../../components/Footer/Footer";

const TermsOfUse = () => {
  return (
    <div>
      <Helmet>
        <title>Foydalanish shartlari — KATTABOZOR</title>
      </Helmet>
      <Header />
      <TermsOfService />
      <Footer />
    </div>
  );
};

export default TermsOfUse;
