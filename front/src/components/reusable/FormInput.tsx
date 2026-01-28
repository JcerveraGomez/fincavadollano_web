import { Input } from "../ui/input";
import { cn } from "../../lib/utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  containerClassName?: string;
}

export const FormInput = ({
  label,
  error,
  containerClassName,
  className,
  ...props
}: FormInputProps) => {
  return (
    <div className={cn("w-full", containerClassName)}>
      <label className="block text-[#b8985f] text-xs font-light tracking-widest uppercase mb-2">
        {label}
      </label>
      <Input
        className={cn(
          "border-b border-t-0 border-l-0 border-r-0 border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#b8985f] bg-transparent",
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};
