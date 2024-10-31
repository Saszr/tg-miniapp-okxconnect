interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <section>
      <main className='flex flex-1 flex-col'>{children}</main>
    </section>
  )
}
