// pages/blog/[id].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Article } from '../../types/types';
import { articles } from '../../articles/articles';
import { Box, Typography, Container, Button } from '@mui/material';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';

interface ArticlePageProps {
  article: Article;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Box sx={{ padding: '4rem 0' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {article.title}
        </Typography>
        <img src={article.image} alt={article.title} style={{ width: '100%', height: 'auto', marginBottom: '2rem' }} />
        <Typography variant="body1" paragraph>
          {article.content}
        </Typography>
        <Link href="/blog" passHref>
          <Button variant="contained" color="primary">Voltar ao Blog</Button>
        </Link>
      </Box>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = articles.map((article) => ({
    params: { id: article.id.toString() },
  }));
  return { paths, fallback: true };
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || typeof params.id !== 'string') {
    return {
      notFound: true,
    };
  }

  const article = articles.find((article) => article.id.toString() === params.id);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      article: {
        id: article.id,
        image: article.image,
        title: article.title,
        description: article.description,
        content: article.content,
        link: article.link,
        category: article.category,
      },
    },
  };
};

export default ArticlePage;
