import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import SidebarLayout from '../components/SidebarLayout'
import Searchbar from '../components/Searchbar'
import PageContainer from '../components/utilities/PageContainer'
import '../styles/globals.css'

function Application({ Component, pageProps }) {
    return (
        // <div className="bg-background w-screen h-screen select-none">
        //     <div className="fixed w-full h-full flex">
        //         <Sidebar
        //             sidebarOpen={sidebarOpen}
        //             setSidebarOpen={setSidebarOpen}
        //         />
        //         <div className="w-full h-16 z-0">
        //             <Searchbar
        //                 sidebarOpen={sidebarOpen}
        //                 setSidebarOpen={setSidebarOpen}
        //             />
        //         </div>
        //     </div>
        //     <div className="w-full h-full">
        //         <div className="tablet:ml-80 mb-16 z-10 bg-background-secondary text-white h-full overflow-y-auto">
        //             <PageContainer>
        //                 <Component {...pageProps} />
        //             </PageContainer>
        //         </div>
        //     </div>
        // </div>
        <SidebarLayout>
            <Component {...pageProps} />
        </SidebarLayout>
    )
}

export default Application
