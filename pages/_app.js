import React from 'react';
import App, { Container } from 'next/app';
 
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
 
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { fab, faTwitter, faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
 
library.add(faBars, faHome, fab, faTwitter, faFacebook, faInstagram, faGithub, faLinkedin);
 
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}
 
export default MyApp;