import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"
function App() {

  return (
    <>
      {/* <Logo /> */}
      {/* Layout design */}
      <div className="relative md:flex min-h-screen">
        {/* Sidebar component */}
        <Sidebar />
        <div className="flex-1 md:ml-64">
          <div className='p-5'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
