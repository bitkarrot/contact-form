import { AIRTABLE_BASE_ID, AIRTABLE_API_KEY } from '$env/static/private'
import { fail } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'
import { z } from 'zod'
import Airtable from 'airtable';

const base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_BASE_ID);
// console.log("airtable base id: ", AIRTABLE_BASE_ID)
// console.log("airtable base api key: ",AIRTABLE_API_KEY)

const new_contact = z.object({
	name: z.string(),
	email: z.string().email(),
	message: z.string(),
})

export const load = async (event) => {
	const form = await superValidate(event, new_contact)
	return {
		form,
	}
}

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, new_contact)
		if (!form.valid) fail(400, { form })
		
		const { name, email, message } = form.data

		const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/submissions`
		// console.log("superform airtable url: ", AIRTABLE_URL)
		let data = {"fields": { 
			"Name": name,
			"Email":email,
			"Message": message
		}}

		// console.log("super form stringifyd data: ", JSON.stringify(data))

		base('submissions').create([
			data
		  ], function(err, records) {
			if (err) {
//			  console.error(err);
			  return;
			}
			records.forEach(function (record) {
//			  console.log(record.getId());
			});
		  });


		return {
			form,
		}
	},
}
