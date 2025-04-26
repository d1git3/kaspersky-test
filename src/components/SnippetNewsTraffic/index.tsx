import { Space, Typography } from 'antd';
import { IData_TrafficItem } from '../../types/types';

const SnippetNewsTraffic = ({ countries }: { countries: IData_TrafficItem[] }) => {
  return (
    <Space>
      {countries.map((country) => (
        <Typography.Text>
          <span className="colorGray">{country.value}</span> {Math.round(country.count * 100) + '%'}
        </Typography.Text>
      ))}
    </Space>
  );
};

export default SnippetNewsTraffic;
