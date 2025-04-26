import React, { useState } from 'react';
import styles from './styles.module.css';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Flex, Dropdown, Button, Typography } from 'antd';

const { Text } = Typography;

const SnippetNewsDuplicates = ({ duplicates }: { duplicates: React.ReactNode[] }) => {
  type SortOption = '1' | '2' | '3';
  const sortOptionsMap: Record<SortOption, string> = {
    '1': 'Relevance',
    '2': 'Reach',
    '3': 'Date',
  };

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [sortType, setSortType] = useState<SortOption>('1');

  const items = [
    {
      key: 'sort-by',
      label: 'Sort by:',
      type: 'group' as const,
      children: [
        { key: '1', label: 'Relevance' },
        { key: '2', label: 'Reach' },
        { key: '3', label: 'Date' },
      ],
    },
  ];

  return duplicates.length > 0 ? (
    <Flex vertical gap={10}>
      <Flex justify="space-between">
        <Text>Duplicates: {duplicates.length}</Text>
        <Dropdown
          menu={{ items, onClick: (info) => setSortType(info.key as SortOption) }}
          trigger={['click']}
        >
          <Button type="text" className={styles.sortButton} onClick={(e) => e.preventDefault()}>
            By {sortOptionsMap[sortType]}
            <DownOutlined />
          </Button>
        </Dropdown>
      </Flex>
      <Flex vertical align="center" gap={10}>
        {isExpanded ? duplicates : duplicates[0]}
      </Flex>
      <Button
        className={styles.duplicatesButton}
        icon={isExpanded ? <UpOutlined /> : <DownOutlined />}
        block
        size="large"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {isExpanded ? <>Hide Duplicates</> : <>View Duplicates</>}
      </Button>
    </Flex>
  ) : null;
};

export default SnippetNewsDuplicates;
