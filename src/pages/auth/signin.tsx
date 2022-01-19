import classNames from 'classnames/bind';
import { getProviders, signIn, getCsrfToken } from 'next-auth/react';

const classes = classNames.bind({
  btn: 'bg-white shadow-lg h-10 w-64 m-1'
});

export default function SignIn({ providers, csrfToken}: any) {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col max-w-md justify-center">
        <div className="flex justify-center">
          <h1>SIGN IN</h1>
        </div>
        <form
          className="flex flex-col"
          method="post"
          action="/api/auth/callback/credentials"
        >
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div className="flex flex-col m-1">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" />
          </div>
          <div className="flex flex-col m-1">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button className={classes('btn')} type="submit">
            Sign in
          </button>
        </form>
        <div className="flex">
          <div className="flex w-full">
            <hr className="border-t-3 slate-indigo-500 w-full" />
          </div>
          OR
          <div className="flex w-full">
            <hr className="border-t-3 slate-indigo-500 w-full" />
          </div>
        </div>

        {Object.values(providers)
          .filter((e: any) => e.name !== 'Credentials')
          .map((provider: any) => (
            <div key={provider.name}>
              {console.log()}
              <button
                className={classes('btn')} 
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: { providers, csrfToken }
  };
}