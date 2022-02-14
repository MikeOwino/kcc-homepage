import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const UnicornTitleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  font-weight: 800;
  font-size: 52px;
  line-height: 62px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  margin: 0 20px;
`

const UnicornIcon = styled.img`
  width: 50px;
  height: 46px;
`

const UnicornReverseIcon = styled.img`
  width: 50px;
  height: 46px;
  transform: rotateY(180deg);
`

const UnicornTitle: FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <UnicornTitleWrap>
      <UnicornReverseIcon src={require('../../../assets/images/unicorn/unicorn.png').default} />
      <Title>{title}</Title>
      <UnicornIcon src={require('../../../assets/images/unicorn/unicorn.png').default} />
    </UnicornTitleWrap>
  )
}

export default UnicornTitle
