import React from 'react';
import { Flex } from 'antd';

const SnippetNewsExtra = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex align="center" gap={10}>
      {children}
    </Flex>
  );
};

export default SnippetNewsExtra;
