import { ApolloClient, InMemoryCache, HttpLink, createHttpLink } from '@apollo/client';

const cache = new InMemoryCache();
// const link = new HttpLink({
//   uri: `${process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API_URL}`,
//   headers: {
//     authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN}`
//   }
// });

export const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API_URL,
headers: {
  authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN}`
}
});

export const client = new ApolloClient({
  cache,
  link
});

// const client = new GraphQLClient(
//   'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clvyw31p406eu07w6kq3k3qyk/master',
//   {
//     headers: {
//       Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTUyNTYzMDQsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2Nsdnl3MzFwNDA2ZXUwN3c2a3EzazNxeWsvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtdXMtZWFzdC0xLXNoYXJlZC11c2VhMS0wMi5oeWdyYXBoLmNvbS8iLCJzdWIiOiI1NmE1YTk0ZC0xYWE0LTQ4YzktODNkMy1hNGU2MGQxYTIyNzYiLCJqdGkiOiJjbHZ6N2JmNHYwMGRpMDdrMjEweDk1dzR3In0.SfZR1RsCIDLy1SThuU0YRUTnaiteTyRzz2gakCA-6R5q2PdBLuE0hyn_4y-4_EMoesjXfSa4i1YVzx0JaYSIXSBABCCvGsc9DHnA_pmZTpXCt_WOmaXEbKZzPXUrjANUck02agRwfwRG9CY7r-woFKGU7LycQQRgLqw7KNECEPUmnLNr_K8YSRQZLw0iRE3m6Xmbv6QxxNLmcmTWBIN2PMWTF6O39WgTJGHAFW8cm8oUcbwKoiIUJ2jcTy4gt8tdTrDA1ENMuSd-Yor9axJFKfKxsFpogHNpuA3i1Mpd-MtVswO5UZ3ft3ZlBs2KeIm3lfaBy7P-Nm5oIBmWLYYaTVQcu9aKb-3sFbacbpUyh5k3KkQvS2ld0wBRvmQgAI91J2R8jDRFUXompv2JAzWPDEF7LBpVPDTcuC7T0TmIYbOW2B0F61rIfN8ID_EnmqtlsXXmBQTI4mwycM4z9fkmdY82liwIeW2OkRqVCd1jljcooY53Kokkr0knLD4FnRoYtrZXtZX_FW5290D9DS1QUMC_Ndq8EkLJaKsBrOawhjYzUVZE5iEimjWJOqKQ2mjNbxGAlbHzFp8ex5zB2GgtP70UvYcgz69bj-nWK4HEPP2sfyfnAWtm7SZCFsiebrUpkRZtfCf8BVuLkmqHIuLeGG87IMhsBAcJoKgjAW3WNTg.eyJodHRwczovL2dyYXBoY21zLmNvbS9sb2dpbnNDb3VudCI6MSwiaHR0cHM6Ly9ncmFwaGNtcy5jb20vZmxhZ3MiOnt9LCJpc3MiOiJodHRwczovL2F1dGguaHlncmFwaC5jb20vIiwiYXVkIjoiOFZXU2R5VWh0WlQ0M25BaXByMmZqS1JoakptcDhzWXkiLCJpYXQiOjE3MTUyNTU2OTEsImV4cCI6MTcxNTg2MDQ5MSwic3ViIjoiZ2l0aHVifDEwMTk5NDQzNSIsInNpZCI6ImZ6cmVnOUVkbC1mOXNXdDRiSVh3VEV1YUJKN0dFTFgxIiwibm9uY2UiOiIwNi13MFI2aDdDXzdiWnhLSEYtZHJ4NTIwUVlrTndzbyJ9.jEnUVqlGOs0STNAN8dFC5APfA9M0aKrUiRkaKlQoVeWAcgy41dY-zB4LvCnC5G28bhgnnmFH80jh7axdtDdzWgCdcXGfL3xCj9IpK5UmzLwG3ZTNNUVgEHJwumy4wZDhAub-X_cSpYOD1tmGAuLCRWNE-PjyvyMLMdljsi_Yb7GK_6HNYo7BKyQhT7QGJNT6Z-feSOHzbd-diV96zO2u0532IEDAOtJLxSvgVs8ih3WzGUMkyrV2QENtAEzxfIUjpyWen0i7VO4BXn21OQ1D7JoF9Bx-kdBZyW9uTr1h6_v8a-Wxq28sf3E9PArEi2fneDq31eKSioBMro0Xhkirxg'
//     }
//   }
// );


// import { ApolloLink, HttpLink } from "@apollo/client";
// import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";
// import { ApolloNextAppProvider, InMemoryCache, SSRMultipartLink, ApolloClient} from "@apollo/experimental-nextjs-app-support";

// export const { getClient } = registerApolloClient(() => {
//   return new ApolloClient({
//     cache: new InMemoryCache(),
//     link: new HttpLink({
//       uri: process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API_URL,
//     }),
//   });
// });

// export const makeClient = () => {
//   const httpLink = new HttpLink({
//     uri: process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API_URL,
//   });

//   return new ApolloClient({
//     cache: new InMemoryCache(),
//     link:
//       typeof window === "undefined"
//         ? ApolloLink.from([
//           new SSRMultipartLink({
//             stripDefer: true,
//           }),
//           httpLink,
//         ])
//         : httpLink,
//   });
// }
// export default client;
