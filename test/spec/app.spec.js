/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the FlirtrModel object */

describe("Flirtr", function() {

  it("should give love 1 point", function() {
    expect(FlirtrModel.getScore("love")).toEqual(1);
  });

  it("should not recognise numbers", function(){
    expect(FlirtrModel.getScore("1").).toEqual(0);
  })
 
});
