import Footer from "@/common/components/footer/Footer";
import Newsletter from "@/common/components/misc/Newsletter";
import Navbar from "@/common/components/navbar/Navbar";
import Analytics from "@/common/utils/Analytics";
import SEO from "@/common/utils/SEO";
import ArticleSchemaMarkup from "@/common/utils/schemaMarkup/ArticleSchemaMarkup";
import BreadcrumbSchemaMarkup from "@/common/utils/schemaMarkup/BreadcrumbSchemaMarkup";
import PostPage from "./PostPage";


export default function PostHome({post, posts, error}: any) {
    return (
      <>
        <SEO
          title={post.title}
          description={post.description}
          url={`${process.env.NEXT_PUBLIC_SITE_URL}/${post.slug}`}
          canonical={
            post.canonicalUrl ||
            `${process.env.NEXT_PUBLIC_SITE_URL}/${post.slug}`
          }
          image={post.featuredImage.url}
          altText={post.title}
          ogType={'article'}
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
            },
            {
              position: 3,
              name: post.category.name,
              item: `${process.env.NEXT_PUBLIC_SITE_URL}/articles?c=${post.category.slug}`
            },
            {
              position: 4,
              name: post.title,
              item: `${process.env.NEXT_PUBLIC_SITE_URL}/${post.slug}`
            }
          ]}
        />
        <ArticleSchemaMarkup
          url={`${process.env.NEXT_PUBLIC_SITE_URL}/${post.slug}`}
          title={post.title}
          image={post.featuredImage.url}
          publishedAt={
            post.customPublicationDate
              ? post.customPublicationDate
              : post.publishedAt
          }
          updatedAt={post.updatedAt}
          author={post.author.name}
          description={post.description}
        />
        <Analytics />
  
        <Navbar />
  
        <main>
          <PostPage post={post} posts={posts} error={error} />
          <Newsletter />
        </main>
  
        <Footer />
      </>
    );
  };

// export default PostHome;
