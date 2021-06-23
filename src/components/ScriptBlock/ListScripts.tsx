import React from 'react';
import { ScriptItem } from './ScriptItem';

export const ListScripts = ({ scripts }: { scripts: {} }) => {
  return (
    <ul className="text-sm flex flex-wrap justify-center items-center">
      {Object.entries(scripts).map((script: any) => {
        return <ScriptItem script={script} />;
      })}
    </ul>
  );
};