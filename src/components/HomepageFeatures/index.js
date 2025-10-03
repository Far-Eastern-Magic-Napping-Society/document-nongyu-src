import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '课表查询',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        简洁的课程表界面，支持旷课记录提醒。
        自动同步教务网数据，让您随时掌握课程安排。
      </>
    ),
  },
  {
    title: '校园论坛',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        食堂评分、课程讨论、生活分享。
        仅限川农学生使用，打造安全纯净的校园社区。
      </>
    ),
  },
  {
    title: '教务信息',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        成绩查询、学分统计、专业排名。
        一键查询教务信息，无需频繁登录教务网。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
