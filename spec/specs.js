describe('scrabble', function() {
  it('for words that start with a vowel, add ay', function() {
    expect(scrabble('a')).to.equal('aay');
  });
  it('for words that start with e vowel, add ay', function() {
    expect(scrabble('e')).to.equal('eay');
  });
  it('for words that start with i,o,u vowel, add ay', function() {
    expect(scrabble('i')).to.equal('iay');
  });
});
