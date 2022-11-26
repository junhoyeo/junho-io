import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import Phone from '../components/Phone';
import { rhythm } from '../utils/typography';
import useWindowSize from '../utils/useWindowSize';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './Phone/constants';

type LayoutProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  const { screenWidth = 1980 } = useWindowSize();
  const [transformScale, setTransformScale] = useState<number>(1);

  useEffect(() => {
    if (screenWidth > 500) {
      setTransformScale(1);
      return;
    }
    const containerWidth = screenWidth * 0.9;
    setTransformScale(containerWidth / DEVICE_WIDTH);
  }, [screenWidth]);

  const phoneContainerProps = useMemo(() => {
    const deviceHeight = transformScale * DEVICE_HEIGHT;
    return { deviceHeight, bottom: deviceHeight * -0.55 };
  }, [transformScale]);

  return (
    <>
      <Wrapper>
        <Container>
          <BrandWrapper>
            <Link href="/">
              <Brand>junho.io</Brand>
            </Link>
          </BrandWrapper>
          {title && <Title>{title}</Title>}
          {description && <Description>{description}</Description>}
          <main>{children}</main>
        </Container>
        <PhoneContainer {...phoneContainerProps}>
          <Phone transformScale={transformScale} />
        </PhoneContainer>
      </Wrapper>
    </>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1080px;
  position: relative;

  @media screen and (max-width: 1200px) {
    max-width: 900px;
  }

  @media screen and (max-width: 1100px) {
    max-width: 850px;
  }

  @media screen and (max-width: 1000px) {
    max-width: 75%;
    flex-direction: column;

    margin-bottom: 300px;
  }

  @media screen and (max-width: 500px) {
    max-width: 90%;
  }
`;

const Container = styled.div`
  margin-right: 32px;
  width: 55%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    margin-right: 0;
    width: 100%;
  }
`;

const BrandWrapper = styled.div`
  margin-top: ${rhythm(1.8)};
  margin-bottom: ${rhythm(1)};
`;

const Brand = styled.span`
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  color: #707176;
  cursor: pointer;
  width: fit-content;
  user-select: none;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.25;

  @media screen and (max-width: 330px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 1.25rem;
  color: #707176;
  padding-bottom: ${rhythm(0.5)};
  line-height: 1.45;
`;

type PhoneContainerProps = {
  deviceHeight: number;
  bottom: number;
};
const PhoneContainer = styled.div<PhoneContainerProps>`
  position: sticky;
  top: 0;
  right: 0;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-height: 900px) {
    padding-top: 24px;
    align-items: flex-start;
  }

  @media screen and (max-width: 1000px) {
    padding-top: unset;

    position: fixed;
    top: unset;
    left: 0;
    right: 0;
    bottom: -500px;
    pointer-events: none;

    & > * {
      pointer-events: auto;
    }
  }

  @media screen and (max-width: 600px) {
    &,
    & > div {
      height: ${({ deviceHeight }) => deviceHeight}px;
    }
    bottom: ${({ bottom }) => bottom}px;
  }
`;
