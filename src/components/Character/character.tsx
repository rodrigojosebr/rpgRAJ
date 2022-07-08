import * as S from './character.styles';

type Props = {
  x: number;
  y: number;
}

export const Character = ({ x, y }: Props) => {
  const size = 30;

  return (
    <S.Container
      size={size}
      left={x * size}
      top={y * size}
    >

    </S.Container>
  )
}

