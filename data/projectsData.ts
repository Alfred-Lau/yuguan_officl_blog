interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'bitou: 一款全 AI 驱动的搭建分享产品',
    description: `让你的分享变得更加简单`,
    imgSrc: '/static/images/google.png',
    href: 'https://bitou.tech',
  },
  {
    title: 'bitou-cli：黑屏工具',
    description: `通过其扩展机制，你可以轻松的扩展 Pen 的主题 UI 和构建能力`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'A Search Engine',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'A Search Engine',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
