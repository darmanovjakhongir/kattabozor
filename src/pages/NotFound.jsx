import { Helmet } from "react-helmet";
import NotBeFound from "../../src/components/NotBeFound/NotBeFound";

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <NotBeFound />
    </div>
  );
};

export default NotFound;
