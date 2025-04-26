import React from 'react';
import styles from './styles.module.css';
import { Space, Flex, Typography } from 'antd';

const { Link } = Typography;

const SnippetNewsHeader = ({
  extra,
  info,
  title,
  url,
  source,
}: {
  extra: React.ReactNode;
  info: React.ReactNode;
  title: string;
  url: string;
  source: React.ReactNode;
}) => {
  return (
    <>
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        <Flex justify="space-between" align="start" wrap>
          {info}
          <Flex align="center" gap={10}>
            {extra}
          </Flex>
        </Flex>
        <Link className={styles.title} href={url} target="_blank">
          {title}
        </Link>
        {source}
      </Space>
    </>
  );
};

export default SnippetNewsHeader;
