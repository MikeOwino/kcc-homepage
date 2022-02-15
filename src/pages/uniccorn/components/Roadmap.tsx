import React from 'react'
import styled from 'styled-components'
import UnicornTitle from './UnicornTitle'
import { useResponsive } from '../../../utils/responsive'

const RoadmapWrap = styled.div``

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
  /* or 160% */
  text-align: center;
  color: #ffffff;
  margin-top: 78px;
  @media (max-width: 768px) {
    margin-top: 32px;
    padding: 0 24px;
    font-size: 14px;
    line-height: 28px;
  }
`
const RoadmapImage = styled.img`
  margin-top: 100px;
  width: 774px;
  height: auto;
  @media (max-width: 768px) {
    width: 86%;
    margin-top: 50px;
    max-width: 400px;
  }
`

const Roadmap = () => {
  const { isMobile } = useResponsive()
  return (
    <RoadmapWrap>
      <Content>
        <UnicornTitle title="Roadmap" />
        <Desc>
          Unicorn contest will start on February 2022 and end in April 2022. During this competition, we will select the
          most-outstanding projects at the end of the contest. Winners will get awarded and rewarded by KCC along with
          other sponsors of the event. To be more specific, please follow the roadmap as a reference:
        </Desc>
        {isMobile ? (
          <RoadmapImage src={require('../../../assets/images/unicorn/m-roadmap.png').default} />
        ) : (
          <RoadmapImage src={require('../../../assets/images/unicorn/roadmap.png').default} />
        )}
      </Content>
    </RoadmapWrap>
  )
}

export default Roadmap
