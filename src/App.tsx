import { BorderOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { ConfigProvider, theme } from 'antd';
import { snippetsMock } from './data';
import { useInfo } from './hooks/useInfo';
import { SentimentOption } from './types/types';

import DuplicateCard from './components/DuplicateCard';
import Sentiment from './components/SentimentTag';
import SnippetNewsExtra from './components/SnippetNewsExtra';
import SnippetNewsHeader from './components/SnippetNewsHeader';
import SnippetNewsHighlights from './components/SnippetNewsHighlights';
import SnippetNewsInfo from './components/SnippetNewsInfo';
import SnippetNewsSource from './components/SnippetNewsSource';
import SnippetNewsBlock from './components/SnippetNewsBlock';
import SnippetNewsCard from './components/SnippetNewsCard';
import SnippetNewsDuplicates from './components/SnippetNewsDuplicates';
import SnippetNewsTag from './components/SnippetNewsTag';
import SnippetNewsTraffic from './components/SnippetNewsTraffic';

function App() {
  const { formatDate, formatReach, formatHighlights, highlightsToString, getFavicon } = useInfo();

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          fontFamily: 'Lato',
          fontSize: 16,
        },
      }}
    >
      <SnippetNewsBlock>
        {snippetsMock.map((data) => (
          <SnippetNewsCard
            key={data.ID}
            header={
              <SnippetNewsHeader
                extra={
                  <SnippetNewsExtra>
                    <Sentiment value={data.SENT as SentimentOption} />
                    <InfoCircleOutlined style={{ fontSize: 20 }} />
                    <BorderOutlined style={{ fontSize: 21, color: '#abacac' }} />
                  </SnippetNewsExtra>
                }
                info={
                  <SnippetNewsInfo
                    date={formatDate(data.DP)}
                    reach={formatReach(data.REACH)}
                    traffic={<SnippetNewsTraffic countries={data.TRAFFIC} />}
                  />
                }
                title={data.TI}
                url={data.URL}
                source={
                  <SnippetNewsSource
                    domain={data.DOM}
                    country={data.CNTR}
                    favicon={getFavicon(data.DOM, data.FAV)}
                    language={data.LANG}
                    authors={data.AU}
                  />
                }
              />
            }
            highlights={
              <SnippetNewsHighlights
                highlights={formatHighlights(highlightsToString(data.HIGHLIGHTS))}
                shrankHighlights={formatHighlights(data.HIGHLIGHTS[0])}
              />
            }
            tags={data.KW.map((item) => (
              <SnippetNewsTag key={item.value} tagData={item} />
            ))}
            url={data.URL}
            duplicates={
              <SnippetNewsDuplicates
                duplicates={data.DUPLICATES.map((duplicate) => (
                  <DuplicateCard
                    key={duplicate.ID}
                    extra={
                      <SnippetNewsExtra>
                        <InfoCircleOutlined style={{ fontSize: 20 }} />
                        <BorderOutlined style={{ fontSize: 21, color: '#abacac' }} />
                      </SnippetNewsExtra>
                    }
                    favicon={getFavicon(duplicate.DOM, duplicate.FAV)}
                    date={formatDate(duplicate.DP)}
                    reach={formatReach(duplicate.REACH)}
                    title={duplicate.TI}
                    domain={duplicate.DOM}
                    country={duplicate.CNTR}
                    authors={duplicate.AU}
                  />
                ))}
              />
            }
          />
        ))}
      </SnippetNewsBlock>
    </ConfigProvider>
  );
}

export default App;
