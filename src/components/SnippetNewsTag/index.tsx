import styles from './styles.module.css';
import { Tag, Space } from 'antd';
import { IData_TagItem } from '../../types/types';

const SnippetNewsTag = ({ tagData }: { tagData: IData_TagItem }) => {
  const { value, count } = tagData;

  return (
    <Tag className={styles.tag}>
      <Space>
        {value}
        <span style={{ color: 'white' }}>{count}</span>
      </Space>
    </Tag>
  );
};

export default SnippetNewsTag;
