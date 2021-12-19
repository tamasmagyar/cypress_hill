
if [ "$BROWSER" == "chrome" ]
then
  npm run chrome:test
else
# todo elif
  npm run firefox:test
fi

npm run posttest