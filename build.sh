#!/bin/sh

VERSION="1.2.0"
LICENSE="LICENSE.txt"

JS_COMPILER="closure-compiler"
CSS_COMPILER="yuicompressor --type css"

mkdir -p ${VERSION}

compress () {
	cat ${LICENSE} ${3} | ${1} > ${VERSION}/${2}
}

compress "${JS_COMPILER} " "app.js"      "app.js"
compress "${CSS_COMPILER}" "app.css"     "app.css"
compress "${CSS_COMPILER}" "default.css" "app.css default.css"
compress "${CSS_COMPILER}" "dim.css"     "app.css dim.css"
