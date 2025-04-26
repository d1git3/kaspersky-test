import React from 'react';
import styles from './styles.module.css';
import { EnvironmentOutlined, ReadOutlined, UserOutlined } from '@ant-design/icons';
import { Flex, Space, Typography } from 'antd';

const { Link, Text } = Typography;

const SnippetNewsSource = ({
  domain,
  favicon,
  country,
  language,
  authors,
}: {
  domain: string;
  favicon: React.ReactNode;
  country?: string | undefined;
  language?: string | undefined;
  authors: string[];
}) => {
  return (
    <Flex className={styles.newsSource} gap={10} wrap>
      {domain ? (
        <Space size={5}>
          {favicon}
          <Link style={{ textDecoration: 'underline' }} href={'https://' + domain} target="_blank">
            {domain}
          </Link>
        </Space>
      ) : null}
      {country ? (
        <Space size={5}>
          <EnvironmentOutlined />
          <Text>{country}</Text>
        </Space>
      ) : null}
      {language ? (
        <Space size={5}>
          <ReadOutlined />
          <Text>{language.charAt(0).toUpperCase() + language.slice(1).toLowerCase()}</Text>
        </Space>
      ) : null}
      {authors.length > 0 ? (
        <Space size={5}>
          <UserOutlined />
          <Text>{authors.join(', ')}</Text>
        </Space>
      ) : null}
    </Flex>
  );
};

export default SnippetNewsSource;
