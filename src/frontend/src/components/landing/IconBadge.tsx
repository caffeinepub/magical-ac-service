import { IconType } from 'react-icons';
import { useIconSound } from '@/hooks/useIconSound';

interface IconBadgeProps {
  icon: IconType;
  variant?: 'primary' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  enableSound?: boolean;
}

export default function IconBadge({ icon: Icon, variant = 'primary', size = 'md', enableSound = true }: IconBadgeProps) {
  const { playSound } = useIconSound();
  
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
  };

  const iconSizes = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-4xl',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-br from-cyan-500/25 to-teal-600/25 dark:from-cyan-400/25 dark:to-teal-500/25 border-cyan-400/40 dark:border-cyan-400/25 text-cyan-600 dark:text-cyan-400',
    orange: 'bg-gradient-to-br from-orange-500/25 to-orange-600/25 dark:from-orange-400/25 dark:to-orange-500/25 border-orange-400/40 dark:border-orange-400/25 text-orange-600 dark:text-orange-400',
  };

  const handleClick = () => {
    if (enableSound) {
      playSound();
    }
  };

  return (
    <div 
      className={`${sizeClasses[size]} rounded-2xl ${variantClasses[variant]} border-2 flex items-center justify-center backdrop-blur-md shadow-lg icon-vibrate-hover cursor-pointer transition-transform`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <Icon className={iconSizes[size]} />
    </div>
  );
}
