export function ChatContainer({ children }: any) {
  return (
    <main className="min-w-screen relative flex min-h-screen flex-col justify-between gap-[1.875rem] px-[4.5rem] py-8 max-md:px-8 max-md:py-3">
      {children}
    </main>
  );
}
