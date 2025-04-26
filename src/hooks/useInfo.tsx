import { GlobalOutlined } from '@ant-design/icons';
import parse from 'html-react-parser';
import React, { useState } from 'react';

export function useInfo() {
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  function formatReach(num: number): string {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
  }

  function highlightsToString(highlights: string[]): string {
    return highlights.join('; ');
  }

  function formatHighlights(highlights: string): React.ReactNode {
    return parse(highlights.replace(/<kw>(.*?)<\/kw>/g, `<span class="highlight">$1</span>`));
  }

  function getFavicon(domain: string, path: string): React.ReactNode {
    const [isError, setIsError] = useState<boolean>(false);

    return isError ? (
      <GlobalOutlined />
    ) : (
      <img
        src={'https://' + domain + path}
        alt=""
        style={{ width: 16, height: 16 }}
        onError={() => setIsError(true)}
      />
    );
  }

  return {
    formatDate,
    formatReach,
    formatHighlights,
    highlightsToString,
    getFavicon,
  };
}
