import React from 'react'
import styled from 'styled-components'
import ThreeLine from './ThreeLine'

const WantedWrap = styled.div`
  width: 100%;
  padding-bottom: 150px;
`

const WantedBg = require('../../../assets/images/unicorn/wanted-bg.png').default

const WantedContent = styled.div`
  width: 1200px;
  height: auto;
  margin: 0 auto;
  padding: 25px 75px;
  background: url(${WantedBg}) top center no-repeat;
  // background: rgba(49, 225, 185, 0.1);
  /* border: 14px solid transparent;
  border-image-slice: 27 fill;
  border-image-repeat: round; */

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const WantedTitle = styled.img`
  width: auto;
  height: auto;
  margin: 25px auto;
`

const WantedTitleImage = styled.img`
  width: 100%;
  height: auto;
`

const CenterBox = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

const ColorUnicorn = styled.img`
  width: 95px;
  height: 86px;
  margin: 0 40px;
`

const Text = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 36px;
  /* or 180% */
  color: #34edbe;
`

const YellowText = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 41px;
  /* identical to box height */
  text-align: left;
  letter-spacing: 2.7px;
  color: #ffb547;
`

const TypeCardWrap = styled.div<{ index: number }>`
  width: 440px;
  height: 600px;
  display: inline-block;
  position: absolute;
  border: 2px solid #31e1b9;

  left: ${({ index }) => {
    return `${index * 484}px`
  }};

  & + & {
    margin-left: 44px;
  }
`

const TypeIndex = styled.div`
  font-family: 'Superclarendon';
  font-style: normal;
  font-weight: normal;
  font-size: 80px;

  /* identical to box height */
  text-align: center;
  color: #2fd7b5;
  position: absolute;
  width: 120px;
  height: 107px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 32px;
  top: -54px;
  background: #0f2524;
`

const TypeTitle = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 62px;
  color: #ffb547;
  text-align: center;
  height: 124px;
`

const YellowDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2fd7b5;
`

const TypeIcon = styled.img`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 180px;
  height: 180px;
`

const TypeCenterBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

const TypeListItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  :first-child {
    margin-top: 84px;
  }
`

const TypeListWrap = styled.div`
  align-self: flex-start;
  position: relative;
  padding-top: 100px;
  width: 1080px;
  overflow: scroll;
  height: 800px;
  ::-webkit-scrollbar {
    opacity: 0;
  }
  ::-webkit-resizer {
    opacity: 0;
  }
  ::-webkit-scrollbar-corner {
    opacity: 0;
  }
`

const LeftBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`

const DollarImage = styled.img`
  width: 1038px;
  height: auto;
  margin-top: 78px;
  margin-bottom: 80px;
`

const TypeList = [
  {
    index: 'I',
    title: 'Infrastructure Projects',
    list: ['Oracles', 'Frond Ends', 'Wallets', 'Block Explorers', 'Analytics'],
    icon: require('../../../assets/images/unicorn/t1.png').default,
  },
  {
    index: 'II',
    title: 'NFT',
    list: ['Collectibles', 'Artworks', 'Event Tickets', 'Music and Media'],
    icon: require('../../../assets/images/unicorn/t2.png').default,
  },
  {
    index: 'III',
    title: 'GameFi',
    list: [],
    icon: require('../../../assets/images/unicorn/t3.png').default,
  },
  {
    index: 'IV',
    title: ' Metaverse Infrastructure',
    list: [],
    icon: require('../../../assets/images/unicorn/t4.png').default,
  },
  {
    index: 'V',
    title: 'Others',
    list: ['SocialFi', 'Dao', 'Web3'],
    icon: require('../../../assets/images/unicorn/t5.png').default,
  },
]

interface TypeItem {
  index: string
  title: string
  list: string[]
  icon: string
}

const TypeCard: React.FunctionComponent<{ type: TypeItem; index: number }> = ({ type, index }) => {
  return (
    <TypeCardWrap index={index}>
      <TypeIndex>{type.index}</TypeIndex>
      {type.list.length ? (
        <LeftBox style={{ textAlign: 'left', paddingLeft: '32px' }}>
          <TypeTitle style={{ marginTop: '67px', textAlign: 'left' }}>{type.title}</TypeTitle>
          <>
            {type.list.map((typeName, index) => {
              return (
                <TypeListItem style={{ marginTop: index === 0 ? '60px' : '0' }}>
                  <YellowDot style={{ marginRight: '20px' }} />
                  <Text>{typeName}</Text>
                </TypeListItem>
              )
            })}
          </>
        </LeftBox>
      ) : (
        <TypeCenterBox>
          <TypeTitle style={{ marginTop: index === 3 ? '-40px' : '0px' }}>{type.title}</TypeTitle>
        </TypeCenterBox>
      )}
      <TypeIcon src={type.icon} />
    </TypeCardWrap>
  )
}

const Wanted = () => {
  return (
    <WantedWrap>
      <WantedContent>
        <WantedTitleImage src={require('../../../assets/images/unicorn/wanted-title.png').default} />
        <WantedTitle src={require('../../../assets/images/unicorn/wanted.png').default} />
        <CenterBox>
          <ThreeLine color="#34EABD" height={74} type="dotted" />
          <ColorUnicorn src={require('../../../assets/images/unicorn/color-unicorn.png').default} />
          <ThreeLine color="#34EABD" height={74} type="dotted" />
        </CenterBox>
        <Text style={{ marginTop: '45px' }}>
          The Unicorn Contest exists to accelerate all Defi projects in the KCC ecosystem, and it will take a big effect
          in driving innovation and progress within the KCC ecosystem and the whole blockchain industry. Consistent with
          the vision of KCC, in Unicorn Contest, we welcome many types of projects such as DeFi, NFT, GameFi, SocailFi,
          Metaverse, Web3, etc.{' '}
        </Text>
        <YellowText style={{ marginTop: '45px' }}>
          The KEY categories that we focus on in Unicorn Competition:
        </YellowText>
        <TypeListWrap>
          {TypeList.map((item, index) => {
            return <TypeCard index={index} type={item} key={index} />
          })}
        </TypeListWrap>
        <YellowText style={{ marginTop: '45px', textAlign: 'left', width: '100%' }}>The Purpose</YellowText>
        <Text style={{ marginTop: '30px' }}>
          Decentralization has become the zeitgeist of 2022, and as a public chain, KCC is working to build a thriving
          decentralized ecosystem. In order to prosper the crypto enterprise community and encourage more builders to
          create more innovative products on KuCoin Community Chain (KCC), we are launching KuCoin Community Chain
          Unicorn Contest, offering a grand prize pool of $1 million (KCS/Stablecoin) and up to $10 million in liquidity
          support to accelerate all decentralised projects to build blockchains worldwide. The main aim of the program
          is to support all decentralized projects including but not limited to DeFi, NFT, GameFi, SocailFi, Metaverse,
          Web3. Unicorn Contest provides a platform for projects to create new and exciting innovations, gain more
          support and attract the world's attention.
        </Text>
        <DollarImage src={require('../../../assets/images/unicorn/dollar.png').default} />
      </WantedContent>
    </WantedWrap>
  )
}

export default Wanted
