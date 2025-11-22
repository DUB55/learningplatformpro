# Google OAuth Setup Guide

## Goal
Step-by-step instructions to create a Google OAuth client and link it to Supabase Auth.

## 1. Google Cloud Console - Project
- Go to: https://console.cloud.google.com/
- Ensure you are logged in with the correct Google account.
- Select project: `learning-platform-477708` (already created).

## 2. OAuth Consent Screen
- Navigate to: **APIs & Services** -> **OAuth consent screen**.
- Choose **External** (if public) or **Internal**.
- Fill in:
  - **App name**: Learning Platform
  - **User support email**: (your email)
  - **Developer contact**: (your email)
- Click **Save & Continue** (scopes can be skipped for basic login).

## 3. Create OAuth 2.0 Client ID
- Navigate to: **APIs & Services** -> **Credentials** -> **Create Credentials** -> **OAuth client ID**.
- Application type: **Web application**.
- Name: `learning-platform - Web (Production)` (already created).
- **Authorized JavaScript origins**:
  - `http://localhost:3000`
  - `https://learning-platform-tau-steel.vercel.app`
- **Authorized redirect URIs**:
  - `https://vbkfwcztrwccfdumtgpo.supabase.co/auth/v1/callback`
- Click **Create**. Copy the **Client ID** and **Client Secret**.

## 4. Configure Supabase
- Go to Supabase Dashboard -> **Authentication** -> **Settings** -> **External OAuth Providers** -> **Google**.
- Paste the **Client ID** and **Client Secret**.
- Enable the Google provider.

## 5. Testing
- In the frontend app, use: `auth.signInWithOAuth({ provider: 'google' })`.
- Ensure `http://localhost:3000` is in Authorized JavaScript origins for local dev.
- Successful login will show a user in Supabase Auth -> Users.

## 6. Notes
- **Security**: Never expose the Client Secret in frontend code.
- **Environment Variables**: Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel.
