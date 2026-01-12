type ToggleProps = {
  value: boolean;                // Valor controlado
  onChange?: (value: boolean) => void;
};

export default function ToggleSwitch({ value, onChange }: ToggleProps) {
  const handleToggle = () => {
    if (onChange) onChange(!value);
  };

  return (
    <button
      onClick={handleToggle}
      className={`
        relative inline-flex h-5 w-10 sm:w-12 sm:h-6 items-center rounded-full cursor-pointer transition-colors
        ${value ? "bg-green-500" : "bg-gray-400"}
      `}
    >
      <span
        className={`
          inline-block h-3 w-3 sm:w-5 sm:h-5 transform rounded-full bg-white transition-transform
          ${value ? "translate-x-6" : "translate-x-1"}
        `}
      />
    </button>
  );
}
