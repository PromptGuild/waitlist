import { useEffect, ReactNode } from "react";
/* import { Head, Footer } from "../../components"; */

interface ILayoutProps {
   children: ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
   // Sets target="_blank" rel="noopener noreferrer" on external links
   const handleExternalLinks = () => {
      const allLinks = Array.from(document.querySelectorAll("a"));
      if (allLinks.length > 0) {
         allLinks.forEach((link) => {
            if (link.host !== window.location.host) {
               link.setAttribute("rel", "noopener noreferrer");
               link.setAttribute("target", "_blank");
            }
         });
      }
   };

   useEffect(() => {
      handleExternalLinks();
   }, []);

   return (
      <>
         {/* <Head /> */}
         <div className="layout__content">
            {children}
            {/* <Footer /> */}
         </div>
      </>
   );
};
