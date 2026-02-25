import Container from "../../components/Container";
import LeadCTA from "../../components/LeadCTA";

export const metadata = {
  title: "Surrey Monthly Market Report"
};

export default function Page(){
  return (
    <>
      <section className="py-14">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.35em] text-champagne-400">CHANDAN RATHOD</div>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">Surrey Monthly Market Report</h1>
            <p className="mt-5 text-white/75 leading-relaxed">Editable monthly report template: charts, downloadable PDF link, video embed, and stats table placeholders.</p>
          </div>
        </Container>
      </section>
      <LeadCTA />
    </>
  );
}
