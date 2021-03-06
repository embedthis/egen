/*
    Patch version
 */

import * as gulp from 'gulp'
import * as exec from 'gulp-exec'

/*
    patchVersion -- Patch pak.json and package.json version from ../pak.json
 */
function patchVersion() {
    return gulp.src('package.json')
        .pipe(exec('../paks/assist/gulp/website/patchVersion.sh', {continueOnError: false, pipeStdout: false}))
        .pipe(exec.reporter({err: true, stderr: true, stdout: true}))
}

export default gulp.series(patchVersion)

