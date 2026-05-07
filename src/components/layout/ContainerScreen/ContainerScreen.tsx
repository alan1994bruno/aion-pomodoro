import { Outlet } from 'react-router';
import { Footer } from '@/components/ui/Footer';
import { Menu } from '../Menu';
import { MainLayout } from '../MainLayout';
import { Container } from '../Container/Container';

export function ContainerScreen() {
  return (
    <div>
      <Menu />
      <Container>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </Container>
      <Footer />
    </div>
  );
}
