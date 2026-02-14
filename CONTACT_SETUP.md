# Contact Form Setup Instructions

Your contact form is now configured with Web3Forms! Follow these steps to activate it:

## Step 1: Get Your API Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click "Create Access Key"
3. Enter your email: **kckarina2055@gmail.com**
4. You'll receive a free API key instantly

## Step 2: Add the API Key to Your Project

1. Create a file named `.env` in the root of your project (next to package.json)
2. Add this line to the file:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_key_here
   ```
3. Replace `your_actual_key_here` with the key you received from Web3Forms

## Step 3: Restart Your Dev Server

If your development server is running, restart it to load the new environment variable.

## That's it!

Now when someone submits the contact form on your portfolio:
- ✅ You'll receive the message at kckarina2055@gmail.com
- ✅ The form includes the sender's name, email, and message
- ✅ Spam protection is built-in
- ✅ It's completely free

## Test It

After setting up, test the form by:
1. Fill out your contact form
2. Submit it
3. Check your email (kckarina2055@gmail.com)

**Note:** The `.env` file is already in `.gitignore`, so your API key won't be committed to GitHub.
