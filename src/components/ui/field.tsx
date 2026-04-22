// ? Components
import { Input } from "@/components/ui/input";

export const Field = ({
  title,
  value,
  setValue,
}: {
  title: string;
  value: string;
  setValue: (val: string) => void;
}) => {
  return (
    <div>
      <p className="text-xs">{title}</p>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};
