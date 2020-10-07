// #region Global Imports
import { NextPage } from 'next';

//#region Local imports
import Layout from '../HOC/layout'
import Sneakers from '../components/sneakers';

const Home: NextPage = () => (
  <Layout>
    <Sneakers />
  </Layout>
);

export default Home;
