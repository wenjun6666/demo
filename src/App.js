import React,{Suspense} from 'react'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import routes from './router'
function App() {
  let renderRoute=(arr)=>{
    return arr && arr.map((item,index)=>{
      return <Route key={index} path={item.path} element={item.element?<item.element></item.element>:<Navigate to={item.to}></Navigate>}>
        {
          item.children && renderRoute(item.children)
        }
      </Route>
    })
  }
  return (
    <Suspense fallback={<div>路由加载中...</div>}>
      <BrowserRouter>
        <Routes>
        {
          renderRoute(routes)
        }
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
