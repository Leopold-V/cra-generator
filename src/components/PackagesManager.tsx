import React, { Dispatch } from 'react'

import { actionPackageType, depStateType } from '../helpers/types';
import { SearchPackages } from './SearchPackages';
import { ListPackages } from './ListPackages';

export const PackagesManager = (
    {listPackages, dispatchPackages}:
    {listPackages: depStateType, dispatchPackages: Dispatch<actionPackageType>}) => {

    return (
        <div className="flex flex-col justify-center">
            <div className="lg:w-4/12 pb-10 mx-auto">
                <SearchPackages dispatchPackages={dispatchPackages} />
            </div>
            <div className="w-10/12 mx-auto">
                <ListPackages dispatchPackages={dispatchPackages} listPackages={listPackages} />
            </div>
        </div>
    )
}
