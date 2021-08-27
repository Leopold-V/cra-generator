import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useLoading } from '../Contexts/LoadingPackageProvider';

export const CardDependencies = ({
  children,
  title,
  listPackages,
}: {
  children: React.ReactNode;
  title: string;
  listPackages: { name: string; size: number }[];
}) => {
  const { loading } = useLoading();

  return (
    <div className="p-6 w-60 bg-white text-gray-800 dark:bg-blueGray dark:text-white rounded shadow hover:shadow-lg transition duration-200">
      <div className="flex flex-col items-center">
        <h2 className="font-bold pb-2">
          {title} ({listPackages.length}) :
        </h2>
        {loading ? <ClipLoader color="#6366F1" loading={loading} size={40} /> : children}
      </div>
    </div>
  );
};
