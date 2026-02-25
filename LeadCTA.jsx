import Container from "../../components/Container";
import LeadCTA from "../../components/LeadCTA";
import { getAllContent } from "../../lib/content";

export const metadata = { title: "Blog" };

export default function Page(){
  const posts = getAllContent("blog");
  return (
    <>
      <section className="py-14">
        <Container>
          <div className="max-w-4xl">
            <div className="text-xs tracking-[0.35em] text-champagne-400">BLOG</div>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">Guides, market insights, and strategy.</h1>
            <p className="mt-5 text-white/75">Built for long-term topical authority in Surrey & Langley real estate.</p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {posts.map((p)=>(
                <a key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
                  <div className="text-xs tracking-[0.3em] text-white/60">{p.category || "INSIGHT"}</div>
                  <div className="mt-2 text-xl font-display">{p.title}</div>
                  <div className="mt-2 text-sm text-white/70">{p.excerpt}</div>
                  <div className="mt-4 text-xs text-champagne-300">Read →</div>
                </a>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="text-xs tracking-[0.3em] text-champagne-400">FILTERS (NEXT)</div>
              <p className="mt-2 text-sm text-white/70">
                Tags + filters (Buying, Selling, Mortgage, Investment, Surrey, Langley, Market Data, Mistakes, First-Time Buyers, Presales) are wired into frontmatter.
                Next step is adding UI controls + pagination for 700+ posts.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <LeadCTA />
    </>
  );
}
