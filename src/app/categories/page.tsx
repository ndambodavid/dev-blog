import Footer from "@/common/components/footer/Footer";
import Newsletter from "@/common/components/misc/Newsletter";
import Navbar from "@/common/components/navbar/Navbar";
import Analytics from "@/common/utils/Analytics";
import SEO from "@/common/utils/SEO";
import BreadcrumbSchemaMarkup from "@/common/utils/schemaMarkup/BreadcrumbSchemaMarkup";
import SearchPage from "@/components/search/SearchPage";
import siteConfig from "../../../config/site.config";
import { getCategories } from "@/lib/fetch-data";
import { Suspense } from "react";



const Categories = async () => {
  const { props } = await getCategories();
  return (
    <>
      <SEO
        title={siteConfig.seo.pages.categories.title}
        description={siteConfig.seo.pages.categories.description}
        image={siteConfig.seo.pages.categories.image}
        altText={siteConfig.seo.pages.categories.title}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/categories`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/categories`}
      />
      <BreadcrumbSchemaMarkup
        items={[
          {
            position: 1,
            name: 'Home',
            item: process.env.NEXT_PUBLIC_SITE_URL
          },
          {
            position: 2,
            name: 'Categories',
            item: `${process.env.NEXT_PUBLIC_SITE_URL}/categories`
          }
        ]}
      />
      <Analytics />

      <Navbar />

      <main>
        <Suspense>
          <SearchPage activeTab={2} categories={props?.categories} error={props?.error} />
        </Suspense>

        <Newsletter />
      </main>

      <Footer />
    </>
  );
};

export default Categories;