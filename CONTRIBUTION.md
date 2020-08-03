# Contribution Guide

## git workflows

### Fork and clone the project, then set the upstream

``` bash
git clone <repo:forked>
cd repo
git remote add upstream <repo:forked from>
```

### Update dev br. from the upstream

``` bash
git checkout dev
git pull upstream dev
```

## Regular git workflow

1. Create a new topic branch (i.e. “issue[number]”, Example: “issue69”)

``` bash
git checkout -b issue[number]
```

2. Commit changes

``` bash
git add .
git commit -m "commit message"
```

3. Push origin

``` bash
git push origin(your repo) issue[number]
```

4. Fetch the Upstream/Dev

``` bash
git fetch upstream dev
```

5. Merge upstream/dev with the issue[number] branch

``` bash
git checkout issue[number]
git merge upstream/dev
```

6. After fixing conflicts, run all test to ensure nothing breaks and then just run

``` bash
git add .
```

7. Push to forked branch:

``` bash
git push origin(your repo) issue[number]
```

8. Open a Pull Request with a clear title and description against the  dev branch.
Please make sure, your pull request have only your changes necessery files. Check it by command

``` bash
git diff issue[number] upstream/dev

// Or
git diff filename.md
```

9. Remove the issue branch after successful pull request

``` bash
git branch -D issue[number]
git push origin :issue[number]
```

### [House of rules]

* Master branch always deployable. So, please never commit on master br.
[Introducing GitFlow](https://datasift.github.io/gitflow/introducingGitFlow.html)
* Test before you push. Do not push half-done work.
* Features are developed in branches and merged into dev branch.
* Create a pull request in `dev` branch.
* Code will be reviewed by peers before the merge.

### Commit and messages

Commit message should be brief but descriptive enough to convey the message of what has been done in this commit, for example

* Add delete user option in the dashboard
* Replace jQuery onReady listener with plain JS; fixes #13
* Add issue number in final commit message when the task is complete

### Coding style

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