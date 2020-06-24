import Link from 'next/link'
import Layout from '../../components/Layout'
import fetch from 'isomorphic-unfetch'

const Index = () => {
    return (
        <Layout>
            <h1>Hello from me</h1>
        </Layout>
    )
};

Index.getInitialProps = async () => {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
    const data = await res.json()
    return{
        data,
        james: 'wdsfd'
    }
}

export default Index;