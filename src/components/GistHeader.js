import React from 'react'
import styled from 'styled-components'
import { FaCode, FaComment , FaStar , FaShare } from "react-icons/fa";



const imageUrl = 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350';

export default function GistHeader({userImage , userName , fileNum , forksNum , comments , stars}) {
  return (
    <>
    <Wrapper>
        <InnerWrap>
            <ImageWrapper src={imageUrl}  />
            <TextWrapper> User name</TextWrapper>

        </InnerWrap>
        <InnerWrap>
            <TextWrapper><FaCode style={{marginRight: 5}}/> {fileNum}1 Files</TextWrapper>
            <TextWrapper><FaShare style={{marginRight: 5}}/> Forks</TextWrapper>
            <TextWrapper><FaComment style={{marginRight: 5}}/> Comments</TextWrapper>
            <TextWrapper><FaStar style={{marginRight: 5}}/> Stars</TextWrapper>
        </InnerWrap>
    </Wrapper>    
    </>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;    
`
const InnerWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`
const ImageWrapper = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    object-fit: cover;
    `
const TextWrapper = styled.text`
    color: #0265d6;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0px 10px;
`