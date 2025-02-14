import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import Guide from "../../components/Guide/Guide";
import Footer from "../../components/Footer/Footer";

const Help = () => {
  return (
    <div>
      <Helmet>
        <title>Qo`llanma — KATTABOZOR</title>
      </Helmet>
      <Header />
      <Guide />
      <Footer />
    </div>
  );
};

export default Help;
