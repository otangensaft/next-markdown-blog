import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Post from '../components/Post'
import matter from 'gray-matter'
import { sortByDate } from '../utils'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Danny Tang Blog</title>
      </Head>

      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Get Files from Posts Directory
  const files = fs.readdirSync(path.join('posts'));

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get Frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  console.log(posts)

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}

