#!/bin/bash
cd /home/kavia/workspace/code-generation/angular-library-with-storybook-testing-25563-25576/angular_library_frontend
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

