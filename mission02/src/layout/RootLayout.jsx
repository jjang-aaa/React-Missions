/* eslint-disable react/prop-types */
import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";

function RootLayout({ children }) {
  return (
    <>
      <HeaderBar />
      <main>{children}</main>
      <FooterBar />
    </>
  );
}

export default RootLayout;
