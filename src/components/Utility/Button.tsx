type props = {
  circle?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  hoverColor?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({
  className,
  children,
  onClick,
  circle,
  hoverColor,
  ...props
}: props) => {
  return (
    <button
      className={`${className} cursor-pointer p-2 text-2xl transition-all duration-300 ease-in-out`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
