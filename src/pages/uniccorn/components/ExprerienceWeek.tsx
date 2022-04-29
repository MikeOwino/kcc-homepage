import React from 'react'
import styled from 'styled-components'
import { FadeInUp } from '../../../utils/animation'
import UnicornTitle from './UnicornTitle'
import { useResponsive } from '../../../utils/responsive'
import  ParticipantPro from './participantPro'

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
  textAlign: 'center';
  align-items: center;
`
const Desc = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  margin-top: 42px;
  maxWidth: '1152px';
  textAlign: 'center';
  /* or 178% */
  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 0 33px;
    font-size: 14px;
  }
`


const partnerList1 = [
    {
      logo: require('../../../assets/images/unicorn/saffron.png').default,
      name: 'saffron',
      link: 'https://kcc.saffron.finance/#home',
    }
  ]
  

const ExperienceWeek = () => {
    const { isMobile } = useResponsive();
    return (
        <ActiveWrap>
            <Content>
            <UnicornTitle title="Unicorn Exprerience Week" />
            <Desc style={{color:"#fff", textAlign:"center"}}>
            KCC Unicorn Carnival Week is a great event held by KCC during the Unicorn Contest. During the <br/>
            event, users have the opportunity to share 5,000 KCS provided by KCC and the enormous <br/>
            rewards provided by the project party.
          </Desc>
          <ParticipantPro />
        </Content>
        </ActiveWrap>
    )
}

export default ExperienceWeek