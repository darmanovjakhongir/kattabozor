import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import PhoneLogin from "../../components/Login/PhoneLogin"
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>KATTABOZORga kirish — KATTABOZOR</title>
      </Helmet>
      <Header />
      <PhoneLogin />
      <Footer />
    </div>
  );
};

export default Login;
