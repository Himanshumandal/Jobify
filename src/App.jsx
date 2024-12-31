import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/app-layout'
import LandingPage from './pages/landing'
import Onboarding from './pages/Onboarding'
import Joblisting from './pages/Joblisting'
import JobPage from './pages/JobPage'
import Postjob from './pages/Postjob'
import Savejob from './pages/Savejob'
import Myjob from './pages/My-job'
import { ThemeProvider } from './components/theme-provider'
import ProtectedRoute from './components/Protected-route'

const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path:'/onboarding',
        element:
        <ProtectedRoute>
          <Onboarding/>
        </ProtectedRoute>
      },
      {
        path:'/jobs',
        element:
        <ProtectedRoute>
          <Joblisting/>
        </ProtectedRoute>
      },
      {
        path:'/job/:id',
        element:
        <ProtectedRoute>
          <JobPage/>
        </ProtectedRoute>
      },
      {
        path:'/post-job',
        element:
        <ProtectedRoute>
          <Postjob/>
        </ProtectedRoute>
      },
      {
        path:'/save-job',
        element:
        <ProtectedRoute>
          <Savejob/>
        </ProtectedRoute>
      },
      {
        path:'/my-jobs',
        element:
        <ProtectedRoute>
          <Myjob/>
        </ProtectedRoute>
      },
    ]
  }
])

function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
