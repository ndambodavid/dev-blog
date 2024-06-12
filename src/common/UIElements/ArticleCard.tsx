import {
  Badge,
  Center,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
  VStack,
  Wrap
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Moment from 'react-moment';
import readingTime from 'reading-time';

// import { CircleIcon } from '../../assets/icons';
import TagCard from './TagCard';
import buildImage from '../utils/cloudinary';
import { Resize } from '@cloudinary/url-gen/actions';

const ArticleCard = ({ post }: any) => {
  const textColor = useColorModeValue('text', '#fff');
  const shadow = useColorModeValue(
    'lg',
    'rgba(149, 157, 165, 0.2) 0px 8px 24px'
  );

  const readTime = readingTime(post.content);

  return (
    <VStack my={10} p={4} borderRadius={'xl'} shadow={shadow} h={'max-content'}>
      {/* Cover image */}
      <NextLink href={`/${post.slug}`} passHref>
        <Link tabIndex={-1}>
          <Image
            src={buildImage(post.featuredImage.public_id)
              .resize(Resize.scale().width(1600).height(840))
              .toURL()}
            // src='/hero.png'
            alt={post.title}
            htmlWidth={'100%'}
            htmlHeight={'auto'}
            rounded={'lg'}
            tabIndex={0}
          />
        </Link>
      </NextLink>

      <Wrap
        textTransform={'uppercase'}
        alignSelf={'flex-start'}
        color={'brand.100'}
        fontWeight={'bold'}
      >
        {/* Publication date */}
        <Text>
          <Moment format="MMM DD, YYYY">
            {post.customPublicationDate || post.publishedAt}
          </Moment>
        </Text>
        <Center>
          {/* <CircleIcon boxSize={'2'} /> */}
          <Icon 
          viewBox="0 0 200 200" boxSize={'2'} 
          fill="currentColor"
          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Center>

        {/* Read time */}
        <Text textTransform={'uppercase'}>{readTime.text}</Text>
        {post.sponsored && (
          <Center>
            <Badge h={'max-content'} colorScheme={'purple'}>
              sponsored
            </Badge>
          </Center>
        )}
      </Wrap>

      {/* Title */}
      <NextLink href={`/${post.slug}`} passHref>
        <Link tabIndex={-1} _hover={{ color: 'brand.50' }}>
          <Heading size={'md'} alignSelf={'flex-start'} tabIndex={0}>
            {post.title}
          </Heading>
        </Link>
      </NextLink>

      {/* Excerpt */}
      <Text alignSelf={'flex-start'} color={textColor} noOfLines={5}>
        {post.excerpt}
      </Text>

      {/* Tags */}
      <Wrap alignSelf={'flex-start'}>
        {post.tags.map((tag: any, _i: number) => (
          <TagCard tag={tag} key={_i} />
        ))}
      </Wrap>
    </VStack>
  );
};

export default ArticleCard;
