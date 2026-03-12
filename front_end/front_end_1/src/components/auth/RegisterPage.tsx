import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { AlertCircle, Loader2, Mail, ArrowLeft } from 'lucide-react';
import authService from '@/services/authService';

type Step = 'form' | 'verify';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register, error } = useAuth();

  const [step, setStep] = useState<Step>('form');

  // Step 1 fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Step 2 field
  const [otp, setOtp] = useState('');

  const [localError, setLocalError] = useState<string | null>(null);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  // ── Step 1: validate + send OTP ──────────────────────────────────────────
  const handleSendVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    if (!username || !email || !password || !confirmPassword) {
      setLocalError('Please fill in all fields');
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setLocalError('Please enter a valid email address');
      return;
    }
    if (password !== confirmPassword) {
      setLocalError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setLocalError('Password must be at least 6 characters');
      return;
    }

    setIsSendingOtp(true);
    try {
      await authService.sendVerification(email);
      setStep('verify');
    } catch (err) {
      setLocalError(err instanceof Error ? err.message : 'Failed to send verification code');
    } finally {
      setIsSendingOtp(false);
    }
  };

  // ── Step 2: verify OTP + create account ──────────────────────────────────
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    if (otp.length !== 6) {
      setLocalError('Please enter the 6-digit verification code');
      return;
    }

    setIsRegistering(true);
    try {
      await register({ username, email, password, otp });
      navigate('/');
    } catch (err) {
      setLocalError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setIsRegistering(false);
    }
  };

  const handleResend = async () => {
    setLocalError(null);
    setIsSendingOtp(true);
    try {
      await authService.sendVerification(email);
    } catch (err) {
      setLocalError(err instanceof Error ? err.message : 'Failed to resend code');
    } finally {
      setIsSendingOtp(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4 relative">
      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="absolute left-6 top-6 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <ArrowLeft className="size-4 text-[#4a5565]" />
        <span className="font-medium text-sm text-[#4a5565]">Back to Home</span>
      </button>

      <div className="w-full max-w-md">
        <div className="bg-white border border-[#e5e7eb] rounded-2xl shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] p-8">

          {/* ── Step 1: Registration form ── */}
          {step === 'form' && (
            <>
              <div className="flex flex-col gap-2 mb-8">
                <h1 className="font-semibold text-2xl text-[#101828] text-center">Create Account</h1>
                <p className="text-base text-[#4a5565] text-center">Start your courtroom preparation</p>
              </div>

              {(error || localError) && (
                <div className="flex items-start gap-3 p-4 mb-5 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-800">{error || localError}</p>
                </div>
              )}

              <form onSubmit={handleSendVerification} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-[#364153]">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Choose a username"
                    className="w-full h-9 px-3 bg-white border border-[#d1d5dc] rounded-lg text-sm text-[#364153] placeholder:text-[#99a1af] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    disabled={isSendingOtp}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-[#364153]">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full h-9 px-3 bg-white border border-[#d1d5dc] rounded-lg text-sm text-[#364153] placeholder:text-[#99a1af] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    disabled={isSendingOtp}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-[#364153]">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 6 characters"
                    className="w-full h-9 px-3 bg-white border border-[#d1d5dc] rounded-lg text-sm text-[#364153] placeholder:text-[#99a1af] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    disabled={isSendingOtp}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-[#364153]">Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className="w-full h-9 px-3 bg-white border border-[#d1d5dc] rounded-lg text-sm text-[#364153] placeholder:text-[#99a1af] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    disabled={isSendingOtp}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSendingOtp}
                  className="w-full h-10 bg-[#3b82f6] hover:bg-[#2563eb] disabled:bg-gray-400 text-white font-medium text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isSendingOtp
                    ? <><Loader2 className="w-4 h-4 animate-spin" />Sending Code...</>
                    : 'Send Verification Code'}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-[#4a5565]">
                Already have an account?{' '}
                <button
                  onClick={() => navigate('/login')}
                  className="font-semibold text-[#155dfc] hover:underline"
                >
                  Sign In
                </button>
              </p>
            </>
          )}

          {/* ── Step 2: OTP verification ── */}
          {step === 'verify' && (
            <>
              <div className="flex flex-col items-center gap-2 mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h1 className="font-semibold text-2xl text-[#101828] text-center">Check Your Email</h1>
                <p className="text-sm text-[#4a5565] text-center">
                  We sent a 6-digit code to{' '}
                  <span className="font-semibold text-[#101828]">{email}</span>
                </p>
              </div>

              {localError && (
                <div className="flex items-start gap-3 p-4 mb-5 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-800">{localError}</p>
                </div>
              )}

              <form onSubmit={handleVerify} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-[#364153] text-center">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    placeholder="000000"
                    maxLength={6}
                    autoFocus
                    className="w-full h-14 px-3 text-center text-2xl font-bold tracking-[0.5em] bg-white border border-[#d1d5dc] rounded-lg text-[#364153] placeholder:text-[#99a1af] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    disabled={isRegistering}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isRegistering || otp.length !== 6}
                  className="w-full h-10 bg-[#3b82f6] hover:bg-[#2563eb] disabled:bg-gray-400 text-white font-medium text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isRegistering
                    ? <><Loader2 className="w-4 h-4 animate-spin" />Creating Account...</>
                    : 'Verify & Create Account'}
                </button>
              </form>

              <div className="mt-5 flex flex-col items-center gap-3">
                <p className="text-sm text-[#4a5565]">
                  Didn't receive the code?{' '}
                  <button
                    onClick={handleResend}
                    disabled={isSendingOtp}
                    className="font-semibold text-[#155dfc] hover:underline disabled:text-gray-400"
                  >
                    {isSendingOtp ? 'Sending...' : 'Resend code'}
                  </button>
                </p>

                <button
                  onClick={() => { setStep('form'); setLocalError(null); setOtp(''); }}
                  className="flex items-center gap-1 text-sm text-[#4a5565] hover:text-[#101828]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Change email or details
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
