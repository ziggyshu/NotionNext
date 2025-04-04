import { siteConfig } from '@/lib/config'
import Link from 'next/link'

const Logo = props => {
  const { className } = props
  return (
    <Link href='/' passHref legacyBehavior>
      <div
        className={
          'flex flex-col justify-center items-center cursor-pointer bg-[#000000] space-y-3 font-bold ' +
          className
        }>
        <div
          data-aos='fade-down'
          data-aos-duration='500'
          data-aos-once='true'
          data-aos-anchor-placement='top-bottom'
          className='font-light text-xl text-white logo'>
          {' '}
          {siteConfig('TITLE')}
        </div>
        <div
          data-aos='fade-down'
          data-aos-duration='500'
          data-aos-delay='300'
          data-aos-once='true'
          data-aos-anchor-placement='top-bottom'
          className='text-sm text-gray-300 font-serif text-center'>
          {' '}
          {siteConfig('DESCRIPTION')}
        </div>
      </div>
    </Link>
  )
}
export default Logo
