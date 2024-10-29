/*------------------------GIT COMMANDS---------------------------------


------------------------------------------

-> git config --global user.name ""

-> git config --global user.email ""

(the very first commands for configuring your credentials into the cmd)


------------------------------------------

-> git add .

(for staging all the files)

------------------------------------------

-> git commit -m ""

(for commiting the files)

------------------------------------------

-> git push -u origin master

(-u means -upstream. first time we have to write -u but after that git push is enough for pushing the files)

------------------------------------------

--> TO REVERT THE PUSH  <--

-> git log   (it will give you hash commits)
-> git revert <hash-commit>
-> git push origin master/main

------------------------------------------

--> BRANCHES COMMANDS <--

-> git branch -a
(checks the branches)

-> git checkout -b second
(creates a branch named second and switches from main to second)

-> git switch second
(manually switch to branch named second)

------------------------------------------

-> git config --global core.editor "code --wait"
(sets vs code as the default text editor for git. this is just in case if you are having problem with git hash commit)

------------------------------------------

-> git clone <url of the repo>

(for cloning the repo in your system/folder)

------------------------------------------

--> GIT RESET COMMANDS  <--

-> git reset <filename>

(Unstages a specific file, leaving its changes intact in the working directory (undoes git add for the file))

-> git reset

(Unstages all changes that have been added to the staging area but leaves them in the working directory (undoes git add for all files))

-> git reset HEAD~1

(This command undoes the most recent commit (the one before HEAD), but the changes remain in your working directory and staging area. If you want to undo the commit and keep your changes ready for a new commit, this is the right command.)

-> git reset --soft HEAD^

(Moves the HEAD to the specified commit but keeps changes from the undone commits in the staging area (they're staged, ready for commit))

-> git reset --soft HEAD^2

(resets the second last commit)

-> git reset --hard HEAD^

(Completely resets the HEAD, staging area, and working directory to a previous commit (all changes after the specified commit are discarded))

------------------------------------------

--> GIT REVERT COMMANDS <--

-> git revert HEAD

(Reverts the last commit (the one currently referenced by HEAD), creating a new commit that undoes its changes.
Example: git revert HEAD (undoes the most recent commit).)

-> git revert --no-commit HEAD

(This command will revert the changes from the last commit, but it won't immediately create a new commit. You'll have the reverted changes in your working directory, allowing you to review or modify them before committing manually.)

-> git revert -m 1 HEAD

(-m 1 specifies which parent to keep when reverting a merge commit. In most cases, 1 refers to the main or primary branch that was merged into
 (i.e., the first parent).
HEAD refers to the most recent merge commit.
This command will create a new commit that undoes the changes introduced by the last merge, while keeping the changes from the first parent branch.)

------------------------------------------

-> git stash

(Saves your current working directory's changes (both staged and unstaged) and returns the working directory to a clean state (i.e., as it was in the last commit).)

-> git stash list

(Shows a list of all the stashed changes.)

-> git stash apply

(Applies the most recent stash (without removing it from the stash list) to your working directory.)

-> git stash pop

(Applies the most recent stash to your working directory and removes it from the stash list.)

-> git stash drop stash@{n}

(Removes a specific stash from the stash list without applying it.
Example: git stash drop stash@{1} (drops the second stash))

-> git stash clear

(Deletes all stashes in your stash list.)

-> git stash branch <branch_name>

(Creates a new branch from where you stashed and applies the stash to it. This is useful if you want to create a branch specifically for the stashed work.

Example: git stash branch feature-branch stash@{0}

feature-branch: This is the name you want to give to the new branch that will be created. You can replace feature-branch with any name 

stash@{0}: This refers to the most recent stash entry. Stashes are indexed, and stash@{0} represents the latest stash, stash@{1} the one before that, and so on. You can specify a different stash by changing the index number if needed.)

------------------------------------------

--> MERGE COMMANDS <--

-> git merge <branch-name>

(Merges the specified branch into the current branch. It combines the changes from <branch> with your current branch.)

-> git merge --no-ff <branch-name>

(Performs a merge that creates a new commit even if the merge could be performed with a fast-forward. This preserves the history of the merged branch.)

-> git merge --squash <branch-name>

(Combines all changes from the specified branch into a single commit on the current branch, without creating a merge commit. The changes will be staged for commit.)

-> git merge --abort

(Aborts a merge process and resets the working directory to the state before the merge started. This is useful if you encounter conflicts and want to cancel the merge.)

-> git log --merges

(Displays a log of all merge commits in the current branch. This is useful for reviewing the history of merges.)

------------------------------------------

------------------------------------------

------------------------------------------

-----------------------------------------*/