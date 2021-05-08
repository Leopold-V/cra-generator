import React from 'react'
import toast from 'react-hot-toast';
import { ipcRenderer } from 'electron';

import { toastValidationStyle } from '../helpers/toast';
import validateInput from '../utils/validate_input';
import { formInputType } from '../helpers/types';

export const ButtonCreation = ({input} : {input: formInputType}) => {

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();
        if (!validateInput(input.appname)) {
            toast('The project name is invalid !', toastValidationStyle);
        } else {
        ipcRenderer.send('open-directory', input); 
        }
    };

    return (
        <button
            onClick={handleSubmit}
            className=" mx-auto shadow-red bg-red-500 px-4 py-2 outline-none font-bold text-xl
            tracking-wider text-white rounded-lg hover:bg-red-700 focus:outline-none transition duration-250"
            >
            Create
        </button>
    )
}
