import MainContainer from '../../components/MainContainer';
import Header from '../../components/Header';
import { PostData } from '../../domain/posts/posts';
import { AllPostLinks, Category, Container } from './styles';
import PostCard from '../../components/PostCard';
import Head from 'next/head';
import { SITE_NAME } from '../../config/app-config';
import { PaginationData } from '../../domain/posts/pagination';
import Pagination from '../../components/Pagination';
import Link from 'next/link';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export default function HomePage({
  posts,
  category,
  pagination,
}: HomePageProps) {
  return (
    <>
      <Head>
        <title>
          {category ? `${category} - ${SITE_NAME}` : SITE_NAME}
          {pagination?.nextPage && ` - Pagina ${pagination.nextPage - 1}`}
        </title>
        <meta name="description" content="Este é meu blog feito com next " />
      </Head>
      <Header />
      {category && <Category>Categoria: {category}</Category>}
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              cover={post.cover.formats.small.url}
              slug={post.slug}
              title={post.title}
              key={post.slug}
            />
          ))}
        </Container>
        {pagination && <Pagination {...pagination} />}
        {!pagination?.nextPage && (
          <Link href="/post/page/[...param]" as="/post/page/1" passHref>
            <AllPostLinks>Ver todos os posts</AllPostLinks>
          </Link>
        )}
      </MainContainer>
    </>
  );
}
