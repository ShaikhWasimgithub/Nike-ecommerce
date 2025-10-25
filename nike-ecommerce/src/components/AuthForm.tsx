"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "@/lib/auth/actions";
import SocialProviders from "./SocialProviders";

interface AuthFormProps {
  mode: "signup" | "signin";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const action = mode === "signup" ? signUp : signIn;
      const result = await action(new FormData(e.currentTarget));

      if (result.ok) {
        router.push("/");
      } else {
        setError(result.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setError("Server error");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black">
          {mode === "signup" ? "Join Nike Today!" : "Welcome Back!"}
        </h1>
      </div>

      <SocialProviders variant={mode} />

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-3 text-gray-500">
            Or {mode === "signup" ? "sign up" : "sign in"} with
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {mode === "signup" && (
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-black"
          />
        )}

        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-black"
        />

        <input
          name="password"
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-black"
        />

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          className="mt-4 bg-black text-white rounded-full py-3 text-center font-medium hover:opacity-90 transition"
        >
          {mode === "signup" ? "Create Account" : "Sign In"}
        </button>
      </form>
    </div>
  );
}
