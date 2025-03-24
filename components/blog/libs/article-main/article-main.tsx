import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.scss";
import { Article } from "@/actions/article";

interface ArticleMainProps {
  article: Article;
  priority?: boolean;
}

const ArticleMain: FC<ArticleMainProps> = ({ article, priority = false }) => {
  return (
    <div className={styles['article-main']}>
      <div className={styles['article-main__image-wrapper']}>
        <Image
          src={article.previewImage.url}
          alt={article.title}
          width={1200}
          height={600}
          className={styles['article-main__image']}
          priority={priority}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLj82Pj06MzI1RUFBQktLS1ZWVlpaWlpaWlpaWlr/2wBDARUXFyAeIB4lHh4lNC40LTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDT/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>

      <div className={styles['article-main__categories']}>
        {article.tags?.map((tag, index) => (
          <div
            key={`${tag}-${index}`}
            className={styles['article-main__category']}
          >
            {tag}
          </div>
        ))}
      </div>

      <Link
        href={article.slug}
        className={styles['article-main__title']}
      >
        {article.title}
      </Link>

      <div className={styles['article-main__info']}>
        <p className={styles['article-main__text']}>
          {article.shortText}
        </p>

        <Link
          href={article.slug}
          className={styles['article-main__link']}
        >
          Read more
        </Link>

        <div className={styles['article-main__description']}>
          <Image
            src={article.authorImg.url || '/pages/blog/default-author.jpg'}
            alt="Author"
            width={44}
            height={44}
            className={styles['article-main__author-image']}
          />
          <div className={styles['article-main__meta']}>
            <p className={styles['article-main__author']}>
              {article.authorName || 'Thomas Jefferson'}
            </p>
            {article.date && (
              <p className={styles['article-main__date']}>
                {article.date}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;


