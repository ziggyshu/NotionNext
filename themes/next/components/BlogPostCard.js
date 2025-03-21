import NotionIcon from '@/components/NotionIcon'
import NotionPage from '@/components/NotionPage'
import TwikooCommentCount from '@/components/TwikooCommentCount'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { formatDateFmt } from '@/lib/utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'
import CONFIG from '../config'
import Card from './Card'
import TagItemMini from './TagItemMini'

const BlogPostCard = ({ post, index, showSummary }) => {
  const { locale } = useGlobal()
  const showPreview =
    siteConfig('NEXT_POST_LIST_PREVIEW', null, CONFIG) && post.blockMap
  // 动画样式  首屏卡片不用，后面翻出来的加动画
  const aosProps =
    index > 2
      ? {
          'data-aos': 'fade-down',
          'data-aos-duration': '400',
          'data-aos-once': 'true',
          'data-aos-anchor-placement': 'top-bottom'
        }
      : {}

  return (
<Card className='w-full mb-1'>
  <div className='flex flex-row justify-between duration-300'>
    {/* 封面图 - 左侧 */}
    {siteConfig('NEXT_POST_LIST_COVER', null, CONFIG) &&
      post?.pageCoverThumbnail && (
        <Link href={post?.href} passHref legacyBehavior>
          <div className='w-1/3 h-24 relative duration-200 cursor-pointer transform overflow-hidden'>
            <Image
              className='hover:scale-105 transform duration-500'
              src={post?.pageCoverThumbnail}
              alt={post.title}
              layout='fill'
              objectFit='cover'
              loading='lazy'
            />
          </div>
        </Link>
      )}

    {/* 内容 - 右侧 */}
    <div className='flex-1 lg:p-3 p-1 flex flex-col'>
      {/* 文章标题 */}
      <Link
        {...aosProps}
        href={post?.href}
        passHref
        className={`cursor-pointer text-lg ${showPreview ? 'text-center' : ''} leading-tight text-gray-700 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400`}>
        {siteConfig('POST_TITLE_ICON') && (
          <NotionIcon icon={post.pageIcon} />
        )}{' '}
        <span className='menu-link'>{post.title}</span>
      </Link>

      {/* 日期和标签 */}
      <div
        {...aosProps}
        className={`flex mt-0.5 items-center ${showPreview ? 'justify-center' : 'justify-start'} flex-wrap dark:text-gray-500 text-gray-500 leading-4`}>
        {/* ... 其他内容 ... */}
      </div>

      {/* 摘要 */}
      {(!showPreview || showSummary) && !post.results && (
        <p
          {...aosProps}
          className='mt-1 mb-2 text-gray-700 dark:text-gray-300 text-sm font-light leading-4'>
          {post.summary}
        </p>
      )}

      {/* 搜索结果 */}
      {post.results && (
        <p className='line-clamp-1 mt-1 text-gray-700 dark:text-gray-300 text-sm font-light leading-4'>
          {post.results.map((r, index) => (
            <span key={index}>{r}</span>
          ))}
        </p>
      )}

      {/* 按钮区域 */}
      <div className='text-right border-t pt-1 border-dashed'>
        <Link
          href={post?.href}
          className='hover:bg-opacity-100 hover:underline transform duration-300 px-1 py-0.5 text-xs text-white bg-gray-800 cursor-pointer'>
          {locale.COMMON.ARTICLE_DETAIL}
          <i className='ml-1 fas fa-angle-right text-xs' />
        </Link>
      </div>
    </div>
  </div>
</Card>
  )
}

export default BlogPostCard
