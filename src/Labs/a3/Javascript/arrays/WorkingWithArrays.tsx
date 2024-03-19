function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1String = [functionScoped, blockScoped, constant1, numberArray1, stringArray1];
  
    return (
      <div>
        <h2>Working with Arrays</h2>
        <p>numberArray1 = {numberArray1}</p>
        <p>stringArray1 = {stringArray1}</p>
        <p>variableArray1 = {variableArray1String}</p>
      </div>
    );
  }
  
  export default WorkingWithArrays;