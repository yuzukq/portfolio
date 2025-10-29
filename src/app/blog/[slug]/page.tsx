import { getAllPostSlugs, getPostBySlug } from '@/lib/posts'
import { Box, Heading, HStack, Tag, Text, Separator } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import Image from 'next/image'
import ShareRow from './ShareRow'
import remarkLatexBreaks from '@/lib/remark-latex-breaks'

export const dynamic = 'error' // SSG

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Not found' }
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.thumbnail ? [{ url: post.thumbnail }] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    return <Box maxW="900px" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 10, md: 16 }}><Heading>Not Found</Heading></Box>
  }

  return (
    <Box maxW="900px" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 10, md: 16 }}>
      <Heading size="2xl" mb={4}>{post.title}</Heading>
      <HStack gap={3} color="gray.400" mb={6} flexWrap="wrap">
        <Text>{new Date(post.date).toLocaleDateString('ja-JP')}</Text>
        {post.tags?.map((tag) => (
          <Tag.Root key={tag} variant="solid" colorPalette="gray"><Tag.Label>#{tag}</Tag.Label></Tag.Root>
        ))}
      </HStack>
      {post.thumbnail && (
        <Box position="relative" w="100%" h={{ base: '220px', md: '360px' }} mb={8}>
          <Image src={post.thumbnail} alt={post.title} fill sizes="100vw" style={{ objectFit: 'cover', borderRadius: 12 }} />
        </Box>
      )}
  <Separator my={8} />
      <Box className="markdown-body" css={{
        // Headings
        '& h1': { fontSize: '2rem', fontWeight: 800, marginTop: '2.5rem', marginBottom: '1rem' },
        '& h2': { fontSize: '1.75rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' },
        '& h3': { fontSize: '1.5rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.5rem' },
        '& h4': { fontSize: '1.25rem', fontWeight: 600, marginTop: '1.25rem', marginBottom: '0.5rem' },
        // Paragraphs
        '& p': { marginBottom: '1rem', lineHeight: 1.8 },
        // Lists
        '& ul': { listStyleType: 'disc', paddingInlineStart: '1.5rem', marginBottom: '1rem' },
        '& ol': { listStyleType: 'decimal', paddingInlineStart: '1.5rem', marginBottom: '1rem' },
        '& li': { marginBottom: '0.25rem' },
        // Links
        '& a': { color: '#3b82f6', textDecoration: 'underline', transition: 'color 0.2s ease' },
        '& a:hover': { color: '#2563eb' },
        // Code blocks
        '& pre': { marginBottom: '1.5rem', backgroundColor: '#1a202c', padding: '1rem', borderRadius: '8px', overflowX: 'auto' },
        '& code': { backgroundColor: 'rgba(0,0,0,0.3)', padding: '0.15rem 0.35rem', borderRadius: '4px' },
        // Images
        '& img': { borderRadius: 8, margin: '1rem 0' },
      }}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkLatexBreaks]}
          rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]}
          components={{
            img: ({ src, alt }) => {
              if (!src || typeof src !== 'string') return null
              // Use explicit width/height to avoid creating a block-level wrapper inside <p>
              return <Image src={src} alt={alt || ''} width={1200} height={630} style={{ height: 'auto', width: '100%' }} />
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </Box>

      {/* 一覧へ戻る + 共有ボタン行 */}
      <ShareRow title={post.title} />
    </Box>
  )
}
