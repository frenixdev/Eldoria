type props={
  circle?: boolean;
  onClick?:()=> void;
  children?: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({className, children, onClick,circle, ...props}:props) => {
  return (
    <button className={className} onClick={onClick} {...props} >
      {children}
    </button>
  )
}

export default Button
