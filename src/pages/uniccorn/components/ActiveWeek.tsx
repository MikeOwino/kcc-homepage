import React from 'react'
import styled from 'styled-components'
import UnicornTitle from './UnicornTitle'

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 138px;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`
const ListCon = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: 'center';
  align-items: center;
  margin-top: 98px;
`
const ListItem = styled.a`
  width: 376px;
  height: 282px;
  background: #ffffff;
  margin-bottom: 44px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
`

const Image = styled.img`
  width: 376px;
  height: 282px;
  object-fit: scale-down;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: brightness(100%);
  }
`

const ActiveWeekList = [
  {
    logo: require('../../../assets/images/unicorn/nftStaking.png').default,
    name: 'PencilDAO',
    link: 'https://twitter.com/saffronfinance_/status/1519240111107579904?s=20&t=8Gw1f29l-aFFoE4QSuQrfg',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'KuPay',
    link: 'https://gleam.io/cR0v2/kupay-reversed-pyramid-donation-lottery-info-spreader',
  },

  {
    logo: require('../../../assets/images/unicorn/kccCarnival.png').default,
    name: 'OpenLeverage',
    link: '',
  },
  {
    logo: require('../../../assets/images/unicorn/kccWeek.png').default,
    name: 'KuDoge',
    link: '',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'XHashtag',
    link: '',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'KillSwitch',
    link: '',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'Bridge',
    link: 'https://twitter.com/saffronfinance_/status/1519240111107579904?s=20&t=8Gw1f29l-aFFoE4QSuQrfg',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'MojitoSwap',
    link: 'https://twitter.com/saffronfinance_/status/1519240111107579904?s=20&t=8Gw1f29l-aFFoE4QSuQrfg',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'Nash Metaverse',
    link: 'https://mirror.xyz/0xCa8feE2B3185381D690Dac5CfE8CE367Bf14d1A2/jHZTosUTGN7yRQIBSaN5SMlXEsB2WrDtlyLixihZ90g',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'VixenPunks',
    link: 'https://kuswap.finance/#/vixenpups',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'IdleStoneAge/SAX',
    link: 'https://docs.google.com/document/d/1xgXc-5den4MKYOmXF3ZCWzM_tXzOqHytnougVD14Xic/edit?usp=sharing',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'My Meta Farm',
    link: 'https://gleam.io/sT1Ea/kcc-carnival-week-general-event',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'My Meta Farm',
    link: 'https://gleam.io/sT1Ea/kcc-carnival-week-general-event',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'Coolmining',
    link: 'https://docs.google.com/document/d/1mhTCpXvF8EIO3arOFdDl3Iq8k3DKNm1uDdkc6qVti8A/edit?usp=sharing',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'Pikaster',
    link: '',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'Fabwelt',
    link: '',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'The Killbox Game',
    link: 'https://drive.google.com/file/d/1GplgxcHmkoR80ghNz8ue6fCasEeQnE8V/view?usp=sharing',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'Crypto Elite’s Battlegrounds (CEBG)',
    link: 'https://www.kucoin.com/news/crypto-elites-battlegrounds-igo-is-coming-soon-limited-sale-of-8000-genesis-nfts?_cms_ts=1650699562&_cms_hash=5840d90d5a79f7375b67b394993c32eb20ed28496a7b5d94024080c235bd26e3&type=1',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'NaBox',
    link: 'https://naboxwallet.medium.com/kcc-nabox-carnival-week-baa950b84d37?source=social.tw',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'Token Pocket',
    link: 'https://www.tokenpocket.pro/',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'Bitkeep',
    link: 'https://blog.bitkeep.com/en/?p=584',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'Coinhub',
    link: 'https://coinhub8483.zendesk.com/hc/en-001/articles/6063385176212',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'Ambire Wallet',
    link: 'https://www.tokenpocket.pro/',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'EmiSwap',
    link: 'https://gleam.io/swVYm/kcc-carnival-week-general-event',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: '0xlend',
    link: 'https://twitter.com/0xLendProtocol/status/1520689942266998785?s=20&t=aPBmM8W4ny8wwYzBeo--Mw',
  },
  {
    logo: require('../../../assets/images/unicorn/contest.png').default,
    name: 'Transit Finance',
    link: 'https://twitter.com/0xLendProtocol/status/1520689942266998785?s=20&t=aPBmM8W4ny8wwYzBeo--Mw',
  }
]

const ActiveWeek = () => {
  return (
    <Content>
      <UnicornTitle title="Unicorn Experience Week Activities" />
      <ListCon>
        {ActiveWeekList.map((item, index) => {
          return (
            <ListItem key={index} href={item.link ? item.link : ''}>
              <Image src={item.logo}></Image>
            </ListItem>
          )
        })}
      </ListCon>
    </Content>
  )
}

export default ActiveWeek
