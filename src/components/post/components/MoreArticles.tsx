import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

import ArticleCard from '@/common/UIElements/ArticleCard';
import AdSense from '@/common/utils/AdSense';
import siteConfig from '../../../../config/site.config';
import { Box } from '@chakra-ui/react';

const RelatedArticles = ({ posts }: any) => {
  return (
    <>
      <Container maxW={'container.md'} my={20}>
        <Heading color={'brand.50'}>MORE ARTICLES</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {posts.map((post: any) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </SimpleGrid>
      </Container>
      <Box my={20} mx={'auto'}>
        <AdSense
          style={{ display: 'block' }}
          adFormat={'fluid'}
          adSlot={siteConfig.adsense.slots.inFeed}
          data-ad-layout-key={'-f9+52+6z-e1+5b'}
        />
      </Box>
    </>
  );
};

export default RelatedArticles;
