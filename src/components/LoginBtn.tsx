'use client';

import { signIn } from 'next-auth/react';

export default function LoginBtn() {
  return (
    <div onClick={() => signIn('google')} className="cursor-pointer">
      <img src="/img/google-oauth-btn.png" width="200" className="m-auto p-5" />
    </div>
  );
}
