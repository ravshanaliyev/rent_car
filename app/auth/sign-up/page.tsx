"use client"
import Footer from '@/components/shared/footer';
import Navbar from '@/components/shared/navbar';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';


export default function SignUp() {
  return (
    <>
      <Navbar />
      <div className="mt-[5rem] mb-[6.4rem] flex items-center justify-center ">
        <div style={{ boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px' }} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Create an account</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register
              </button>
            </div>
          </form>

          {/* Separator Line */}
          <div className="flex items-center justify-center mt-6">
            <hr className="w-full border-t border-gray-300" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="w-full border-t border-gray-300" />
          </div>

          {/* Google and Facebook Login */}
          <div className="register-socials mt-6 w-full">
            {/* Google Login */}
            <GoogleOAuthProvider clientId='672226360528-8tg4g7urrrl4eckar17jv7iq1heiuplt.apps.googleusercontent.com'>
              <GoogleLogin shape='rectangular'
                onSuccess={credentialResponse => console.log(credentialResponse)}
                onError={() => console.log('SignUp Failed')}
                size='large'
                theme='outline'
                context='signup'
                width={380}

              />
            </GoogleOAuthProvider>

            {/* Facebook Login */}
            {/* <LoginSocialFacebook
              appId='678828277643445'
              onResolve={(response: any) => console.log(response)}
              onReject={(error: any) => console.log(error)}
            >
              <FacebookLoginButto />
            </LoginSocialFacebook> */}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm">
              Already have an account?{' '}
              <a href="/auth/login" className="font-medium text-blue-600 hover:text-red-600">Login</a>
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </>

  );
}
