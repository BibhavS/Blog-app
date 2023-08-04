import React from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from '../schemas';

const initialValues = {
  name: "",
  email: "",
  number: ""
};

export default function Contact() {
  const {values, touched, errors, handleReset, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit : (values)=>{
      console.log(values);
      alert("Your response has been recorded");
      handleReset();
    }
  })

  return (
     <>
     <div className='flex justify-center'>
       <div className='mt-16 p-10 rounded-xl shadow-xl w-[35vw]'>
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>
           <label htmlFor="name" className='font-medium text-lg'>Name</label>
           <input type="text" name="name" id="name" 
             className='mt-3 border rounded-[4px] w-full outline-none border-black p-2'
             value={values.name}
             onChange={handleChange}
             onBlur={handleBlur}
           />
           {errors.name && touched.name ? (<p className='text-red-700'>{errors.name}</p>) : null}
          </div>
          <div className='mb-6'>
           <label htmlFor="email" className='font-medium text-lg'>Email</label>
           <input type="email" name="email" id="email" 
             className='mt-3 border w-full rounded-[4px] outline-none border-black p-2'
             value={values.email}
             onChange={handleChange}
             onBlur={handleBlur}
           />
          {errors.email && touched.email ? (<p className='text-red-700'>{errors.email}</p>) : null}
          </div>
          <div className='mb-12'>
           <label htmlFor="number" className='font-medium text-lg'>Contact Number</label>         
          <input type="text" name="number" id="number"
             className='mt-3 border w-full rounded-[4px] outline-none border-black p-2'
             value={values.number}
             onChange={handleChange}
             onBlur={handleBlur}
          />
        {errors.number && touched.number ? (<p className='text-red-700'>{errors.number}</p>) : null}
          </div>
          <div className='flex justify-center'>
            <button className='bg-slate-900 text-white py-3 px-10 rounded-md max-lg:py-1 text-xl' type='submit'>
              Submit
            </button>
          </div>
        </form>
       </div>
     </div>
     </>
  )
}
