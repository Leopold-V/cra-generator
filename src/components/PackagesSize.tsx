import React, { useState, useEffect } from 'react';
import listDepsSize from '../utils/listDepsSize';
import { depStateType } from '../helpers/types';
import { ChartSize } from './ChartSize';
import { usePackageJson } from './context/PackageJsonProvider';

export const PackagesSize = ({ listPackages }: { listPackages: depStateType }) => {
  const { baseSize } = usePackageJson();
  const [depsSize, setDepsSize] = useState(0);
  const [devDepsSize, setDevDepsSize] = useState(0);

  useEffect(() => {
    //console.log();
    setDepsSize(listDepsSize(listPackages.dependencies));
    setDevDepsSize(listDepsSize(listPackages.devDependencies));
  }, [listPackages]);

  return (
    <div className="bg-white rounded shadow p-6 flex flex-col justify-start items-center h-72">
      <h3 className="font-bold pb-4">Install size (kb) :</h3>
      <ChartSize baseSize={baseSize} depsSize={depsSize} devDepsSize={devDepsSize} />
    </div>
  );
};

export const PackagesSizeMemoized = React.memo(PackagesSize);