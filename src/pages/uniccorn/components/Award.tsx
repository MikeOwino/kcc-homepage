import React from 'react'
import styled from 'styled-components'
import UnicornTitle from './UnicornTitle'

const AwardWrap = styled.div`
  padding-top: 210px;
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
  max-width: 900px;
`
const CardList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`

const Link = styled.a`
  color: #00c77f;
`

const AwardImage = styled.img`
  width: 372px;
  height: 142px;
  & + & {
    margin-left: 40px;
  }
`

const awardList1 = [
  require('../../../assets/images/unicorn/award1.png').default,
  require('../../../assets/images/unicorn/award2.png').default,
  require('../../../assets/images/unicorn/award3.png').default,
]

const awardList2 = [
  require('../../../assets/images/unicorn/award4.png').default,
  require('../../../assets/images/unicorn/award5.png').default,
]

const Award = () => {
  return (
    <AwardWrap>
      <Content>
        <UnicornTitle title="Independent Awards" />
        <Desc>
          To promote transparency and procedural fairness for the contest, all judges for the contest will participate
          in evaluating all the projects. The applicant projects will have the opportunity to win independent awards and
          receive support from the KCC GoDAO and respecitve award sponsors.
        </Desc>
        <Desc style={{ marginTop: '42px' }}>
          KCC community will have voting power on ranking Top 5 projects for the Unicorn Grand Prize. This will take
          place at <Link href="https://snapshot.org/#/kcc.eth">https://snapshot.org/#/kcc.eth</Link>.
        </Desc>

        <CardList>
          {awardList1.map((avatar, index) => {
            return <AwardImage src={avatar} key={index} />
          })}
        </CardList>
        <CardList style={{ marginTop: '70px' }}>
          {awardList2.map((avatar, index) => {
            return <AwardImage src={avatar} key={index} />
          })}
        </CardList>
        <Desc style={{ maxWidth: '100%' }}>
          *All independent awards and prizes are subject to change based on collaborations with partners and sponsors
        </Desc>
      </Content>
    </AwardWrap>
  )
}

export default Award
