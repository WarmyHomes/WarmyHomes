import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <p>Click the link below to go to the home page:</p>
      <Link href="/">
        <button>Go to Home</button>
      </Link>
    </div>
  )
}

export default Page;
