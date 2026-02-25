import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  metadataBase: new URL("https://realestatewithchandan.ca"),
  title: {
    default: "Chandan Rathod | Surrey & Langley Real Estate Advisor",
    template: "%s | Chandan Rathod"
  },
  description: "Ultra-luxury real estate advisory for Surrey & Langley, BC. Market updates, guides, listings, and strategy for buyers, sellers, and investors.",
  openGraph: {
    title: "Chandan Rathod | Surrey & Langley Real Estate Advisor",
    description: "Luxury, modern real estate website built for long-term SEO dominance in Surrey & Langley, BC.",
    url: "https://realestatewithchandan.ca",
    siteName: "Chandan Rathod Real Estate",
    locale: "en_CA",
    type: "website"
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA">
      <body>
        <SiteHeader />
        <main className="min-h-[70vh]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
