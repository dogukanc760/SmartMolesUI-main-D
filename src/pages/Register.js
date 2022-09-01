import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
import Logo from '../components/Logo';
// sections
import { RegisterForm } from '../sections/auth/register';
import AuthSocial from '../sections/auth/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Register">
      <RootStyle>

        {mdUp && (
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Görsel Seçilecek
            </Typography>
            <img alt="register" src="/static/illustrations/illustration_register.png" />
          </SectionStyle>
        )}

        <Container>
          <ContentStyle>
            <Typography variant="h4" gutterBottom>
            Yeni Bir Hesap Oluştur
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 5 }}>Hızlı ve Kolaydır.</Typography>

            <AuthSocial />

            <RegisterForm />

            <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            Kaydol düğmesine tıklayarak,&nbsp;
              <Link underline="always" color="text.primary" href="#">
                Üyelik Sözleşmesi
              </Link>
              {''} ve {''}
              <Link underline="always" color="text.primary" href="#">
                Gizlilik Sözleşmesi
              </Link>
              'ni kabul ediyorum.
            </Typography>

            {smUp && (
              <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                Zaten bir hesabınız mı var?{' '}
                <Link variant="subtitle2" to="/login" component={RouterLink}>
                  Giriş Yap
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
