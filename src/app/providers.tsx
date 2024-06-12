"use client"
import {
  ApolloProvider
} from "@apollo/client";
import { ChakraProvider } from '@chakra-ui/react'
import React, { FC, ReactNode } from 'react'
import { client, } from '@/common/utils/apolloClient';
import theme from "@/theme";


interface ProviderProps {
  children: ReactNode;
}

export const ApolloWrapper = ({
  children
}: ProviderProps) => {
  return (
    // <ApolloNextAppProvider makeClient={makeClient}>
    //   {children}
    // </ApolloNextAppProvider>
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </ApolloProvider>
  )
}
