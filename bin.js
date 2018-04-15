#!/usr/bin/env node
var concat = require('concat-stream')
/**
 * @file bin
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */

process.stdin.pipe(
  concat(function(buf) {
    process.stdout.write(
      JSON.stringify(
        require('./')(process.argv[2] || 'JSONSchema', JSON.parse(buf.toString())),
        null,
        2
      )
    )
  })
)
