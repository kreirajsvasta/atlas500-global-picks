import Link from "next/link";

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return <main className="legal-shell"><Link className="legal-back" href="/">← Atlas500 Global Picks</Link><h1>{title}</h1>{children}</main>;
}
