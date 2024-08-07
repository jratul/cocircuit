"use client";

import { signIn } from "next-auth/react";

export default function LoginBtn() {
  return (
    <div>
      <img
        src="/images/google-oauth-btn.png"
        width="200"
        className="m-auto cursor-pointer p-5"
        onClick={() => signIn("google")}
      />
    </div>
  );
}
