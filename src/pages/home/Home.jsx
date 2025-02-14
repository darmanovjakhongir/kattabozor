import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import TabMenuUnboxing from "../../components/TabMenuUnboxing/TabMenuUnboxing";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>KATTABOZOR — O'zbekiston internet-do'konlaridan mahsulot qidirish</title>
      </Helmet>
      <Header />
      <TabMenuUnboxing />
      <Footer />
    </div>
  );
}

export default Home;
