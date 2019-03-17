import React from 'react';

import FormHandler from "./formHandler/FormHandler";
import formData from "../constants/form.json";
import ReduxFormHandler from "./formHandler/ReduxFormHandler";

export const createForm = ({dataId, onSubmit, dropDownData, values}) => {
    if (! formData.hasOwnProperty(dataId)) {
        return <div>{`Invalid dataId ${dataId}, configure this id in form.json`}</div>
    }
    const data = formData[dataId];
    return <FormHandler dropDownData={dropDownData} onSubmit={onSubmit} data={data} values={values} />
}

export const createReduxForm = ({dataId, onSubmit, dropDownData, values}) => {
    if (! formData.hasOwnProperty(dataId)) {
        return <div>{`Invalid dataId ${dataId}, configure this id in form.json`}</div>
    }
    const data = formData[dataId];
    return <ReduxFormHandler dataId={dataId} dropDownData={dropDownData} onSubmit={onSubmit} data={data} values={values} />
}
