import React from 'react'
import styled from 'styled-components'
import { FadeInUp } from '../../../utils/animation'
import UnicornTitle from './UnicornTitle'

const JuryWrap = styled.div`
  padding-top: 230px;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding-top: 110px;
    padding-bottom: 40px;
  }
`

const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`
const JuryListWrap = styled.div`
  margin-top: 75px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 60px;
    flex-flow: column nowrap;
    justify-content: center;
  }
`

const JuryItem = styled.div`
  position: relative;
  width: 240px;
  border-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    & + & {
      margin-top: 30px;
    }
  }
`

const Image = styled.img`
  width: 240px;
  height: 180px;
`
const JuryName = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */
  color: #ffffff;
  margin-top: 20px;
  height: 40px;
`

const Desc = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  margin-top: 42px;
  /* or 178% */
  color: #0b1013;
  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 0 33px;
    font-size: 14px;
  }
`

const juryList1 = [
  { logo: require('../../../assets/images/unicorn/godao.png').default, name: 'KCC DAO' },
  { logo: require('../../../assets/images/unicorn/no-jury.png').default, name: '' },
  { logo: require('../../../assets/images/unicorn/no-jury.png').default, name: '' },
  { logo: require('../../../assets/images/unicorn/no-jury.png').default, name: '' },
]

const juryList2 = [
  { logo: require('../../../assets/images/unicorn/no-jury.png').default, name: '' },
  { logo: require('../../../assets/images/unicorn/no-jury.png').default, name: '' },
  { logo: require('../../../assets/images/unicorn/no-jury.png').default, name: '' },
  { logo: require('../../../assets/images/unicorn/no-jury.png').default, name: '' },
]

const Jury = () => {
  return (
    <JuryWrap>
      <FadeInUp delay={200}>
        <Content>
          <UnicornTitle title="KCC Unicorn Contest Jury" />
          <Desc style={{ color: '#fff', marginTop: '60px', maxWidth: '960px', textAlign: 'center' }}>
            KCC GODAO has invited top industry players to form the Unicorn Contest jury to enable a more comprehensive
            and objective evaluation of all entries
          </Desc>
          <JuryListWrap>
            {juryList1.map((jury, index) => {
              return (
                <JuryItem key={index}>
                  <Image src={jury.logo} />
                  <JuryName>{jury.name}</JuryName>
                </JuryItem>
              )
            })}
          </JuryListWrap>
          <JuryListWrap style={{ marginTop: '40px' }}>
            {juryList2.map((jury, index) => {
              return (
                <JuryItem key={index}>
                  <Image src={jury.logo} />
                  <JuryName>{jury.name}</JuryName>
                </JuryItem>
              )
            })}
          </JuryListWrap>
        </Content>
      </FadeInUp>
    </JuryWrap>
  )
}

export default Jury
