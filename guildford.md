import Container from "../../components/Container";
import LeadCTA from "../../components/LeadCTA";

export const metadata = {
  title: "Privacy Policy"
};

export default function Page(){
  return (
    <>
      <section className="py-14">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.35em] text-champagne-400">CHANDAN RATHOD</div>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">Privacy Policy</h1>
            <p className="mt-5 text-white/75 leading-relaxed">Add your privacy policy here (forms, analytics, cookies, pixels).</p>
          </div>
        </Container>
      </section>
      <LeadCTA />
    </>
  );
}
