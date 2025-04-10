import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Home() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    supabase.from('meditations').select('*').then(({ data }) => {
      if (data) setData(data)
    })
  }, [])

  return (
    <div className="p-6 space-y-3">
      <h1 className="text-2xl font-bold">冥想内容</h1>
      {data.map((item) => (
        <div key={item.id} className="border p-4 rounded">
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}
