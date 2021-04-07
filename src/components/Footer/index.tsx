import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import fuse from '../../assets/svg/fuse.svg'

const Wrapper = styled.div`
  display: flex-wrap;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 2rem;
  background-color: black;
  z-index:100;
}
`

const NewsWrapper = styled.div`
  display: inline-block;
  height: 2rem;
  width: 100%;
  color: #FFFFFF;
  text-align: center;
  line-height: 2rem;
}
`
const IconWrapper = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap};
  width: 100%;
  display: inline;
  margin-right: 1rem;
  & > img,
  span {
    height: 100%;
    padding: 0.25rem;
  }
`

export default function Footer() {
  let [data] = useState({loading:true,result:{}})
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://service.fuseswap.com/api/v1/price/0x0be9e53fd7edac9f859882afdda116645287c629")
    .then((response) => {
      if (response.ok) {
        return response.json();
       }
       throw response;
      })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      setError(error);
    })
    .finally(() => {
     setLoading(false);
    });
    }, []);

  if (loading) data.loading = true;
  if (error) data.result= error;

  return (
    <Wrapper>
      <NewsWrapper>
        <IconWrapper>
          <img src={fuse} alt="" />
        </IconWrapper>
        <span>Fuse/USD: {JSON.stringify(data.result, null, 2)}</span>
      </NewsWrapper>
    </Wrapper>
  )
};
