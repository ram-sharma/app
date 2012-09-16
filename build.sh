#!/bin/sh

VERSION="1.0"
LICENSE="LICENSE.txt"

compressJS () {
	REGULAR="${1}.js"
	MINIFIED="${1}.min.js"
	cp ${LICENSE} ${REGULAR}
	cp ${LICENSE} ${MINIFIED}
	cat - >> ${REGULAR}
	cat ${REGULAR} | closure-compiler >> ${MINIFIED}
}

compressCSS () {
	REGULAR="${1}.css"
	MINIFIED="${1}.min.css"
	cp ${LICENSE} ${REGULAR}
	cp ${LICENSE} ${MINIFIED}
	cat - >> ${REGULAR}
	cat ${REGULAR} | yuicompressor --type css >> ${MINIFIED}
}

cat app.js              | compressJS  ${VERSION}
cat app.css             | compressCSS ${VERSION}
cat app.css default.css | compressCSS ${VERSION}-default
cat app.css dim.css     | compressCSS ${VERSION}-dim
