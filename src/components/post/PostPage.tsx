"use client"
import { Center } from '@chakra-ui/react';
import ErrorBox from '@/common/UIElements/ErrorBox';
import Post from './components/Post';
import RelatedArticles from './components/MoreArticles';
import CommentBox from '@/common/components/misc/Comment';

interface PostPageProps {
  post: any; // Adjust the type accordingly
  posts: any[]; // Adjust the type accordingly
  error: any; // Adjust the type accordingly
}

const PostPage: React.FC<PostPageProps> = ({ post, posts, error }) => {
  return (
    <>
      {error ? (
        <Center mt={8}>
          <ErrorBox error={error} />
        </Center>
      ) : (
        <>
          <Post post={post} />
          <CommentBox />
          <RelatedArticles posts={posts} />
        </>
      )}
    </>
  );
};

export default PostPage;
