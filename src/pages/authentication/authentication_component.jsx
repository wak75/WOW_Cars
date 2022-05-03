import React from 'react';
import './authentication_style.scss';

import SignIn from '../../components/sign_in_component/sign_in_component';
import SignUp from '../../components/sign_up/sign_up_component';


const Authentication = () => (
  <div className='authentication'>
    <SignIn />
    <SignUp />
  </div>
);

export default Authentication;


