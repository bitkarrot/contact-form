<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client'
	import { z } from 'zod'

	export let data
 
	let submission_status = ''

	const new_contact = z.object({
		name: z.string().min(2),
		email: z.string().email(),
		message: z.string().min(10),
	})

	const { form, errors, enhance } = superForm(data.form, {
		validators: new_contact,
		resetForm: true,
		onSubmit: () => {
			submission_status = 'submitting'
		},
		onError: () => {
			submission_status = 'failed'
		},
		onUpdated: () => {
			submission_status = 'success'
		},
	})

	function openLinkNewWindow() {
		const url = 'https://satspaylink.vercel.app/fiat/USD/amt/1/desc/Membership'; // Replace with your link
		window.open(url, '_blank');
	}

</script>

<div class="mx-auto max-w-xl">
	<h2>Registration Form</h2>
	<p>
		This is a sample Registration Form that sends data to Airtable
		The registration fee is 1 usd, payable in satoshis via LNBits.
	</p>

	{#if submission_status === 'submitting'}
		<p>Submitting...</p>
	{:else if submission_status === 'failed'}
		<p>Submission failed.</p>
	{:else if submission_status === 'success'}
		<p>Submission success.<br/> 
		Please pay Lightning Invoice below, link will open in new window.</p>

		<div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<button on:click={openLinkNewWindow}> Pay with			
				<img src="/lnbits.svg" width="80px" alt="LNBits Image" />
			</button>

		</div>

	{:else}

		<form method="POST" use:enhance>
			<label for="name" class="label">
				<span class="label-text">Name</span>
			</label>
			<input
				bind:value={$form.name}
				type="text"
				name="name"
				aria-label="name"
				placeholder="Enter your name"
				required
				autocomplete="off"
				class="input input-bordered w-full"
			/>
			<label for="name" class="label">
				<span
					class="label-text-alt {$errors.name
						? 'text-error'
						: 'text-base-100'}"
				>
					<!-- {$errors.name} -->
				</span>
			</label>

			<label for="email" class="label">
				<span class="label-text">Email</span>
			</label>
			<input
				bind:value={$form.email}
				type="email"
				name="email"
				aria-label="email"
				placeholder="bill@hotmail.com"
				required
				autocomplete="off"
				class="input input-bordered w-full"
			/>
			<label for="email" class="label">
				<span
					class="label-text-alt {$errors.email
						? 'text-error'
						: 'text-base-100'}"
				>
					<!-- {$errors.email} -->
				</span>
			</label>

			<label for="message" class="label">
				<span class="label-text">Message</span>
			</label>
			<textarea
				bind:value={$form.message}
				name="message"
				aria-label="message"
				placeholder="Write your message here..."
				required
				rows="5"
				autocomplete="off"
				class="textarea input-bordered w-full"
			/>
			<label for="message" class="label">
				<span
					class="label-text-alt {$errors.message
						? 'text-error'
						: 'text-base-100'}"
				>
					 {$errors.message}
				</span>
			</label>

			<input
				type="submit"
				value="Submit"
				class="btn btn-primary w-full mt-10"
			/>
		</form>
	{/if}

	<div>
		<hr/>
	<p>
		<a
			href="/"
			data-sveltekit-reload
			class="btn btn-secondary w-full !text-secondary-content"
		>
			Back
		</a>
	</p>
	</div>


</div>

<!-- 
<style>

/* CSS styles for the modal overlay */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  /* CSS styles for the modal */
  .modal {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    max-width: 80%;
    margin: auto;
  }

  /* CSS styles for the modal content */
  .modal-content {
    /* Styles for the content area */
  }

  /* CSS styles for the close button */
  .close {
	color: white;
	background-color: red;
    position: relative;
	padding: 5px;
	top: 0px;
    right: 10px;
    cursor: pointer;
  }
</style> -->