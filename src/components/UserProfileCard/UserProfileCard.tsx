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
  onEdit?: (event: any, userId: string) => void;
  children?: React.ReactNode;
}

// Displays user profile card.  Take optional arguments to show email and role respectively.  Takes optional function to be invoked on editing user ID. (Though user ID probably should never really be edited).  Function functionality not required by assignment.
export const UserProfileCard = ({user, showEmail, showRole, onEdit, children }: UserProfileCardProps): React.ReactNode => {
  return (
    <div>
      <div>
        {`ID: ${user.id}, NAME: ${user.name}, EMAIL: ${showEmail ? user.email : 'Settings do not allow display of email.'}, ROLE: ${showRole ? user.role : 'Settings do not allow display of role.'}, Avatar URL: ${user.avatarUrl ? user.avatarUrl : ''}`}
      </div>
      {onEdit ? (
      <button onClick={() => (onEdit as Function)(event, user.id)} style={{backgroundColor: "pink"}}>
        Edit User ID (Implementation Not Required)
      </button>) : null}
      {children}
    </div>
  )
}