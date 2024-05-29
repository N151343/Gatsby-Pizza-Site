import * as React from "react"
import Nav from '../components/Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
// import 'normalize.css';

export default function Layout({ children }) {
    return (
    <div>
     <GlobalStyles />
     <Nav />
     {children}
     <Footer />
    </div>
    );
}