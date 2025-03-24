"use client";

import { FC, useEffect, useState } from "react";
import Title from "@/components/ui/title";
import Container from "@/components/ui/container";
import { fetchArticles } from "@/actions/article";
import ArticleMain from "./libs/article-main/article-main";
import Article from "./libs/article/article";
import BaseButton from "@/components/ui/base-button";
import styles from "./styles.module.scss";
import cn from "classnames";
import { Article as ArticleType } from "@/actions/article";
import { useWindowSize } from "@/hooks/use-window-size";

interface BlogProps {
  showTitle?: boolean;
  className?: string;
  gridType: 'home' | 'blog';
}

const ITEMS_PER_LOAD = 6;

const Blog: FC<BlogProps> = ({ showTitle = true, className = '', gridType }) => {
  const [allArticles, setAllArticles] = useState<ArticleType[]>([]);
  const [displayedCount, setDisplayedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { width } = useWindowSize();

  const getInitialArticlesCount = () => {
    if (width >= 1260) {
      return 4;
    } else if (width >= 768) {
      return 3;
    }
    return 2;
  };

  const loadAllArticles = async () => {
    try {
      setIsLoading(true);
      const response = await fetchArticles({
        page: 1,
        limit: 1000
      });

      setAllArticles(response.items);
      setDisplayedCount(getInitialArticlesCount());
    } catch (error) {
      console.error('Error loading articles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    setDisplayedCount(prev => Math.min(prev + ITEMS_PER_LOAD, allArticles.length));
  };

  useEffect(() => {
    if (allArticles.length > 0) {
      setDisplayedCount(getInitialArticlesCount());
    } else {
      loadAllArticles();
    }
  }, [width]);

  const displayedArticles = allArticles.slice(0, displayedCount);
  const hasMore = displayedCount < allArticles.length;

  return (
    <section className={cn(styles.blog, className)}>
      <Container>
        {showTitle && <Title variant="h2">Blog</Title>}

        <div className={styles[`blog__articles--${gridType}`]}>
          {displayedArticles.length > 0 && (
            <>
              <div className={styles['blog__main-article']}>
                <ArticleMain article={displayedArticles[0]} priority />
              </div>

              <div className={styles['blog__grid']}>
                {displayedArticles.slice(1).map((article, index) => (
                  <div
                    key={article.id}
                    className={styles['blog__article-wrap']}
                  >
                    <Article article={article} index={index} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {hasMore && !isLoading && (
          <BaseButton
            onClick={loadMore}
            className={styles['blog__show-more']}
          >
            View more articles
          </BaseButton>
        )}
      </Container>
    </section>
  );
};

export default Blog;

