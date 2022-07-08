import * as S from './App.styles';
import { useEffect, useState } from 'react';
import { Character } from './components/Character/character';
import { UseCharacter } from './hooks/useCharacter';

const App = () => {
  const char = UseCharacter();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
        break;

      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
        break;

      case 'KeyD':
      case 'ArrowRight':
        char.moveRight()
        break;

      case 'KeyS':
      case 'ArrowDown':
        char.moveDown()
        break;
    }
  }

  return (
    <S.Container>
      <S.Map>
        <Character x={char.x} y={char.y} side={char.side} />
      </S.Map>
    </S.Container>
  );
}

export default App;
