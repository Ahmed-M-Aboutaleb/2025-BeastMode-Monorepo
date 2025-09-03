import "@/styles/globals.css";
// import AosWrapper from "@/components/atoms/AosWrapper";

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <>
      {/* <AosWrapper > */}
        {/* <Navbar cms={cmsPages?.data} /> */}

        {children}

        {/* <Footer cms={cmsPages?.data}/> */}
      {/* </AosWrapper> */}
    </>
  );
}
