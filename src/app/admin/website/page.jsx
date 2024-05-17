import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <p>Click the link below to go to the home page:</p>
      <Link href="/">
        <a>Go to Home</a>
      </Link>
    </div>
  )
}

export default Page;
