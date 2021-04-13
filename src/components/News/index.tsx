import React from 'react'
import {useState} from "react";
import styled from 'styled-components'
import fuse from '../../assets/svg/fuse_sub.svg'
import { ChevronUp } from 'react-feather'
import Card from '../MainCard'
import {articles} from './articles.js'

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 100%;
  border-bottom: solid 2px #E4DDDD;
  line-height: 0rem;
`
export const HeaderItem = styled.div`
  display: flex;
  flex: 1 1 90%;
  flex-wrap: wrap;
`
const HeaderOptions = styled("div")<{ size: string, y: string }>`
  display: flex;
  flex: 1 1 10%;
  flex-wrap: wrap;
  transform: rotateX(${({ size }) => size}deg) translateX(10px) translateY(${({ y }) => y}px);
  transition: all 1s;
`

const ExpandableWrapper = styled.div`
overflow: hidden;
padding-top: 0.75rem;
`

const Content = styled("div")<{ size: string }>`
  margin-top: ${({ size }) => size}%;
  transition: all 0.4s;
`

const Article = styled("div")`
  padding-left: 1rem;
  border-bottom: solid 1px #E4DDDD;
  padding-bottom: 1rem;
`

export default function NewsModal() {
  const [open,setOpen] = useState(false);
  const toggle = () => {setOpen(!open)}

  return (
    <Card>
      <Header onClick={toggle}>
       <HeaderItem>
        <div>
          <img src={fuse} alt="test" width="32px"></img> 
        </div>
        <div>
          <h4>News</h4>
        </div>
       </HeaderItem>
        <HeaderOptions size={open? '-175' : '0'} y={open? '25' : '0'}>
        <ChevronUp />
        </HeaderOptions>
      </Header>

      <ExpandableWrapper>
        <Content size={open ? '0' : '-100'}>
          {articles.map((article, index) => (
            <Article>
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <a href={article.link}>Read More</a>
            </Article>
          ))}
        </Content>
      </ExpandableWrapper>
    </Card>
  );
}