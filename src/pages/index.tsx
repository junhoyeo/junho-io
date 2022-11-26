import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import altiImage1 from '../assets/alti-1.png';
import altiImage2 from '../assets/alti-2.png';
import bentoImage1 from '../assets/bento-1.png';
import bentoImage2 from '../assets/bento-2.png';
import cybergalzImage1 from '../assets/cybergalz-1.png';
import cybergalzImage2 from '../assets/cybergalz-2.png';
import githubImage1 from '../assets/github-1.png';
import githubImage2 from '../assets/github-2.png';
import ibcxImage from '../assets/ibcx-1.jpeg';
import manythingsImage from '../assets/manythings.png';
import pocketlessonImage1 from '../assets/pocketlesson-1.png';
import pocketlessonImage2 from '../assets/pocketlesson-2.png';
import tossImage1 from '../assets/toss-1.png';
import tossImage2 from '../assets/toss-2.png';
import tossImage3 from '../assets/toss-3.png';
import tossImage4 from '../assets/toss-4.png';
import zepStudioImage from '../assets/zep-studio.png';
import Button, { SecondaryButton } from '../components/Button';
import Layout from '../components/Layout';
import MetaHead from '../components/MetaHead';
import { shadow } from '../components/Phone/Device';
import { TrackedSection } from '../components/TrackedSection';
import { Analytics } from '../utils/analytics';

const IndexPage = () => {
  useEffect(() => {
    Analytics.logEvent('view_landing', undefined);
  }, []);

  return (
    <Layout
      title={
        <>
          Hello!
          <br />
          I'm Junho Yeo.
        </>
      }
      description={
        <>
          Welcome to my site. I'm a 19-yo developer in Seoul, shaping the
          2nd/3rd web. Sometimes a designer and dreamer, I just like to build
          things. Now I'm preparing the infrastructure—insight, followers, and
          capital—for a bigger dream.
        </>
      }
    >
      <MetaHead />
      <Tip style={{ color: '#d1e9ff' }}>
        🔻
        <br />
        <br />
        Follow Me to
        <br />
        Invest in My Future
      </Tip>
      <div style={{ gap: 8, display: 'flex' }}>
        <a
          href="https://github.com/junhoyeo"
          target="_blank"
          onClick={() =>
            Analytics.logEvent('click_social_link', { name: 'GitHub' })
          }
        >
          <Button>GitHub</Button>
        </a>
        <a
          href="https://twitter.com/_junhoyeo"
          target="_blank"
          onClick={() =>
            Analytics.logEvent('click_social_link', { name: 'Twitter' })
          }
        >
          <SecondaryButton>Twitter</SecondaryButton>
        </a>
      </div>
      <div style={{ height: 100 }} />
      <Section id="ibcx">
        <SectionTitle>IBCX</SectionTitle>
        <p>
          <strong>PM/FE 2022.10 ~</strong>
        </p>
        <p>
          Product Manager and Frontend Engineer of $IBCX, the first index token
          in the Cosmos Ecosystem.
        </p>
        <ImageList>
          <Image alt="" src={ibcxImage} placeholder="blur" />
        </ImageList>
      </Section>
      <Section id="bento">
        <SectionTitle>Bento</SectionTitle>
        <p>
          <strong>Founder ~</strong>
        </p>
        <ImageList>
          <Image alt="" src={bentoImage1} placeholder="blur" />
          <Image alt="" src={bentoImage2} placeholder="blur" />
        </ImageList>
        <p>
          I made various dashboard apps for some protocols/wallets part-time and
          was soon disappointed that they were moving cringely outside their
          ecosystem.
        </p>
        <p>
          It turns out that services are primarily associated with specific
          Layer-1 chains built by the same team or shared VCs. Users need
          multi-chain and scalability, but products were just too busy looking
          at other business things. The others are closed-source software, so
          development is centralized to the team. If you want your protocol
          listed, you have to depend on the team to add support.
        </p>
        <p>
          That made me decide to build an open-source dashboard of my own. And
          after that, I began building, made the team, and named the app
          "Bento." You can check the page here:{' '}
          <a
            href="https://bento.finance"
            target="_blank"
            style={{ color: '#ff474c', textDecoration: 'underline' }}
            onClick={() =>
              Analytics.logEvent('click_inline_link', {
                title: 'bento.finance',
              })
            }
          >
            https://bento.finance
          </a>
        </p>
        <p style={{ opacity: 0.66 }}>
          🏆 Klaymakers22/ The Fi+ Track 2nd Place
          <br />
          🏆 Klaymakers22/ The Ground X Challenge Winner
        </p>
      </Section>
      <Section id="zep-studio">
        <SectionTitle>ZEP Studio</SectionTitle>
        <ImageList>
          <Image alt="" src={zepStudioImage} placeholder="blur" />
        </ImageList>

        <p>A Block Coding Editor for ZEP Script-based Apps</p>

        <p style={{ opacity: 0.66 }}>🏆 JUNCTION ASIA/ ZEP Track 2nd Place</p>
      </Section>
      <Section id="alphaworks">
        <SectionTitle>Alphaworks</SectionTitle>
        <p>
          <strong>Developer in Residence 2021.10 ~</strong>
        </p>
        <p>
          Worked on various NFT projects and frontends. Developed crafting
          solution to function customizable NFTs on Immutable X.
        </p>
        <ImageList>
          <Image alt="" src={manythingsImage} placeholder="blur" />
          <Image alt="" src={altiImage1} placeholder="blur" />
          <Image alt="" src={altiImage2} placeholder="blur" />
          <Image alt="" src={cybergalzImage1} placeholder="blur" />
          <Image alt="" src={cybergalzImage2} placeholder="blur" />
        </ImageList>
        <Section id="keplr">
          <h3>Keplr</h3>
          <p>
            Contributed to Keplr Wallet and the early version of the web
            dashboard.
          </p>
          <ul>
            <li>
              <a
                href="https://github.com/chainapsis/keplr-wallet/pull/369"
                target="_blank"
                style={{ color: '#8962FF', textDecoration: 'underline' }}
                onClick={() =>
                  Analytics.logEvent('click_inline_link', {
                    title: 'keplr#369',
                  })
                }
              >
                Normalize font-family of mnemonic input placeholder #369
              </a>
            </li>
            <li>
              <a
                href="https://github.com/chainapsis/keplr-wallet/pull/388"
                target="_blank"
                style={{ color: '#8962FF', textDecoration: 'underline' }}
                onClick={() =>
                  Analytics.logEvent('click_inline_link', {
                    title: 'keplr#388',
                  })
                }
              >
                Implement KeplrError and replace error instances in
                @keplr-wallet/background #388
              </a>
            </li>
          </ul>
        </Section>
      </Section>
      <Section id="defi">
        <SectionTitle>DeFi</SectionTitle>
        <p>
          Mainly contributing to the product side, I worked part-time on some
          protocols powering DeFi. One had an average TVL of $330M, and the
          other with a total trading volume of {`>`} $1.65B.
        </p>
      </Section>
      <Section id="toss">
        <SectionTitle>Toss</SectionTitle>
        <p>
          <strong>Frontend Chapter Support 2021.07 ~ 2021.09</strong>
        </p>
        <p>
          Toss, the fintech super app unicorn currently valued at more than
          $7.4B and also the largest unicorn startup in South Korea.
        </p>
        <p>
          Here I built the landing page of NEXT 2021(a large-scale recruitment
          event with an achievement system) and contributed to the frontend of
          Simplicity 21(an internal design conference). Also maintained web
          products such as Toss Feed 3.0, Home, and Notice.
        </p>
        <ImageList>
          <Image alt="" src={tossImage1} placeholder="blur" />
          <Image alt="" src={tossImage2} placeholder="blur" />
          <Image alt="" src={tossImage3} placeholder="blur" />
          <Image alt="" src={tossImage4} placeholder="blur" />
        </ImageList>
      </Section>
      <Section id="pocketlesson">
        <SectionTitle>PocketLesson</SectionTitle>
        <p>
          <strong>Software Engineer 2021.02 ~ 2021.12</strong>
        </p>
        <p>
          PocketLesson provides contactless golf instructions in-app. I
          proceeded with application/web development through React and React
          Native. Our team made cool things as open-source too, such as{' '}
          <a
            href="https://github.com/devxoul/daumpostcode"
            target="_blank"
            style={{ color: '#476fff', textDecoration: 'underline' }}
            onClick={() =>
              Analytics.logEvent('click_inline_link', {
                title: 'devxoul/daumpostcode',
              })
            }
          >
            devxoul/daumpostcode
          </a>{' '}
          and{' '}
          <a
            href="https://github.com/check-mergeable/check-mergeable"
            target="_blank"
            style={{ color: '#476fff', textDecoration: 'underline' }}
            onClick={() =>
              Analytics.logEvent('click_inline_link', {
                title: 'check-mergeable',
              })
            }
          >
            check-mergeable
          </a>
        </p>
        <ImageList>
          <Image alt="" src={pocketlessonImage1} placeholder="blur" />
          <Image alt="" src={pocketlessonImage2} placeholder="blur" />
        </ImageList>
      </Section>
      <Section id="github">
        <SectionTitle>GitHub</SectionTitle>
        <p>
          When I have an idea, I like to start something right away. I start
          writing code. Almost all of my works are on GitHub, and it got me
          1.3k+ stars and some grateful followers. Please check my{' '}
          <a
            href="https://github.com/junhoyeo?tab=repositories"
            target="_blank"
            style={{ color: '#47d1ff', textDecoration: 'underline' }}
            onClick={() =>
              Analytics.logEvent('click_inline_link', {
                title: 'GitHub profile',
              })
            }
          >
            GitHub profile
          </a>{' '}
          and{' '}
          <a
            href="https://trendy-resume.vercel.app"
            target="_blank"
            style={{ color: '#47d1ff', textDecoration: 'underline' }}
            onClick={() =>
              Analytics.logEvent('click_inline_link', {
                title: 'trendy-resume.vercel.app(Outdated)',
              })
            }
          >
            trendy-resume.vercel.app(Outdated)
          </a>{' '}
          for a complete list of my projects.
        </p>

        <div style={{ marginBottom: 32 }}>
          <Link href="/oss">
            <Button>OSS</Button>
          </Link>
        </div>

        <ImageList>
          <Image alt="" src={githubImage2} placeholder="blur" />
          <Image alt="" src={githubImage1} placeholder="blur" />
        </ImageList>
      </Section>
    </Layout>
  );
};

export default IndexPage;

const Tip = styled.h3`
  color: #d1e9ff;
  background-color: #d1e9ff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 28px;
`;

const Section = styled(TrackedSection)`
  padding-top: 16px;
`;
const SectionTitle = styled.h2`
  padding-top: 8px;
  margin: 0;
  margin-bottom: 16px;
  font-weight: 900;
`;

const ImageList = styled.div`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    ${shadow('to-bottom')}
  }
`;
