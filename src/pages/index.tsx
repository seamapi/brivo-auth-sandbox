import Image from 'next/image'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()

  const handleClick = async () => {
    const res = await fetch('/api/initiate-brivo-oauth')
    const data = await res.json()

    router.push(data.url)
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <button onClick={handleClick}>Click</button>
    </main>
  )
}
