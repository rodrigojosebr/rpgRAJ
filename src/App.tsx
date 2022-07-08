import * as S from './App.styles';
import { Character } from './components/Character/character';
import { UseCharacter } from './hooks/useCharacter';

const App = () => {
  const char = UseCharacter();

  return (
    <S.Container>
      <S.Map>
        <Character x={5} y={0} />
      </S.Map>
    </S.Container>
  );
}

export default App;
