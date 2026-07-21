const SpanTextComponent = ({ title, textColor = "text-stone-800" }) => {
  return (
    <span className={`mb-6 flex items-center gap-3 text-2xl font-medium ${textColor}`}>
      <span className="line-clamp-5">{title}</span>
    </span>
  );
};

export default SpanTextComponent;