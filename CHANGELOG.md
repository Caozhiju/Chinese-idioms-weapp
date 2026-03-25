# 更新日志 - v1.1.0

## 🌐 多语言支持已上线！

发布日期：2026年3月25日

### 新增功能

#### ✨ 中英文双语界面
- **语言切换按钮**：在页面顶部（中文 | English）
- **完整翻译**：
  - 所有导航菜单翻译成英文
  - 所有UI按钮和标签翻译成英文
  - 9个核心惯用语的完整英文讲解和例句

#### 📚 英文模式的内容
用户可以使用英文了解：
- 惯用语的英文名称和含义
- 英文版的文化背景解释
- 英文版的例句（三个水平）
- 英文版的常见错误说明

#### 💾 语言偏好保存
- 用户选择的语言会自动保存到浏览器
- 下次访问时自动加载之前的语言偏好
- 每个设备单独保存语言设置

### 技术改进

#### 新增文件
- `translations.js` - 所有UI文本的中英翻译字典
- `idioms-translations.js` - 惯用语内容的英文翻译

#### 修改了的文件
- `index.html` - 添加语言切换按钮和新脚本引入
- `app.js` - 添加多语言支持逻辑
- `styles.css` - 语言按钮的样式

### 使用说明

#### 如何切换语言
1. 打开网页
2. 点击右上角的"中文 | English"按钮
3. 选择想要的语言
4. 页面会自动刷新并显示选定的语言

#### 支持的语言
- 中文 (简体)
- English (英语)

### 已翻译的内容详情

#### UI 翻译
✅ 页面标题
✅ 导航菜单
✅ 搜索框
✅ 所有按钮
✅ 错误提示信息

#### 惯用语翻译
9个核心惯用语现已支持英文：
1. 狐假虎威 - Fox Borrows Tiger's Ferocity
2. 卧虎藏龙 - Hidden Tiger, Crouching Dragon
3. 一鸣惊人 - One Sound Astonishes All
4. 十年磨剑 - Ten Years of Polishing the Sword
5. 千锤百炼 - Refined through Thousand Strikes, Hundred Tempers
6. 心如刀割 - Heart Cut Like Knife
7. 眼高手低 - Eyes High, Hands Low
8. 画龙点睛 - Painting Dragon's Eyes
9. 南辕北辙 - Travel South but Head North

每个惯用语包括：
- English name (英文名称)
- English meaning (英文含义)
- English source (英文出处)
- English examples for 3 levels (三个水平的英文例句)
- English cultural background (英文文化背景)
- English common mistakes (英文常见错误)

### 后续计划

#### 计划支持的语言
- 日语 (日本語)
- 韩语 (한국어)
- 西班牙语 (Español)
- 法语 (Français)
- 德语 (Deutsch)

#### 需要改进的地方
- [ ] 练习题的英文翻译（当前全为中文）
- [ ] 更多惯用语的英文讲解
- [ ] 文化背景的更详细英文解释
- [ ] UI文本的更完整翻译
- [ ] 关于页面的完整翻译

### 如何贡献翻译

如果你想为其他语言贡献翻译：
1. Fork 这个项目
2. 创建新分支 `translations/language-name`
3. 在 `translations.js` 和 `idioms-translations.js` 中添加你的翻译
4. 提交 Pull Request

### 已知问题

- [ ] 部分练习题还是中文（需要后续开发）
- [ ] 关于页面的一些内容还是中文（需要后续翻译）
- [ ] 暂不支持RTL语言（如阿拉伯语）

### 版本信息

| 字段 | 内容 |
|------|------|
| 版本号 | 1.1.0 |
| 发布日期 | 2026年3月25日 |
| 状态 | ✅ 稳定版本 |
| 多语言支持 | ✅ 已启用 |

### 致谢

感谢所有测试和提供反馈的用户！

---

## 之前的版本 (v1.0.0)

### 初始发布 (2026年3月25日)
- ✨ 9个核心惯用语
- 📝 4种练习题型
- 📊 学习进度追踪
- 🌙 深色/浅色主题
- 📱 响应式设计

---

**所有用户升级为v1.1.0是完全免费的！清除浏览器缓存后可体验最新功能。**
