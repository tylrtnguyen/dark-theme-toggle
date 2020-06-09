import styled from 'styled-components';
import { typeScale } from '../utils';

import { applyStyleModifiers } from "styled-components-modifiers"

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.h5};
        padding: 12px 24px;
    `,
    warning: ({ props }) => `
    background: none;
    color: ${props.status.warningColor};
    &:hover, &:focus {
      background-color: ${props.status.warningColorHover};
      outline: 3px solid ${props.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${props.status.warningColorActive};
    }
  `,
  primaryButtonWarning: ({ props }) => `
    background-color: ${props.status.warningColor};
    color: ${props.textColorInverted};
  `,
  secondaryButtonWarning: ({ props }) => `
    border: 2px solid ${props.status.warningColor};
  `,
  error: ({ props }) => `
    background: none;
    color: ${props.status.errorColor};
    &:hover, &:focus {
      background-color: ${props.status.errorColorHover};
      outline: 3px solid ${props.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.status.errorColorActive};
    }
  `,
  primaryButtonError: ({ props }) => `
    background-color: ${props.status.errorColor};
    color: ${props.textColorInverted};
  `,
  secondaryButtonError: ({ props }) => `
    border: 2px solid ${props.status.warningColor};
  `,
  success: ({ props }) => `
    background: none;
    color: ${props.status.successColor};
    &:hover, &:focus {
      background-color: ${props.status.successColorHover};
      outline: 3px solid ${props.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.status.successColorActive};
    }
  `,
  primaryButtonSuccess: ({ props }) => `
    background-color: ${props.status.successColor};
    color: ${props.textColorInverted};
  `,
  secondaryButtonSuccess: ({ props }) => `
    border: 2px solid ${props.status.warningColor};
  `
}

export const Button = styled.button`
    padding: 12px 24px;
    margin: 12px 24px;
    font-size: ${typeScale.p};
    border-radius: ${props => props.theme.borderRadius};
    min-width: 100px;
    cursor: pointer;
    font-family: "Open Sans";
    box-sizing: border-box;
    box-shadow: ${props => props.theme.boxShadow};
    line-height: ${props => props.theme.lineHeight};
    transition: background-color 0.2s linear, color 0.2s linear;

    &:hover {
        background-color: ${props => props.theme.primaryColorHover};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:focus {
        outline: 3px solid ${props => props.theme.primaryColorHover};
        outline-offset: 2px;
        background-color: ${props => props.theme.primaryColorHover};
        color: ${props => props.theme.textColorOnPrimary};
    }

    $:active {
        background-color: ${props => props.theme.primaryColorActive};
        border-color: ${props => props.theme.primaryColorActive};
        color: ${props => props.theme.textColorOnPrimary};
    }
`

export const PrimaryButton = styled(Button)`
    background-color: ${props => props.theme.primaryColor};
    border: none;
    color: ${props => props.theme.textColorOnPrimary};

    &:disabled {
        background: none;
        color: ${props => props.theme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const SecondaryButton = styled(Button)`
    background-color: ${props => props.theme.textColorInverted};
    border: 1px solid ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryColor};

    &:disabled {
        background: none;
        color: ${props => props.theme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const TertiaryButton = styled(Button)`
    background-color: ${props => props.theme.tertiaryColor};
    color: ${props => props.theme.primaryColor};
    border: none;

    &:disabled {
        background: none;
        color: ${props => props.theme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`