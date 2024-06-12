"use client"
import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { FormEvent } from 'react';

interface SearchbarProps {
  placeholder?: string;
  width?: any;
  searchHandler: (e: FormEvent<HTMLFormElement>) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ placeholder, width, searchHandler }) => {
  return (
    <form onSubmit={(e) => searchHandler(e)}>
      <InputGroup width={width}>
        <Input
          type={'text'}
          name={'search'}
          placeholder={placeholder ?? 'Search anything...'}
        />
        <InputRightAddon
          aria-label={'Search'}
          as={'button'}
          type={'submit'}
          cursor={'pointer'}
          bgColor={'brand.50'}
        >
          <Search2Icon color={'white'} />
        </InputRightAddon>
      </InputGroup>
    </form>
  );
};

export default Searchbar;
