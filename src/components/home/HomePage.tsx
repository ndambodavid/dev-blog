// "use client"
import { Center } from '@chakra-ui/react';
import ErrorBox from '@/common/UIElements/ErrorBox';
import Hero from './components/Hero';
import LatestArticles from './components/LatestArticles';
import LatestSnippets from './components/LatestSnippets';

const HomePage = ({ featuredPost ,posts, snippets, categories, error }: any) => {
  return (
    <>
      {error ? (
        <Center mt={8}>
          <ErrorBox error={error} />
        </Center>
      ) : (
        <>
          <Hero featuredPost={featuredPost} categories={categories} />
          <LatestArticles posts={posts} />
          {/* <LatestSnippets snippets={snippets} /> */}
        </>
      )}
    </>
  );
};

export default HomePage;
