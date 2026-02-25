import Container from "../../components/Container";
import LeadCTA from "../../components/LeadCTA";

export const metadata = { title: "Contact" };

export default function Page(){
  return (
    <>
      <section className="py-14">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="text-xs tracking-[0.35em] text-champagne-400">CONTACT</div>
              <h1 className="mt-4 font-display text-4xl md:text-5xl">Let’s talk.</h1>
              <p className="mt-5 text-white/75 leading-relaxed">
                Reach out for a private strategy call, listing consultation, or buyer plan.
              </p>
              <div className="mt-8 space-y-3 text-white/75">
                <div>📞 <a className="hover:text-white" href="tel:+17788872030">+1-778-887-2030</a></div>
                <div>✉️ <a className="hover:text-white" href="mailto:chandanr@sutton.com">chandanr@sutton.com</a></div>
                <div>📍 Surrey & Langley, BC</div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs tracking-[0.3em] text-champagne-400">CONTACT FORM</div>
              <form className="mt-5 grid gap-3" name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <input className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-champagne-400" name="name" placeholder="Full name" required />
                <input className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-champagne-400" name="email" type="email" placeholder="Email" required />
                <input className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-champagne-400" name="phone" placeholder="Phone (optional)" />
                <textarea className="min-h-[120px] rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-champagne-400" name="message" placeholder="How can I help?" required />
                <button className="mt-2 rounded-full bg-champagne-500 px-5 py-3 text-sm text-black hover:bg-champagne-400 transition" type="submit">Send</button>
                <p className="text-xs text-white/60">Form handled by Netlify Forms when deployed on Netlify.</p>
              </form>
            </div>
          </div>
        </Container>
      </section>
      <LeadCTA />
    </>
  );
}
