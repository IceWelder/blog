import Image from 'next/image'
import Header from './components/header';
import ForumList from './components/ForumList';
import Footer from './components/footer';
import EnvPost from './components/EnvPost';
import BlogPage from './components/BlogPage';

export default function Home() {
  return (
    <>
    <Header/>
    <BlogPage/>
    <Footer/>
    </>
  )
}
