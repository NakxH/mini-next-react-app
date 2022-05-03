import { AddBook } from "../components/addBook";
import { Pane, Text } from "evergreen-ui";
import { ShowBooks } from "../components/showBooks";

const HomePage = () => {
  return (
    <Pane>
      <AddBook />
      <ShowBooks />
    </Pane>
  );
};

export default HomePage;
