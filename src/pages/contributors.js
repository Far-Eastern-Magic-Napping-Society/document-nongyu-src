import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './contributors.module.css';

const contributors = [
  {
    id: 'nongyu-team',
    name: '农屿开发团队',
    title: '项目创始人 & 核心开发者',
    avatar: 'https://nongzhuan555.github.io/img/logo/logo.jpg',
    github: 'tkzzzzzz6',
    contributions: ['项目架构', '核心功能', '产品规划'],
    role: 'Core Team',
    bio: '农屿APP的创始团队，负责项目的整体架构设计和核心功能开发。'
  },
  {
    id: 'developer-zhang',
    name: '张同学',
    title: '前端开发工程师',
    avatar: 'https://github.com/zhang-dev.png',
    github: 'zhang-dev',
    contributions: ['React Native', 'UI组件', '用户交互'],
    role: 'Developer',
    bio: '专注于移动端前端开发，负责农屿APP的用户界面实现和交互体验优化。'
  },
  {
    id: 'developer-li',
    name: '李同学',
    title: '后端开发工程师',
    avatar: 'https://github.com/li-dev.png',
    github: 'li-dev',
    contributions: ['API开发', '数据库设计', '系统架构'],
    role: 'Developer',
    bio: '负责农屿APP的后端服务开发，包括数据同步、用户管理等核心功能。'
  },
  {
    id: 'designer-wang',
    name: '王同学',
    title: 'UI/UX设计师',
    avatar: 'https://github.com/wang-design.png',
    github: 'wang-design',
    contributions: ['界面设计', '用户体验', '视觉设计'],
    role: 'Designer',
    bio: '负责农屿APP的整体视觉设计和用户体验优化，确保界面简洁美观。'
  },
  {
    id: 'tester-chen',
    name: '陈同学',
    title: '测试工程师',
    avatar: 'https://github.com/chen-test.png',
    github: 'chen-test',
    contributions: ['功能测试', '性能测试', '质量保证'],
    role: 'Tester',
    bio: '确保农屿APP的质量和稳定性，负责功能测试和性能优化。'
  },
  {
    id: 'contributor-zhao',
    name: '赵同学',
    title: '社区贡献者',
    avatar: 'https://github.com/zhao-contrib.png',
    github: 'zhao-contrib',
    contributions: ['用户反馈', '功能建议', '社区建设'],
    role: 'Contributor',
    bio: '积极参与社区讨论，提供宝贵的用户反馈和建议，帮助改进产品。'
  }
];

function ContributorCard({ contributor }) {
  return (
    <div className={clsx('card', styles.contributorCard)}>
      <div className={styles.cardHeader}>
        <img
          src={contributor.avatar}
          alt={contributor.name}
          className={styles.avatar}
        />
        <div className={styles.contributorInfo}>
          <h3 className={styles.name}>{contributor.name}</h3>
          <p className={styles.title}>{contributor.title}</p>
          <span className={clsx(styles.role, styles[contributor.role.toLowerCase()])}>
            {contributor.role}
          </span>
        </div>
      </div>
      
      <div className={styles.cardBody}>
        <p className={styles.bio}>{contributor.bio}</p>
        
        <div className={styles.contributions}>
          <h4>主要贡献</h4>
          <div className={styles.contributionsList}>
            {contributor.contributions.map((contribution, index) => (
              <span key={index} className={styles.contributionTag}>
                {contribution}
              </span>
            ))}
          </div>
        </div>
        
        <div className={styles.links}>
          <Link
            href={`https://github.com/${contributor.github}`}
            className={styles.githubLink}
          >
            <svg className={styles.githubIcon} viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>{contributor.github}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ContributorsHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">贡献者</h1>
        <p className="hero__subtitle">
          感谢所有为农屿APP项目做出贡献的开发者们
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{contributors.length}</span>
            <span className={styles.statLabel}>贡献者</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>6</span>
            <span className={styles.statLabel}>角色类型</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>开源贡献</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Contributors() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title="贡献者"
      description="感谢所有为农屿APP项目做出贡献的开发者们"
    >
      <ContributorsHeader />
      <main>
        <section className={styles.contributorsSection}>
          <div className="container">
            <div className={styles.contributorsGrid}>
              {contributors.map((contributor) => (
                <ContributorCard
                  key={contributor.id}
                  contributor={contributor}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className={styles.contributeSection}>
          <div className="container">
            <div className="text--center">
              <h2>加入我们</h2>
              <p className={styles.contributeDescription}>
                我们欢迎各种形式的贡献，包括代码、文档、测试、设计等。
              </p>
              <div className={styles.contributeButtons}>
                <Link
                  className="button button--primary button--lg"
                  href="https://github.com/nongzhuan555/nongyu"
                >
                  查看项目
                </Link>
                <Link
                  className="button button--secondary button--lg"
                  href="/docs/intro"
                >
                  阅读文档
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
