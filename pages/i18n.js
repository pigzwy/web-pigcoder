(function () {
  var STORAGE_KEY = 'pigcoder-locale';
  var LOCALE_DEFAULT_VERSION_KEY = 'pigcoder-locale-default-version';
  var LOCALE_DEFAULT_VERSION = '2026-06-09-zh-default';
  var SUPPORTED_LOCALES = ['zh-CN', 'en-US'];

  var translations = {
    'zh-CN': {
      common: {
        skip: '跳到主要内容',
        nav: {
          index: '首页',
          docs: '文档',
          pricing: '价格'
        },
        header: {
          console: '控制台',
          switchToEnglish: '切换到英文',
          switchToChinese: '切换到中文',
          switchToLight: '切换到浅色模式',
          switchToDark: '切换到深色模式',
          openMenu: '打开导航菜单',
          closeMenu: '关闭导航菜单',
          language: '语言',
          theme: '主题'
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
          start: '获取 API Key',
          docs: '查看接入文档',
          launch: '打开控制台',
          console: '立即前往控制台'
        }
      },
      index: {
        title: 'Pigcoder - 稳定高速的 AI 编程中转站',
        hero: {
          badge: 'AI Model Router / API Gateway',
          title: '统一模型路由 <span class="brand-emphasis">兼容 AI 编程工具</span>',
          description: '面向 Claude Code、Codex CLI、Gemini CLI 等开发者工具的统一 API 入口。按协议、模型、倍率和上下文能力选择路由，接入后即可调用多家模型。',
          codeComment: '# 使用统一接口调用顶级模型',
          codePrompt: '"帮我写一个高效的排序算法"',
          metrics: {
            protocolsValue: '3 协议',
            availability: 'OpenAI / Anthropic / Gemini',
            unifiedValue: '1 Key',
            unified: '跨模型统一鉴权',
            ratioValue: '倍率',
            savings: '按渠道透明计费'
          }
        },
        choose: {
          title: '路由与接入能力'
        },
        features: {
          response: {
            title: '协议兼容',
            description: '兼容 OpenAI / Anthropic / Gemini 常用协议，只需替换 Base URL 即可接入。'
          },
          availability: {
            title: '模型渠道',
            description: '按 Claude、Codex、Gemini 等模型渠道组织能力，便于按工具选择。'
          },
          security: {
            title: '上下文能力',
            description: '展示 200k、1M、thinking、WebSearch 等上下文和模型特性。'
          },
          cost: {
            title: '倍率透明',
            description: '每个渠道直接展示倍率和能力标签，避免包装成传统套餐。'
          },
          integration: {
            title: 'CLI 优先',
            description: '面向 Claude Code、Codex CLI、Gemini CLI、OpenCode 等开发者工具。'
          },
          monitoring: {
            title: '请求日志',
            description: '通过控制台查看调用日志、用量消耗、异常请求和密钥分组。'
          }
        },
        models: {
          title: 'Provider 与模型覆盖',
          description: '聚合 Claude、GPT、Gemini、智谱等模型能力，按协议和工具场景提供统一路由。',
          zhipu: '智谱'
        },
        toolbox: {
          title: '开发者接入面板',
          subtitle: '围绕 endpoint、环境变量、CLI、日志和密钥分组组织接入流程',
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
        integration: {
          eyebrow: 'Integration Flow',
          title: '从 API Key 到模型路由',
          description: 'Pigcoder 的页面信息围绕开发者接入路径组织：创建密钥、选择协议、替换 Endpoint、观察请求日志。',
          keys: {
            title: '创建 API Key',
            description: '在控制台创建令牌，并按工具选择 OpenAI、Anthropic 或 Gemini 分组。'
          },
          protocol: {
            title: '选择协议',
            description: '根据 Claude Code、Codex CLI、Gemini CLI 等工具选择对应协议入口。'
          },
          endpoint: {
            title: '替换 Endpoint',
            description: '只改 Base URL 和 API Key，尽量保持原工具配置方式不变。'
          },
          logs: {
            title: '查看日志',
            description: '通过请求日志追踪模型、渠道、用量、状态和异常原因。'
          }
        },
        matrix: {
          eyebrow: 'Routing Matrix',
          title: '按工具选择模型渠道',
          description: 'Pigcoder 强调模型渠道、协议、上下文和能力标签，方便开发者判断该走哪条路由。',
          columns: {
            channel: '渠道',
            protocol: '协议',
            context: '上下文 / 能力',
            tools: '适用工具'
          }
        },
        bottom: {
          eyebrow: 'API Ready',
          title: '准备接入 Pigcoder API？',
          description: '先创建 API Key，再按工具复制对应 Endpoint。文档页提供 Claude Code、Codex CLI、Gemini CLI 和 OpenCode 的接入示例。'
        }
      },
      pricing: {
        title: '价格 - Pigcoder',
        hero: {
          badge: '模型渠道与倍率',
          title: '<span>透明模型倍率</span><span class="brand-emphasis">与渠道能力</span>',
          description: '按 Provider 和工具场景查看倍率、模型、上下文、thinking、WebSearch 与适用工具。充值后按实际调用消耗，最终权益以控制台实时展示为准。',
          cards: {
            rechargeTitle: '余额通用',
            rechargeDescription: '充值余额可在不同模型渠道间使用，按实际调用消耗。',
            ratioTitle: '倍率透明',
            ratioDescription: '每个渠道直接展示兑换倍率和能力标签。',
            modelTitle: '能力标签',
            modelDescription: '上下文、thinking、WebSearch、CLI 适配一眼可见。'
          }
        },
        catalog: {
          eyebrow: 'Channel Catalog',
          title: '模型渠道倍率表',
          description: '按 Provider 和工具场景查看渠道倍率、可用模型和能力标签。充值后按实际调用消耗，最终权益以控制台实时展示为准。'
        },
        note: '* 页面展示为模型渠道与倍率说明，最终可用模型、倍率和权益以控制台实时配置为准。',
        card: {
          channel: '',
          ratio: '倍率',
          models: '可用模型',
          capabilities: '能力标签'
        },
        faq: {
          title: '接入与计费问题',
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
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Step 1 — 注册与登录</h3>
            <ol class="list-decimal ml-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
              <li>访问 <a href="https://sub2.pigcoder.com" target="_blank" class="text-custom-gold hover:underline font-bold">控制台</a>。</li>
              <li>使用邮箱或第三方账号（GitHub / Google）完成注册。</li>
              <li>登录后进入个人仪表盘。</li>
            </ol>
          `,
          apikey: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Step 2 — 获取 API Key</h3>
            <ol class="list-decimal ml-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
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
              <p class="text-sm text-slate-700 dark:text-slate-300"><strong>注意：</strong>API Key 仅在创建时显示一次，请务必立即复制保存。如果丢失，需要重新创建新的令牌。</p>
            </div>
          `,
          endpointTitle: 'Step 3 — 确认端点地址',
          endpointLead: '根据不同的 CLI 工具，使用对应的端点地址：',
          endpointHead: `
            <tr class="bg-slate-50 dark:bg-[#111C2D]">
              <th class="px-4 py-3 text-sm font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">协议类型</th>
              <th class="px-4 py-3 text-sm font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">端点地址</th>
              <th class="px-4 py-3 text-sm font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">适用工具</th>
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
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Step 4 — 查看用量</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">登录控制台后，在首页仪表盘即可查看当前额度余额和调用统计。点击左侧菜单「日志」可以查看详细的请求记录与用量明细。</p>
          `,
          quickConfig: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Step 5 — 使用密钥快速配置</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">获取 API Key 后，最快的方式是通过环境变量配置。在终端中执行：</p>
            <div class="code-block bg-slate-50 dark:bg-[#111C2D] rounded-lg p-4 font-mono text-sm mb-4">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># Anthropic 协议（Claude Code）
export ANTHROPIC_API_KEY="sk-pig-xxxx"
export ANTHROPIC_BASE_URL="https://sub2.pigcoder.com"

# OpenAI 协议（Codex CLI / OpenCode / Droid CLI）
export OPENAI_API_KEY="sk-pig-xxxx"
export OPENAI_BASE_URL="https://sub2.pigcoder.com/v1"

# Gemini 协议（Gemini CLI）
export GEMINI_API_KEY="sk-pig-xxxx"</code></pre>
            </div>
            <div class="border-l-4 border-custom-green bg-green-50 dark:bg-green-900/20 p-4 rounded-r-lg">
              <p class="text-sm text-slate-700 dark:text-slate-300"><strong>提示：</strong>建议将环境变量写入 <code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">~/.bashrc</code> 或 <code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">~/.zshrc</code>，这样每次打开终端都会自动加载。</p>
            </div>
          `,
          ccSwitchImport: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Step 6 — CC Switch 一键导入</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">如果你使用 CC Switch，可以通过 Deep Link 一键导入服务商配置，无需手动编辑任何文件：</p>
            <div class="code-block bg-slate-50 dark:bg-[#111C2D] rounded-lg p-4 font-mono text-sm mb-4">
              <span class="lang-label">text</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>ccswitch://provider/add?name=Pigcoder&apiBaseUrl=https://sub2.pigcoder.com&apiKey=sk-pig-xxxx</code></pre>
            </div>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">在浏览器中打开上述链接，CC Switch 将自动添加 Pigcoder 作为服务商，填入你的 API Key 即可。</p>
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
        skip: 'Skip to main content',
        nav: {
          index: 'Home',
          docs: 'Docs',
          pricing: 'Pricing'
        },
        header: {
          console: 'Console',
          switchToEnglish: 'Switch to English',
          switchToChinese: 'Switch to Chinese',
          switchToLight: 'Switch to Light Mode',
          switchToDark: 'Switch to Dark Mode',
          openMenu: 'Open Navigation Menu',
          closeMenu: 'Close Navigation Menu',
          language: 'Language',
          theme: 'Theme'
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
            pricing: 'Channel Pricing',
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
          start: 'Get API Key',
          docs: 'Integration Docs',
          launch: 'Open Console',
          console: 'Open Console'
        }
      },
      index: {
        title: 'Pigcoder - Stable High-Speed AI Coding Gateway',
        hero: {
          badge: 'AI Model Router / API Gateway',
          title: 'Unified Model Routing <span class="brand-emphasis">for AI Coding Tools</span>',
          description: 'A unified API entry for Claude Code, Codex CLI, Gemini CLI, and other developer tools. Route by protocol, model, ratio, and context capability.',
          codeComment: '# Call top-tier models through one unified interface',
          codePrompt: '"Write an efficient sorting algorithm for me"',
          metrics: {
            protocolsValue: '3 Protocols',
            availability: 'OpenAI / Anthropic / Gemini',
            unifiedValue: '1 Key',
            unified: 'One key across models',
            ratioValue: 'Ratios',
            savings: 'Transparent channel ratios'
          }
        },
        choose: {
          title: 'Routing & Integration Capabilities'
        },
        features: {
          response: {
            title: 'Protocol Compatible',
            description: 'Compatible with common OpenAI, Anthropic, and Gemini protocols. Swap the Base URL to connect.'
          },
          availability: {
            title: 'Model Channels',
            description: 'Organize Claude, Codex, Gemini, and other channels by developer tool scenarios.'
          },
          security: {
            title: 'Context Capabilities',
            description: 'Surface 200k, 1M, thinking, WebSearch, and model-specific capabilities clearly.'
          },
          cost: {
            title: 'Transparent Ratios',
            description: 'Show channel ratios and capability tags directly, without packaging them as traditional plans.'
          },
          integration: {
            title: 'CLI First',
            description: 'Designed for Claude Code, Codex CLI, Gemini CLI, OpenCode, and similar developer tools.'
          },
          monitoring: {
            title: 'Request Logs',
            description: 'Inspect usage, request logs, error cases, and key groups in the console.'
          }
        },
        models: {
          title: 'Provider & Model Coverage',
          description: 'Aggregate Claude, GPT, Gemini, Zhipu, and other models behind one routing layer for protocol-specific tools.',
          zhipu: 'Zhipu AI'
        },
        toolbox: {
          title: 'Developer Integration Panel',
          subtitle: 'Endpoint, environment variables, CLI setup, logs, and key groups organized for integration',
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
        integration: {
          eyebrow: 'Integration Flow',
          title: 'From API Key to Model Routing',
          description: 'Pigcoder organizes the integration path around keys, protocol selection, endpoint replacement, and request logs.',
          keys: {
            title: 'Create API Key',
            description: 'Create a token in the console and choose an OpenAI, Anthropic, or Gemini group for your tool.'
          },
          protocol: {
            title: 'Choose Protocol',
            description: 'Pick the protocol entry for Claude Code, Codex CLI, Gemini CLI, or other developer tools.'
          },
          endpoint: {
            title: 'Replace Endpoint',
            description: 'Change only the Base URL and API key while keeping your existing tool configuration familiar.'
          },
          logs: {
            title: 'Inspect Logs',
            description: 'Trace model, channel, usage, status, and error reasons from request logs.'
          }
        },
        matrix: {
          eyebrow: 'Routing Matrix',
          title: 'Choose Channels by Tool',
          description: 'Instead of subscription plans, Pigcoder highlights channels, protocols, context, and capability tags so developers can pick the right route.',
          columns: {
            channel: 'Channel',
            protocol: 'Protocol',
            context: 'Context / Capability',
            tools: 'Tools'
          }
        },
        bottom: {
          eyebrow: 'API Ready',
          title: 'Ready to connect to Pigcoder API?',
          description: 'Create an API key, copy the endpoint for your tool, and follow docs for Claude Code, Codex CLI, Gemini CLI, and OpenCode.'
        }
      },
      pricing: {
        title: 'Pricing - Pigcoder',
        hero: {
          badge: 'Model Channels & Ratios',
          title: '<span>Transparent Model Ratios</span><span class="brand-emphasis">and Channel Capabilities</span>',
          description: 'Compare ratios, models, context, thinking, WebSearch, and compatible tools by provider and tool scenario. Consumption follows actual usage, and final entitlements follow the live console.',
          cards: {
            rechargeTitle: 'Shared balance',
            rechargeDescription: 'Use one balance across model channels and pay by actual usage.',
            ratioTitle: 'Transparent ratios',
            ratioDescription: 'Every channel shows ratio and capability tags directly.',
            modelTitle: 'Capability tags',
            modelDescription: 'Context, thinking, WebSearch, and CLI fit are visible at a glance.'
          }
        },
        catalog: {
          eyebrow: 'Channel Catalog',
          title: 'Model Channel Ratio Catalog',
          description: 'Compare channel ratios, available models, and capability tags by provider and tool scenario. Consumption follows actual usage, and final entitlements follow the live console.'
        },
        note: '* This page explains model channels and ratios. Final models, ratios, and entitlements follow the live console configuration.',
        card: {
          channel: '',
          ratio: 'Ratio',
          models: 'Models',
          capabilities: 'Capabilities'
        },
        faq: {
          title: 'Integration & Billing Questions',
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
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Step 1 — Register and Sign In</h3>
            <ol class="list-decimal ml-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
              <li>Open the <a href="https://sub2.pigcoder.com" target="_blank" class="text-custom-gold hover:underline font-bold">console</a>.</li>
              <li>Create an account with email or a third-party login such as GitHub or Google.</li>
              <li>After signing in, enter your personal dashboard.</li>
            </ol>
          `,
          apikey: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Step 2 — Create an API Key</h3>
            <ol class="list-decimal ml-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
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
              <p class="text-sm text-slate-700 dark:text-slate-300"><strong>Note:</strong> The API key is shown only once when it is created. Copy it immediately. If it is lost, create a new token.</p>
            </div>
          `,
          endpointTitle: 'Step 3 — Confirm Endpoint URLs',
          endpointLead: 'Use the corresponding endpoint for each CLI tool:',
          endpointHead: `
            <tr class="bg-slate-50 dark:bg-[#111C2D]">
              <th class="px-4 py-3 text-sm font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">Protocol</th>
              <th class="px-4 py-3 text-sm font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">Endpoint</th>
              <th class="px-4 py-3 text-sm font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">Tools</th>
            </tr>
          `,
          endpointBody: `
            <tr class="border-b border-slate-100 dark:border-white/5"><td class="px-4 py-3 font-medium">Anthropic</td><td class="px-4 py-3"><code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">https://sub2.pigcoder.com</code></td><td class="px-4 py-3">Claude Code</td></tr>
            <tr class="border-b border-slate-100 dark:border-white/5"><td class="px-4 py-3 font-medium">OpenAI</td><td class="px-4 py-3"><code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">https://sub2.pigcoder.com/v1</code></td><td class="px-4 py-3">Codex CLI, OpenCode, Droid CLI</td></tr>
            <tr><td class="px-4 py-3 font-medium">Gemini</td><td class="px-4 py-3"><code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">https://sub2.pigcoder.com/v1beta</code></td><td class="px-4 py-3">Gemini CLI</td></tr>
          `,
          usage: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Step 4 — Check Usage</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">After signing in, your dashboard shows the current balance and request stats. Open the <strong>Logs</strong> menu to inspect request history and usage details.</p>
          `,
          quickConfig: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Step 5 — Quick Configuration</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">After you get an API key, the fastest setup path is via environment variables:</p>
            <div class="code-block bg-slate-50 dark:bg-[#111C2D] rounded-lg p-4 font-mono text-sm mb-4"><span class="lang-label">bash</span><pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># Anthropic protocol (Claude Code)
export ANTHROPIC_API_KEY="sk-pig-xxxx"
export ANTHROPIC_BASE_URL="https://sub2.pigcoder.com"

# OpenAI protocol (Codex CLI / OpenCode / Droid CLI)
export OPENAI_API_KEY="sk-pig-xxxx"
export OPENAI_BASE_URL="https://sub2.pigcoder.com/v1"

# Gemini protocol (Gemini CLI)
export GEMINI_API_KEY="sk-pig-xxxx"</code></pre></div>
            <div class="border-l-4 border-custom-green bg-green-50 dark:bg-green-900/20 p-4 rounded-r-lg"><p class="text-sm text-slate-700 dark:text-slate-300"><strong>Tip:</strong> Save these values in <code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">~/.bashrc</code> or <code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">~/.zshrc</code> so every new terminal session loads them automatically.</p></div>
          `,
          ccSwitchImport: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Step 6 — One-Click CC Switch Import</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">If you use CC Switch, you can import the provider configuration with a Deep Link instead of editing files manually:</p>
            <div class="code-block bg-slate-50 dark:bg-[#111C2D] rounded-lg p-4 font-mono text-sm mb-4"><span class="lang-label">text</span><pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>ccswitch://provider/add?name=Pigcoder&apiBaseUrl=https://sub2.pigcoder.com&apiKey=sk-pig-xxxx</code></pre></div>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Open the link above in your browser and CC Switch will add Pigcoder as a provider automatically. Then paste your API key and you are done.</p>
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

  var storedDefaultVersion = null;
  try {
    storedDefaultVersion = localStorage.getItem(LOCALE_DEFAULT_VERSION_KEY);
    if (storedDefaultVersion !== LOCALE_DEFAULT_VERSION) {
      localStorage.setItem(STORAGE_KEY, 'zh-CN');
      localStorage.setItem(LOCALE_DEFAULT_VERSION_KEY, LOCALE_DEFAULT_VERSION);
    }
  } catch (error) {
    // ignore
  }

  var currentLocale = getStoredLocale() || 'zh-CN';

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
    label.textContent = nextIsEnglish ? 'EN' : 'ZH';

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
