#!/bin/bash

# https://blog.logrocket.com/deploying-single-page-angular-apps-to-github-pages/

ng build

#todo(github ci/cd): 'ng add angular-cli-ghpages'

ng deploy --base-href=anjeyy.github.io
