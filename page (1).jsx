import Container from "../components/Container";
import Button from "../components/Button";
import LeadCTA from "../components/LeadCTA";
import JsonLd from "../components/JsonLd";

export default function Page(){
  const jsonLd = {
    "@context":"https://schema.org",
    "@type":"RealEstateAgent",
    "name":"Chandan Rathod",
    "telephone":"+1-778-887-2030",
    "email":"chandanr@sutton.com",
    "areaServed":["Surrey, BC","Langley, BC"],
    "url":"https://realestatewithchandan.ca"
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,162,60,0.18),transparent_45%)]" />
        <Container className="relative py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.35em] text-champagne-400">SURREY • LANGLEY • BC</div>
            <h1 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
              Ultra-luxury real estate guidance built for confident decisions.
            </h1>
            <p className="mt-5 text-white/75 leading-relaxed">
              Buying, selling, or investing in Surrey & Langley? Get a strategy-first approach backed by local market data,
              negotiation experience, and a premium client experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/properties">View Properties</Button>
              <Button href="/quick-search" variant="outline">Quick Search</Button>
              <Button href="/market-update/surrey" variant="outline">Market Update</Button>
            </div>
            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {[
                ["Townhomes", "Surrey & Langley townhome strategy + listings."],
                ["Detached Homes", "Neighborhood-by-neighborhood detached insights."],
                ["Presales", "New construction, assignments, and launch guidance."]
              ].map(([t,d])=>(
                <a key={t} href="/guides" className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
                  <div className="text-sm font-medium">{t}</div>
                  <div className="mt-2 text-sm text-white/70">{d}</div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-8">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="text-xs tracking-[0.3em] text-champagne-400">LEAD MAGNET</div>
              <h2 className="mt-3 font-display text-2xl">Buyer Guide (BC)</h2>
              <p className="mt-2 text-white/70">A clean checklist + timelines for first-time and move-up buyers.</p>
              <div className="mt-5"><Button href="/guides/buyer-guide">Download</Button></div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="text-xs tracking-[0.3em] text-champagne-400">SELL SMART</div>
              <h2 className="mt-3 font-display text-2xl">Seller Guide</h2>
              <p className="mt-2 text-white/70">Pricing, prep, launch, negotiation—built for Surrey & Langley.</p>
              <div className="mt-5"><Button href="/guides/seller-guide">Download</Button></div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="text-xs tracking-[0.3em] text-champagne-400">INSTANT</div>
              <h2 className="mt-3 font-display text-2xl">Free Home Evaluation</h2>
              <p className="mt-2 text-white/70">Get a custom price range + strategy, no pressure.</p>
              <div className="mt-5"><Button href="/home-evaluation">Start</Button></div>
            </div>
          </div>
        </Container>
      </section>

      <LeadCTA />
    </>
  );
}
