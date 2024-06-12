// "use client"
import Navbar from "@/common/components/navbar/Navbar";
import HomePage from "@/components/home/HomePage";
import { getBlogs } from "@/lib/fetch-data";
import { gql, useQuery } from "@apollo/client";
// import Image from "next/image";
// import { useState, useEffect } from "react";


export default async function Home() {
  const { props } = await getBlogs();
  console.log("featured page::::::", props.featuredPost);
  
  // const [data, setData] = useState([]);
  // const [featuredData, setFeaturedData] = useState([]);
  // const [error, setError] = useState(null);
  // const [featuredError, setFeaturedError] = useState([]);

  // useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const dataResult = await client.query({ query: GET_DATA });
    //     setData(dataResult.data);
    //   } catch (error: any) {
    //     setError(error.message);
    //   }
    // };

  //   const fetchFeaturedData = async () => {
  //     try {
  //       const featuredResult = await client.query({ query: GET_FEATURED });
  //       setFeaturedData(featuredResult.data);
  //     } catch (error: any) {
  //       setFeaturedError(error.message);
  //     }
  //   };

  //   fetchData();
  //   fetchFeaturedData();
  // }, []);

  // if (!data || !featuredData) return <p>Loading...</p>;
  // if (error || featuredError) return <p>Error : </p>;

  return (
    <>
      <Navbar />
      <main>
        <HomePage
          featuredPost={props?.featuredPost}
          posts={props?.posts}
          snippets={props?.snippets}
          categories={props?.categories}
          error={props?.error}
        />
      </main>
    </>
  );

}

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

      const GET_FEATURED = gql`
        query FeaturedPost {
            posts(first: 1, where: { featuredPost: true }) {
              slug
              title
              featuredImage
            }
          }
      `;
