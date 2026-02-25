import Container from "../../components/Container";
import LeadCTA from "../../components/LeadCTA";

export const metadata = {
  title: "About Chandan Rathod"
};

export default function Page(){
  return (
    <>
      <section className="py-14">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.35em] text-champagne-400">CHANDAN RATHOD</div>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">About Chandan Rathod</h1>
            <p className="mt-5 text-white/75 leading-relaxed">A premium, strategy-first approach to helping buyers, sellers, and investors win in Surrey & Langley, BC.</p>
          </div>
        </Container>
      </section>
      <LeadCTA />
    </>
  );
}
