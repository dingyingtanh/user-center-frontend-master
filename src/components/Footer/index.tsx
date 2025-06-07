import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
import {PLANET_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = '郁离出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'codeNav',
          title: '云梦网盘',
          href: 'http://47.113.193.219:7090/',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '百度',
          href: 'https://codefather.cn',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> 郁离GitHub
            </>
          ),
          href: 'https://github.com/dingyingtanh',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
