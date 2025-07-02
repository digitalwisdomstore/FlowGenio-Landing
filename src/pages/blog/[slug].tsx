// src/pages/blog/[slug].tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';

export const getStaticPaths = async () => {
  const postsDir = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

  const paths = files.map(f => ({
    params: { slug: f.replace(/\.md$/, '') }
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);

  return { props: { frontMatter: data, content } };
};

type Props = {
  frontMatter: { title: string; date: string };
  content: string;
};

const PostPage: React.FC<Props> = ({ frontMatter, content }) => (
  <>
    <Head>
      <title>{frontMatter.title} · FLOWgenio</title>
      <meta name="description" content={`${frontMatter.title} – ${frontMatter.date}`} />
    </Head>

    <article className="prose mx-auto py-12">
      <h1>{frontMatter.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(frontMatter.date).toLocaleDateString()}
      </p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  </>
);

export default PostPage;
