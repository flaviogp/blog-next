import { PostData } from '../../domain/posts/posts';
import { countAllPosts } from '../../data/posts/count-all-posts';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getPost } from '../../data/posts/get-post';
import { GetStaticPaths, GetStaticProps } from 'next';
import Post from '../../containers/Post';
import Error from 'next/error';
import { useRouter } from 'next/router';

export type DynamicPostProps = {
  post: PostData;
};

export default function DynamicPost({ post }: DynamicPostProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Página ainda carregando, por favor aguarde...</div>;
  }
  if (!post?.title) {
    return <Error statusCode={404} />;
  }
  return <Post post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params.slug);
  const post = posts.length > 0 ? posts[0] : {};

  return {
    props: { post: posts[0] },
    revalidate: 600,
    post,
  };
};
