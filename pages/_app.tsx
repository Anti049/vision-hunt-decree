import SidebarLayout from '../components/SidebarLayout'
import '../styles/globals.css'

function Application({ Component, pageProps }) {
    return (
        <SidebarLayout>
            <Component {...pageProps} />
        </SidebarLayout>
    )
}

export default Application
