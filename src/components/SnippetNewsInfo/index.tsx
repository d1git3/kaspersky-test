import React from 'react';
import { Space, Typography } from 'antd';

const { Text } = Typography;

const SnippetNewsInfo = ({
  date,
  reach,
  traffic,
}: {
  date: string;
  reach: string;
  traffic: React.ReactNode;
}) => {
  return (
    <Space size="large">
      <Text>
        {date.slice(0, 2)} <span className="colorGray">{date.slice(3)}</span>
      </Text>
      <Text>
        {reach} <span className="colorGray">Reach</span>
      </Text>
      <Space size={5}>
        <span className="colorGray">Top Traffic:</span>
        {traffic}
      </Space>
    </Space>
  );
};

export default SnippetNewsInfo;
