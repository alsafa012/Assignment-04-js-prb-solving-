
// function findAddress(obj) {
//     const requiredProperties = ['street', 'house', 'society'];

//     // Check and replace missing properties with double underscores
//     for (const prop of requiredProperties) {
//         if (!(prop in obj)) {
//             obj[prop] = '__';
//         }
//     }

//     // Construct the output format
//     const output = `${obj.street},${obj.house},${obj.society}`;

//     return output;
// }
// findAddress(obj);

/* 
 // Test cases
 const input1 = { street: 10, house: "15A", society: "Earth Perfect" };
 console.log(findAddress(input1)); // Output: 10,15A,Earth Perfect
 
 const input2 = { street: 10, society: "Earth Perfect" };
 console.log(findAddress(input2)); // Output: 10,__,Earth Perfect
 
 const input3 = { street: 10 };
 console.log(findAddress(input3)); // Output: 10,__,__
 
 
 const requiredProperties = [
     { name: 'street', value: '10' },
     { name: 'house', value: '15A' },
     { name: 'society', value: 'Earth Perfect' }
 ];
 
 requiredProperties[0].value = '20'; // Modifying the value of the 'street' property
 
 console.log(requiredProperties); // Outputs: [ { name: 'street', value: '20' }, { name: 'house', value: '15A' }, { name: 'society', value: 'Earth Perfect' } ]

 
 */











//  simple properties
// 





// function findAddress(obj) {
//      const addresses = [
//          { street: 10, house: '15A', society: 'Earth Perfect' },
//          { street: 10, society: 'Earth Perfect' },
//          { street: 10 }
//      ];
//      const properties = ['street', 'house', 'society'];
//      const output = [];
 
//      for (const add of addresses) {
//          const values = [];
 
//          for (const property of properties) {
//              if (add[property] !== undefined) {
//                  values.push(add[property]);
//              } else {
//                  values.push('__');
//              }
//          }
 
//          output.push(values.join(','));
//      }
 
//      return output;
//  }
 
 
//  const results = findAddress();
 
//  // Print the results
//  for (const result of results) {
//      console.log(result);
//  }
 
//  function findAddress(obj) {
//      const values = Object.values(obj);
//      return values.join(',');
//  }
 
//  // Test case
//  const address = { street: 10, house: '15A', society: 'Earth Perfect' };
//  console.log(findAddress(address)); // Output: "10,15A,Earth Perfect"
 


    // function findAddress(obj) {
    //     const values = Object.values(obj);
    //     return values.join(',');
    // }
    // const address ={street:10,house:'15A',society:'Earth Perfect'};
    // console.log(findAddress(address));
    function findAddress(obj) {
        const totalValues = []
        if(obj.street !== undefined){
            totalValues.push(obj.street);
        }else{
            totalValues.push('__');
        }
        if(obj.house !== undefined){
            totalValues.push(obj.house);
        }else{
            totalValues.push('__');
        }
        if(obj.society !== undefined){
            totalValues.push(obj.society);
        }else{
            totalValues.push('__');
        }   
        return totalValues.join(',');
    }
    const address ={street:10,house:'15A',society:'Earth Perfect'};

    console.log(Object.keys(address).join(':'),Object.values(address).join(','));
    console.log(findAddress(address))
    const address1 ={street:10,society:'Earth Perfect'};
    console.log(findAddress(address1))
    const address2 ={street:10};
    console.log(findAddress(address2))


    // function findAddress(obj) {
    //     const values = [];
        
    //     if (obj.street !== undefined) {
    //         values.push(obj.street);
    //     } else {
    //         values.push('__');
    //     }
        
    //     if (obj.house !== undefined) {
    //         values.push(obj.house);
    //     } else {
    //         values.push('__');
    //     }
        
    //     if (obj.society !== undefined) {
    //         values.push(obj.society);
    //     } else {
    //         values.push('__');
    //     }
        
    //     return values.join(',');
    // }
    // const address ={street:10,house:'15A',society:'Earth Perfect'};
    // console.log(findAddress(address));

    // const address1 = { street: 10 };
    // console.log(findAddress(address1)); // Output: 10,__,__ 
    
    // const address2 = { street: 10, society: 'Earth Perfect' };
    // console.log(findAddress(address2));
    




