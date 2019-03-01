import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const THead = props => {
    const {meta} = props;
    const list = meta.map((elem, i) => (
        <TableCell key={i} {...elem.headerProps}>
            {elem.displayName}
        </TableCell>));
    return (
        <TableHead>
            <TableRow>
                {list}
            </TableRow>
        </TableHead>
    );
};

export default THead;
