import React from 'react';
// types/index.ts
// test if this needs to be explicitly exported.  Probably it doesn't - at least only needs to be exported for Typescript typing
export type AlertType = 'success' | 'error' | 'warning' | 'info';
 
export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: (event: any) => void;
  children?: React.ReactNode;
}
// on closer examination, assignment doesn't us to actually implement close functionality.

export const AlertBox = ({type, message, onClose, children}: AlertBoxProps): React.ReactNode => {
  return (
    <div>
      ALERT TYPE {type}.  MESSAGE: {message}
      <button onClick={(event) => (onClose as Function)(event)} style={{backgroundColor: "pink"}}>
        X
      </button>
      {children}
    </div>
  )
}

/**
// components/AlertBox/AlertBox.tsx
import React from 'react';
import { AlertBoxProps } from '../../types';
 
export const AlertBox: React.FC<AlertBoxProps> = ({
  type,
  message,
  onClose,
  children
}) => {
  const alertStyles = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700'
  };
 
  return (
    <div className={`p-4 border-l-4 ${alertStyles[type]}`}>
      <div className="flex justify-between items-center">
        <p>{message}</p>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

 */