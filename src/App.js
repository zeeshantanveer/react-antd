import React from "react";
import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import AppHeader from "./components/common/AppHeader";
import {Header, Content, Footer} from "antd/es/layout/layout";
import AppHome from "./components/home/AppHome";
import About from "./components/home/About";
import Feature from "./components/home/Feature";
import Work from "./components/home/Work";
import AppFooter from "./components/home/AppFooter";
import Contact from "./components/home/Contact";
import Pricing from "./components/home/Pricing"; // or 'antd/dist/antd.less'
function App() {
  return (
      <Layout className="mainLayout">
          <Header>
              <AppHeader />
          </Header>
          <Content>
                <AppHome />
                <About />
                <Feature />
                <Work />
                <Contact />
                <Pricing />
          </Content>
          <Footer>
              <AppFooter />
          </Footer>
      </Layout>
  );
}

export default App;
