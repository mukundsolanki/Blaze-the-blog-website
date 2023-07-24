import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth  } from '../lib/firebase';

export default function UserProfile({ user }) {
  return (
    <div className="box-center">
      <img src={user.photoURL || '/hacker.png'} className="card-img-center" />
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName || 'Guest'}</h1>
      <SignOutButton />
    </div>
  );
}

function SignOutButton() {
  const router = useRouter();

  const handleSignOut = () => {
    auth.signOut();
    router.push('/');
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
}