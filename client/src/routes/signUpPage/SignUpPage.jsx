import { SignUp } from '@clerk/clerk-react';
import './signUpPage.css';

function SignUpPage() {
  return (
    <div className='signUpPage'>
      <SignUp path="/sign-up"/>
    </div>
  )
}

export default SignUpPage
