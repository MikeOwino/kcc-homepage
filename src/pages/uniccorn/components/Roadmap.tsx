import React from 'react'
import styled from 'styled-components'
import UnicornTitle from './UnicornTitle'
import { useResponsive } from '../../../utils/responsive'

const RoadmapWrap = styled.div`
  padding-top: 260px;
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
  /* or 160% */
  text-align: center;
  color: #ffffff;
  margin-top: 78px;
  margin-bottom: 124px;
  
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

const bg = require('../../../assets/images/unicorn/roadmap-bg.png').default

const ListWrap = styled.div`
  width: 775px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background: url(${bg}) center 50px no-repeat;
`

const ListItem = styled.div<{ index: number }>`
  align-self: ${({ index }) => {
    if (index % 2 === 0) {
      return 'flex-start'
    }
    return 'flex-end'
  }};
  border: ${({ index }) => {
    if (index % 2 === 0) {
      return '2px solid #31E1B9'
    }
    return '2px solid #FFB547'
  }};
  border-radius: 8px;
  background: #0b1013;
  width: 320px;
  height: 120px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  padding-left:24px;
  &+&{
    margin-top:28px;
  }
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
  }
`
const DateText = styled.div<{index:number}>`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  /* identical to box height, or 160% */
  color: ${({ index }) => {
  if (index % 2 === 0) {
      return '#31e1b9'
  }
  return '#FFB547'
  }};
`

const DateSubText = styled.div < { index: number }>`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 200% */
  color: ${({ index }) => {
    if (index % 2 === 0) {
      return '#31e1b9'
    }
    return '#FFB547'
  }};
  max-width: 265px;
`
const roadmapList = [
  {
    date: '2022-02-28',
    text: 'Application Stage',
  },
  {
    date: '2022-03-20',
    text: 'Technology access&deployment',
  },
  {
    date: '2022-04-01',
    text: 'Data Competition',
  },
  {
    date: '2022-04-20',
    text: 'Selection by the competition jury(Deciding on the top ten projects)',
  },
  {
    date: '2022-04-23',
    text: 'Community voting (Determine specific rankings)',
  },
  {
    date: '2022-04-26',
    text: 'Award announcement',
  },
]

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
          // <RoadmapImage src={require('../../../assets/images/unicorn/roadmap.png').default} />
          <ListWrap>
            {roadmapList.map((road, index) => {
              return (
                <ListItem key={index} index={index}>
                  <DateText index={index}>{road.date}</DateText>
                  <DateSubText index={index}>{road.text}</DateSubText>
                </ListItem>
              )
            })}
          </ListWrap>
        )}
      </Content>
    </RoadmapWrap>
  )
}

export default Roadmap
