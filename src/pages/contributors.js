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
    contributions: 156,
    role: 'Core',
    bio: '农屿APP的创始团队，负责项目的整体架构设计和核心功能开发。',
    skills: ['全栈开发', '产品设计', '项目管理']
  },
  {
    id: 'developer-zhang',
    name: '张同学',
    title: '前端开发工程师',
    avatar: 'https://ui-avatars.com/api/?name=Zhang&background=0D8ABC&color=fff&size=200&bold=true',
    github: 'zhang-dev',
    contributions: 89,
    role: 'Developer',
    bio: '专注于移动端前端开发，负责农屿APP的用户界面实现和交互体验优化。',
    skills: ['React Native', 'TypeScript', 'UI/UX']
  },
  {
    id: 'developer-li',
    name: '李同学',
    title: '后端开发工程师',
    avatar: 'https://ui-avatars.com/api/?name=Li&background=7F00FF&color=fff&size=200&bold=true',
    github: 'li-dev',
    contributions: 76,
    role: 'Developer',
    bio: '负责农屿APP的后端服务开发，包括数据同步、用户管理等核心功能。',
    skills: ['Node.js', 'MongoDB', 'API设计']
  },
  {
    id: 'designer-wang',
    name: '王同学',
    title: 'UI/UX设计师',
    avatar: 'https://ui-avatars.com/api/?name=Wang&background=FF6B6B&color=fff&size=200&bold=true',
    github: 'wang-design',
    contributions: 42,
    role: 'Designer',
    bio: '负责农屿APP的整体视觉设计和用户体验优化，确保界面简洁美观。',
    skills: ['Figma', '用户体验', '视觉设计']
  },
  {
    id: 'tester-chen',
    name: '陈同学',
    title: '测试工程师',
    avatar: 'https://ui-avatars.com/api/?name=Chen&background=4ECDC4&color=fff&size=200&bold=true',
    github: 'chen-test',
    contributions: 31,
    role: 'Tester',
    bio: '确保农屿APP的质量和稳定性，负责功能测试和性能优化。',
    skills: ['自动化测试', '性能测试', '质量保证']
  },
  {
    id: 'contributor-zhao',
    name: '赵同学',
    title: '社区贡献者',
    avatar: 'https://ui-avatars.com/api/?name=Zhao&background=FFD93D&color=333&size=200&bold=true',
    github: 'zhao-contrib',
    contributions: 18,
    role: 'Contributor',
    bio: '积极参与社区讨论，提供宝贵的用户反馈和建议，帮助改进产品。',
    skills: ['用户反馈', '社区运营', '产品建议']
  }
];

function ContributorCard({ contributor, rank }) {
  const isCore = contributor.role === 'Core';
  
  return (
    <div className={clsx(styles.contributorCard, isCore && styles.coreCard)}>
      {isCore && (
        <div className={styles.coreBadge}>
          <svg className={styles.starIcon} viewBox="0 0 16 16">
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/>
          </svg>
          Core Team
        </div>
      )}
      
      <div className={styles.cardContent}>
        <div className={styles.avatarWrapper}>
          <img
            src={contributor.avatar}
            alt={contributor.name}
            className={styles.avatar}
          />
          {rank && rank <= 3 && (
            <div className={clsx(styles.rankBadge, styles[`rank${rank}`])}>
              #{rank}
            </div>
          )}
        </div>
        
        <div className={styles.contributorInfo}>
          <h3 className={styles.name}>{contributor.name}</h3>
          <p className={styles.title}>{contributor.title}</p>
        </div>
        
        <div className={styles.contributionStats}>
          <div className={styles.statItem}>
            <svg className={styles.statIcon} viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5V6h1.5a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"/>
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
            </svg>
            <span className={styles.statValue}>{contributor.contributions}</span>
            <span className={styles.statLabel}>contributions</span>
          </div>
        </div>
        
        <p className={styles.bio}>{contributor.bio}</p>
        
        <div className={styles.skills}>
          {contributor.skills.map((skill, index) => (
            <span key={index} className={styles.skillTag}>
              {skill}
            </span>
          ))}
        </div>
        
        <div className={styles.cardFooter}>
          <Link
            href={`https://github.com/${contributor.github}`}
            className={styles.githubLink}
          >
            <svg className={styles.githubIcon} viewBox="0 0 16 16">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/>
            </svg>
            @{contributor.github}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ContributorsHeader() {
  const totalContributions = contributors.reduce((sum, c) => sum + c.contributions, 0);
  
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <svg className={styles.heroIcon} viewBox="0 0 16 16">
              <path d="M5.5 3.5A2.5 2.5 0 0 1 8 1a2.5 2.5 0 0 1 2.5 2.5v.26A2.5 2.5 0 0 1 10.5 5a2.5 2.5 0 0 1 .26 5h-5A2.5 2.5 0 0 1 3 7.5 2.5 2.5 0 0 1 5.5 5.76V3.5ZM3 13.5A2.5 2.5 0 0 0 5.5 11h5A2.5 2.5 0 0 0 13 8.5v-1.26A2.5 2.5 0 0 0 10.5 6a2.5 2.5 0 0 0-2.5 2.5v.26A2.5 2.5 0 0 0 8 10a2.5 2.5 0 0 0-2.5-2.5v-1A2.5 2.5 0 0 0 3 8.5v5Z"/>
            </svg>
            贡献者
          </h1>
          <p className={styles.heroSubtitle}>
            感谢所有为农屿APP项目做出贡献的开发者们 🎉
          </p>
          
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNumber}>{contributors.length}</div>
              <div className={styles.heroStatLabel}>贡献者</div>
            </div>
            <div className={styles.heroStatDivider}></div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNumber}>{totalContributions}</div>
              <div className={styles.heroStatLabel}>总贡献</div>
            </div>
            <div className={styles.heroStatDivider}></div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNumber}>100%</div>
              <div className={styles.heroStatLabel}>开源精神</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Contributors() {
  const {siteConfig} = useDocusaurusContext();
  const sortedContributors = [...contributors].sort((a, b) => b.contributions - a.contributions);
  
  return (
    <Layout
      title="贡献者"
      description="感谢所有为农屿APP项目做出贡献的开发者们"
    >
      <ContributorsHeader />
      <main className={styles.mainContent}>
        <div className="container">
          <section className={styles.contributorsSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                <svg className={styles.sectionIcon} viewBox="0 0 16 16">
                  <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/>
                </svg>
                核心团队
              </h2>
              <p className={styles.sectionDescription}>
                项目的核心开发者，负责架构设计和核心功能实现
              </p>
            </div>
            
            <div className={styles.contributorsGrid}>
              {sortedContributors
                .filter(c => c.role === 'Core')
                .map((contributor, index) => (
                  <ContributorCard
                    key={contributor.id}
                    contributor={contributor}
                    rank={index + 1}
                  />
                ))}
            </div>
          </section>
          
          <section className={styles.contributorsSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                <svg className={styles.sectionIcon} viewBox="0 0 16 16">
                  <path d="M5.5 3.5A2.5 2.5 0 0 1 8 1a2.5 2.5 0 0 1 2.5 2.5v.26A2.5 2.5 0 0 1 10.5 5a2.5 2.5 0 0 1 .26 5h-5A2.5 2.5 0 0 1 3 7.5 2.5 2.5 0 0 1 5.5 5.76V3.5ZM3 13.5A2.5 2.5 0 0 0 5.5 11h5A2.5 2.5 0 0 0 13 8.5v-1.26A2.5 2.5 0 0 0 10.5 6a2.5 2.5 0 0 0-2.5 2.5v.26A2.5 2.5 0 0 0 8 10a2.5 2.5 0 0 0-2.5-2.5v-1A2.5 2.5 0 0 0 3 8.5v5Z"/>
                </svg>
                社区贡献者
              </h2>
              <p className={styles.sectionDescription}>
                积极参与项目开发和社区建设的贡献者
              </p>
            </div>
            
            <div className={styles.contributorsGrid}>
              {sortedContributors
                .filter(c => c.role !== 'Core')
                .map((contributor, index) => (
                  <ContributorCard
                    key={contributor.id}
                    contributor={contributor}
                    rank={index + 1}
                  />
                ))}
            </div>
          </section>
        </div>
        
        <section className={styles.joinSection}>
          <div className="container">
            <div className={styles.joinContent}>
              <div className={styles.joinIcon}>
                <svg viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5V6h1.5a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"/>
                </svg>
              </div>
              <h2 className={styles.joinTitle}>成为贡献者</h2>
              <p className={styles.joinDescription}>
                我们欢迎各种形式的贡献！无论是代码、文档、设计还是测试，<br/>
                每一份贡献都会让农屿APP变得更好。
              </p>
              <div className={styles.joinButtons}>
                <Link
                  className="button button--primary button--lg"
                  href="https://github.com/nongzhuan555/nongyu"
                >
                  <svg className={styles.buttonIcon} viewBox="0 0 16 16">
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/>
                  </svg>
                  查看 GitHub 项目
                </Link>
                <Link
                  className="button button--secondary button--lg"
                  href="/docs/intro"
                >
                  📖 阅读贡献指南
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
