## Setup Git hooks (only on Linux/MacOS)
* `chmod +x .hooks/commit-msg`
* `ln -s $PWD/.hooks/commit-msg $PWD/.git/hooks/commit-msg`
* Confirm that the hook is working: `git commit --allow-empty -m"wrong commit"` should has error
