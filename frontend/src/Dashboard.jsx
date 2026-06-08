import { useState } from "react"

export default function Dashboard() {
  const [showinp, setShowInp] = useState(false)
  const [sec, setSec] = useState('')
  const [section, setSection] = useState([])

  const handleAddBtn = (e) => {
    e.preventDefault()
    if(!sec){
      alert('Fill out field')
      return
    }
    setSection([...section, {type: sec, task: []}])
    setSec('')
    setShowInp(false)
  }

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <aside className="w-64 bg-gray-900 text-white flex flex-col">
          <div className="text-2xl font-bold p-6 border-b borderg-gray-700">My Dashboard</div>
          <nav className="flex-1 p-4 space-y-2">
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Home</a>
            <a href="" className="block px-4 py-2 rounded hover:bg-gray-700">Task section</a>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700" >Task Completed</a>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Task pending</a>
          </nav>
          <div className="p-4 border-t border-gray-700 texr-sm text-gray-400">
          © 2026 Jemson Mislani
          </div>
        </aside>
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold">Welcome! What's our task for today?📝</h1>
          <p className="mt-2 text-gray-600">Small tasks everyday, add up to big results.✅️</p>
          <button 
            className="px-4 py-4 rounded m-5 ml-0 cursor-pointer bg-sky-400 hover:bg-sky-500 active:bg-sky-400"
            onClick={() => setShowInp(!showinp)}>Add Section ✚</button>
        {
            showinp && (
            <div className="flex gap-1">
            <input 
              className="border border-1 px-2 py-2 rounded"
              type="text" 
              placeholder="Create section"
              value={sec}
              onChange={(e) => setSec(e.target.value)}
              />
            <button 
              className="px-5 py-2 rounded cursor-pointer bg-green-700 text-white"
              onClick={handleAddBtn}>Add</button>
            <button 
              className="px-5 py-2 rounded cursor-pointer bg-red-700 text-white"
              onClick={() => setShowInp(false)}>Close</button>
          </div>
          )
        }
        {
          section.map((ind) => {
            return <div key={ind}>
              <p>{ind.type}</p>
            </div>
          })
        }
        </main>
      </div>
    </>
  )
}

