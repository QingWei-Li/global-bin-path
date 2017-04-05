'use strict'

var path = require('path')

var binPath

module.exports = function () {
  if (binPath) return binPath

  if (process.env.PREFIX) {
    binPath = process.env.PREFIX
  } else if (process.platform === 'win32') {
    var pathnames = process.env.PATH.split(path.delimiter)
    var len = pathnames.length

    for (var i = 0; i < len; i++) {
      if (path.basename(pathnames[i]) === 'npm' || path.basename(pathnames[i]).startsWith('nodejs')) {
        binPath = pathnames[i]
        break
      }
    }
  } else {
    binPath = path.dirname(path.dirname(process.execPath))

    if (process.env.DESTDIR) {
      binPath = path.join(process.env.DESTDIR, binPath)
    }
  }

  if (process.platform !== 'win32') binPath = path.resolve(binPath, 'bin')

  return binPath
}
