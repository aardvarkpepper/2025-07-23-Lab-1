import { UserProfileCard } from './UserProfileCard';

export const UserProfileCardTest = () => {

  const handleUserEdit = (event: any, userId: string) => {
    console.log(event);
    console.log(`New user ID: ${userId}`);
    alert (`New user ID: ${userId}`);
  }

  return (
    <>
      <UserProfileCard user={{ id: 'UserID', name: 'User Name', email: 'user@userdomain.org', role: 'User Role', avatarUrl: 'http://userthingy.com' }} showEmail={true} showRole={true} onEdit={handleUserEdit}>
        <div>
          Test User Profile Card Child 1 of 1.  This has showEmail, showRole set to true, handleUserEdit supplied.  Next card has set to false and no supply; last card suppllies no value to showEmail, showRole, or handleUserEdit.
        </div>
      </UserProfileCard>
      <div>-------------------------------------------------------------</div>
      <UserProfileCard user={{ id: 'UserID', name: 'User Name', email: 'user@userdomain.org', role: 'User Role', avatarUrl: 'http://userthingy.com' }} showEmail={false} showRole={false} >
      </UserProfileCard>
      <div>-------------------------------------------------------------</div>
      <UserProfileCard user={{ id: 'UserID', name: 'User Name', email: 'user@userdomain.org', role: 'User Role', avatarUrl: 'http://userthingy.com' }} >
      </UserProfileCard>
    </>
  )
}

