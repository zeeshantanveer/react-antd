import React from "react";
import {Anchor} from "antd";
const { Link } = Anchor;
const AppHeader = () => {
  return (
      <div className="container-fluid">
          <div className="header">
              <div className="logo">
                  <i className="fas fa-bolt"/>
                  <a href={'/'}>Zeeshan.com</a>
              </div>
              <Anchor targetOffset="65">
                  <Link href="#home" title="Home" />
                  <Link href="#appAbout" title="About" />
                  <Link href="#appFeature" title="Features" />
                  <Link href="#appWork" title="How it works" />
                  <Link href="#appFaq" title="FAQ" />
                  <Link href="#appContact" title="Contact" />
                  <Link href="#appPricing" title="Pricing" />
              </Anchor>

          </div>
      </div>
  );
}
export default AppHeader;