import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import DesignAiCourtroomCoachLandingPage from '@/imports/DesignAiCourtroomCoachLandingPage-1-734';
import { UserProfileButton } from '@/components/UserProfileButton';

export function LandingPage() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const getSection = (index: number) =>
    wrapperRef.current?.querySelectorAll('[data-name="Section"]')?.[index];

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    const text = (target.closest('[data-name="Button"]') ?? target).textContent ?? '';

    if (text.includes('Log In'))
      navigate('/login');
    else if (text.includes('Practice My Hearing') || text.includes('Start Your Preparation'))
      getSection(2)?.scrollIntoView({ behavior: 'smooth' });   // Section2 = Status Selection
    else if (text.includes('See How It Works'))
      getSection(0)?.scrollIntoView({ behavior: 'smooth' });   // Section = "Most people lose"
    else if (text.includes('Officially Filed'))
      handleStatusClick('filed');
    else if (text.includes('Submitted') || text.includes('Pending'))
      handleStatusClick('pending');
  };

  const handleStatusClick = (status: 'filed' | 'pending') => {
    if (isAuthenticated) navigate(`/intake?status=${status}`);
    else navigate('/login', { state: { from: `/intake?status=${status}` } });
  };

  return (
    <div ref={wrapperRef} onClick={handleClick}>
      <DesignAiCourtroomCoachLandingPage
        isAuthenticated={isAuthenticated}
        username={user?.username}
        userButton={isAuthenticated ? <UserProfileButton /> : undefined}
      />
    </div>
  );
}
