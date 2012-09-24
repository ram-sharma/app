#!/bin/sh

VERSION="1.0.0"
LICENSE="LICENSE.txt"

mkdir -p ${VERSION}

compressJS () {
	cat ${LICENSE} ${2} | closure-compiler > ${VERSION}/${1}
}

compressCSS () {
	cat ${LICENSE} ${2} | yuicompressor --type css > ${VERSION}/${1}
}

compressJS  app.js      "app.js"
compressCSS app.css     "app.css"
compressCSS default.css "app.css default.css"
compressCSS dim.css     "app.css dim.css"
