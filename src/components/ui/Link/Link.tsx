import type { ComponentProps } from 'react';
import { Link as Router } from 'react-router';

interface LinkProps extends ComponentProps<'a'> {
  href: string;
}

export function Link({ children, href, ...props }: LinkProps) {
  return (
    <Router to={href} {...props}>
      {children}
    </Router>
  );
}
