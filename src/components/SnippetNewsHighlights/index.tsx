import React, { useState } from 'react';
import styles from './styles.module.css';
import { Button, Space, Typography } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

const SnippetNewsHighlights = ({
  highlights,
  shrankHighlights,
}: {
  highlights: React.ReactNode;
  shrankHighlights: React.ReactNode;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function handleShowMoreClick() {
    setIsExpanded((prev) => !prev);
  }

  return (
    <div>
      <Typography.Text>{isExpanded ? highlights : shrankHighlights}</Typography.Text>
      <Button className={styles.button} type="link" size="small" onClick={handleShowMoreClick}>
        <Space>
          {isExpanded ? (
            <>
              Show Less
              <CaretUpOutlined />
            </>
          ) : (
            <>
              Show More
              <CaretDownOutlined />
            </>
          )}
        </Space>
      </Button>
    </div>
  );
};

export default SnippetNewsHighlights;
