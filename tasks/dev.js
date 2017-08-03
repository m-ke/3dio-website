const gulp = require('gulp')
const watch = require('gulp-watch')
const build = require('./build')
const chalk = require('chalk')
const spawn = require('child_process').spawn

// configs

const src = {
  pug: [
    'src/**/*.pug',
  ],
  markdown: [
    'src/**/*.md'
  ],
  less: [
    'src/**/*.less',
  ],
  staticContent: [
    'src/**/**',
    '!src/pug-common/**/**',
    '!src/**/*.pug',
    '!src/**/*.md',
    '!src/**/*.less'
  ]
}

// tasks

const runDevEnvironment = gulp.series(
  build.build,
  gulp.parallel(
    // watch source folder -> rebuild
    watchSource,
    // watch build folder -> update browser
    runLiteServer
  )
)

function watchSource () {
  // watch source folder -> rebuild
  watch(src.pug, build.renderPug)
    .on('error', console.error)
  watch(src.markdown, build.renderMarkdown)
    .on('error', console.error)
  watch(src.less, build.renderLess)
    .on('error', console.error)
  watch(src.staticContent, build.copyStaticContent)
    .on('error', console.error)
}

function runLiteServer () {
  return new Promise((resolve, reject) => {
    const ls = spawn('node_modules/.bin/lite-server', ['-c', 'tasks/lite-server.config.js'])
    ls.stdout.on('data', (data) => {
      console.log(`lite-server: ${data}`)
    })
    ls.stderr.on('data', (data) => {
      console.error(chalk.red(`lite-server: ${data}`))
    })
    ls.on('close', (code) => {
      if (code === 0) {
        console.log(`lite-server: stopped`)
        resolve()
      } else {
        throw new Error(`lite-server: exited with code ${code}`)
        reject()
      }
    })
  })
}

// tasks

module.exports = runDevEnvironment