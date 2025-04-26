import React from 'react';
import styles from './styles.module.css';
import { Card, Space, Flex, Button } from 'antd';

const SnippetNewsCard = ({
  header,
  highlights,
  tags,
  url,
  duplicates,
}: {
  header: React.ReactNode;
  highlights: React.ReactNode;
  tags: React.ReactNode;
  url: string;
  duplicates: React.ReactNode;
}) => {
  return (
    <Card className={styles.newsCard}>
      <Space size={'large'} direction="vertical">
        {header}
        {highlights}
        <Flex gap={3} wrap>
          {tags}
        </Flex>
        <Button type="link" className={styles.button} href={url} target="_blank">
          Original Source
        </Button>
        {duplicates}
      </Space>
    </Card>
  );
};

export default SnippetNewsCard;
