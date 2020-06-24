import Link from 'next/link'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Rates from '../components/Rates'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

const Index = (props) => {
    return (
        <Layout>
            <h1>I am a Rate Exchange Thing</h1>
            <Rates rates={props.data} />
        </Layout>
    )
};

Index.getInitialProps = async () => {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
    const data = await res.json()
    return{
        data
    }
}

export default Index;