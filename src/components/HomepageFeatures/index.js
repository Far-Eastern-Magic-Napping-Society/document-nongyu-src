import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '易于使用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus 从设计之初就考虑到易于安装和使用，
        让您的网站快速启动和运行。
      </>
    ),
  },
  {
    title: '专注于重要内容',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus 让您专注于文档内容，我们来处理琐碎的事情。
        只需将您的文档移入 <code>docs</code> 目录即可。
      </>
    ),
  },
  {
    title: '基于 React 构建',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        通过复用 React 来扩展或自定义您的网站布局。
        Docusaurus 可以在保持相同页眉和页脚的同时进行扩展。
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
