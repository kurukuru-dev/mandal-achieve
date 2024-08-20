import { CircleHelp } from "lucide-react";

export default function HowToButton() {
  return (
    <button title="使い方" className="h-6 w-6">
      <CircleHelp className="text-accent hover:text-accent-hover" />
    </button>
  );
}