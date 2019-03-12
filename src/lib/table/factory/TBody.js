import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";


const TBody = props => {
    const {meta, data} = props;

    return (
        <TableBody>
            {data.map((row, i) => (
                <TableRow key={i}>
                    {meta.map(metaElem => {
                        const key = (metaElem.key) ? metaElem.key : metaElem.displayName;

                        let val;
                        if (key.indexOf(".") !== -1) {
                            const arr = key.split(".");
                            val = row;
                            for(const key of arr) {
                                val = val[key];
                            }
                        } else {
                            val = row[key];
                        }
                        if(metaElem.exec) {
                            val = metaElem.exec(val, row);
                        }
                        return (<TableCell key={key} {...metaElem.bodyProps}>{val}</TableCell>)
                    })}
                </TableRow>
            ))}
        </TableBody>    );
};

export default TBody;
