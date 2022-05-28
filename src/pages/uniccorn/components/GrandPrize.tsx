import React from 'react'
import styled, { css } from 'styled-components'
import ThreeLine from './ThreeLine'
import { useResponsive } from '../../../utils/responsive'
import { FadeInUp } from '../../../utils/animation'
import UnicornTitle from './UnicornTitle'

const RankWrap = styled.div`
  width: 100%;
  padding-top: 100px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 0px;
  }
`

const RankContent = styled.div`
  width: 100%;
  margin: 0 auto;
  // background: rgba(49, 225, 185, 0.1);
  /* border: 14px solid transparent;
  border-image-slice: 27 fill;
  border-image-repeat: round; */

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  position: relative;
  margin-top: 50px;
  @media (max-width: 768px) {
    padding: 0px 10px;
    height: auto;
    margin-top: 20px;
  }
`

const AwardText = styled.div`
  width: 68px;
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  margin-right: 25px;
  /* identical to box height */
`
const AwardPrize = styled.div`
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  text-align: left;
  /* identical to box height */
`

const AwardLink = styled.a`
  text-decoration: none;
  margin-left: 270px;
`
const AwardAvatar = styled.img`
  width: 120px;
  height: 120px;
  margin-top: 10px;
  transition: all 0.3s ease-in-out;
`

const AwardBg = styled.div<{ bg: string; width: string }>`
  height: 100%;
  margin-left: 25px;
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  padding-left: 45px;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */
  /* text-align: center; */
  color: #ffffff;
  ${({ bg, width }) =>
    bg &&
    css`
      background: url(${bg}) top center no-repeat;
      background-size: cover;
      width: ${width};
    `};
`

const RankItem = styled.div`
  height: 130px;
  margin-bottom: 34px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  align-items: center;

  /* &:hover {
    ${AwardAvatar} {
      position: relative;
      transform: translateY(-20px);
    }
    ${AwardText} {
      transition: all 0.5s ease-in-out;
      position: relative;
      transform: rotateY(360deg);
    }
  } */
  @media (max-width: 768px) {
    width: 20%;
  }
`


const AwardWarp = styled.div`
  height: 130px;
  /* width: 680px; */
  margin-bottom: 34px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;


  @media (max-width: 768px) {
    width: 20%;
  }
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

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-top: 50px;
`

const Text = styled.div`
  width: 300px;
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;
  /* or 136% */
  text-align: left;
  color: #fff;
  margin-top: 10px;
`
const awardList = [
  {
    award: '$300,000',
    rank: '1st',
    icon: require('../../../assets/images/unicorn/gold.png').default,
    color: '#F18449',
    bg: require('../../../assets/images/unicorn/Rectangle1st.png').default,
    width: '902px',
    name: 'Legendary Unicorn',
    logo: require('../../../assets/images/unicorn/mojito.png').default,
    title: 'MojitoSwap',
    link: 'https://app.mojitoswap.finance/',
  },
  {
    award: '$200,000',
    rank: '2nd',
    icon: require('../../../assets/images/unicorn/purple.png').default,
    color: '#A853E4',
    bg: require('../../../assets/images/unicorn/Rectangle2st.png').default,
    width: '872px',
    name: 'Epic Unicorn',
    logo: require('../../../assets/images/unicorn/openLeverage.png').default,
    title: 'OpenLeverage',
    link: 'https://openleverage.finance/',
  },

  {
    award: '$100,000',
    rank: '3rd',
    icon: require('../../../assets/images/unicorn/blue.png').default,
    color: '#3FC1F1',
    bg: require('../../../assets/images/unicorn/Rectangle3st.png').default,
    width: '760px',
    name: 'Diamond Unicorn',
    logo: require('../../../assets/images/unicorn/kuSwap.png').default,
    title: 'KuSwap',
    link: 'https://kuswap.finance/#/swap',
  },
  {
    award: '$50,000',
    rank: '4th',
    icon: require('../../../assets/images/unicorn/gray-avatar.png').default,
    color: '#EBDAA9',
    bg: require('../../../assets/images/unicorn/Rectangle4st.png').default,
    width: '758px',
    name: 'Gold Unicorn',
    logo: require('../../../assets/images/unicorn/bitkeep.png').default,
    title: 'Bitkeep',
    link: 'https://bitkeep.com/',
  },

  {
    award: '$50,000',
    rank: '5th',
    icon: require('../../../assets/images/unicorn/gray-avatar.png').default,
    color: '#EBDAA9',
    bg: require('../../../assets/images/unicorn/Rectangle5st.png').default,
    width: '700px',
    name: 'Gold Unicorn',
    logo: require('../../../assets/images/unicorn/hashtag.png').default,
    title: 'XHashtag',
    link: 'https://www.xhashtag.io/',
  },
]

const GrandPrize = () => {
  const { isMobile } = useResponsive()

  return (
    <RankWrap>
      <FadeInUp>
        {/* <UnicornTitle color="#FFB547" title="Grand Prize Awards" /> */}
        {isMobile ? (
          <Image src={require('../../../assets/images/unicorn/m-ranking.png').default} />
        ) : (
          <RankContent>
            {awardList.map((award, index) => {
              return (
                <RankItem key={index}>
                  <AwardText style={{ color: award.color }}>{award.rank}</AwardText>
                  <AwardAvatar src={award.icon} />
                  <AwardBg width={award.width || '300px'} bg={award.bg}>
                    <AwardWarp>
                    <AwardPrize>
                      <Text style={{fontSize: '36px'}}> {award.award}</Text>
                      <Text style={{ color: '#ffffff' }}>{award.name}</Text>
                    </AwardPrize>
                    <AwardLink href={award.link} target="_blank">
                      <AwardLogo src={award.logo}></AwardLogo>
                    </AwardLink>
                    </AwardWarp>
                  
                  </AwardBg>
                </RankItem>
              )
            })}
          </RankContent>
        )}
      </FadeInUp>
    </RankWrap>
  )
}

export default GrandPrize
