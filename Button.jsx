import Container from "../../components/Container";
import LeadCTA from "../../components/LeadCTA";

const areas = [
  { title: "Surrey Neighbourhoods", href: "/communities/surrey" },
  { title: "Langley Neighbourhoods", href: "/communities/langley" },
];

export const metadata = { title: "Communities" };

export default function Page(){
  return (
    <>
      <section className="py-14">
        <Container>
          <div className="max-w-4xl">
            <div className="text-xs tracking-[0.35em] text-champagne-400">COMMUNITIES</div>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">Surrey & Langley neighbourhood guides.</h1>
            <p className="mt-5 text-white/75">Market trends, schools, amenities, and active listings (integration-ready).</p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {areas.map((a)=>(
                <a key={a.href} href={a.href} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
                  <div className="text-lg font-display">{a.title}</div>
                  <div className="mt-2 text-sm text-white/70">Explore guides →</div>
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
