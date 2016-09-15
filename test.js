import test from 'ava'
import exec from 'sync-exec'
import fn from './'

test(t => {
  t.is(exec('npm bin -g').stdout.trim(), fn())
})
