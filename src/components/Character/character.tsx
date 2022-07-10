import { CharacterSides } from '../../types/characterSides';
import * as S from './character.styles';

type Props = {
  x: number;
  y: number;
  side: CharacterSides;
  name: string;
}

export const Character = ({ name, x, y, side }: Props) => {
  const size = 30;
  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90
  }

  return (
    <S.Container
      size={size}
      left={x * size}
      top={y * size}
      sidePos={sides[side] ?? 0}
    >
      <S.Name>{name}</S.Name>

    </S.Container>
  )
}
