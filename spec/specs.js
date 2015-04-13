describe('pigLatin', function() {
  it('for letter that start with a vowel, add ay', function() {
    expect(pigLatin('a')).to.equal('aay');
  });
  it('for letter that start with e vowel, add ay', function() {
    expect(pigLatin('e')).to.equal('eay');
  });
  it('for letters that start with i,o,u vowel, add ay', function() {
    expect(pigLatin('i')).to.equal('iay');
  });
  it('for letters that start with b consonant ,add ay', function() {
    expect(pigLatin('b')).to.equal('bay');
  });
  it('for word cat, move letter c to the end of the word', function() {
    expect(pigLatin('cat')).to.equal('atcay');
  });
  it('for word quest, move letter qu to the end of the word', function() {
    expect(pigLatin('quest')).to.equal('estquay');
  });
});
