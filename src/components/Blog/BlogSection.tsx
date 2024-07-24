// BlogSection.tsx
import React, { useState } from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button, ButtonGroup } from '@mui/material';
import { Article } from '../../types/types';
import { articles } from '../../articles/articles';
import Link from 'next/link';

const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles: Article[] = selectedCategory
    ? articles.filter((article) => article.category === selectedCategory)
    : articles;

  return (
    <Box sx={{ padding: '4rem 2rem', backgroundColor: '#f7f3eb' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'left', marginBottom: '0rem', fontWeight: '700' }}>
        Blog de Artigos e Notícias
      </Typography>
      <ButtonGroup variant="outlined" sx={{ marginBottom: 2, alignSelf: 'center', justifyContent: 'center', display: 'flex' }}>
        <Button onClick={() => setSelectedCategory(null)} sx={{ color: selectedCategory === null ? 'primary.main' : 'inherit' }}>
          Todos
        </Button>
        <Button onClick={() => setSelectedCategory('noticias')} sx={{ color: selectedCategory === 'noticias' ? 'primary.main' : 'inherit' }}>
          Notícias
        </Button>
        <Button onClick={() => setSelectedCategory('tecnologia')} sx={{ color: selectedCategory === 'tecnologia' ? 'primary.main' : 'inherit' }}>
          Tecnologia
        </Button>
        <Button onClick={() => setSelectedCategory('dicas')} sx={{ color: selectedCategory === 'dicas' ? 'primary.main' : 'inherit' }}>
          Dicas
        </Button>
      </ButtonGroup>
      <Grid container spacing={4}>
        {filteredArticles.map((article: Article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
              <CardMedia component="img" height="140" image={article.image} alt={article.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description}
                </Typography>
              </CardContent>
              <Box sx={{ padding: '1rem' }}>
                <Link href={article.link} passHref>
                  <Button variant="contained" color="primary" fullWidth>
                    Leia Mais
                  </Button>
                </Link>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogSection;
