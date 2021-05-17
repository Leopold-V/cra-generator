import React, { Dispatch, useContext } from 'react';
import { actionPackageType } from '../helpers/types';
import { PackageContext } from './context/PackageJsonProvider';

export const ButtonRemovePackage = ({
  type,
  packageName,
  dispatchPackages,
}: {
  type: 'dependencies' | 'devDependencies';
  packageName: string;
  dispatchPackages: Dispatch<actionPackageType>;
}) => {
  const { dispatchJson } = useContext(PackageContext);

  const removePackages = (e: React.MouseEvent<HTMLElement>): void => {
    dispatchPackages({
      type: 'REMOVE',
      payload: { destination: type, name: e.currentTarget.dataset.name },
    });
    dispatchJson({
      type: 'REMOVE',
      payload: { category: type, name: e.currentTarget.dataset.name },
    });
  };

  return (
    <button
      data-name={packageName}
      className="px-2 h-full border-none focus:bg-white focus:outline-none transition duration-200"
      onClick={removePackages}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};
