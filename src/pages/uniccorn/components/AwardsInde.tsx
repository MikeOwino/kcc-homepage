import React from 'react'
import styled from 'styled-components'
import UnicornTitle from './UnicornTitle'
import { useResponsive } from '../../../utils/responsive'
import { FadeInUp } from '../../../utils/animation'

const AwardWrap = styled.div`
  padding-top: 210px;
  @media (max-width: 768px) {
    padding-top: 60px;
  }
`
const AwardImageWrap = styled.div`
  overflow: hidden;
  width: 240px;
  height: 248px;
  margin-right: 36px;
  cursor: pointer;
  transform-style: preserve-3d;
  perspective: 1000;
  background: rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 323px;
    height: 123px;
    & + & {
      margin-left: 0px;
      margin-top: 30px;
    }
  }
`

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`
const Desc = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  margin-top: 85px;
  max-width: 1100px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 32px;
    padding: 0 24px;
    margin-top: 32px;
    text-align: center;
    width: 90%;
  }
`
const CardList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 36px;

  @media (max-width: 768px) {
    margin-top: 48px;
    flex-flow: column nowrap;
    justify-content: center;
  }
`

const Link = styled.a`
  color: #00c77f;
`

const AwardLogo = styled.img`
  max-width: 180px;
  max-height: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  @media (max-width: 768px) {
    padding: 0 40px;
    font-size: 20px;
    line-height: 24px;
  }
`

const AwardImage = styled.img`
  width: 200px;
  height: 76px;
  margin: 3px 0 40px 0;
  cursor: pointer;
  /* transition: all 0.3s ease-in-out; */
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-width: 400px;
    & + & {
      margin-left: 0px;
      margin-top: 30px;
    }
  }
`

const AwardLink = styled.a`
  text-decoration: none;
`

const NumberText = styled.div`
  display: inline-block;
  margin: 0 13px;
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 32px;
  /* identical to box height, or 53% */
  text-align: center;
  color: #2fd7b5;
  @media (max-width: 768px) {
    margin: 16px 60px;
    font-size: 40px;
  }
`

const awardList1 = [
  {
    src: require('../../../assets/images/unicorn/award4.png').default,
    text: 'Most Promising Development Award',
    logo: require('../../../assets/images/unicorn/mojito.png').default,
    name: 'MojitoSwap',
    link: 'https://app.mojitoswap.finance/',
  },
  {
    src: require('../../../assets/images/unicorn/award1.png').default,
    text: 'Most Innovative Technology Award',
    logo: require('../../../assets/images/unicorn/saffron.png').default,
    name: 'saffron',
    link: 'https://kcc.saffron.finance/#home',
  },
  {
    src: require('../../../assets/images/unicorn/award2.png').default,
    text: 'Most Popular Community Award',
    logo: require('../../../assets/images/unicorn/kuSwap.png').default,
    name: 'KuSwap',
    link: 'https://kuswap.finance/#/swap',
  },


]

const awardList2 = [
    {
        src: require('../../../assets/images/unicorn/award5.png').default,
        text: 'Best Social Contribution Award',
        logo: require('../../../assets/images/unicorn/kupay.png').default,
        name: 'KuPay',
        link: 'https://kupay.finance/',
      },
      {
        src: require('../../../assets/images/unicorn/award3.png').default,
        text: 'Best Wallet Experience Award ',
        logo: require('../../../assets/images/unicorn/tokenPocket.png').default,
        name: 'Token Pocket',
        link: 'https://www.tokenpocket.pro/',
      },
]

const AwardsInde = () => {
  const { isMobile } = useResponsive()
  return (
    <AwardWrap>
      <FadeInUp delay={200}>
        <Content>
          <UnicornTitle title="Independent Awards" />
          <Desc>
            Individual prizes are <NumberText>$30,000</NumberText> respectively
          </Desc>
          <CardList>
            {awardList1.map((avatar, index) => {
              return (
                <AwardImageWrap key={index}>
                  <AwardImage src={avatar.src} key={index} />
                  <AwardLink>
                    <AwardLogo src={avatar.logo}></AwardLogo>
                  </AwardLink>
                </AwardImageWrap>
              )
            })}
              </CardList>
              <CardList>
            {awardList2.map((avatar, index) => {
              return (
                <AwardImageWrap key={index}>
                  <AwardImage src={avatar.src} key={index} />
                  <AwardLink href={avatar.link} target="_blank">
                    <AwardLogo src={avatar.logo}></AwardLogo>
                  </AwardLink>
                </AwardImageWrap>
              )
            })}
            </CardList>
        </Content>
      </FadeInUp>
    </AwardWrap>
  )
}

export default AwardsInde
