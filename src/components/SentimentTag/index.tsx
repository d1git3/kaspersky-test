import styles from './styles.module.css';
import { Tag } from 'antd';
import { SentimentOption } from '../../types/types';

const SentimentColors: Record<SentimentOption, string> = {
  positive: '#23ffb0',
  negative: '#ff5757',
};

function getSentimentColor(sentiment: SentimentOption): string {
  return SentimentColors[sentiment];
}

const Sentiment = ({ value }: { value: SentimentOption }) => {
  return (
    <Tag className={styles.tag} style={{ backgroundColor: getSentimentColor(value) }}>
      {value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()}
    </Tag>
  );
};

export default Sentiment;
