import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import Competition from "../../components/Competition/Competition";
import Footer from "../../components/Footer/Footer";

const Contest = () => {
  return (
    <div>
      <Helmet>
        <title>Tovarlar haqidagi izohlar tanlovi — KATTABOZOR</title>
      </Helmet>
      <Header />
      <Competition />
      <Footer />
    </div>
  );
};

export default Contest;
