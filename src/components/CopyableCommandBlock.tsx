import { useState } from 'react'

function CommandLine({ command }: { command: string }) {
  const [status, setStatus] = useState('')

  async function copy() {
    try {
      await navigator.clipboard.writeText(command)
      setStatus('복사했습니다.')
    } catch {
      setStatus('복사하지 못했습니다. 명령어를 직접 선택해 복사하세요.')
    }
  }

  return (
    <div>
      <div className="flex items-start gap-3">
        <code className="min-w-0 flex-1 whitespace-pre-wrap wrap-anywhere p-0">{command}</code>
        <button type="button" onClick={copy} aria-label={`${command} 복사`} className="shrink-0 cursor-pointer rounded-[4px] border border-(--forest) px-2 py-1 text-[16px] font-semibold text-(--forest) hover:bg-(--forest) hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--forest)">복사</button>
      </div>
      <p role="status" className="m-0 text-[16px]">{status}</p>
    </div>
  )
}

export default function CopyableCommandBlock({ children }: { children: string }) {
  return (
    <div className="space-y-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4">
      {children.split('\n').map((command, index) => <CommandLine key={`${index}:${command}`} command={command} />)}
    </div>
  )
}
