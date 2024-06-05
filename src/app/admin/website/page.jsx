import SubmitButton from '@/components/common/form-fields/submit-button';
import Link from 'next/link';
import './website.scss';

const Page = () => {
  return (
    <div className='admin-website-main-container'>
          <div className="goto-home-container">

      <p>Click the link below to go to the home page:</p>
      <Link href="/">
        <SubmitButton title='Go to Home' />
      </Link>
      </div>
    </div>
  )
}

export default Page;
