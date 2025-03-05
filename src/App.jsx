import StudyMode from './components/StudyMode';
import flashcardsData from './data/flashcards.json';

function App() {
  // Debug logging
  console.log('Raw flashcards data:', flashcardsData);
  console.log('Flashcards array:', flashcardsData.flashcards);
  console.log('First card:', flashcardsData.flashcards?.[0]);

  // Guard against missing data
  if (!flashcardsData || !flashcardsData.flashcards) {
    return <div>Loading flashcards...</div>;
  }

  return (
    <div>
      <StudyMode cards={flashcardsData.flashcards} />
    </div>
  );
}

export default App;