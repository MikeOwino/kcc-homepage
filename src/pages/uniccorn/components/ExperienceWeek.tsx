import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import UnicornTitle from './UnicornTitle'
import ParticipantPro from './Participant'

const ActiveWrap = styled.div`
  padding-top: 168px;
  @media (max-width: 768px) {
    padding-top: 60px;
  }
`

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`
const Desc = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  margin-top: 59px;
  max-width: 1152px;
  text-align: center;
  /* or 178% */
  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 0 33px;
    font-size: 14px;
  }
`

const TipMsg = styled.a`
  font-family: 'SF Pro Display Bold';
  font-style: bold;
  font-size: 28px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  margin: 48px 0 39px 0;
  background: linear-gradient(to right, #39d7e1, #38eabc);
  -webkit-background-clip: text;
  color: transparent;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    height: auto;
    padding: 0 24px;
    font-size: 20px;
  }
`

const ExperienceWeek = () => {
  return (
    <ActiveWrap>
      <Content>
        <UnicornTitle title="KCC Unicorn Carnival Week" />
        <Desc style={{ color: '#fff', textAlign: 'center' }}>
          KCC Unicorn Carnival Week is an on-chain-projects-joint-event hosted by KCC. During this Carnival, users only
          need to complete specific tasks on KCC to get the opportunity to share a total of 5,000 KCS rewards, which are
          provided by KCC and even additional rewards provided by projects.
        </Desc>
        <TipMsg href="https://kccofficial.medium.com/16c5ef54bf67" target="_blank">
         Join KCC Top Unicorns Week and Win Limited NFT Airdrop
        </TipMsg>
        <ParticipantPro title="Top 10 Projects" name="topTen"/>
        <ParticipantPro />
      </Content>
    </ActiveWrap>
  )
}

export default ExperienceWeek
