/**
 * @file main
 * @author imcuttle
 * @date 2018/4/4
 */
var toJSONSchema = require('../')

describe('main', function() {
  it('should toJSONSchema', function() {
    console.log(
      JSON.stringify(toJSONSchema('person', {
        name: "yc",
        age: 20,
        parent: {
          name: "ykn",
          age: 50,
          parent: [
            {
              name: 'aaaa',
              age: 50,
              nuk: null,
              parent: [[null], [null], 'ss', 12]
            }
          ]
        }
      }), null, 2)
    )
  })
})
