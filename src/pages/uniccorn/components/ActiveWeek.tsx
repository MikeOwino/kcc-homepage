import React from 'react'
import styled from 'styled-components'
import { FadeInUp } from '../../../utils/animation'
import UnicornTitle from './UnicornTitle'
import { useResponsive } from '../../../utils/responsive'


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
   justify-content: space-around ;
   textAlign: 'center';
   align-items: center;
   margin-top: 98px;
`
const ListItem = styled.a`
    width: 376px;
    height: 282px;
    background: #FFFFFF;
    opacity: 16%;
    margin-bottom: 44px;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
`   

const Image = styled.img`
    width: 376px;
    height: 282px;
`

const partnerList1 = [
    {
      logo: require('../../../assets/images/unicorn/jury1.png').default,
      name: 'KCC DAO',
      desc: '',
    }

    
  ]
  
const ActiveWeek = () => {
    return (
        <Content>
          <UnicornTitle title="Unicorn Experience Week Activities" />
          <ListCon>
               {
                partnerList1.map((item, index)=>{
                    return (
                        <ListItem
                            key={index}
                        >
                        <Image></Image>   
                        </ListItem>
                    )
                })
               } 
          </ListCon>
        </Content>
    )
}

export default ActiveWeek