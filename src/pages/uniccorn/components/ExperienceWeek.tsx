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
  &:hover{
    text-decoration:underline;
  }
  @media (max-width:768px){
     height:auto;
     padding:0 24px;
     font-size:20px;
  }
`

const ExperienceWeek = () => {
  return (
    <ActiveWrap>
      <Content>
        <UnicornTitle title="KCC Unicorn Carnival Week" />
        <Desc style={{ color: '#fff', textAlign: 'center' }}>
          KCC Unicorn Carnival Week will be officially launched at 10:00 (UTC) on May 6th, 2022. During the event, users
          have the <br />
          opportunity to share 5,000 KCS provided by KCC and the enormous rewards provided by the project party.
          <br />
        </Desc>
        <TipMsg href="https://kccofficial.medium.com/4ae521dc9ec" target="_blank">
          KCC Unicorn Carnival Week is Coming Soon!
        </TipMsg>
        <ParticipantPro />
      </Content>
    </ActiveWrap>
  )
}

export default ExperienceWeek
