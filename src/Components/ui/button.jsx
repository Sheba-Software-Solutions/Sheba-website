import { cn } from "../../Utils/classMerger";

const Button = ({ children, className = "", variant, ...rest }) => {
  const base =
    "h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
  };

  const finalClass = cn(base, variants[variant] || variants.default, className);

  return (
    <button className={finalClass} {...rest}>
      {children}
    </button>
  );
};
export default Button;