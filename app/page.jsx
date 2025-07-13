import { Hero } from "./components/Hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">PulseGuard</h1>
      <Hero />
    </div>
  );
}
