"use server"
import { client } from "@/common/utils/apolloClient";
import { gql } from "@apollo/client";
import { headers } from "next/headers";


export async function getBlogs() {
  const GET_DATA = gql`
      query HomePage {
        posts(orderBy: createdAt_DESC, first: 10) {
          featuredImage
          customPublicationDate
          excerpt
          publishedAt
          slug
          sponsored
          tags
          title
          content
        }
        snippets(orderBy: createdAt_DESC, first: 4) {
          id
          title
          slug
        }
        categories(first: 4) {
          id
          name
          slug
        }
      }
      `;
  const { data, error } = await client.query({
    query: GET_DATA,
  });

  const GET_FEATURED = gql`
        query FeaturedPost {
            posts(first: 1, where: { featuredPost: true }) {
              slug
              title
              featuredImage
            }
          }
      `;
  const featuredPost = await client.query({
    query: GET_FEATURED
  });
  console.log("featured Post:::::", featuredPost.data.posts[0]);
  // console.log("data:::::::", data);
  // console.log("error:::::", error)

  return {
    props: {
      posts: data?.posts,
      snippets: data?.snippets,
      categories: data?.categories,
      featuredPost: featuredPost?.data?.posts[0],
      error: error?.message
    },
    revalidate: 300
  };
}

export async function getBlog(postSlug: any) {
  // const { postSlug } = params;
  console.log("sluag:::", postSlug)

  const GET_POST = gql`
      query PostPage($slug: String!) {
        post(where: { slug: $slug }, stage: PUBLISHED) {
          category {
            name
            slug
          }
          updatedAt
          featuredImage
          author {
            name
            photo
          }
          publishedAt
          slug
          sponsored
          audioId
          title
          canonicalUrl
          content
          description
          customPublicationDate
        }
        posts(
          first: 2
          orderBy: publishedAt_DESC
          where: { slug_not: $slug }
          stage: PUBLISHED
        ) {
          id
          slug
          sponsored
          title
          content
          tags
          customPublicationDate
          publishedAt
          excerpt
          featuredImage
        }
      }
    `;

  const { data, error } = await client.query({
    query: GET_POST,
    variables: {
      slug: postSlug
    }
  });
  console.log("data::::", data.post);
  console.log("errror::::", error);

  return {
    // props: {
      post: data?.post,
      posts: data?.posts,
      error: error ? error.message : null,
    // },
    revalidate: 300
  };
}

// export async function getStaticPaths() {
//   const { data } = await client.query({
//     query: gql`
//         query PostSlugs {
//           posts {
//             slug
//           }
//         }
//       `
//   });

//   const paths = data?.posts?.map((post: any) => {
//     return {
//       params: {
//         postSlug: post.slug
//       }
//     };
//   });

//   return {
//     paths,
//     fallback: 'blocking'
//   };
// }