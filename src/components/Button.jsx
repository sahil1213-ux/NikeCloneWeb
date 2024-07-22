const Button = ({
  label,
  icon,
  bgColor = "bg-coral-red",
  borderColor = "border-coral-red",
  txtColor = "text-white",
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${bgColor} ${borderColor} ${txtColor}`}
    >
      {label}
      <img />
      {icon && (
        <img
          src={icon}
          alt="arrow right"
          className=" rounded-full w-5 h-5 ml-2"
        />
      )}
    </button>
  );
};

export default Button;
