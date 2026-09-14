export default function Icon({ name, className = 'size-[18px]' }: { className?: string; name: 'folder' | 'user' | 'clock' | 'info' }) {
  const paths = {
    folder: 'M3 7V5a2 2 0 0 1 2-2h5l2 4h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm9 5v6m-3-3h6',
    user: 'M20 21v-2a7 7 0 0 0-14 0v2M13 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
    clock: 'M12 8v4l3 2M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z',
    info: 'M12 11v6m0-10h.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z',
  }
  return <svg className={`flex-none ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>
}
