import Footer from "@/common/components/footer/Footer";
import Newsletter from "@/common/components/misc/Newsletter";
import Navbar from "@/common/components/navbar/Navbar";
import Analytics from "@/common/utils/Analytics";
import SEO from "@/common/utils/SEO";
import { client } from "@/common/utils/apolloClient";
import BreadcrumbSchemaMarkup from "@/common/utils/schemaMarkup/BreadcrumbSchemaMarkup";
import SearchPage from "@/components/search/SearchPage";
import { gql } from "@apollo/client";
import siteConfig from "../../../config/site.config";
import { getTags } from "@/lib/fetch-data";



const Tags = async () => {
    const {props} = await getTags();
    return (
      <>
        <SEO
          title={siteConfig.seo.pages.tags.title}
          description={siteConfig.seo.pages.tags.description}
          image={siteConfig.seo.pages.tags.image}
          altText={siteConfig.seo.pages.tags.title}
          canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/tags`}
          url={`${process.env.NEXT_PUBLIC_SITE_URL}/tags`}
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
              name: 'Tags',
              item: `${process.env.NEXT_PUBLIC_SITE_URL}/tags`
            }
          ]}
        />
        <Analytics />
  
        <Navbar />
  
        <main>
          <SearchPage activeTab={3} tags={props?.tags} error={props?.error} />
          <Newsletter />
        </main>
  
        <Footer />
      </>
    );
  };
  
  
  
  export default Tags;