import Container from "../../components/Container";
import LeadCTA from "../../components/LeadCTA";

export const metadata = {
  title: "Download Buyer Guide (BC)"
};

export default function Page(){
  return (
    <>
      <section className="py-14">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.35em] text-champagne-400">CHANDAN RATHOD</div>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">Download Buyer Guide (BC)</h1>
            <p className="mt-5 text-white/75 leading-relaxed">Lead magnet placeholder. Replace with your PDF or embed a form + automated email delivery.</p>
          </div>
        </Container>
      </section>
      <LeadCTA />
    </>
  );
}
