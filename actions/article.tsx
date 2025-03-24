import { createClient } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { parse, format } from "date-fns";

export type ArticleParams = {
  page: number;
  limit: number;
  tags?: string[];
  sortOrder?: '-fields.date' | 'fields.date';
  search?: string;
}

export type ArticlesResponse = {
  items: Article[];
  total: number;
  hasMore: boolean;
  page: number;
}

export type Article = {
  id: string;
  date: string;
  isoDate: string;
  metaDescription: string;
  metaTitle: string;
  shortText: string;
  title: string;
  tags: string[];
  previewImage: {
    url: string;
  };
  slug: string;
  text: string;
  authorImg: {
    url: string;
  };
  authorName: string;
}

const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

const mapContentfulToArticle = (item: any): Article => {
  const parsedDate = parse(item.fields.date, 'dd/MM/yyyy', new Date());

  return {
    id: item.sys.id,
    date: format(parsedDate, 'MM/dd/yyyy'),
    isoDate: format(parsedDate, 'yyyy-MM-dd'),
    metaDescription: item.fields.metaDescription,
    metaTitle: item.fields.metaTitle,
    shortText: item.fields.shortText,
    title: item.fields.title,
    tags: item.fields.tags || [],
    previewImage: {
      url: `https:${item.fields.previewImage.fields.file.url}`,
    },
    slug: item.fields.slug,
    text: documentToHtmlString(item.fields.ttt),
    authorImg: {
      url: `https:${item.fields.authorImage.fields.file.url}`,
    },
    authorName: item.fields.author,
  };
};

export const fetchArticles = async (params: ArticleParams): Promise<ArticlesResponse> => {
  const {
    tags = [],
    search = ''
  } = params;

  try {
    const queryParams: any = {
      content_type: 'blog',
      limit: 1000,
      order: '-sys.updatedAt',
      'fields.date[exists]': true
    };

    if (tags.length > 0) {
      queryParams['fields.tags[in]'] = tags.join(',');
    }

    if (search) {
      queryParams['fields.title[match]'] = search;
    }

    const response = await contentfulClient.getEntries(queryParams);

    const items = response.items
      .map(mapContentfulToArticle)
      .sort((a, b) => {
        return b.isoDate.localeCompare(a.isoDate);
      });

    return {
      items,
      total: response.total,
      hasMore: false,
      page: 1
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export const fetchTags = async (): Promise<string[]> => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blog',
      select: ['fields.tags'],
      limit: 1000,
    });

    const allTags = response.items.reduce<string[]>((tags, item: any) => {
      if (item.fields?.tags) {
        tags.push(...item.fields.tags);
      }
      return tags;
    }, []);

    return [...new Set(allTags)];
  } catch (error) {
    console.error('Error fetching tags:', error);
    throw error;
  }
};
