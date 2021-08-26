import React, { Dispatch } from 'react';

import { FormSection } from './FormSection';
import { Checkbox } from './Checkbox';
import { formInputType, actionPackageType } from '../../helpers/types';

export const FormCustomProject = ({
  input,
  setInput,
  dispatchPackages,
}: {
  input: formInputType;
  setInput: (input: formInputType) => void;
  dispatchPackages: Dispatch<actionPackageType>;
}) => {
  return (
    <div className="bg-gradient-to-br from-purple-400 to-purple-700 text-gray-700 dark:bg-blueGray dark:text-white p-6 rounded shadow hover:shadow-lg transition duration-200">
      <h2 className="font-extrabold text-xl pb-4 text-center text-white">Customization</h2>
      <div className="flex items-start space-x-2">
        <FormSection title="Type checker">
          <Checkbox
            name="typescript"
            packageName="typescript"
            setInput={setInput}
            input={input}
            dispatchPackages={dispatchPackages}
          >
            Typescript
          </Checkbox>
          <Checkbox
            name="flow"
            packageName="flow-bin"
            setInput={setInput}
            input={input}
            dispatchPackages={dispatchPackages}
          >
            Flow
          </Checkbox>
        </FormSection>
        <FormSection title="Styles">
          <Checkbox
            name="tailwind"
            packageName="@tailwindcss/postcss7-compat"
            setInput={setInput}
            input={input}
            dispatchPackages={dispatchPackages}
          >
            Tailwind
          </Checkbox>
          <Checkbox
            name="bootstrap"
            packageName="bootstrap"
            setInput={setInput}
            input={input}
            dispatchPackages={dispatchPackages}
          >
            Bootstrap
          </Checkbox>
          <Checkbox
            name="normalize"
            packageName="normalize.css"
            setInput={setInput}
            input={input}
            dispatchPackages={dispatchPackages}
          >
            CSS reset
          </Checkbox>
        </FormSection>
        <FormSection title="Tools">
          <Checkbox
            name="prettier"
            packageName="prettier"
            setInput={setInput}
            input={input}
            dispatchPackages={dispatchPackages}
          >
            Prettier
          </Checkbox>
          <Checkbox
            name="sourcemapexplorer"
            packageName="source-map-explorer"
            setInput={setInput}
            input={input}
            dispatchPackages={dispatchPackages}
          >
            Bundle analyze
          </Checkbox>
          <Checkbox
            name="storybook"
            packageName="storybook"
            setInput={setInput}
            input={input}
            dispatchPackages={dispatchPackages}
          >
            Storybook
          </Checkbox>
        </FormSection>
      </div>
    </div>
  );
};
