import { siteConfig } from '@/lib/config'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  return (
    <div className='w-52 justify-center flex-wrap flex'>
      <div className='space-x-3 text-xl text-gray-600 dark:text-gray-400 text-center'>
        {siteConfig('CONTACT_GITHUB') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'github'}
            href={siteConfig('CONTACT_GITHUB')}>
            <i className='fab fa-github transform hover:scale-125 duration-150' />
          </a>
        )}
        {siteConfig('CONTACT_TWITTER') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'twitter'}
            href={siteConfig('CONTACT_TWITTER')}>
            <i className='fab fa-twitter transform hover:scale-125 duration-150' />
          </a>
        )}
        {siteConfig('CONTACT_TELEGRAM') && (
          <a
            target='_blank'
            rel='noreferrer'
            href={siteConfig('CONTACT_TELEGRAM')}
            title={'telegram'}>
            <i className='fab fa-telegram transform hover:scale-125 duration-150' />
          </a>
        )}
        {siteConfig('CONTACT_LINKEDIN') && (
          <a
            target='_blank'
            rel='noreferrer'
            href={siteConfig('CONTACT_LINKEDIN')}
            title={'linkedIn'}>
            <i className='transform hover:scale-125 duration-150 fab fa-linkedin dark:hover:text-indigo-400 hover:text-indigo-600' />
          </a>
        )}
        {siteConfig('CONTACT_WEIBO') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'weibo'}
            href={siteConfig('CONTACT_WEIBO')}>
            <i className='fab fa-weibo transform hover:scale-125 duration-150' />
          </a>
        )}
        {siteConfig('CONTACT_INSTAGRAM') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'instagram'}
            href={siteConfig('CONTACT_INSTAGRAM')}>
            <i className='fab fa-instagram transform hover:scale-125 duration-150' />
          </a>
        )}
        {siteConfig('CONTACT_EMAIL') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'Email'}
            href={`mailto:${siteConfig('CONTACT_EMAIL')}`}>
            <i className='fas fa-envelope transform hover:scale-125 duration-150' />
          </a>
        )}
        {JSON.parse(siteConfig('ENABLE_RSS')) && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'RSS'}
            href={'/rss/feed.xml'}>
            <i className='fas fa-rss transform hover:scale-125 duration-150' />
          </a>
        )}
        {siteConfig('CONTACT_BILIBILI') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'bilibili'}
            href={siteConfig('CONTACT_BILIBILI')}>
            <i className='fab fa-bilibili transform hover:scale-125 duration-150' />
          </a>
        )}
        {siteConfig('CONTACT_YOUTUBE') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'youtube'}
            href={siteConfig('CONTACT_YOUTUBE')}>
            <i className='fab fa-youtube transform hover:scale-125 duration-150' />
          </a>
        )}
        {siteConfig('CONTACT_RESEARCHGATE') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'ResearchGate'}
            href={siteConfig('CONTACT_RESEARCHGATE')}>
            <i className='fab fa-researchgate transform hover:scale-125 duration-150' />
          </a>
        )}
        {siteConfig('CONTACT_ORCID') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'ORCID'}
            href={siteConfig('CONTACT_ORCID')}>
            <i className='fab fa-orcid transform hover:scale-125 duration-150' />
          </a>
        )}
        {siteConfig('CONTACT_GOOGLE_SCHOLAR') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'Google Scholar'}
            href={siteConfig('CONTACT_GOOGLE_SCHOLAR')}>
            <i className='fab fa-google transform hover:scale-125 duration-150' />
          </a>
        )}
        {siteConfig('CONTACT_SCOPUS') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'Scopus'}
            href={siteConfig('CONTACT_SCOPUS')}>
            <i className='fas fa-database transform hover:scale-125 duration-150' />
          </a>
        )}
      </div>
    </div>
  )
}

export default SocialButton