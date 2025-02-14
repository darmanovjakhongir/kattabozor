import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import Monitors from "../../components/Products/Monitors";
import Footer from "../../components/Footer/Footer";

const MonitorDetail = () => {
  return (
    <div>
      <Helmet>
        <title>Internet-do'kondan monitorlarni sotib olish — KATTABOZOR</title>
      </Helmet>
      <Header />
      <Monitors />
      <Footer />
    </div>
  );
};

export default MonitorDetail;
