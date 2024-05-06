import Header from "@/shared/components/header";
import Menu from "@/shared/components/menu";

export default function ThreadLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex flex-grow">
        <div className="w-64 bg-gray-100 shadow border-r">
          <Menu />
        </div>
        {children}
      </div>
    </>
  );
}
