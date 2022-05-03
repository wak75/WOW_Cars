import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory_component';
import Footer from '../../components/footer_component/footer_component';
import Banner from '../../components/banner_component/banner_component';
import Testimonial from '../../components/testimonials_component/testimonials_components';
import Membership from '../../components/membership_component/membership_component';

const HomePage = () => (
  <div className='homepage'>
    <Banner/>
    <h2>Categories</h2>
    <Directory />
    <Membership/>
    <Testimonial/>
    <Footer/>
  </div>
);

export default HomePage;
