import React from 'react';

import FormSection from './FormSection';
import Checkbox from './Checkbox';
import { formInputType } from '../helpers/types';

export const FormCustomProject = ({input, setInput}: {input: formInputType, setInput: (input: formInputType) => void}) => {
    return (
        <div className="bg-white text-gray-800 p-6 rounded shadow">
            <h2 className="font-extrabold text-xl pb-6 text-center border-b-2 border-blue-100">Customization</h2>
            <div className="flex flex-col items-center divide-y-2 divide-blue-100 space-y-6">
                <FormSection title="Syntax">
                    <Checkbox name="typescript" setInput={setInput} input={input} >Typescript : </Checkbox>
                    <Checkbox name="prettier" setInput={setInput} input={input} >Prettier : </Checkbox>
                    <Checkbox name="flow" setInput={setInput} input={input} >Flow : </Checkbox>
                </FormSection>
                <FormSection title="Styles">
                    <Checkbox name="tailwind" setInput={setInput} input={input} >Tailwind : </Checkbox>
                    <Checkbox name="bootstrap" setInput={setInput} input={input} >Bootstrap : </Checkbox>
                    <Checkbox name="normalize" setInput={setInput} input={input} >CSS reset : </Checkbox>
                </FormSection>
                <FormSection title="Packages">
                    <Checkbox name="sourcemapexplorer" setInput={setInput} input={input} >source-map-explorer : </Checkbox>
                    <Checkbox name="storybook" setInput={setInput} input={input} >Storybook : </Checkbox>
                </FormSection>
            </div>
        </div>
    )
}
