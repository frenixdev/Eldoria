type props = {
  children: React.ReactNode;
  className?: string;
};
export default function Container({ className, children }: props) {
  return (
    <section
      className={`${className} m-auto mb-5 h-auto w-full max-w-7xl p-5`}
    >
      {children}
    </section>
  );
}
