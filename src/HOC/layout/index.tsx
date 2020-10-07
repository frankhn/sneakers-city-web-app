import Head from 'next/head'

//#region Local
import Toolbar from '../../components/common/header'
import Footer from '../../components/common/footer'
import './index.scss'
import { useSelector } from 'react-redux'
import { AppState } from '@Redux'


interface ILAYOUTPROPS {
    children?: any,
    title?: string
}


const layout = ({ children }: ILAYOUTPROPS) => {

    const { title } = useSelector((state: AppState) => state.layout)

    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>{title}</title>
            </Head>
            <Toolbar />
            
            <main>
                {
                    children
                }
            </main>
            <Footer />
        </>
    )
}

export default layout
