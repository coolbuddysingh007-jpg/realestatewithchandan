import Container from "../../../components/Container";
import LeadCTA from "../../../components/LeadCTA";
import { getAllSlugs, getContent, renderMarkdownToHtml } from "../../../lib/content";
import JsonLd from "../../../components/JsonLd";

export async function generateStaticParams() {
  return getAllSlugs("communities").map((slug) => ({ slug }));
}

export default async function Page({ params }){
  const { frontmatter, content } = getContent("communities", params.slug);
  const html = await renderMarkdownToHtml(content);

  const jsonLd = {
    "@context":"https://schema.org",
    "@type":"WebPage",
    "name": frontmatter.title,
    "about": frontmatter.city,
    "isPartOf": { "@type":"WebSite", "name":"Chandan Rathod Real Estate", "url":"https://realestatewithchandan.ca" }
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="py-14">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.35em] text-champagne-400">{frontmatter.city}</div>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">{frontmatter.title}</h1>
            <p className="mt-5 text-white/75">{frontmatter.summary}</p>
          </div>

          <div className="prose prose-invert mt-10 max-w-3xl prose-a:text-champagne-300 prose-headings:font-display prose-headings:tracking-wide">
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </Container>
      </section>
      <LeadCTA />
    </>
  );
}
