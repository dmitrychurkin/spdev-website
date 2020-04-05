import PageLayout from 'components/PageLayout';
import Preloader from 'components/Preloader';
import Landing from 'components/Landing';
import i18n from '../i18n';

const { withTranslation } = i18n;

const Home = () => (
  <PageLayout title="SPDeveloper">
    <Preloader />
    <Landing />
  </PageLayout>
);

Home.getInitialProps = () => ({
  namespacesRequired: ['landing']
})

export default withTranslation('landing')(Home);
