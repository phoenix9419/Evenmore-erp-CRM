import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'EVENMORE'}
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>
            Website : <a href="https://www.evenmoreapp.com">www.evenmoreapp.com</a>{' '}
          </p>
          <p>
            GitHub :{' '}
            <a href="https://github.com/phoenix9419/Evenmore-erp-CRM.git">
            https://github.com/phoenix9419/Evenmore-erp-CRM.git
            </a>
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://www.evenmoreapp.com/contact-us/`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
