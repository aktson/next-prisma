import Image from 'next/image'
import { Inter } from 'next/font/google'
import PrimaryBtn from '@/components/common/buttons/PrimaryBtn'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>HOMEPAGE

      <PrimaryBtn>Ankit</PrimaryBtn>
    </div>
  )
}
