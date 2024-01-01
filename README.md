# Simple Registration with LNBits pay button + Airtable

What is it? 
SvelteKit contact form submission with Airtable and a LNBits Pay Button for the fee in lightning sats.

We use a simple button that creates a satspay invoice using a proxy called satspaysession. 
The source code for the proxy is here at https://github.com/bitkarrot/satspaysession/

Set environment variables first. we are using AIRTABLE_API_KEY interchangably with AIRTABLE_TOKEN
in this forked repository

Check out [the blog post](https://scottspence.com/posts/make-a-contact-form-with-sveltekit-and-airtable) on configuration and how to get the
`AIRTABLE_BASE_ID` and `AIRTABLE_TOKEN` for the project.


# Flow in 1-2-3

## 1 - Fill in Form - Data to Airtable
<img width="787" alt="Screenshot 2023-12-31 at 6 39 55 PM" src="https://github.com/bitkarrot/simple-reg-lnbits-form/assets/73979971/4ef0b78f-1ed7-479d-b632-d7d245b53c68">


## 2 - Click on Pay Button 

This is simplified version using [satspaysession](https://github.com/bitkarrot/satspaysession/) but you can also just use the SatsPay API from LNbits directly.

<img width="855" alt="Screenshot 2023-12-31 at 6 39 00 PM" src="https://github.com/bitkarrot/simple-reg-lnbits-form/assets/73979971/b4e1ff9e-9e79-4bc3-802b-56fd2f70b70a">

## 3 - Pay with LNBits Sats Pay extension
<img width="738" alt="Screenshot 2023-12-31 at 6 39 25 PM" src="https://github.com/bitkarrot/simple-reg-lnbits-form/assets/73979971/2fa528ff-84a4-4eb8-831d-a0de505a0bd8">

## 4 - optional - Completed Page
see [completed link](https://github.com/bitkarrot/satspaysession/blob/main/README.md#json-passed-in-body) setting in LNBits



