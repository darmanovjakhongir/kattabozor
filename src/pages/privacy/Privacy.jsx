import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";
import Footer from "../../components/Footer/Footer";

const Privacy = () => {
  return (
    <div>
      <Helmet>
        <title>Maxfiylik siyosati — KATTABOZOR</title>
      </Helmet>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default Privacy;
