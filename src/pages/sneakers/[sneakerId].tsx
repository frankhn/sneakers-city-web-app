import { useRouter } from 'next/router'
import SneakerItem from 'src/components/sneakers/sneaker'
import Layout from 'src/HOC/layout'


const sneaker = () => {

    const router = useRouter()

    const { sneakerId } = router.query

    return (
        <Layout>
            <SneakerItem sneakerId={sneakerId} />
        </Layout>
    )
}

export default sneaker
