import "@styles/global.css";
export const metadata = {
  title: "Todos App | Next13",
  description: "Todos app holds the todo list which has CRUD operations",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
};

export default RootLayout;
