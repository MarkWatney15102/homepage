changed=0
git remote update && git status -uno | grep -q 'Your branch is behind' && changed=1
if [ $changed = 1 ]; then
    git pull
    screen -X -S homepage quit
    screen -S homepage -dm npm run deploy
    echo "Updated successfully";
else
    echo "Up-to-date"
fi