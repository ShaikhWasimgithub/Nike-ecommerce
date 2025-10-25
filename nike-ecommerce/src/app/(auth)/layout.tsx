import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side */}
      <section className="hidden lg:flex flex-col justify-between bg-[#111111] text-white p-12">
        <div className="flex items-center">
          <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center">
            <Image src="/Frame.png" alt="Logo" width={24} height={24} />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Just Do It</h2>
          <p className="text-lg text-gray-300">
            Join millions of athletes and fitness enthusiasts who trust Nike for
            their performance needs.
          </p>
          <div className="flex gap-2" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-white/90" />
            <span className="h-2 w-2 rounded-full bg-white/50" />
            <span className="h-2 w-2 rounded-full bg-white/50" />
          </div>
        </div>

        <p className="text-sm text-gray-400">
          © 2025 Nike. All rights reserved.
        </p>
      </section>

      {/* Right Side (Form Area) */}
      <section className="flex items-center justify-center bg-white">
        <div className="w-full max-w-md px-6 sm:px-8">{children}</div>
      </section>
    </main>
  );
}
