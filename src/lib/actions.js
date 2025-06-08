// src/lib/actions.js

'use server'; // This is CRUCIAL. It marks this as a Server Action.

import { redirect } from 'next/navigation';

// This function will be called when the form is submitted.
export async function submitForm(formData) {
  // The `form-name` hidden field is still required.
  const formName = formData.get('form-name');
  
  // We need to check if formName exists, otherwise Netlify won't accept it
  if (!formName) {
    return { error: 'Form name is missing.' };
  }

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(Object.fromEntries(formData)).toString(),
    });
    
    // If the submission is successful, redirect to a thank you page.
    redirect('/thank-you');

  } catch (error) {
    // If there's an error, you can handle it here.
    console.error(error);
    return { error: 'Something went wrong. Please try again.' };
  }
}