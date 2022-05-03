import { TextInput, Text, Button, Pane } from "evergreen-ui";
import React from "react";

export const AddBook = () => {
  return (
    <Pane display="flex" justifyContent="center">
      <Text marginX={16} marginTop={22}>
        {"Add New Book"}
      </Text>
      <TextInput marginX={16} marginY={16} name="title" placeholder="Title" />
      <TextInput marginX={16} marginY={16} name="author" placeholder="Author" />
      <TextInput marginX={16} marginY={16} name="genre" placeholder="Genre" />
      <Button marginX={16} marginY={16} appearance="primary">
        Submit
      </Button>
    </Pane>
  );
};
