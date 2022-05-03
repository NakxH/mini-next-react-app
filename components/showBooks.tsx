import {
  IconButton,
  majorScale,
  Pane,
  Table,
  TableBody,
  TrashIcon,
} from "evergreen-ui";
import React from "react";

export const ShowBooks = () => {
  return (
    <Pane>
      <Table marginX={majorScale(8)} marginY={majorScale(8)}>
        <Table.Head>
          <Table.TextHeaderCell>Book Title</Table.TextHeaderCell>
          <Table.TextHeaderCell>Author</Table.TextHeaderCell>
          <Table.TextHeaderCell>Genre</Table.TextHeaderCell>
          <Table.TextHeaderCell>Delete</Table.TextHeaderCell>
        </Table.Head>
        <TableBody>
          <Table.Row>
            <Table.TextCell>The Shining</Table.TextCell>
            <Table.TextCell>Stephen King</Table.TextCell>
            <Table.TextCell>Horror</Table.TextCell>
            <Table.Cell>
              <IconButton icon={TrashIcon} />
            </Table.Cell>
          </Table.Row>
        </TableBody>
      </Table>
    </Pane>
  );
};
