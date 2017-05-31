describe('romanNumbers-js-kata', function(){

  it('should have I when one passed', function() {
    var result = romanNumbers.convertToRoman(1);
    expect(result).toBe('I');
  });
  it('should have II when two passed', function() {
    var result = romanNumbers.convertToRoman(2);
    expect(result).toBe('II');
  });
  it('should have III when three passed', function() {
    var result = romanNumbers.convertToRoman(3);
    expect(result).toBe('III');
  });
  it('should have IV when four passed', function() {
    var result = romanNumbers.convertToRoman(4);
    expect(result).toBe('IV');
  });
  it('should have V when five passed', function() {
    var result = romanNumbers.convertToRoman(5);
    expect(result).toBe('V');
  });
  it('should have VI when six passed', function() {
    var result = romanNumbers.convertToRoman(6);
    expect(result).toBe('VI');
  });
  it('should have VII when seven passed', function() {
    var result = romanNumbers.convertToRoman(7);
    expect(result).toBe('VII');
  });
  it('should have VIII when height passed', function() {
    var result = romanNumbers.convertToRoman(8);
    expect(result).toBe('VIII');
  });  
  it('should have IX when nine passed', function() {
    var result = romanNumbers.convertToRoman(9);
    expect(result).toBe('IX');
  });
  
});
