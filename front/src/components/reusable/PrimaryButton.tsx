import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

export const PrimaryButton = ({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}: PrimaryButtonProps) => {
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100 border border-black",
    secondary: "bg-[#b8985f] text-white hover:bg-[#a08550]",
    outline: "bg-transparent border border-black text-black hover:bg-black hover:text-white",
  };

  return (
    <Button
      className={cn(
        "rounded-none font-light tracking-widest uppercase text-xs py-6 transition-all duration-300",
        variants[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
