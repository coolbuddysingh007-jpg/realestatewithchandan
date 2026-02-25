import Container from "../../components/Container";
import LeadCTA from "../../components/LeadCTA";
import { getAllContent } from "../../lib/content";

export const metadata = { title: "Guides" };

export default function Page(){
  const guides = getAllContent("pillars");
  return (
    <>
      <section className="py-14">
        <Container>
          <div className="max-w-4xl">
            <div className="text-xs tracking-[0.35em] text-champagne-400">PILLAR GUIDES</div>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">Long-form real estate guides.</h1>
            <p className="mt-5 text-white/75">Designed for topical authority and AI discoverability.</p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {guides.map((g)=>(
                <a key={g.slug} href={`/guides/${g.slug}`} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
                  <div className="text-xs tracking-[0.3em] text-white/60">{g.topic || "GUIDE"}</div>
                  <div className="mt-2 text-xl font-display">{g.title}</div>
                  <div className="mt-2 text-sm text-white/70">{g.excerpt}</div>
                  <div className="mt-4 text-xs text-champagne-300">Open guide →</div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <LeadCTA />
    </>
  );
}
