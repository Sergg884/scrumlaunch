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
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { width } = useWindowSize();

  const getInitialArticlesCount = () => {
    if (width >= 1260) {
      return gridType === 'home' ? 4 : 3;
    } else if (width >= 768) {
      return 3;
    }
    return 2;
  };

  const loadArticles = async (isInitial = false) => {
    try {
      setIsLoading(true);
      const page = isInitial ? 1 : currentPage + 1;
      const limit = isInitial ? getInitialArticlesCount() : ITEMS_PER_LOAD;

      const response = await fetchArticles({
        page,
        limit,
        sortOrder: '-fields.date'
      });

      if (isInitial) {
        setArticles(response.items);
      } else {
        setArticles(prev => [...prev, ...response.items]);
      }

      setCurrentPage(page);
      setHasMore(response.hasMore);
    } catch (error) {
      console.error('Error loading articles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadArticles(true);
  }, [width]); // Перезагружаем при изменении ширины экрана

  return (
    <section className={cn(styles.blog, className)}>
      <Container>
        {showTitle && <Title variant="h2">Blog</Title>}

        <div className={styles[`blog__articles--${gridType}`]}>
          {articles.length > 0 && (
            <>
              <div className={styles['blog__main-article']}>
                <ArticleMain article={articles[0]} />
              </div>

              <div className={styles['blog__grid']}>
                {articles.slice(1).map((article, index) => (
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
            onClick={() => loadArticles(false)}
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

