import React from 'react';
import { BadgeCheckIcon, ClockIcon, ExclamationIcon } from '@heroicons/react/outline';
import { taskStateType } from '../../helpers/types';

export const TaskStatut = ({ taskState }: { taskState: taskStateType }) => {
  if (taskState === 'Idle') {
    return <div>Idle</div>;
  } else if (taskState === 'Error') {
    return (
      <div className="flex items-center space-x-2">
        <ExclamationIcon className="h-5 w-5 text-red-600" aria-hidden="true" />
        <span>Error</span>
      </div>
    );
  } else if (taskState === 'Success') {
    return (
      <div className="flex items-center space-x-2">
        <BadgeCheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
        <span>Success</span>
      </div>
    );
  } else {
    return (
      <div className="flex items-center space-x-2">
        <ClockIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
        <span>Pending...</span>
      </div>
    );
  }
};
