import React, { useContext, Dispatch } from 'react'
import { actionPackageType, listPackageType } from '../helpers/types';
import { PackageContext } from './context/PackageContext';

export const ListPackagesFound = (
    {results, dispatchPackages}:
    {results: listPackageType, dispatchPackages: Dispatch<actionPackageType>}) => {

    const { packageJson, dispatchJson } = useContext(PackageContext);

    const addPackages = (e: React.MouseEvent<HTMLElement>) => {
        dispatchPackages({type : 'ADD', payload: e.currentTarget.dataset.name});
        dispatchJson({type : 'ADD', payload: {name: e.currentTarget.dataset.name, version: e.currentTarget.dataset.version}});
    }

    return (
        <ul className="absolute w-4/5 top-20 shadow mb-4">
            {results.map((ele) => (
                <li 
                    key={ele.name} 
                    className="text-blue-700 border-1 bg-blue-50 hover:bg-blue-200 transition duration-200
                    flex items-center justify-start w-full h-9" 
                >
                    {Object.keys(packageJson.dependencies).includes(ele.name) ? <div className="h-7 w-8"></div>
                    : <button
                        data-name={ele.name}
                        data-version={ele.version}
                        onClick={addPackages}
                        className="px-1 h-full border-none focus:bg-blue-300 focus:outline-none transition duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="#3f3f3f">
                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                    </button>}
                    <div className="text-center w-full overflow-ellipsis px-2">
                        {ele.name}
                    </div>
                </li>
            ))}
        </ul>
    )
}
