import Link from 'next/link'
import Head from 'next/head'
import { MainLayout } from '../components//MainLayout'

export default function Index() {
  return (
    <MainLayout>
      <Head>
        <title>Next Title</title>
        <meta name="keywords" content="next,javascript,extis,react" />
        <meta name="description" content="this is Next" />
        <meta charSet="utf-8" />

      </Head>
      <h1>Hellow Next.JS!</h1>
      <p><Link href={'/about'}><a>About</a></Link></p>
      <p><Link href={'/posts'}><a>Posts</a></Link></p>
      <p>lorem ipsum dolor sit amet</p>
    </MainLayout>
  )
}