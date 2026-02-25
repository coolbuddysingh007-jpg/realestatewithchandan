import Container from "../../components/Container";
import LeadCTA from "../../components/LeadCTA";

export const metadata = {
  title: "Properties"
};

export default function Page(){
  return (
    <>
      <section className="py-14">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.35em] text-champagne-400">CHANDAN RATHOD</div>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">Properties</h1>
            <p className="mt-5 text-white/75 leading-relaxed">Featured listings, sold listings, map search, and advanced filters. (MLS integration ready — connect your provider/API when ready.)</p>
          </div>
        </Container>
      </section>
      <LeadCTA />
    </>
  );
}
