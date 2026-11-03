import Navbar from "@/components/Navbar";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}