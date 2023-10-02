import Link from 'next/link';
import { Container, PostCardCover, PostCardHeading } from './styled';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

export default function PostCard({ slug, title, cover }: PostCardProps) {
  return (
    <Container>
      <PostCardCover>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>
            <img src={cover} alt={title} />
          </a>
        </Link>
      </PostCardCover>
      <PostCardHeading>
        <a>{title}</a>
      </PostCardHeading>
    </Container>
  );
}
