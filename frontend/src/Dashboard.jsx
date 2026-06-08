
export default function Dashboard() {

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
          <button className="px-4 py-4 rounded m-5 ml-0 cursor-pointer bg-sky-400 hover:bg-sky-500 active:bg-sky-400">Add Section ✚</button>
        </main>
      </div>
    </>
  )
}

