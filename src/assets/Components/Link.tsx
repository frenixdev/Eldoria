type props = {
  url: string;
  target?: string;
  children: React.ReactNode;
  className?: string;
};
export default function Link({
  url,
  children,
  className,
  target = "_blank",
}: props) {
  return (
    <a href={url} target={target} className={`${className} cursor-pointer`}>
      {children}
    </a>
  );
}
