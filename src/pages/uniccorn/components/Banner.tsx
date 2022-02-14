import React from 'react'
import styled from 'styled-components'

const BannerBg = require('../../../assets/images/unicorn/banner.png').default
const BannerCircle = require('../../../assets/images/unicorn/dot-circle.png').default

const BannerWrap = styled.div`
  width: 100%;
  height: 863px;
  background: url(${BannerBg}) 540px top no-repeat;
`

const TopPic = styled.img`
  width: 380px;
  height: 162px;
`

const BannerTitle = styled.div`
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 95px;
  color: #ffffff;
  margin-top: 20px;
`

const BannerContent = styled.div`
  height: 100%;
  padding-left: 120px;
`

const BannerDesc = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */
  color: #ffffff;
  margin-top: 44px;
  max-width: 580px;
`

const Banner = () => {
  return (
    <BannerWrap>
      <BannerContent>
        <TopPic src={BannerCircle} />
        <BannerTitle>
          KuCoin <br /> Community <br /> Chain(KCC) <br /> Unicorn Contest
        </BannerTitle>
        <BannerDesc>
          DeFi, NFT, GameFi, SocailFi, Metaverse, Web3 - Building a thriving and vibrant KCC ecosystem{' '}
        </BannerDesc>
      </BannerContent>
    </BannerWrap>
  )
}

export default Banner
