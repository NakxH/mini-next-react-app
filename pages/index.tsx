import { AddBook } from "../components/addBook";
import { Pane, Heading, majorScale } from "evergreen-ui";
import { ShowBooks } from "../components/showBooks";

const HomePage = () => {
  return (
    <Pane>
      <Heading display="flex" justifyContent="center" size={900} marginY={53}>
        Mini Library
      </Heading>
      <AddBook />
      <ShowBooks />
    </Pane>
  );
};

export default HomePage;
