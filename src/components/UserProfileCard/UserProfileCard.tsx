import React from 'react';
// types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}
 
export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

export const UserProfileCard = ({user, showEmail, showRole, onEdit, children }: UserProfileCardProps): React.ReactNode => {
  return (
    <div>
      <div>
        {`ID: ${user.id}, NAME: ${user.name}, EMAIL: ${showEmail ? user.email : 'Settings do not allow display of email.'}, ROLE: ${showRole ? user.role : 'Settings do not allow display of role.'}, Avatar URL: ${user.avatarUrl ? user.avatarUrl : ''}`}
      </div>
      <button onClick={() => (onEdit as Function)(user.id)}>
        X
      </button>
      {children}
    </div>
  )
}