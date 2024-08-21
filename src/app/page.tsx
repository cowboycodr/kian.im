import Image from 'next/image';
import type { Metadata } from 'next';

import moment from 'moment';

import Projects from '@/components/projects';

export const metadata: Metadata = {
  title: 'Kian McKenna'
}

export default function Home() {
  const age = () => {
    const birthday = moment("2007-01-26");
    return moment().diff(birthday, 'years');
  }

  return (
    <>
      <main className="container space-y-8 md:space-y-12 py-8 max-w-[1080px]">
        <div className="w-full">
          <Image src="https://media.fromkian.com/evergreen-cropped.jpg" alt="Evergreen" width={3152} height={1605} className="rounded-xl object-cover" />
        </div>
        <h1 className="text-2xl tracking-tight md:text-3xl">
          Kian McKenna is a {age()} year old full-stack web developer & designer in Kansas City <span className="text-muted-foreground">— currently making the web less boring with KianKit.</span>
        </h1>
        <Projects></Projects>
      </main>
    </>
  )
}