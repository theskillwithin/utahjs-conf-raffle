import Link from 'next/link'

const Custom404 = () => (
  <div>
    <Link href="/">
      <a className="go-home">&larr; Select Theater</a>
    </Link>
    <h1>404 - Page Not Found</h1>
    <style jsx>{`
      .go-home {
        position: absolute;
        top: 1rem;
        left: 1rem;
        font-size: 21px;
      }
    `}</style>
  </div>
)

export default Custom404
