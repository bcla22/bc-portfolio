export type CTAButtonProps = { children: string };

const CTAButton = ({ children }: CTAButtonProps) => {
  return (
    <button
      type="button"
      className="border-2 border-slate-900 text-slate-800 px-6 py-2 hover:bg-slate-200 hover:border-slate-500 transition-all"
    >
      {children}
    </button>
  );
};

export default CTAButton;
