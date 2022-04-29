import React from 'react'
import styled from 'styled-components'
import UnicornTitle from './UnicornTitle'
import ParticipantPro from './participantPro'

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
  margin-top: 42px;
  max-width: 1152px;
  text-align: center;
  /* or 178% */
  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 0 33px;
    font-size: 14px;
  }
`

const ExperienceWeek = () => {

  return (
    <ActiveWrap>
      <Content>
        <UnicornTitle title="Unicorn Exprerience Week" />
        <Desc style={{ color: "#fff", textAlign: "center" }}>
          KCC Unicorn Carnival Week is a great event held by KCC during the Unicorn Contest. During the <br />
          event, users have the opportunity to share 5,000 KCS provided by KCC and the enormous <br />
          rewards provided by the project party.
        </Desc>
        <ParticipantPro />
      </Content>
    </ActiveWrap>
  )
}

export default ExperienceWeek