type props = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const DivWrapper = ({ children, ...props }: props) => {
  return <div {...props}>{children}</div>;
};

export default DivWrapper;
