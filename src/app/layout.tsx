"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import CommonFooter from "./Components/CommonFooter";
import CommonHeaderUnsigned from "./Components/CommonHeaderUnsigned";
import { usePathname } from "next/navigation";
import { metadata } from "./utils/metaData";
import CommonHeaderSigned from "./Components/CommonHeaderSigned";
// const router = useRouter();
const inter = Inter({ subsets: ["latin"] });
const metaData = metadata();
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathName: any = usePathname(); //For current route
  const headerUnsignedInclude = ["/"];
  const headerSignedInclude = [
    "/",
    "/home",
    "/shopPage",
    "/products",
    "/products/miniCart",
    "/products/miniCart/cartPage",
    "/products/miniCart/cartPage/checkOut",
  ];
  const isHeaderSigned = headerSignedInclude.includes(pathName);
  const isHeaderUnsigned = headerUnsignedInclude.includes(pathName);
  const isFooterMinicart = pathName; // to remobe footer from minicart page
  const isHeaderUnignedInclude = pathName; //to remove signed header from unsigned home page
  console.log("mini Cart: ", isFooterMinicart);
  console.log("isFooterMinicart Cart: ", isFooterMinicart);
  console.log("isHeaderSigned Cart: ", isHeaderSigned);
  return (
    <html lang="en">
      <body
        className={`${inter.className} absolute`}
        style={{ overflowX: "hidden" }}
      >
        {isHeaderUnsigned && <CommonHeaderUnsigned />}{" "}
        {/* When user is unSigned */}
        {isHeaderSigned && isHeaderUnignedInclude !== "/" ? (
          <CommonHeaderSigned />
        ) : null}{" "}
        {/* When user is Signed */}
        {children}
        {isHeaderSigned && isFooterMinicart !== "/products/miniCart" ? (
          <CommonFooter />
        ) : null}
      </body>
    </html>
  );
}
