import React from 'react';
import { Flex } from 'antd';

const SnippetNewsBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex align="center" vertical gap={30}>
      {children}
    </Flex>
  );
};

export default SnippetNewsBlock;
