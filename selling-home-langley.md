import Container from "../../../components/Container";
import LeadCTA from "../../../components/LeadCTA";
import JsonLd from "../../../components/JsonLd";
import { getAllSlugs, getContent, renderMarkdownToHtml } from "../../../lib/content";

export async function generateStaticParams() {
  return getAllSlugs("pillars").map((slug) => ({ slug }));
}

export default async function Page({ params }){
  const { frontmatter, content } = getContent("pillars", params.slug);
  const html = await renderMarkdownToHtml(content);

  const faqJsonLd = frontmatter.faq?.length ? {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity": frontmatter.faq.map((f)=>({
      "@type":"Question",
      "name": f.q,
      "acceptedAnswer": { "@type":"Answer", "text": f.a }
    }))
  } : null;

  return (
    <>
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}
      <section className="py-14">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.35em] text-champagne-400">{frontmatter.topic || "GUIDE"}</div>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">{frontmatter.title}</h1>
            <p className="mt-5 text-white/75">{frontmatter.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60">
              {(frontmatter.tags||[]).map((t)=>(<span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{t}</span>))}
            </div>
          </div>

          <div className="prose prose-invert mt-10 max-w-3xl prose-a:text-champagne-300 prose-headings:font-display prose-headings:tracking-wide">
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>

          {frontmatter.faq?.length ? (
            <div className="mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs tracking-[0.3em] text-champagne-400">FAQ</div>
              <div className="mt-4 space-y-4">
                {frontmatter.faq.map((f, idx)=>(
                  <details key={idx} className="rounded-xl border border-white/10 bg-black/40 px-4 py-3">
                    <summary className="cursor-pointer text-sm text-white">{f.q}</summary>
                    <p className="mt-2 text-sm text-white/70">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-12 max-w-3xl rounded-2xl border border-white/10 bg-black/40 p-6">
            <div className="text-xs tracking-[0.3em] text-champagne-400">NEXT STEPS</div>
            <p className="mt-2 text-sm text-white/70">
              This pillar page is designed to internally link to supporting blog clusters. Add related posts in the frontmatter
              and we’ll render a “Related Articles” block here.
            </p>
          </div>
        </Container>
      </section>

      <LeadCTA />
    </>
  );
}
