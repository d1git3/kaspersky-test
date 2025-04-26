import React from 'react';
import styles from './styles.module.css';
import { GlobalOutlined, EnvironmentOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Flex, Space, Typography } from 'antd';

const { Text, Link } = Typography;

const DuplicateCard = ({
  extra,
  favicon,
  date,
  reach,
  title,
  domain,
  country,
  authors,
}: {
  extra: React.ReactNode;
  favicon?: React.ReactNode | undefined;
  date: string;
  reach: string;
  title: string;
  domain: string;
  country: string;
  authors: string[];
}) => {
  return (
    <Card className={styles.duplicateCard}>
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        <Flex justify="space-between">
          <Space size="large">
            <Text>
              <span className="colorGray">{date}</span>
            </Text>
            <Text>{reach} Top Reach</Text>
          </Space>
          <Flex align="center" gap={10}>
            {extra}
          </Flex>
        </Flex>
        <Link className={styles.title} href={'https://' + domain} target="_blank">
          {title}
        </Link>
        <Space className={styles.newsSource} size="middle">
          <Space size={5}>
            {favicon ? favicon : <GlobalOutlined />}
            <Link
              style={{ textDecoration: 'underline' }}
              href={'https://' + domain}
              target="_blank"
            >
              {domain}
            </Link>
          </Space>
          <Space size={5}>
            <EnvironmentOutlined />
            <Text>{country}</Text>
          </Space>
          <Space size={5}>
            {authors.length > 0 ? (
              <>
                <UserOutlined />
                <Text>{authors.join(', ')}</Text>
              </>
            ) : null}
          </Space>
        </Space>
      </Space>
    </Card>
  );
};

export default DuplicateCard;
