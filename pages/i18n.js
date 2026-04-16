(function () {
  var STORAGE_KEY = 'pigcoder-locale';
  var SUPPORTED_LOCALES = ['zh-CN', 'en-US'];

  var translations = {
    'zh-CN': {
      common: {
        nav: {
          index: '首页',
          docs: '文档',
          pricing: '价格'
        },
        header: {
          console: '控制台',
          switchToEnglish: '切换到英文',
          switchToChinese: '切换到中文'
        },
        footer: {
          tagline: '稳定、高速、安全的 AI 模型中转枢纽，为全球开发者赋能。',
          products: '产品与服务',
          support: '技术支持',
          about: '关于我们',
          copyright: '© 2024 Pigcoder Tech. All rights reserved.',
          links: {
            intro: '产品介绍',
            models: '模型列表',
            pricing: '价格体系',
            enterprise: '企业版',
            docs: '开发者文档',
            api: 'API 参考',
            status: '状态监控',
            contact: '联系我们',
            privacy: '隐私政策',
            terms: '服务条款'
          }
        },
        cta: {
          start: '立即开始',
          docs: '查看文档',
          launch: '立即启动 Pigcoder',
          recharge: '立即充值',
          console: '立即前往控制台'
        }
      },
      index: {
        title: 'Pigcoder - 稳定高速的 AI 编程中转站',
        hero: {
          badge: '新一代 AI 编程中转站',
          title: '稳定高速 <span class="text-transparent bg-clip-text bg-gradient-to-r from-custom-gold to-amber-300">AI 编程中转站</span>',
          description: '为开发者打造的专业级大模型中转平台。一个 API Key 畅享全球顶级 AI 能力，极速响应，安全可靠。',
          codeComment: '# 使用统一接口调用顶级模型',
          codePrompt: '"帮我写一个高效的排序算法"'
        },
        choose: {
          title: '为什么选择 Pigcoder'
        },
        features: {
          response: {
            title: '极速响应',
            description: '全球多节点冗余分发，毫秒级延迟，确保您的编程体验流畅无阻。'
          },
          availability: {
            title: '高可用性',
            description: '99.99% 服务可用性承诺，自动故障切换，告别模型宕机烦恼。'
          },
          security: {
            title: '数据安全',
            description: '企业级加密传输，严格执行零日志政策，全面保护您的核心代码资产。'
          },
          cost: {
            title: '成本优化',
            description: '灵活的计费模式，按需付费，比直接集成多家 API 节省高达 40% 的成本。'
          },
          integration: {
            title: '一键接入',
            description: '完美兼容 OpenAI 接口规范，只需修改 BaseURL，现有工具瞬间升级 AI 能力。'
          },
          monitoring: {
            title: '精细监控',
            description: '可视化用量统计与限流管理，让每一笔额度消耗都清晰可见。'
          }
        },
        models: {
          title: '全模型覆盖',
          description: '整合全球最顶尖的 AI 模型资源。无论您需要逻辑推理、代码生成还是多模态理解，Pigcoder 都能为您提供最强战力支撑。',
          zhipu: '智谱'
        },
        toolbox: {
          title: '开发者工具箱',
          subtitle: '不仅是中转，更是生产力加速引擎',
          terminal: {
            badge: '核心能力',
            title: '统一命令终端',
            description: '通过标准化 CLI 工具直接在终端调用任意模型，支持管道符输出与文件直接读取，重塑您的工作流。'
          },
          telemetry: {
            badge: '监控审计',
            title: '即时遥测',
            description: '实时观察每一个 Request 的生命周期，精准捕获异常与瓶颈，确保线上业务纹丝不动。'
          },
          security: {
            title: '安全防护',
            description: '内置敏感词库过滤与智能反欺诈系统，自动识别异常调用行为，保障您的账户安全。'
          },
          ecosystem: {
            title: '生态同步',
            description: '完美适配 VS Code, JetBrains 全家桶及各种主流开发者浏览器插件，全场景 AI 赋能。'
          }
        },
        bottom: {
          title: '准备好开启智能编程了吗？'
        }
      },
      pricing: {
        title: '价格 - Pigcoder',
        hero: {
          badge: '灵活计费方案',
          title: '<span class="text-white">选择适合你的</span><span class="text-transparent bg-clip-text bg-gradient-to-r from-custom-gold to-amber-300">订阅套餐</span>',
          description: '通过支付购买或兑换码激活获取订阅服务'
        },
        tabs: {
          payg: '按量付费',
          monthly: '包月套餐'
        },
        banner: {
          title: '按量付费模式',
          description: '无需订阅，充值即用，按实际消耗扣费。余额所有渠道通用，可自由切换。价格以美元计价（当前比例：1美元≈1人民币）',
          hint: '倍率越低越划算 · 0.15倍率 = 1元可用约6.67美元额度'
        },
        note: '* 上述套餐价格与权益请以控制台「订阅」页面与官方公告为准。',
        faq: {
          title: '常见问题',
          model: {
            q: '支持哪些 AI 模型？',
            a: '目前支持 Claude 全系列、GPT 和 Gemini。'
          },
          refund: {
            q: '可以退款吗？',
            a: '可以。'
          },
          support: {
            q: '如何获取技术支持？',
            a: '查阅文档、加入用户群、通过工单联系客服。'
          }
        },
        modal: {
          close: '关闭充值引导',
          title: '现已支持在控制台直接充值',
          step1: '前往控制台注册账号或登录',
          step2: '进入充值 / 订阅菜单',
          step3: '完成充值',
          step4: '进入 API 密钥菜单，创建 API 密钥，选择分组',
          step5: '点击使用密钥查看 URL'
        }
      },
      docs: {
        title: '技术文档 - Pigcoder',
        hero: {
          badge: 'Documentation',
          title: 'Pigcoder 接入文档',
          description: '这里汇总平台开通、API Key 获取、各类 CLI 工具配置和常见排查方式。信息结构保持文档页的克制与可读性，但视觉语言与首页、价格页统一。',
          cards: {
            startLabel: 'Getting Started',
            startTitle: '平台开通与密钥',
            toolingLabel: 'Tooling',
            toolingTitle: 'CLI 配置入口',
            referenceLabel: 'Reference',
            referenceTitle: '快速对照与排查'
          }
        },
        sections: {
          platform: '平台操作',
          tools: 'CLI 工具配置',
          reference: '参考'
        },
        sidebar: {
          title: 'Docs Index',
          description: '快速定位接入步骤、工具配置与常见问题。',
          gettingStarted: '开始使用',
          tools: 'CLI 工具配置',
          reference: '参考',
          links: {
            register: '注册与登录',
            apikey: '获取 API Key',
            endpoint: '确认端点地址',
            usage: '查看用量',
            quickConfig: '快速配置',
            claudeCode: 'Claude Code',
            codexCli: 'Codex CLI',
            geminiCli: 'Gemini CLI',
            opencode: 'OpenCode',
            droidCli: 'Droid CLI',
            ccSwitch: 'CC Switch',
            quickRef: '快速对照表',
            commands: '常用命令',
            troubleshoot: '故障排查'
          }
        },
        backToTop: '顶部',
        platform: {
          register: `
            <h3 class="text-xl font-semibold text-custom-navy dark:text-white mb-4">Step 1 — 注册与登录</h3>
            <ol class="list-decimal ml-6 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>访问 <a href="https://sub2.pigcoder.com" target="_blank" class="text-custom-gold hover:underline font-bold">控制台</a>。</li>
              <li>使用邮箱或第三方账号（GitHub / Google）完成注册。</li>
              <li>登录后进入个人仪表盘。</li>
            </ol>
          `,
          apikey: `
            <h3 class="text-xl font-semibold text-custom-navy dark:text-white mb-4">Step 2 — 获取 API Key</h3>
            <ol class="list-decimal ml-6 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>进入控制台后，点击左侧菜单「令牌」。</li>
              <li>点击「创建令牌」按钮。</li>
              <li>为令牌填写一个名称（如 <code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">my-cli-key</code>）。</li>
              <li>根据需要选择令牌分组：
                <ul class="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Anthropic 分组</strong> — 用于 Claude Code 等 Anthropic 协议工具</li>
                  <li><strong>OpenAI 分组</strong> — 用于 Codex CLI、OpenCode 等 OpenAI 兼容工具</li>
                  <li><strong>Gemini 分组</strong> — 用于 Gemini CLI</li>
                </ul>
              </li>
              <li>点击「提交」创建令牌。</li>
              <li>复制并妥善保存生成的 API Key。</li>
            </ol>
            <div class="border-l-4 border-custom-gold bg-amber-50 dark:bg-amber-900/20 p-4 mt-4 rounded-r-lg">
              <p class="text-sm text-gray-700 dark:text-gray-300"><strong>注意：</strong>API Key 仅在创建时显示一次，请务必立即复制保存。如果丢失，需要重新创建新的令牌。</p>
            </div>
          `,
          endpointTitle: 'Step 3 — 确认端点地址',
          endpointLead: '根据不同的 CLI 工具，使用对应的端点地址：',
          endpointHead: `
            <tr class="bg-slate-50 dark:bg-[#1a2332]">
              <th class="px-4 py-3 text-sm font-semibold text-custom-navy dark:text-gray-300 border-b border-slate-200 dark:border-white/10">协议类型</th>
              <th class="px-4 py-3 text-sm font-semibold text-custom-navy dark:text-gray-300 border-b border-slate-200 dark:border-white/10">端点地址</th>
              <th class="px-4 py-3 text-sm font-semibold text-custom-navy dark:text-gray-300 border-b border-slate-200 dark:border-white/10">适用工具</th>
            </tr>
          `,
          endpointBody: `
            <tr class="border-b border-slate-100 dark:border-white/5">
              <td class="px-4 py-3 font-medium">Anthropic</td>
              <td class="px-4 py-3"><code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">https://sub2.pigcoder.com</code></td>
              <td class="px-4 py-3">Claude Code</td>
            </tr>
            <tr class="border-b border-slate-100 dark:border-white/5">
              <td class="px-4 py-3 font-medium">OpenAI</td>
              <td class="px-4 py-3"><code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">https://sub2.pigcoder.com/v1</code></td>
              <td class="px-4 py-3">Codex CLI, OpenCode, Droid CLI</td>
            </tr>
            <tr>
              <td class="px-4 py-3 font-medium">Gemini</td>
              <td class="px-4 py-3"><code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">https://sub2.pigcoder.com/v1beta</code></td>
              <td class="px-4 py-3">Gemini CLI</td>
            </tr>
          `,
          usage: `
            <h3 class="text-xl font-semibold text-custom-navy dark:text-white mb-4">Step 4 — 查看用量</h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">登录控制台后，在首页仪表盘即可查看当前额度余额和调用统计。点击左侧菜单「日志」可以查看详细的请求记录与用量明细。</p>
          `,
          quickConfig: `
            <h3 class="text-xl font-semibold text-custom-navy dark:text-white mb-4">Step 5 — 使用密钥快速配置</h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">获取 API Key 后，最快的方式是通过环境变量配置。在终端中执行：</p>
            <div class="code-block bg-[#F1F5F9] dark:bg-[#1a2332] rounded-lg p-4 font-mono text-sm mb-4">
              <span class="lang-label">bash</span>
              <pre class="text-gray-800 dark:text-gray-200 overflow-x-auto"><code># Anthropic 协议（Claude Code）
export ANTHROPIC_API_KEY="sk-pig-xxxx"
export ANTHROPIC_BASE_URL="https://sub2.pigcoder.com"

# OpenAI 协议（Codex CLI / OpenCode / Droid CLI）
export OPENAI_API_KEY="sk-pig-xxxx"
export OPENAI_BASE_URL="https://sub2.pigcoder.com/v1"

# Gemini 协议（Gemini CLI）
export GEMINI_API_KEY="sk-pig-xxxx"</code></pre>
            </div>
            <div class="border-l-4 border-custom-green bg-green-50 dark:bg-green-900/20 p-4 rounded-r-lg">
              <p class="text-sm text-gray-700 dark:text-gray-300"><strong>提示：</strong>建议将环境变量写入 <code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">~/.bashrc</code> 或 <code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">~/.zshrc</code>，这样每次打开终端都会自动加载。</p>
            </div>
          `,
          ccSwitchImport: `
            <h3 class="text-xl font-semibold text-custom-navy dark:text-white mb-4">Step 6 — CC Switch 一键导入</h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">如果你使用 CC Switch，可以通过 Deep Link 一键导入服务商配置，无需手动编辑任何文件：</p>
            <div class="code-block bg-[#F1F5F9] dark:bg-[#1a2332] rounded-lg p-4 font-mono text-sm mb-4">
              <span class="lang-label">text</span>
              <pre class="text-gray-800 dark:text-gray-200 overflow-x-auto"><code>ccswitch://provider/add?name=Pigcoder&apiBaseUrl=https://sub2.pigcoder.com&apiKey=sk-pig-xxxx</code></pre>
            </div>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">在浏览器中打开上述链接，CC Switch 将自动添加 Pigcoder 作为服务商，填入你的 API Key 即可。</p>
          `
        },
        tools: {
          claudeCode: 'Claude Code',
          codexCli: 'Codex CLI',
          geminiCli: 'Gemini CLI',
          opencode: 'OpenCode',
          droidCli: 'Droid CLI',
          ccSwitch: 'CC Switch'
        },
        reference: {
          quickRefTitle: '快速对照表',
          commandsTitle: '常用命令',
          commandsLead: '以下是 CLI 工具中常用的内置命令：',
          troubleshootTitle: '故障排查'
        }
      }
    },
    'en-US': {
      common: {
        nav: {
          index: 'Home',
          docs: 'Docs',
          pricing: 'Pricing'
        },
        header: {
          console: 'Console',
          switchToEnglish: 'Switch to English',
          switchToChinese: 'Switch to Chinese'
        },
        footer: {
          tagline: 'A stable, fast, and secure AI model gateway built for developers worldwide.',
          products: 'Products',
          support: 'Support',
          about: 'About',
          copyright: '© 2024 Pigcoder Tech. All rights reserved.',
          links: {
            intro: 'Overview',
            models: 'Model Catalog',
            pricing: 'Pricing Plans',
            enterprise: 'Enterprise',
            docs: 'Developer Docs',
            api: 'API Reference',
            status: 'Status',
            contact: 'Contact Us',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service'
          }
        },
        cta: {
          start: 'Get Started',
          docs: 'View Docs',
          launch: 'Launch Pigcoder',
          recharge: 'Recharge Now',
          console: 'Open Console'
        }
      },
      index: {
        title: 'Pigcoder - Stable High-Speed AI Coding Gateway',
        hero: {
          badge: 'Next-Gen AI Coding Gateway',
          title: 'Stable High-Speed <span class="text-transparent bg-clip-text bg-gradient-to-r from-custom-gold to-amber-300">AI Coding Gateway</span>',
          description: 'A professional model gateway built for developers. One API key unlocks top-tier AI capabilities worldwide with fast response times and dependable security.',
          codeComment: '# Call top-tier models through one unified interface',
          codePrompt: '"Write an efficient sorting algorithm for me"'
        },
        choose: {
          title: 'Why Pigcoder'
        },
        features: {
          response: {
            title: 'Fast Response',
            description: 'Multi-region redundant routing keeps latency in the millisecond range and your coding flow uninterrupted.'
          },
          availability: {
            title: 'High Availability',
            description: '99.99% service availability with automatic failover, so model outages no longer block your work.'
          },
          security: {
            title: 'Data Security',
            description: 'Enterprise-grade encryption and a strict zero-log policy keep your core code assets protected.'
          },
          cost: {
            title: 'Cost Efficiency',
            description: 'Flexible pay-as-you-go billing that can cut integration costs by up to 40% compared with managing multiple APIs directly.'
          },
          integration: {
            title: 'Drop-In Integration',
            description: 'Fully compatible with the OpenAI API spec. Swap the BaseURL and upgrade your existing tools instantly.'
          },
          monitoring: {
            title: 'Usage Visibility',
            description: 'Visual usage analytics and rate-control management keep every unit of quota visible and controllable.'
          }
        },
        models: {
          title: 'Full Model Coverage',
          description: 'Aggregate top AI models from around the world. Whether you need reasoning, code generation, or multimodal understanding, Pigcoder gives you the strongest stack in one place.',
          zhipu: 'Zhipu AI'
        },
        toolbox: {
          title: 'Developer Toolbox',
          subtitle: 'More than a gateway, it is a productivity accelerator',
          terminal: {
            badge: 'Core Capability',
            title: 'Unified Terminal Workflow',
            description: 'Call any model directly from standardized CLI tools, pipe outputs, read files inline, and reshape your developer workflow.'
          },
          telemetry: {
            badge: 'Monitoring',
            title: 'Live Telemetry',
            description: 'Observe the lifecycle of every request in real time, capture anomalies precisely, and keep production steady.'
          },
          security: {
            title: 'Security Guardrails',
            description: 'Built-in sensitive-word filtering and anti-abuse detection automatically identify abnormal traffic and protect your account.'
          },
          ecosystem: {
            title: 'Ecosystem Sync',
            description: 'Works smoothly with VS Code, the JetBrains suite, and mainstream developer browser extensions for end-to-end AI assistance.'
          }
        },
        bottom: {
          title: 'Ready to Start Smarter Coding?'
        }
      },
      pricing: {
        title: 'Pricing - Pigcoder',
        hero: {
          badge: 'Flexible Billing',
          title: '<span class="text-white">Choose the</span><span class="text-transparent bg-clip-text bg-gradient-to-r from-custom-gold to-amber-300">right plan</span>',
          description: 'Purchase directly or redeem access codes to activate your subscription'
        },
        tabs: {
          payg: 'Pay As You Go',
          monthly: 'Monthly Plans'
        },
        banner: {
          title: 'Pay-As-You-Go Mode',
          description: 'No subscription required. Recharge and use immediately, with billing based on actual usage. Balance is shared across all channels and can be switched freely. Prices are denominated in USD.',
          hint: 'Lower ratios mean better value · 0.15 ratio gives roughly $6.67 of usable quota per ¥1'
        },
        note: '* Final pricing and entitlements are subject to the Subscription page in the console and official announcements.',
        faq: {
          title: 'FAQ',
          model: {
            q: 'Which AI models are supported?',
            a: 'Pigcoder currently supports the full Claude family, GPT, and Gemini.'
          },
          refund: {
            q: 'Can I get a refund?',
            a: 'Yes.'
          },
          support: {
            q: 'How can I get technical support?',
            a: 'Read the docs, join the user group, or contact support through tickets.'
          }
        },
        modal: {
          close: 'Close recharge guide',
          title: 'Direct recharge is now available in the console',
          step1: 'Create an account or sign in to the console',
          step2: 'Open the Recharge / Subscription menu',
          step3: 'Complete the recharge',
          step4: 'Open the API Key menu, create a key, and choose a group',
          step5: 'Click the key usage guide to view the URL'
        }
      },
      docs: {
        title: 'Documentation - Pigcoder',
        hero: {
          badge: 'Documentation',
          title: 'Pigcoder Integration Docs',
          description: 'Everything you need for account setup, API key creation, CLI configuration, and common troubleshooting. The page stays documentation-first while matching the rest of the site visually.',
          cards: {
            startLabel: 'Getting Started',
            startTitle: 'Account & Keys',
            toolingLabel: 'Tooling',
            toolingTitle: 'CLI Setup',
            referenceLabel: 'Reference',
            referenceTitle: 'Quick Tables & Troubleshooting'
          }
        },
        sections: {
          platform: 'Platform Setup',
          tools: 'CLI Tooling',
          reference: 'Reference'
        },
        sidebar: {
          title: 'Docs Index',
          description: 'Jump straight to onboarding steps, tool setup, and common issues.',
          gettingStarted: 'Getting Started',
          tools: 'CLI Tooling',
          reference: 'Reference',
          links: {
            register: 'Register & Sign In',
            apikey: 'Create API Key',
            endpoint: 'Endpoint URLs',
            usage: 'Usage Metrics',
            quickConfig: 'Quick Config',
            claudeCode: 'Claude Code',
            codexCli: 'Codex CLI',
            geminiCli: 'Gemini CLI',
            opencode: 'OpenCode',
            droidCli: 'Droid CLI',
            ccSwitch: 'CC Switch',
            quickRef: 'Quick Reference',
            commands: 'Common Commands',
            troubleshoot: 'Troubleshooting'
          }
        },
        backToTop: 'Top',
        platform: {
          register: `
            <h3 class="text-xl font-semibold text-custom-navy dark:text-white mb-4">Step 1 — Register and Sign In</h3>
            <ol class="list-decimal ml-6 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Open the <a href="https://sub2.pigcoder.com" target="_blank" class="text-custom-gold hover:underline font-bold">console</a>.</li>
              <li>Create an account with email or a third-party login such as GitHub or Google.</li>
              <li>After signing in, enter your personal dashboard.</li>
            </ol>
          `,
          apikey: `
            <h3 class="text-xl font-semibold text-custom-navy dark:text-white mb-4">Step 2 — Create an API Key</h3>
            <ol class="list-decimal ml-6 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Open the console and click the <strong>Tokens</strong> menu.</li>
              <li>Click the <strong>Create Token</strong> button.</li>
              <li>Give the token a name, for example <code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">my-cli-key</code>.</li>
              <li>Choose a token group based on the tool you want to use:
                <ul class="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Anthropic Group</strong> — for Claude Code and other Anthropic-protocol tools</li>
                  <li><strong>OpenAI Group</strong> — for Codex CLI, OpenCode, and other OpenAI-compatible tools</li>
                  <li><strong>Gemini Group</strong> — for Gemini CLI</li>
                </ul>
              </li>
              <li>Submit the form to create the token.</li>
              <li>Copy and store the generated API key safely.</li>
            </ol>
            <div class="border-l-4 border-custom-gold bg-amber-50 dark:bg-amber-900/20 p-4 mt-4 rounded-r-lg">
              <p class="text-sm text-gray-700 dark:text-gray-300"><strong>Note:</strong> The API key is shown only once when it is created. Copy it immediately. If it is lost, create a new token.</p>
            </div>
          `,
          endpointTitle: 'Step 3 — Confirm Endpoint URLs',
          endpointLead: 'Use the corresponding endpoint for each CLI tool:',
          endpointHead: `
            <tr class="bg-slate-50 dark:bg-[#1a2332]">
              <th class="px-4 py-3 text-sm font-semibold text-custom-navy dark:text-gray-300 border-b border-slate-200 dark:border-white/10">Protocol</th>
              <th class="px-4 py-3 text-sm font-semibold text-custom-navy dark:text-gray-300 border-b border-slate-200 dark:border-white/10">Endpoint</th>
              <th class="px-4 py-3 text-sm font-semibold text-custom-navy dark:text-gray-300 border-b border-slate-200 dark:border-white/10">Tools</th>
            </tr>
          `,
          endpointBody: `
            <tr class="border-b border-slate-100 dark:border-white/5"><td class="px-4 py-3 font-medium">Anthropic</td><td class="px-4 py-3"><code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">https://sub2.pigcoder.com</code></td><td class="px-4 py-3">Claude Code</td></tr>
            <tr class="border-b border-slate-100 dark:border-white/5"><td class="px-4 py-3 font-medium">OpenAI</td><td class="px-4 py-3"><code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">https://sub2.pigcoder.com/v1</code></td><td class="px-4 py-3">Codex CLI, OpenCode, Droid CLI</td></tr>
            <tr><td class="px-4 py-3 font-medium">Gemini</td><td class="px-4 py-3"><code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">https://sub2.pigcoder.com/v1beta</code></td><td class="px-4 py-3">Gemini CLI</td></tr>
          `,
          usage: `
            <h3 class="text-xl font-semibold text-custom-navy dark:text-white mb-4">Step 4 — Check Usage</h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">After signing in, your dashboard shows the current balance and request stats. Open the <strong>Logs</strong> menu to inspect request history and usage details.</p>
          `,
          quickConfig: `
            <h3 class="text-xl font-semibold text-custom-navy dark:text-white mb-4">Step 5 — Quick Configuration</h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">After you get an API key, the fastest setup path is via environment variables:</p>
            <div class="code-block bg-[#F1F5F9] dark:bg-[#1a2332] rounded-lg p-4 font-mono text-sm mb-4"><span class="lang-label">bash</span><pre class="text-gray-800 dark:text-gray-200 overflow-x-auto"><code># Anthropic protocol (Claude Code)
export ANTHROPIC_API_KEY="sk-pig-xxxx"
export ANTHROPIC_BASE_URL="https://sub2.pigcoder.com"

# OpenAI protocol (Codex CLI / OpenCode / Droid CLI)
export OPENAI_API_KEY="sk-pig-xxxx"
export OPENAI_BASE_URL="https://sub2.pigcoder.com/v1"

# Gemini protocol (Gemini CLI)
export GEMINI_API_KEY="sk-pig-xxxx"</code></pre></div>
            <div class="border-l-4 border-custom-green bg-green-50 dark:bg-green-900/20 p-4 rounded-r-lg"><p class="text-sm text-gray-700 dark:text-gray-300"><strong>Tip:</strong> Save these values in <code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">~/.bashrc</code> or <code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">~/.zshrc</code> so every new terminal session loads them automatically.</p></div>
          `,
          ccSwitchImport: `
            <h3 class="text-xl font-semibold text-custom-navy dark:text-white mb-4">Step 6 — One-Click CC Switch Import</h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">If you use CC Switch, you can import the provider configuration with a Deep Link instead of editing files manually:</p>
            <div class="code-block bg-[#F1F5F9] dark:bg-[#1a2332] rounded-lg p-4 font-mono text-sm mb-4"><span class="lang-label">text</span><pre class="text-gray-800 dark:text-gray-200 overflow-x-auto"><code>ccswitch://provider/add?name=Pigcoder&apiBaseUrl=https://sub2.pigcoder.com&apiKey=sk-pig-xxxx</code></pre></div>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">Open the link above in your browser and CC Switch will add Pigcoder as a provider automatically. Then paste your API key and you are done.</p>
          `
        },
        tools: {
          claudeCode: 'Claude Code',
          codexCli: 'Codex CLI',
          geminiCli: 'Gemini CLI',
          opencode: 'OpenCode',
          droidCli: 'Droid CLI',
          ccSwitch: 'CC Switch'
        },
        reference: {
          quickRefTitle: 'Quick Reference',
          commandsTitle: 'Common Commands',
          commandsLead: 'These are the built-in commands you will use most often in CLI tools:',
          troubleshootTitle: 'Troubleshooting'
        }
      }
    }
  };

  function normalizeLocale(locale) {
    if (!locale) return 'zh-CN';
    if (SUPPORTED_LOCALES.indexOf(locale) !== -1) return locale;
    if (String(locale).toLowerCase().indexOf('en') === 0) return 'en-US';
    return 'zh-CN';
  }

  function getStoredLocale() {
    try {
      var value = localStorage.getItem(STORAGE_KEY);
      return value ? normalizeLocale(value) : null;
    } catch (error) {
      return null;
    }
  }

  function getBrowserLocale() {
    return normalizeLocale(navigator.language || navigator.userLanguage || 'zh-CN');
  }

  var currentLocale = getStoredLocale() || getBrowserLocale();

  function lookup(locale, key) {
    return key.split('.').reduce(function (result, part) {
      return result && Object.prototype.hasOwnProperty.call(result, part) ? result[part] : undefined;
    }, translations[locale]);
  }

  function t(key) {
    var localeValue = lookup(currentLocale, key);
    if (localeValue !== undefined) return localeValue;
    var fallbackValue = lookup('zh-CN', key);
    return fallbackValue !== undefined ? fallbackValue : key;
  }

  function collectNodes(root, selector) {
    var nodes = [];
    if (root.nodeType === 1 && root.matches(selector)) {
      nodes.push(root);
    }
    return nodes.concat(Array.prototype.slice.call(root.querySelectorAll(selector)));
  }

  function applyHtml(root) {
    collectNodes(root, '[data-i18n-html]').forEach(function (node) {
      var value = t(node.getAttribute('data-i18n-html'));
      if (typeof value === 'string') {
        node.innerHTML = value;
      }
    });
  }

  function applyText(root) {
    collectNodes(root, '[data-i18n]').forEach(function (node) {
      var value = t(node.getAttribute('data-i18n'));
      if (typeof value === 'string') {
        node.textContent = value;
      }
    });
  }

  function applyAttributes(root) {
    collectNodes(root, '[data-i18n-attr]').forEach(function (node) {
      node.getAttribute('data-i18n-attr').split(';').forEach(function (entry) {
        var parts = entry.split(':');
        if (parts.length !== 2) return;
        var attr = parts[0].trim();
        var key = parts[1].trim();
        var value = t(key);
        if (attr && typeof value === 'string') {
          node.setAttribute(attr, value);
        }
      });
    });
  }

  function updateLanguageToggle() {
    var button = document.getElementById('language-toggle');
    var label = document.getElementById('language-toggle-label');
    if (!button || !label) return;

    var nextIsEnglish = currentLocale === 'zh-CN';
    label.textContent = nextIsEnglish ? 'EN' : '中';

    var labelText = t(nextIsEnglish ? 'common.header.switchToEnglish' : 'common.header.switchToChinese');
    button.setAttribute('aria-label', labelText);
    button.setAttribute('title', labelText);

    if (button.dataset.bound === 'true') return;
    button.dataset.bound = 'true';
    button.addEventListener('click', function () {
      setLocale(currentLocale === 'zh-CN' ? 'en-US' : 'zh-CN', true);
    });
  }

  function apply(root) {
    document.documentElement.lang = currentLocale;
    applyHtml(root);
    applyText(root);
    applyAttributes(root);
    updateLanguageToggle();
  }

  function setLocale(locale, persist) {
    currentLocale = normalizeLocale(locale);
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, currentLocale);
      } catch (error) {
        // ignore
      }
    }
    apply(document);
    document.dispatchEvent(new CustomEvent('pigcoder:locale-changed', {
      detail: { locale: currentLocale }
    }));
  }

  window.PigcoderI18n = {
    t: t,
    get: function (key) {
      return t(key);
    },
    getLocale: function () {
      return currentLocale;
    },
    setLocale: setLocale,
    apply: apply
  };

  apply(document);

  document.addEventListener('pigcoder:partial-loaded', function (event) {
    if (event.detail && event.detail.root) {
      apply(event.detail.root);
    }
  });

  document.addEventListener('pigcoder:header-ready', function () {
    var root = document.getElementById('site-header');
    if (root) apply(root);
  });

  document.addEventListener('pigcoder:footer-ready', function () {
    var root = document.getElementById('site-footer');
    if (root) apply(root);
  });
})();
