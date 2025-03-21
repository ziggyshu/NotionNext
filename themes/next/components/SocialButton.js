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
            <svg 
            className='transform hover:scale-125 duration-150'
            style={{ width: '24px', height: '24px' }} // 根据需要调整尺寸
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512">
            <path d="M390.9 298.5c0 0 0 .1 .1 .1c9.2 19.4 14.4 41.1 14.4 64C405.3 445.1 338.5 512 256 512s-149.3-66.9-149.3-149.3c0-22.9 5.2-44.6 14.4-64h0c1.7-3.6 3.6-7.2 5.6-10.7c4.4-7.6 9.4-14.7 15-21.3c27.4-32.6 68.5-53.3 114.4-53.3c33.6 0 64.6 11.1 89.6 29.9c9.1 6.9 17.4 14.7 24.8 23.5c5.6 6.6 10.6 13.8 15 21.3c2 3.4 3.8 7 5.5 10.5zm26.4-18.8c-30.1-58.4-91-98.4-161.3-98.4s-131.2 40-161.3 98.4L0 202.7 256 0 512 202.7l-94.7 77.1z"/>
          </svg>
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