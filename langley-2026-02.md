export default function Button({ href, children, variant="gold", className="", ...props }) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm tracking-wide transition duration-200";
  const styles = variant === "gold"
    ? "bg-champagne-500 text-black hover:bg-champagne-400"
    : variant === "outline"
      ? "border border-white/15 hover:border-white/30 hover:bg-white/5"
      : "bg-white text-black hover:bg-white/90";

  if (href) return <a href={href} className={`${base} ${styles} ${className}`} {...props}>{children}</a>;
  return <button className={`${base} ${styles} ${className}`} {...props}>{children}</button>;
}
