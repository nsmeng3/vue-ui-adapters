#!/bin/bash

# 定义分支列表
BRANCHES=("main" "vue2" "vue3")

# 确保在 git 仓库根目录
if [ ! -d ".git" ]; then
  echo "Error: Must run this script from the git repository root."
  exit 1
fi

# 更新 main 分支
echo "Updating main branch..."
git checkout main
git pull origin main

# 检查并推送 src/shared 子模块的本地变更
echo "Checking for local changes in src/shared..."
cd src/shared
git add .
git commit -m "Local changes in src/shared" || echo "No local changes"
git push origin main
cd ../..  # 返回项目根目录
git add src/shared
git commit -m "Update src/shared submodule reference" || echo "No changes"

# 更新子模块
echo "Updating submodule 'src/shared'..."
git submodule update --init --remote
git add src/shared
git commit -m "Update src/shared submodule to latest" || echo "No changes in submodule"

# 推送 main 分支变更
git push origin main

# 同步到其他分支
for branch in "${BRANCHES[@]}"; do
  if [ "$branch" != "main" ]; then
    echo "Syncing branch: $branch"
    git checkout "$branch"
    git merge main --no-edit || {
      echo "Merge conflict detected in $branch!"
      echo "Please resolve conflicts manually, then run: git commit && git push origin $branch"
      git checkout main
      exit 1
    }
    git submodule update --init
    git push origin "$branch"
  fi
done

echo "Sync completed successfully!"
git checkout main
