import React from 'react'
import styled from 'styled-components'

import { useTranslation } from 'react-i18next'

import { useResponsive } from '../../utils/responsive'
import Helmet from 'react-helmet'
import Banner from './components/Banner'
import KCCDesc from './components/KCCDesc'
import Wanted from './components/Wanted'
import Roadmap from './components/Roadmap'
import Benefit from './components/Benefit'
import Award from './components/Award'
import Apply from './components/Apply'
import Jury from './components/Jury'
import Rank from './components/Rank'

const UnicornPageWrap = styled.div`
  position: relative;
  background: #0b1013;
  height: auto;
  z-index: 1;
  padding-top: 80px;
`

const RankWrap = styled.div`
  padding-top: 185px;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 768px) {
    padding: 0 6px;
    padding-top: 47px;
  }
`

const RankImage = styled.img`
  width: 100%;
  max-width: 1200px;
`

const UnicornPage: React.FunctionComponent = () => {
  const { t } = useTranslation()
  const { isMobile } = useResponsive()

  return (
    <UnicornPageWrap>
      <Helmet>
        <title>KCC Unicorn Contest</title>
        <meta
          name="description"
          content="KCC is a high performance decentralized public chain built by the fans of KCS and KuCoin. We aim to provide community users with faster, more convenient and low-cost experience."
        />
      </Helmet>
      {/* banner */}
      <Banner />
      {/* <KCCDesc /> */}
      <Wanted />
      <Benefit />
      {/* <RankWrap>
        <RankImage src={require('../../assets/images/unicorn/rank.png').default} />
      </RankWrap> */}
      <Roadmap />
      <Award />
      <Apply />
      <Jury />
    </UnicornPageWrap>
  )
}

export default UnicornPage
