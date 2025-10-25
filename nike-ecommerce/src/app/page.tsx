import { db } from "@/lib/db";

import Hero from "@/components/Hero";
import { BestOfAirMax } from "@/components";
import { TrendingNow } from "@/components";
import { HomeBanner } from "@/components";
import { AuthForm } from "@/components";

export default async function Home() {
  return (
    <main className="p-8">
      <Hero />
      <BestOfAirMax />
      <TrendingNow />
      <HomeBanner />
    </main>
  );
}
