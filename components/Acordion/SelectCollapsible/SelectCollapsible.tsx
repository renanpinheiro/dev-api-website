import React, { useState, useRef } from 'react'

import { useOutSideClick } from './useOutSideClick'

import { ISelectCollapsibleProps } from './SelectCollapsible.interface'

import * as S from './SelectCollapsible.style'

const SelectCollapsible = ({ question, answer }: ISelectCollapsibleProps) => {
  const [isActive, setIsActive] = useState(false)
  const clickRef = useRef()

  const handleActive = active => {
    setIsActive(active)
  }

  const Content = () => {
    return (
      <>
        <S.Selectable>
          <span>{question}</span>
          <img src="/arrows/arrow-dropdown.svg" alt={''} />
        </S.Selectable>
        <p>{answer}</p>
      </>
    )
  }

  useOutSideClick(clickRef, () => {
    if (isActive) setIsActive(false)
  })

  return (
    <>
      <S.Container ref={clickRef}>
        {!isActive ? (
          <S.SelectCollapsibleContainerUp onClick={() => handleActive(true)}>
            {Content()}
          </S.SelectCollapsibleContainerUp>
        ) : (
          <S.SelectCollapsibleContainerDown onClick={() => handleActive(false)}>
            {Content()}
          </S.SelectCollapsibleContainerDown>
        )}
      </S.Container>
    </>
  )
}
export { SelectCollapsible }
