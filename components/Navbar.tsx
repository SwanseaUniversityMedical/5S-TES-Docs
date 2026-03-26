import { Image } from "nextra/components";
import { Navbar as NextraNavbar } from "nextra-theme-docs";
import Logo from "@/public/five_safes_tes_primary.svg";

export default function Navbar() {
  return (
    <NextraNavbar
      logo={<Image src={Logo} alt="Five Safes TES Logo" height={50} />}
      // ... Your additional navbar options
    />
  );
}
