import Footer from "@/common/components/footer/Footer";
import Newsletter from "@/common/components/misc/Newsletter";
import Navbar from "@/common/components/navbar/Navbar";
import Analytics from "@/common/utils/Analytics";
import SEO from "@/common/utils/SEO";
import { client } from "@/common/utils/apolloClient";
import BreadcrumbSchemaMarkup from "@/common/utils/schemaMarkup/BreadcrumbSchemaMarkup";
import SearchPage from "@/components/search/SearchPage";
import { gql } from "@apollo/client";
import error from "next/error";
import siteConfig from "../../../config/site.config";
import { getArticles } from "@/lib/fetch-data";
import { Suspense } from "react";



const Articles = async () => {
  const { props } = await getArticles();
  return (
    <>
      <SEO
        title={siteConfig.seo.pages.articles.title}
        description={siteConfig.seo.pages.articles.description}
        image={siteConfig.seo.pages.articles.image}
        altText={siteConfig.seo.pages.articles.title}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/articles`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/articles`}
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
            name: 'Articles',
            item: `${process.env.NEXT_PUBLIC_SITE_URL}/articles`
          }
        ]}
      />
      <Analytics />

      <Navbar />

      <main>
        <Suspense>
          <SearchPage activeTab={0} posts={props?.posts} error={props?.error} />
        </Suspense>

        <Newsletter />
      </main>

      <Footer />
    </>
  );
};



export default Articles;