import React from 'react';

interface CardProps {
  title: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, href, children, className = '' }) => {
  const CardContent = (
    <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${className}`}>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export default Card;
