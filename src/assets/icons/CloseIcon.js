import React from 'react';
import styled from "styled-components";

const CloseIconWrapper = styled.svg` 
    width: 100%;
    height: 100%;
`

export const CloseIcon = () => (
    <CloseIconWrapper aria-hidden="true">
        <path d="M50.9447 13.872L63.0887 25.84L61.1567 27.744L49.0127 15.776L36.8687 27.744L34.9367 25.84L47.0807 13.872L34.9367 1.904L36.8687 0L49.0127 11.968L61.1567 0L63.0887 1.904L50.9447 13.872Z" fill="black"/>
    </CloseIconWrapper>
)



