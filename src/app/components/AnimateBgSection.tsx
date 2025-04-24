
type MyComponentProps = {
  backgroundColor: string;
  children: React.ReactNode;
  };
export default function AnimateBgSection({ backgroundColor, children }: MyComponentProps) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        transition: "background-color 0.6s ease-in-out",
      }}
      className="min-h-screen w-full"
    >
      {children}
    </div>
  );
}