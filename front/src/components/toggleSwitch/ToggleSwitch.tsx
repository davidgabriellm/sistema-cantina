import { useState } from "react";

type ToggleProps = {
  initial?: boolean;
  onChange?: (value: boolean) => void;
};

export default function ToggleSwitch({ initial = true, onChange }: ToggleProps) {
  const [enabled, setEnabled] = useState<boolean>(initial);

  const handleToggle = () => {
    const newValue = !enabled;
    setEnabled(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <button
      onClick={handleToggle}
      className={`
        relative inline-flex h-6 w-12 items-center rounded-full cursor-pointer transition-colors
        ${enabled ? "bg-green-500" : "bg-gray-400"}
      `}
    >
      <span
        className={`
          inline-block h-5 w-5 transform rounded-full bg-white transition-transform
          ${enabled ? "translate-x-6" : "translate-x-1"}
        `}
      />
    </button>
  );
}