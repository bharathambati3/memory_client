import React from 'react';

import FormHandler from "./formHandler/FormHandler";
import formData from "../constants/form.json";

export const createForm = (dataId, values = null) => {
    if (! formData.hasOwnProperty(dataId)) {
        return <div>{`Invalid dataId ${dataId}, configure this id in form.json`}</div>
    }
    const data = formData[dataId];
    return <FormHandler data={data} values={values} />
}