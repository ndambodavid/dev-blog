// "use client"
import Footer from "@/common/components/footer/Footer"
import Newsletter from "@/common/components/misc/Newsletter"
import Navbar from "@/common/components/navbar/Navbar"
import Analytics from "@/common/utils/Analytics"
import SEO from "@/common/utils/SEO"
import { client } from "@/common/utils/apolloClient"
import BreadcrumbSchemaMarkup from "@/common/utils/schemaMarkup/BreadcrumbSchemaMarkup"
import ArticleSchemaMarkup from "@/common/utils/schemaMarkup/ArticleSchemaMarkup"
import PostPage from "@/components/post/PostPage"
import { getBlog } from "@/lib/fetch-data"
import { gql } from "@apollo/client"
import { main } from "@cloudinary/url-gen/qualifiers/videoCodecProfile"
import { url } from "inspector"
import error from "next/error"
import image from "next/image"
import { title } from "process"
import React, { Suspense, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { usePathname } from "next/navigation"
import PostHome from "@/components/post/PostHome"


export default async function Page({
  params: { slug },
}: {
  params: { slug: string }
}) {
  // const pathname = usePathname()
    const {post, posts, error} = await getBlog(slug);
  // const [props] = await Promise.all([postData]);

  return (
      <>
        <Suspense>
          <PostHome 
              post={post}
              posts={posts}
              error={error}
            />
        </Suspense>
          
      </>
  )
  
}

// const fetchData = async (slug: string) => {
//   return await getBlog(slug);
  
  // const { any = getBlog(pathname);

// }

// export async function getServerSideProps({ params }: any) {
//   const { postSlug } = params;

//   const { data, error } = await client.query({
//     query: gql`
//       query PostPage($slug: String!) {
//         post(where: { slug: $slug }, stage: PUBLISHED) {
//           category {
//             name
//             slug
//           }
//           updatedAt
//           featuredImage
//           author {
//             name
//             photo
//           }
//           publishedAt
//           slug
//           sponsored
//           audioId
//           title
//           canonicalUrl
//           content
//           description
//           customPublicationDate
//         }
//         posts(
//           first: 2
//           orderBy: publishedAt_DESC
//           where: { slug_not: $slug }
//           stage: PUBLISHED
//         ) {
//           id
//           slug
//           sponsored
//           title
//           content
//           tags
//           customPublicationDate
//           publishedAt
//           excerpt
//           featuredImage
//         }
//       }
//     `,
//     variables: {
//       slug: postSlug
//     }
//   });

//   return {
//     {
//       post: data?.post,
//       posts: data?.posts,
//       error: error ? error.message : null
//     },
//     revalidate: 300
//   };
// }

// export async function getStaticPaths() {
//   const { data } = await client.query({
//     query: gql`
//       query PostSlugs {
//         posts {
//           slug
//         }
//       }
//     `
//   });

  // const paths = data?.posts?.map((post: any) => {
  //   return {
  //     params: {
  //       postSlug: post.slug
  //     }
  //   };
  // });

//   return {
//     paths,
//     fallback: 'blocking'
//   };
// }

  
