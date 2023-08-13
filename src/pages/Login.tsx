import { Form, Link } from 'react-router-dom'

export async function action({ request }:any){
    let formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    console.log({email, password})
    return { email: email, password: password };
}

export default function Login() {
  
    return (
    <div className='flex justify-center text-white'>
        <Form method="post" id='login-form'>
            <div className="border-2 rounded-md mt-8">
            <label></label>
            <input type='text' name="email" placeholder='Login' className='p-1 w-60'></input>
            </div>
            <div className="border-2 rounded-md mt-2">
            <label></label>
            <input type='password' name="password" placeholder='Password' className='p-1 w-60'></input>
            </div>
            <div className='flex justify-center mt-4'>
            <button type='submit' name='intent' value="signin" className='border-2 rounded-md px-8 py-1 border-red-800 bg-white text-black hover:bg-red-100'>
                Sign in
            </button>
            </div>
            <div className='mt-12'>
                <span className='text-sm'>Don't have an account? </span>
                <Link to={'/signup'} className='text-blue-500'>Sign up</Link>
            </div>
        </Form>
    </div>
  )
}
