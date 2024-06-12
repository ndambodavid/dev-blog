import { Center } from '@chakra-ui/react';
import ErrorBox from '@/common/UIElements/ErrorBox';
import Snippet from './components/Snippet';
import MoreSnippets from './components/MoreSnippets';
import CommentBox from '@/common/components/misc/Comment';

const SnippetPage = ({ snippet, snippets, error }: any) => {
  return (
    <>
      {error ? (
        <Center>
          <ErrorBox error={error} />
        </Center>
      ) : (
        <>
          <Snippet snippet={snippet} />
          <CommentBox />
          <MoreSnippets snippets={snippets} />
        </>
      )}
    </>
  );
};

export default SnippetPage;
