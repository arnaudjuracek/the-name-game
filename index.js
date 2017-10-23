#!/usr/bin/env node
'use strict'

const name = process.argv.slice(2)[0]
if (!name) throw Error('no name')

const char = (i) => name.charAt(i).toUpperCase()

const a = ~'AEIOUYH'.split('').indexOf(name.charAt(0))
      ? name.toLowerCase()
      : char(1) === 'H'
      ? name.substring(2)
      : name.substring(1)
const b = char(0) === 'B' ? a : `b${a}`
const f = char(0) === 'F' ? a : `f${a}`
const m = char(0) === 'M' ? a : `m${a}`

const verses = [
  `${name}, ${name}, bo-${b}`,
  `Banana-fana fo-${f}`,
  `Fee-fy-mo-${m}`,
  `${name}!`
]

verses.forEach(verse => console.log(verse))
