import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ siteData, children }) {
  return (
    <>
      <Meta siteData={siteData} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
