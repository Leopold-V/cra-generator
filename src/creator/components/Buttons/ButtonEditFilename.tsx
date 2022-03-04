import React, { MouseEvent } from 'react';

export const ButtonEditFilename = ({ setIsEdit }: { setIsEdit: (isEdit: boolean) => void }) => {
  const editNameItem = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsEdit(true);
  };

  return (
    <button onClick={editNameItem}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-pencil transform hover:rotate-45 transition duration-200"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#3d3d3d"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
      </svg>
    </button>
  );
};