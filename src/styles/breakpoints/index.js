// import styled, { css } from 'styled-components';

// export enum Size {
//     M = 320,
//     TP = 768,
//     TL = 1024,
//     L = 1280,
// }

// enum SizeRule {
//     minWidth = 'min-width',
//     maxWidth = 'max-width',
// }

// abstract class SizeMediaRule {
//     protected abstract rule: SizeRule;

//     constructor(private readonly value: number) { }

//     public toString() {
//         return `${this.rule}: ${this.value}px`;
//     }
// }

// export class MinWidthMediaRule extends SizeMediaRule {
//     protected rule = SizeRule.minWidth;
// }

// export class MaxWidthMediaRule extends SizeMediaRule {
//     protected rule = SizeRule.maxWidth;
// }

// export function formatMediaRule(mediaRule: SizeMediaRule) {
//     return `@media (${mediaRule})`;
// }

// export const SCREEN = {
//     M: formatMediaRule(new MinWidthMediaRule(Size.M)), //`@media (min-width: ${Size.M}px)`,
//     TP: formatMediaRule(new MinWidthMediaRule(Size.TP)), //`@media (min-width: ${Size.TP}px)`,
//     TL: formatMediaRule(new MinWidthMediaRule(Size.TL)), //`@media (min-width: ${Size.TL}px)`,
//     L: formatMediaRule(new MinWidthMediaRule(Size.L)), //`@media (min-width: ${Size.L}px)`,
//     TP_DOWN: formatMediaRule(new MaxWidthMediaRule(Size.TP - 1)), //`@media (max-width: ${Size.TP - 1}px)`,
//     TL_DOWN: formatMediaRule(new MaxWidthMediaRule(Size.TL - 1)), //`@media (max-width: ${Size.TL - 1}px)`,
//     L_DOWN: formatMediaRule(new MaxWidthMediaRule(Size.L - 1)), //`@media (max-width: ${Size.L - 1}px)`,
// };

// export const HiddenBlock = styled.div<{ screen: typeof SCREEN[keyof typeof SCREEN] }>`
//   ${({ screen }) => css`
//     margin-bottom: 20px;

//     ${screen} {
//       display: none;
//     }
//   `}
// `;

const SIZES = {
  M: 320,
  TP: 768,
  TL: 1024,
  L: 1280,
};

export const SCREEN = {
  M: `@media (min-width: ${SIZES.M}px)`,
  TP: `@media (min-width: ${SIZES.TP}px)`,
  TL: `@media (min-width: ${SIZES.TL}px)`,
  L: `@media (min-width: ${SIZES.L}px)`,
  TP_DOWN: `@media (max-width: ${SIZES.TP - 1}px)`,
  TL_DOWN: `@media (max-width: ${SIZES.TL - 1}px)`,
  L_DOWN: `@media (max-width: ${SIZES.L - 1}px)`,
};
