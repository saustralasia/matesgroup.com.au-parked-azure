# Contribution Guide

This guide tells you the contribution process of our team.

# Cloning workflows

Fork / clone the project and set upstream; where '**origin**' is your default Forked repository. 

``` bash
git clone <repo:forked>
cd repo
git remote add upstream <repo:forked from>
```

Update **dev** branch from the **upstream**

``` bash
git checkout dev
git pull upstream dev
```

# Regular git workflow

1. Create a new topic branch (i.e. 'issue[number]', Example: '**issue77**')

``` bash
git checkout -b issue77
```

2. Commit the changes

``` bash
git add .
git commit -m "commit message"
```

3. Push it to origin only

``` bash
git push origin issue77
```

4. Fetch the '**Upstream/Dev**'

``` bash
git fetch upstream dev
```

5. Merge '**upstream/dev**' with the '**issue77**' branch

``` bash
git checkout issue77
git merge upstream/dev
```

6. After **fixing conflicts**, run all test to ensure nothing breaks. If everyting works fine then add files to the stage.

``` bash
git add .
```

7. Push to forked(your) branch:

``` bash
git push origin issue77
```

8. Open a Pull Request with a clear title and description against the  dev branch.

***************** https://docs.gitlab.com/ee/topics/git/numerous_undo_possibilities_in_git/

- Discard all local changes, but save them for later: `git stash`
- Discard everything permanently: `git reset --hard`
- Discarding local changes (permanently) to a file: `git checkout -- <file>`
- Discard all local changes to all files permanently: `git reset --hard`
**************


**************** https://stackoverflow.com/questions/1783405/how-do-i-check-out-a-remote-git-branch

To fetch a branch, you simply need to: `git fetch origin`

This will fetch all of the remote branches for you. You can see the branches available for checkout with: `git branch -v -a`

With the remote branches in hand, you now need to check out the branch you are interested in, giving you a local working copy: `git checkout -b test origin/test`
***************************


- Also, please make sure, your pull request have only your changes necessery files. Check it by command

``` bash
git diff issue77 upstream/dev

// Or

git diff filename.md
```

9. Remove the '**issue77**' branch after successful pull request

``` bash
git branch -D issue[number]
git push origin :issue[number]
```

# House of rules

* Master branch always deployable. So, please never commit on master br.
[Introducing GitFlow](https://datasift.github.io/gitflow/introducingGitFlow.html)
* Test before you push. Do not push half-done work.
* Features are developed in branches and merged into dev branch.
* Create a pull request in '**dev**' branch.
* Code will be reviewed by peers before the merge.

## Commit and messages

Commit message should be brief but descriptive enough to convey the message of what has been done in this commit, for example

* Add delete user option in the dashboard
* Replace jQuery onReady listener with plain JS; fixes #13
* Add issue number in final commit message when the task is complete

## Coding style

[PSR-2: Coding Style Guide](https://www.php-fig.org/psr/psr-2/)

## Project workflow

* Tasks will be created as an issue with appropriate label and milestone, also be available in project board of the repository.
* By default tasks will be at `Backlog` column.
* You can self-assign yourself to a task or task can be assigned to you.
* When a member start a task, the card should be moved to `In Progress` column.
* When someone test a task other than the original contributor after task is complete it should be placed in `In Review`.
* When a task is reviewed by a peer the task should be placed in `Done` column.
* Only one member should work in a single task.

Thank you!

[@bdjunayed](https://twitter.com/bdjunayed)