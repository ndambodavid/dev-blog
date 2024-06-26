import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

import SnippetCard from '@/common/UIElements/SnippetCard';
import AdSense from '@/common/utils/AdSense';
import siteConfig from '../../../../config/site.config';
import { Box } from '@chakra-ui/react';

const MoreSnippets = ({ snippets, loading }: any) => {
  return (
    <>
      <Container maxW={'container.md'} my={20}>
        <Heading color={'brand.50'}>MORE SNIPPETS</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} my={10}>
          {snippets.map((snippet: any) => (
            <SnippetCard key={snippet.id} snippet={snippet} loading={loading} />
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

export default MoreSnippets;
