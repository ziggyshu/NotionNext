import Live2D from '@/components/Live2D'
import Tabs from '@/components/Tabs'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import Card from './Card'
import InfoCard from './InfoCard'
import Logo from './Logo'
import { MenuList } from './MenuList'
import SearchInput from './SearchInput'
import Toc from './Toc'

/**
 * 侧边平铺
 * @param tags
 * @param currentTag
 * @param post
 * @param currentSearch
 * @returns {JSX.Element}
 * @constructor
 */
const SideAreaLeft = props => {
  const { post, slot, postCount } = props
  const { locale } = useGlobal()
  const showToc = post && post.toc && post.toc.length > 1
  return (
    <aside
      id='left'
      className={
        (JSON.parse(siteConfig('LAYOUT_SIDEBAR_REVERSE')) ? 'ml-4' : 'mr-4') +
        ' hidden lg:block flex-col w-60 relative z-30'
      }>
      <section className='w-60'>
        {/* 菜单 */}
        <section className='shadow hidden lg:block mb-5 pb-4 bg-white dark:bg-hexo-black-gray hover:shadow-xl duration-200'>
          <Logo className='min-h-32 ' {...props} />
          <div className='pt-2 px-2 '>
            <MenuList allowCollapse={true} {...props} />
          </div>
          {siteConfig('NEXT_MENU_SEARCH', null, CONFIG) && (
            <div className='px-2 pt-2 '>
              <SearchInput {...props} />
            </div>
          )}
        </section>
      </section>

      <div className='sticky top-4 hidden lg:block'>
        <Card>
          <Tabs>
            {showToc && (
              <div
                key={locale.COMMON.TABLE_OF_CONTENTS}
                className='dark:text-gray-400 text-gray-600 bg-white dark:bg-hexo-black-gray duration-200'>
                <Toc toc={post.toc} />
              </div>
            )}

            <div
              key={locale.NAV.ABOUT}
              className='mb-5 bg-white dark:bg-hexo-black-gray duration-200 py-2'>
              <InfoCard {...props} />
              <>
                <div className='mt-2 text-center dark:text-gray-300 font-light text-xs'>
                  <span className='px-1 '>
                    <strong className='font-medium'>{postCount}</strong>
                    {locale.COMMON.POSTS}
                  </span>
                  <span className='px-1 busuanzi_container_site_uv hidden'>
                    |{' '}
                    <strong className='pl-1 busuanzi_value_site_uv font-medium' />
                    {locale.COMMON.VISITORS}
                  </span>
                  {/* <span className='px-1 busuanzi_container_site_pv hidden'>
                | <strong className='pl-1 busuanzi_value_site_pv font-medium'/>{locale.COMMON.VIEWS}</span> */}
                </div>
              </>
            </div>
          </Tabs>
        </Card>

        <div className='flex justify-center'>
          {slot}
          <Live2D />
        </div>
      </div>
    </aside>
  )
}
export default SideAreaLeft
