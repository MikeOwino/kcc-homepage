import React from 'react'
import styled from 'styled-components'
import { FadeInUp } from '../../../utils/animation'
import UnicornTitle from './UnicornTitle'
import { useResponsive } from '../../../utils/responsive'

const JuryWrap = styled.div`
  padding-top: 210px;
  padding-bottom: 150px;
  @media (max-width: 768px) {
    padding-top: 110px;
    padding-bottom: 100px;
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
      margin-top: 60px;
    }
  }
`

const Image = styled.img`
  width: 160px;
  height: 160px;
`

const JuryDescWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
`

const JuryDesc = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  /* identical to box height, or 160% */
  color: #ffffff;
  opacity: 0.7;
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
  { logo: require('../../../assets/images/unicorn/jury1.png').default, name: 'KCC DAO', desc: '' },
  { logo: require('../../../assets/images/unicorn/jury2.png').default, name: 'Jun Park', desc: 'Hashed' },
  { logo: require('../../../assets/images/unicorn/jury3.png').default, name: 'Péter Garamvölgyi', desc: 'Conflux' },
  { logo: require('../../../assets/images/unicorn/jury4.png').default, name: 'Tracy', desc: 'Cointelegraph' },
  { logo: require('../../../assets/images/unicorn/jury5.png').default, name: 'Jacob', desc: 'HashKey Capital' },
]

const juryList2 = [
  { logo: require('../../../assets/images/unicorn/jury6.png').default, name: 'KCC DAO', desc: '' },
  { logo: require('../../../assets/images/unicorn/jury7.png').default, name: 'Jun Park', desc: 'Hashed' },
  { logo: require('../../../assets/images/unicorn/jury8.png').default, name: 'Péter Garamvölgyi', desc: 'Conflux' },
  { logo: require('../../../assets/images/unicorn/jury9.png').default, name: 'Tracy', desc: 'Cointelegraph' },
  { logo: require('../../../assets/images/unicorn/jury10.png').default, name: 'Jacob', desc: 'HashKey Capital' },
]

const juryList = [...juryList1, ...juryList2]

const Jury = () => {
  const { isMobile } = useResponsive()

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
                  <JuryDescWrap>
                    <JuryName>{jury.name}</JuryName>
                    {jury.desc && <JuryDesc>{jury.desc}</JuryDesc>}
                  </JuryDescWrap>
                </JuryItem>
              )
            })}
          </JuryListWrap>
          <JuryListWrap style={{ marginTop: isMobile ? '60px' : '80px' }}>
            {juryList2.map((jury, index) => {
              return (
                <JuryItem key={index}>
                  <Image src={jury.logo} />
                  <JuryDescWrap>
                    <JuryName>{jury.name}</JuryName>
                    {jury.desc && <JuryDesc>{jury.desc}</JuryDesc>}
                  </JuryDescWrap>
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
