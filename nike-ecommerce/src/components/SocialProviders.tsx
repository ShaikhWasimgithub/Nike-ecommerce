"use client";

import Image from "next/image";

type Props = { variant?: "signup" | "signin" };

export default function SocialProviders({ variant = "signin" }: Props) {
  //  Better Auth v1.3.27: Manual redirect to Google provider
  const handleGoogle = () => {
    const callback = encodeURIComponent("/"); // After successful login redirect
    window.location.href = `/api/auth/redirect/google?callbackUrl=${callback}`;
  };

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={handleGoogle}
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3 text-base font-medium text-black hover:bg-gray-100 transition"
      >
        <Image src="/google.svg" alt="google" width={20} height={20} />
        <span>Continue with Google</span>
      </button>

      <button
        type="button"
        onClick={() => alert("Apple login not configured yet")}
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3 text-base font-medium text-black hover:bg-gray-100 transition"
      >
        <Image src="/apple.svg" alt="apple" width={20} height={20} />
        <span>Continue with Apple</span>
      </button>
    </div>
  );
}
