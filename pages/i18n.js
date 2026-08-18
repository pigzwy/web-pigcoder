(function () {
  var STORAGE_KEY = 'pigcoder-locale';
  var LOCALE_DEFAULT_VERSION_KEY = 'pigcoder-locale-default-version';
  var LOCALE_DEFAULT_VERSION = '2026-06-09-en-default';
  var SUPPORTED_LOCALES = ['zh-CN', 'en-US'];

  var translations = {
    'zh-CN': {
      common: {
        skip: '跳到主要内容',
        nav: {
          index: '首页',
          docs: '文档',
          pricing: '价格',
          models: '模型'
        },
        header: {
          console: '控制台',
          studio: 'Studio',
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
          copyright: '© 2026 Pigcode Tech. All rights reserved.',
          links: {
            intro: '产品介绍',
            models: '模型列表',
            pricing: '价格体系',
            enterprise: '企业版',
            docs: '开发者文档',
            api: 'API 参考',
            status: '故障排查',
            telegram: 'Telegram 频道',
            contact: '联系我们',
            privacy: '隐私政策',
            terms: '服务条款'
          }
        },
        cta: {
          start: '获取 API Key',
          studio: '进入 Studio',
          docs: '查看接入文档',
          launch: '打开控制台',
          console: '立即前往控制台'
        },
        copy: '复制',
        copied: '已复制',
        copyFailed: '复制失败，请手动复制'
      },
      index: {
        title: 'Pigcode - 一把钥匙，用遍全球模型',
        hero: {
          badge: 'AI Model Router / API Gateway',
          title: '<span class="brand-emphasis">一把钥匙</span>，用遍全球模型',
          description: 'Vibe coding、写文案、画海报、出视频、配人声——五件事共用一个账户、一份余额，透明计价，不锁平台。新的故事开始了。',
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
          title: '一个 Key，路由到最合适的模型'
        },
        endpoints: {
          title: '替换一个 Base URL，接入三种协议',
          note: '复制对应协议的端点地址，工具原有配置保持不变。'
        },
        stats: {
          models: '收录模型，创作与调用一站完成',
          modalities: '大业务：Vibe coding · 对话 · 图像 · 视频 · 语音',
          protocols: '协议兼容 OpenAI / Anthropic / Gemini',
          key: '一个密钥通行全部模型渠道'
        },
        biz: {
          studioLink: '进入 Studio →',
          modelsLink: '浏览模型 →',
          pending: '接入中',
          chat: { title: '旗舰对话模型，开箱即用', desc: '长上下文、深度推理与联网搜索——写文案、改方案、问问题，一个工作台全搞定。' },
          image: { title: '从提示词到成图，几秒钟', desc: '文生图与图像编辑，写实、插画、设计风一次到位——海报、封面、素材说要就要。' },
          video: { title: '文字一段，视频一条', desc: '文生视频与图生视频，运镜、光影交给模型，秒级出片。' },
          audio: { title: '声音也是生产力', desc: '语音合成、音色设计与音乐生成——配音、口播、BGM 一条龙。' },
          chatDemo: {
            user: '帮我把这段产品介绍改得更有力一些',
            ai: '「一把钥匙，用遍全球模型。今天接入，五分钟出活。」——结论前置，数字说话，结尾给出行动指令。',
            input: '问点什么…'
          },
          audioDemo: { meta: 'grok-voice-think-fast-2.0 · 语音合成' }
        },
        routing: {
          eyebrow: 'Vibe Coding',
          badge: '一个 Key · 统一路由',
          checks: {
            channels: '按 Claude、Codex、Gemini 渠道组织，按工具选择路由',
            context: '200k / 1M 上下文，thinking 与 WebSearch 能力标签',
            ratio: '倍率透明直接展示，充值余额按实际调用消耗'
          }
        },
        features: {
          protocol: {
            title: '协议兼容',
            description: '兼容 OpenAI / Anthropic / Gemini 常用协议，只需替换 Base URL 即可接入。'
          },
          channel: {
            title: '模型渠道',
            description: '按 Claude、Codex、Gemini 等模型渠道组织能力，便于按工具选择。'
          },
          context: {
            title: '上下文能力',
            description: '展示 200k、1M、thinking、WebSearch 等上下文和模型特性。'
          },
          ratio: {
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
          title: '每个想法，都有合适的模型',
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
          description: 'Pigcode 的页面信息围绕开发者接入路径组织：创建密钥、选择协议、替换 Endpoint、观察请求日志。',
          keys: {
            title: '创建 API Key',
            description: '在控制台创建令牌，并按工具与倍率档选择令牌分组（Codex / CC-MAX / Gemini / Grok）。'
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
          description: '从对话到图像、视频与音频，5,000+ 模型按渠道、协议与能力组织，方便判断该走哪条路由。',
          pricingLink: '浏览完整模型目录 →',
          columns: {
            channel: '渠道',
            protocol: '协议',
            ratio: '倍率',
            context: '上下文 / 能力',
            tools: '适用工具'
          }
        },
        faq: {
          title: '接入前，你可能想知道',
          studio: {
            q: 'Studio 是什么？',
            a: 'Studio 是网页创作工作台：对话、生图、生视频和音频在同一个界面完成，无需任何配置，与 API 共用同一个账户和余额。'
          },
          tools: {
            q: '支持哪些编程工具？',
            a: 'Claude Code、Codex CLI、Gemini CLI、OpenCode、Droid CLI 等。替换 Base URL 和 API Key 即可接入，工具原有用法保持不变。'
          },
          ratio: {
            q: '倍率是什么意思？',
            a: '倍率是各渠道的兑换比例。每个渠道直接展示倍率与能力标签，充值余额按实际调用消耗，不做套餐包装。'
          },
          start: {
            q: '如何开始接入？',
            a: '在控制台创建 API Key，选择协议分组，把工具的 Base URL 替换成对应端点即可。文档页提供每个工具的完整接入示例。'
          },
          balance: {
            q: '余额可以在不同渠道通用吗？',
            a: '可以。充值余额在 Claude、Codex、Gemini 等渠道间通用，按实际调用消耗。'
          },
          support: {
            q: '遇到问题怎么获取支持？',
            a: '先查阅文档页的故障排查章节，或加入 <a href="https://t.me/pigcoder1" target="_blank" rel="noopener" class="text-custom-gold hover:underline font-semibold">Telegram</a> 频道直接联系我们。'
          }
        },
        bottom: {
          eyebrow: 'API Ready',
          title: '准备好开始了？',
          description: '创作走 Studio，接入走 API——同一个账户、同一份余额。文档页提供各工具的接入示例。'
        }
      },
      pricing: {
        title: '价格 - Pigcode',
        hero: {
          badge: '模型渠道与倍率',
          title: '透明模型倍率与渠道能力',
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
        studio: {
          title: '创作计价（Studio）',
          description: 'Studio 与 API 共用同一份余额——对话按模型 token 计价，图像与视频按下方单价即用即扣，无套餐无门槛。',
          image: { title: '图像生成', desc: 'GPT Image 2 与 Grok Imagine 全系——文生图、以图生图与编辑链', unit: '每张' },
          video: { title: '视频生成', desc: 'Grok Imagine 视频，支持 5 / 10 / 15 秒（约 $0.25–$0.75 一条）——更多视频模型陆续接入', unit: '每秒' },
          audio: { title: '语音生成', desc: '文本转语音——一段 500 字口播约 $0.01；更多模型正在接入', unit: '每千字符' },
          chat: { title: '对话', desc: '按所选模型的 token 单价结算——单价见模型目录，渠道倍率见上表', value: 'Token', unit: '按量计' },
          note: '* 创作单价随上游调整可能变化，以控制台实时展示为准。'
        },
        faq: {
          title: '接入与计费问题',
          studioBilling: {
            q: 'Studio 里创作怎么计费？',
            a: '与 API 共用同一份余额：图像 $0.2/张，视频 $0.05/秒（5/10/15 秒可选），语音 $0.02/千字符，对话按所选模型的 token 单价结算，用多少扣多少。'
          },
          model: {
            q: '支持哪些 AI 模型？',
            a: '对话、图像、视频与语音全模态——Claude、GPT、Gemini、Grok 等 60+ 厂商的 5,000+ 模型，详见模型目录。'
          },
          refund: {
            q: '可以退款吗？',
            a: '可以。未消费的充值余额支持退款——通过 <a href="https://t.me/pigcoder1" target="_blank" rel="noopener" class="text-custom-gold hover:underline font-semibold">Telegram</a> 频道联系我们，核实后原路退回；已消费部分按实际用量结算。'
          },
          support: {
            q: '如何获取技术支持？',
            a: '查阅文档页的排查章节，或加入 <a href="https://t.me/pigcoder1" target="_blank" rel="noopener" class="text-custom-gold hover:underline font-semibold">Telegram</a> 频道直接联系我们。'
          }
        },
      },
      docs: {
        title: '技术文档 - Pigcode',
        hero: {
          badge: 'Documentation',
          title: 'Pigcode 接入文档',
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
          studio: 'Studio 使用',
          tools: 'CLI 工具配置',
          reference: '参考'
        },
        sidebar: {
          title: 'Docs Index',
          toc: '本页目录',
          description: '快速定位接入步骤、工具配置与常见问题。',
          gettingStarted: '开始使用',
          studio: 'Studio 使用',
          tools: 'CLI 工具配置',
          reference: '参考',
          links: {
            register: '注册与登录',
            apikey: '获取 API Key',
            endpoint: '确认端点地址',
            usage: '查看用量',
            quickConfig: '快速配置',
            studioEnter: '进入 Studio',
            studioChat: '对话',
            studioImage: '图片生成',
            studioVideo: '视频生成',
            studioAudio: '语音生成',
            studioGallery: '灵感墙',
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
              <li>访问 <a href="https://pigcode.ai" target="_top" class="text-custom-gold hover:underline font-semibold">控制台</a>。</li>
              <li>使用邮箱或第三方账号（GitHub / Google）完成注册。</li>
              <li>登录后进入个人仪表盘。</li>
            </ol>
          `,
          apikey: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Step 2 — 获取 API Key</h3>
            <ol class="list-decimal ml-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
              <li>进入控制台后，点击左侧菜单「令牌」。</li>
              <li>点击「创建令牌」按钮。</li>
              <li>为令牌填写一个名称（如 <code class="code-chip">my-cli-key</code>）。</li>
              <li>根据需要选择令牌分组（不同分组对应不同渠道与倍率，详见<a href="pricing.html#plans" class="text-custom-gold hover:underline font-semibold">价格页</a>）：
                <ul class="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Codex 分组（专线 / 企业 / 官渠）</strong> — 用于 Codex CLI、OpenCode 等 OpenAI 协议工具，倍率 0.08x 起</li>
                  <li><strong>CC-MAX 分组（企业 / 官渠）</strong> — 用于 Claude Code 等 Anthropic 协议工具，倍率 0.8x 起</li>
                  <li><strong>Gemini 分组</strong> — 用于 Gemini CLI，多模态与图像生成</li>
                  <li><strong>Grok 分组</strong> — Grok Pro / Heavy 模型渠道</li>
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
            <tr class="bg-slate-50 dark:bg-custom-surface-dark">
              <th class="px-4 py-3 text-sm font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">协议类型</th>
              <th class="px-4 py-3 text-sm font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">端点地址</th>
              <th class="px-4 py-3 text-sm font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">适用工具</th>
            </tr>
          `,
          endpointBody: `
            <tr class="border-b border-slate-100 dark:border-white/5">
              <td class="px-4 py-3 font-medium">Anthropic</td>
              <td class="px-4 py-3"><code class="code-chip">https://pigcode.ai</code></td>
              <td class="px-4 py-3">Claude Code</td>
            </tr>
            <tr class="border-b border-slate-100 dark:border-white/5">
              <td class="px-4 py-3 font-medium">OpenAI</td>
              <td class="px-4 py-3"><code class="code-chip">https://pigcode.ai/v1</code></td>
              <td class="px-4 py-3">Codex CLI, OpenCode, Droid CLI</td>
            </tr>
            <tr>
              <td class="px-4 py-3 font-medium">Gemini</td>
              <td class="px-4 py-3"><code class="code-chip">https://pigcode.ai/v1beta</code></td>
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
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-4">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># Anthropic 协议（Claude Code）
export ANTHROPIC_API_KEY="sk-pig-xxxx"
export ANTHROPIC_BASE_URL="https://pigcode.ai"

# OpenAI 协议（Codex CLI / OpenCode / Droid CLI）
export OPENAI_API_KEY="sk-pig-xxxx"
export OPENAI_BASE_URL="https://pigcode.ai/v1"

# Gemini 协议（Gemini CLI）
export GEMINI_API_KEY="sk-pig-xxxx"
export GOOGLE_GEMINI_BASE_URL="https://pigcode.ai/v1beta"</code></pre>
            </div>
            <div class="border-l-4 border-custom-gold bg-custom-gold/[0.07] dark:bg-custom-gold/10 p-4 rounded-r-lg">
              <p class="text-sm text-slate-700 dark:text-slate-300"><strong>提示：</strong>建议将环境变量写入 <code class="code-chip">~/.bashrc</code> 或 <code class="code-chip">~/.zshrc</code>，这样每次打开终端都会自动加载。</p>
            </div>
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
        studio: {
          enter: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">进入 Studio</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">访问 <a href="https://pigcode.ai/connect/studio" target="_top" class="text-custom-gold hover:underline font-semibold">pigcode.ai/connect/studio</a>，使用与控制台相同的账号登录即可，无需任何配置。对话、图片与视频创作和 API 共用同一份余额，消费明细可在控制台「日志」中查看。</p>
          `,
          chat: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">对话</h3>
            <ul class="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
              <li>顶部选择<strong>分组</strong>与<strong>模型</strong>——分组对应价格页的渠道倍率，模型来自该分组的可用列表。</li>
              <li>回复为流式输出，支持推理过程（reasoning）展示与消息级操作（重试、复制等）。</li>
              <li>聊天记录保存在浏览器本地（localStorage），按浏览器隔离——换设备或清缓存不会同步，重要内容请自行留存。</li>
            </ul>
          `,
          image: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">图片生成</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">进入创作台（Studio 页内「创作」入口），计费 <strong>$0.2 / 张</strong>：</p>
            <ul class="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <li><strong>GPT Image 2</strong>——文生图、以图生图与编辑链，支持多张参考图连续编辑。</li>
              <li><strong>Grok Imagine 系列</strong>——文生图（暂不支持尺寸/质量参数，画幅用提示词约束）。</li>
              <li>生成记录保存在浏览器本地（IndexedDB），支持批量下载与删除；刷新页面任务自动恢复。</li>
            </ul>
          `,
          video: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">视频生成</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">当前提供 <strong>Grok Imagine 视频</strong>（更多视频模型陆续接入），支持文生视频与图生视频，时长可选 <strong>5 / 10 / 15 秒</strong>，计费 <strong>$0.05 / 秒</strong>（约 $0.25–$0.75 一条）：</p>
            <ul class="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <li>视频为异步生成，创建任务后可离开页面，回来自动恢复进度。</li>
              <li>图生视频：上传一张图作为首帧，配合提示词控制运动方向。</li>
            </ul>
            <div class="border-l-4 border-custom-gold bg-amber-50 dark:bg-amber-900/20 p-4 rounded-r-lg">
              <p class="text-sm text-slate-700 dark:text-slate-300"><strong>注意：</strong>生成完成的视频链接约 2 小时后过期，请及时下载保存。</p>
            </div>
          `,
          audio: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">语音生成</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">文本转语音，当前可用 <strong>grok-voice-think-fast-2.0</strong>，计费 <strong>$0.02 / 千字符</strong>（一段 500 字口播约 $0.01）。输入文本、选择模型，生成后可在线播放与下载。</p>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed"><code class="code-chip">gpt-realtime-2.1</code> 与 <code class="code-chip">suno-v5</code>（音乐生成）正在接入中，上线后会直接出现在模型选择器里。</p>
          `,
          gallery: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">灵感墙</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Studio 内置公开案例库「灵感墙」：浏览各类风格的生成案例，看到喜欢的效果，一键把 Prompt 带入创作台，在此基础上改出自己的版本。</p>
          `
        },
        toolGuide: {
          claudeCode: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Claude Code</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">Anthropic 官方推出的 AI 编程助手，运行依赖 Node.js (v18+)。</p>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">安装</h4>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># macOS / Linux
npm install -g @anthropic-ai/claude-code

# Windows (PowerShell 管理员)
npm install -g @anthropic-ai/claude-code</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">方式一：通过配置文件（推荐）</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">编辑 <code class="code-chip">settings.json</code>：</p>
            <ul class="list-disc ml-6 space-y-1 text-slate-700 dark:text-slate-300 mb-3">
              <li>macOS / Linux：<code class="code-chip">~/.claude/settings.json</code></li>
              <li>Windows：<code class="code-chip">%USERPROFILE%\\.claude\\settings.json</code></li>
            </ul>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">json</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>{
  "env": {
    "ANTHROPIC_BASE_URL": "https://pigcode.ai",
    "ANTHROPIC_API_KEY": "sk-pig-xxxx"
  }
}</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">方式二：通过环境变量</h4>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-3">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># macOS / Linux
export ANTHROPIC_API_KEY="sk-pig-xxxx"
export ANTHROPIC_BASE_URL="https://pigcode.ai"</code></pre>
            </div>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-3">
              <span class="lang-label">powershell</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># Windows (PowerShell)
$env:ANTHROPIC_API_KEY = "sk-pig-xxxx"
$env:ANTHROPIC_BASE_URL = "https://pigcode.ai"</code></pre>
            </div>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">cmd</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># Windows (CMD)
set ANTHROPIC_API_KEY=sk-pig-xxxx
set ANTHROPIC_BASE_URL=https://pigcode.ai</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">方式三：VS Code 扩展</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">如果你使用 VS Code 的 Claude Code 扩展，在 VS Code 设置中搜索 <code class="code-chip">claude</code>，然后修改以下配置：</p>
            <ul class="list-disc ml-6 space-y-1 text-slate-700 dark:text-slate-300 mb-4">
              <li><strong>API Key</strong>：填入 <code class="code-chip">sk-pig-xxxx</code></li>
              <li><strong>API Base URL</strong>：填入 <code class="code-chip">https://pigcode.ai</code></li>
            </ul>
            <div class="border-l-4 border-custom-gold bg-amber-50 dark:bg-amber-900/20 p-4 rounded-r-lg">
              <p class="text-sm text-slate-700 dark:text-slate-300"><strong>注意：</strong>Claude Code 使用 Anthropic 原生协议，端点地址不要加 <code class="code-chip">/v1</code>。</p>
            </div>
          `,
          codexCli: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Codex CLI</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">OpenAI 官方推出的开源命令行编程助手，使用 OpenAI 兼容协议。</p>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">安装</h4>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>npm i -g @openai/codex</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">配置文件</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">编辑 <code class="code-chip">~/.codex/config.toml</code>：</p>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">toml</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>model = "gpt-5.6-sol"
model_provider = "pigcode"

[model_providers.pigcode]
name = "Pigcode"
base_url = "https://pigcode.ai/v1"
env_key = "PIGCODE_API_KEY"</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">API Key 配置</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">Codex 会从 <code class="code-chip">env_key</code> 指定的环境变量读取密钥：</p>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-4">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>export PIGCODE_API_KEY="sk-pig-xxxx"</code></pre>
            </div>
          `,
          geminiCli: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Gemini CLI</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">Google 官方推出的 AI 命令行工具，使用 Gemini 协议。</p>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">安装</h4>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>npm i -g @google/gemini-cli</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">方式一：通过 .env 文件</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">在 <code class="code-chip">~/.gemini/.env</code> 中添加：</p>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">env</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>GEMINI_API_KEY=sk-pig-xxxx
GOOGLE_GEMINI_BASE_URL=https://pigcode.ai/v1beta</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">方式二：通过 shell 环境变量</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">也可以写入 <code class="code-chip">~/.bashrc</code> 或 <code class="code-chip">~/.zshrc</code>：</p>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-4">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>export GEMINI_API_KEY="sk-pig-xxxx"
export GOOGLE_GEMINI_BASE_URL="https://pigcode.ai/v1beta"</code></pre>
            </div>
          `,
          opencode: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">OpenCode</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">开源终端 AI 编程助手，支持自定义 OpenAI 兼容 Provider。</p>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">安装</h4>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># 安装脚本
curl -fsSL https://opencode.ai/install | bash

# npm
npm install -g opencode-ai</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">配置文件</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">编辑 <code class="code-chip">~/.config/opencode/opencode.json</code>（或项目根目录的 <code class="code-chip">opencode.json</code>）：</p>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-4">
              <span class="lang-label">json</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "pigcode": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Pigcode",
      "options": {
        "baseURL": "https://pigcode.ai/v1",
        "apiKey": "{env:PIGCODE_API_KEY}"
      },
      "models": {
        "gpt-5.6-sol": {
          "name": "GPT-5.5"
        }
      }
    }
  },
  "model": "pigcode/gpt-5.6-sol"
}</code></pre>
            </div>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">然后设置环境变量 <code class="code-chip">export PIGCODE_API_KEY="sk-pig-xxxx"</code>，或在 OpenCode 内使用 <code class="code-chip">/connect</code> 保存密钥。</p>
          `,
          droidCli: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Droid CLI</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">Factory 推出的 AI 终端编程助手，支持通过 BYOK（自带密钥）接入自定义模型。</p>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">安装</h4>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># macOS / Linux
curl -fsSL https://app.factory.ai/cli | sh

# Windows (PowerShell)
irm https://app.factory.ai/cli/windows | iex

# npm
npm install -g droid</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">配置文件</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">编辑 <code class="code-chip">~/.factory/settings.json</code>，在 <code class="code-chip">customModels</code> 中添加：</p>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-4">
              <span class="lang-label">json</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>{
  "customModels": [
    {
      "model": "gpt-5.6-sol",
      "displayName": "Pigcode GPT-5.5",
      "baseUrl": "https://pigcode.ai/v1",
      "apiKey": "sk-pig-xxxx",
      "provider": "generic-chat-completion-api",
      "maxOutputTokens": 16384
    }
  ]
}</code></pre>
            </div>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">配置后在 Droid 中使用 <code class="code-chip">/model</code> 命令切换到自定义模型。</p>
          `,
          ccSwitch: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">CC Switch</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">开源的 AI CLI 服务商管理桌面应用（支持 Claude Code、Codex、Gemini CLI、OpenCode 等），可以在多个 API 服务商之间一键切换，无需手动修改配置文件。</p>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">核心功能</h4>
            <ul class="list-disc ml-6 space-y-1 text-slate-700 dark:text-slate-300 mb-6">
              <li>一键切换 Claude Code / Codex / Gemini CLI 等工具的 API 服务商</li>
              <li>支持管理多个服务商配置</li>
              <li>支持 Deep Link 一键导入服务商</li>
              <li>自动备份和恢复配置</li>
            </ul>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">安装</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">Windows / Linux 用户从 <a href="https://github.com/farion1231/cc-switch/releases" target="_blank" rel="noopener" class="text-custom-gold hover:underline font-semibold">GitHub Releases</a> 下载安装包；macOS 也可以用 Homebrew：</p>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># macOS (Homebrew)
brew install --cask cc-switch</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">Deep Link 一键导入</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">安装后在浏览器中打开以下链接（把 <code class="code-chip">sk-pig-xxxx</code> 替换为你的 API Key），即可自动导入 Pigcode 配置：</p>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">text</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>ccswitch://v1/import?resource=provider&amp;app=claude&amp;name=Pigcode&amp;endpoint=https%3A%2F%2Fpigcode.ai&amp;apiKey=sk-pig-xxxx</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">手动配置</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">也可以打开 CC Switch，在「服务商」页点击「添加」，填入名称 <code class="code-chip">Pigcode</code>、端点 <code class="code-chip">https://pigcode.ai</code> 和 API Key，保存后一键切换即可生效。</p>
          `
        },
        reference: {
          quickRefTitle: '快速对照表',
          commandsTitle: '常用命令',
          commandsLead: '以下是 CLI 工具中常用的内置命令：',
          troubleshootTitle: '故障排查',
          quickRefHead: `
            <tr class="bg-slate-50 dark:bg-custom-surface-dark">
              <th class="px-4 py-3 font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">工具</th>
              <th class="px-4 py-3 font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">安装命令</th>
              <th class="px-4 py-3 font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">配置文件</th>
              <th class="px-4 py-3 font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">端点地址</th>
            </tr>
          `,
          commandsHead: `
            <tr class="bg-slate-50 dark:bg-custom-surface-dark">
              <th class="px-4 py-3 font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">命令</th>
              <th class="px-4 py-3 font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">说明</th>
            </tr>
          `,
          cmd: {
            help: '显示帮助信息和可用命令列表',
            clear: '清空当前对话历史',
            compact: '压缩对话上下文，释放 Token 额度',
            cost: '查看当前会话的 Token 消耗和费用',
            model: '查看或切换当前使用的模型',
            models: '列出所有可用模型'
          },
          ts: {
            q1: `
              <h4 class="font-semibold text-custom-ink dark:text-slate-200 mb-2">命令未找到（command not found）</h4>
              <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">安装后终端提示命令不存在，通常是因为 npm 全局 bin 目录不在系统 PATH 中。</p>
              <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed"><strong>解决方法：</strong></p>
              <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mt-2">
                <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># 查看 npm 全局 bin 目录
npm config get prefix

# 将输出的路径/bin 添加到 PATH
export PATH="$(npm config get prefix)/bin:$PATH"</code></pre>
              </div>
            `,
            q2: `
              <h4 class="font-semibold text-custom-ink dark:text-slate-200 mb-2">API 连接失败</h4>
              <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">请求超时或无法连接到服务端。</p>
              <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed"><strong>解决方法：</strong></p>
              <ul class="list-disc ml-6 space-y-1 text-slate-700 dark:text-slate-300 text-sm mt-2">
                <li>检查网络连接是否正常</li>
                <li>确认端点地址是否正确（参考上方端点地址表格）</li>
                <li>检查是否有代理或 VPN 阻断了连接</li>
                <li>尝试用 <code class="code-chip code-chip-xs">curl</code> 测试端点连通性</li>
              </ul>
            `,
            q3: `
              <h4 class="font-semibold text-custom-ink dark:text-slate-200 mb-2">端点配置错误</h4>
              <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">配置了错误的端点地址导致请求失败。</p>
              <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed"><strong>解决方法：</strong></p>
              <ul class="list-disc ml-6 space-y-1 text-slate-700 dark:text-slate-300 text-sm mt-2">
                <li>Claude Code 使用 Anthropic 协议，端点为 <code class="code-chip code-chip-xs">https://pigcode.ai</code>，<strong>不要加</strong> <code class="code-chip code-chip-xs">/v1</code></li>
                <li>Codex CLI / OpenCode / Droid CLI 使用 OpenAI 协议，端点为 <code class="code-chip code-chip-xs">https://pigcode.ai/v1</code></li>
                <li>Gemini CLI 使用 Gemini 协议，端点为 <code class="code-chip code-chip-xs">https://pigcode.ai/v1beta</code></li>
              </ul>
            `,
            q4: `
              <h4 class="font-semibold text-custom-ink dark:text-slate-200 mb-2">API Key 无效</h4>
              <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">提示认证失败或 API Key 无效。</p>
              <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed"><strong>解决方法：</strong></p>
              <ul class="list-disc ml-6 space-y-1 text-slate-700 dark:text-slate-300 text-sm mt-2">
                <li>确认 API Key 是否正确复制（没有多余空格或缺少字符）</li>
                <li>确认 API Key 的分组与所使用的工具匹配（CC-MAX 分组对应 Claude Code，Codex 分组对应 Codex CLI 等）</li>
                <li>登录控制台查看令牌是否仍然有效，未被删除或过期</li>
                <li>检查账户余额是否充足</li>
              </ul>
            `
          }
        }
      },
      models: {
        title: '模型目录 - Pigcode',
        hero: {
          badge: '模型目录',
          title: '<span>全球模型元数据</span> <span class="brand-emphasis">一览无余</span>',
          description: '汇聚 60+ 厂商 5,000+ 模型的上下文、能力标签与模态支持，并标注数据更新时间，支持一站检索对比。',
          stats: {
            models: '收录模型',
            vendors: '模型厂商',
            types: '模型类型'
          }
        },
        filters: {
          title: '筛选',
          search: '搜索模型',
          searchPlaceholder: '搜索模型名或 ID…',
          type: '类型',
          vendor: '厂商',
          vendorSearchPlaceholder: '搜索厂商…',
          noVendor: '没有匹配的厂商',
          capability: '能力',
          context: '上下文',
          hideDeprecated: '隐藏已弃用模型',
          reset: '重置筛选'
        },
        toolbar: {
          count: '{n} 个模型',
          sort: '排序',
          sortNewest: '最新优先',
          sortContext: '上下文从大到小',
          sortName: '名称 A→Z'
        },
        card: {
          context: '上下文',
          copy: '复制模型 ID',
          deprecated: '已弃用',
          official: '官方',
          reference: '参考',
          priceSource: '价格来源',
          priceIn: 'In',
          priceOut: 'Out'
        },
        loadMore: '加载更多',
        updated: '数据更新于',
        loadError: '目录数据加载失败，请刷新重试。',
        empty: '没有匹配的模型，试试放宽筛选条件。',
        note: '* 本站实际可用模型与倍率以控制台实时配置为准，详见',
        noteLink: '价格页'
      }
    },
    'en-US': {
      common: {
        skip: 'Skip to main content',
        nav: {
          index: 'Home',
          docs: 'Docs',
          pricing: 'Pricing',
          models: 'Models'
        },
        header: {
          console: 'Console',
          studio: 'Studio',
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
          copyright: '© 2026 Pigcode Tech. All rights reserved.',
          links: {
            intro: 'Overview',
            models: 'Model Catalog',
            pricing: 'Channel Pricing',
            enterprise: 'Enterprise',
            docs: 'Developer Docs',
            api: 'API Reference',
            status: 'Troubleshooting',
            telegram: 'Telegram channel',
            contact: 'Contact Us',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service'
          }
        },
        cta: {
          start: 'Get API Key',
          studio: 'Enter Studio',
          docs: 'Integration Docs',
          launch: 'Open Console',
          console: 'Open Console'
        },
        copy: 'Copy',
        copied: 'Copied',
        copyFailed: 'Copy failed. Please copy manually.'
      },
      index: {
        title: 'Pigcode - One key opens every model',
        hero: {
          badge: 'AI Model Router / API Gateway',
          title: '<span class="brand-emphasis">One key</span> opens every model.',
          description: 'Vibe code it, write it, paint it, film it, voice it — one account, one balance, transparent pricing, no lock-in. A new story begins.',
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
          title: 'One key, routed to the right model'
        },
        endpoints: {
          title: 'Swap one Base URL, get three protocols',
          note: 'Copy the endpoint for your protocol — your tool config stays the same.'
        },
        stats: {
          models: 'models — create and call in one place',
          modalities: 'lines of business: vibe coding · chat · image · video · audio',
          protocols: 'Protocols: OpenAI, Anthropic & Gemini',
          key: 'One key across everything'
        },
        biz: {
          studioLink: 'Enter Studio →',
          modelsLink: 'Browse models →',
          pending: 'coming soon',
          chat: { title: 'Flagship chat models, ready to go', desc: 'Long context, deep reasoning, and web search — drafts, rewrites, and answers in one workspace.' },
          image: { title: 'Prompt to picture in seconds', desc: 'Text-to-image and editing — photoreal, illustration, or design styles for posters, covers, and assets.' },
          video: { title: 'One paragraph in, one clip out', desc: 'Text-to-video and image-to-video — camera moves and lighting handled by the model.' },
          audio: { title: 'Sound is a superpower too', desc: 'Speech synthesis, voice design, and music generation — voiceover, narration, and BGM in one stop.' },
          chatDemo: {
            user: 'Punch up this product intro for me',
            ai: '“One key opens every model. Plug in today, ship in five minutes.” — conclusion first, numbers over adjectives, end with a call to action.',
            input: 'Ask anything…'
          },
          audioDemo: { meta: 'grok-voice-think-fast-2.0 · speech synthesis' }
        },
        routing: {
          eyebrow: 'Vibe Coding',
          badge: 'one key · unified routing',
          checks: {
            channels: 'Channels organized by Claude, Codex, and Gemini — pick routes by tool',
            context: '200k / 1M context with thinking and WebSearch capability tags',
            ratio: 'Transparent ratios — balance consumed by actual usage'
          }
        },
        features: {
          protocol: {
            title: 'Protocol Compatible',
            description: 'Compatible with common OpenAI, Anthropic, and Gemini protocols. Swap the Base URL to connect.'
          },
          channel: {
            title: 'Model Channels',
            description: 'Organize Claude, Codex, Gemini, and other channels by developer tool scenarios.'
          },
          context: {
            title: 'Context Capabilities',
            description: 'Surface 200k, 1M, thinking, WebSearch, and model-specific capabilities clearly.'
          },
          ratio: {
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
          title: 'Every major model behind one entry point',
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
          description: 'Pigcode organizes the integration path around keys, protocol selection, endpoint replacement, and request logs.',
          keys: {
            title: 'Create API Key',
            description: 'Create a token in the console and pick a token group (Codex / CC-MAX / Gemini / Grok) by tool and ratio tier.'
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
          eyebrow: 'Model Catalog',
          title: 'Choose Channels by Tool',
          description: 'From chat to image, video, and audio — 5,000+ models organized by channel, protocol, and capability.',
          pricingLink: 'Browse the full catalog →',
          columns: {
            channel: 'Channel',
            protocol: 'Protocol',
            ratio: 'Ratio',
            context: 'Context / Capability',
            tools: 'Tools'
          }
        },
        faq: {
          title: 'Before you connect',
          studio: {
            q: 'What is Studio?',
            a: 'Studio is the web workspace: chat, image, video, and audio creation in one interface with zero setup — sharing the same account and balance as the API.'
          },
          tools: {
            q: 'Which coding tools are supported?',
            a: 'Claude Code, Codex CLI, Gemini CLI, OpenCode, Droid CLI, and more. Swap the Base URL and API key — everything else about your tool stays the same.'
          },
          ratio: {
            q: 'What do the ratios mean?',
            a: 'Ratios are each channel\'s exchange rate. Every channel shows its ratio and capability tags directly, and your balance is consumed by actual usage — no plan packaging.'
          },
          start: {
            q: 'How do I get started?',
            a: 'Create an API key in the console, pick a protocol group, and point your tool at the matching endpoint. The docs page has full examples for every tool.'
          },
          balance: {
            q: 'Does my balance work across channels?',
            a: 'Yes. Your balance is shared across Claude, Codex, and Gemini channels and consumed by actual usage.'
          },
          support: {
            q: 'How do I get support?',
            a: 'Check the troubleshooting section in the docs, or reach us directly on <a href="https://t.me/pigcoder1" target="_blank" rel="noopener" class="text-custom-gold hover:underline font-semibold">Telegram</a>.'
          }
        },
        bottom: {
          eyebrow: 'API Ready',
          title: 'Ready to start?',
          description: 'Create in Studio, or connect via API — one account, one balance. The docs cover setup for every tool.'
        }
      },
      pricing: {
        title: 'Pricing - Pigcode',
        hero: {
          badge: 'Model Channels & Ratios',
          title: 'Transparent model ratios and channel capabilities',
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
        studio: {
          title: 'Creation pricing (Studio)',
          description: 'Studio shares one balance with the API — chat is billed by model tokens, image and video at the unit prices below. No plans, no minimums.',
          image: { title: 'Image generation', desc: 'GPT Image 2 and the Grok Imagine family — text-to-image, image-to-image, and edit chains', unit: 'per image' },
          video: { title: 'Video generation', desc: 'Grok Imagine video in 5 / 10 / 15 s (≈ $0.25–$0.75 per clip) — more video models coming', unit: 'per second' },
          audio: { title: 'Speech generation', desc: 'Text to speech — a 500-character read costs about $0.01; more models coming', unit: 'per 1k chars' },
          chat: { title: 'Chat', desc: "Billed by the selected model's token price — see the model catalog and channel ratios above", value: 'Token', unit: 'metered' },
          note: '* Creation prices may change with upstream adjustments; the live console is authoritative.'
        },
        faq: {
          title: 'Integration & Billing Questions',
          studioBilling: {
            q: 'How is Studio creation billed?',
            a: "One balance shared with the API: images at $0.2 each, video at $0.05 per second (5/10/15 s), speech at $0.02 per 1k characters, chat by the selected model's token price. Pay only for what you use."
          },
          model: {
            q: 'Which AI models are supported?',
            a: 'Every modality — chat, image, video, and speech: 5,000+ models from 60+ vendors including Claude, GPT, Gemini, and Grok.'
          },
          refund: {
            q: 'Can I get a refund?',
            a: 'Yes — unused balance is refundable: contact us on <a href="https://t.me/pigcoder1" target="_blank" rel="noopener" class="text-custom-gold hover:underline font-semibold">Telegram</a> and we will refund via the original payment method. Consumed usage is settled as-is.'
          },
          support: {
            q: 'How can I get technical support?',
            a: 'Check the docs, or reach us directly on <a href="https://t.me/pigcoder1" target="_blank" rel="noopener" class="text-custom-gold hover:underline font-semibold">Telegram</a>.'
          }
        },
      },
      docs: {
        title: 'Documentation - Pigcode',
        hero: {
          badge: 'Documentation',
          title: 'Pigcode Integration Docs',
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
          toc: 'On this page',
          description: 'Jump straight to onboarding steps, tool setup, and common issues.',
          gettingStarted: 'Getting Started',
          studio: 'Using Studio',
          tools: 'CLI Tooling',
          reference: 'Reference',
          links: {
            register: 'Register & Sign In',
            apikey: 'Create API Key',
            endpoint: 'Endpoint URLs',
            usage: 'Usage Metrics',
            quickConfig: 'Quick Config',
            studioEnter: 'Enter Studio',
            studioChat: 'Chat',
            studioImage: 'Image generation',
            studioVideo: 'Video generation',
            studioAudio: 'Speech generation',
            studioGallery: 'Inspiration wall',
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
              <li>Open the <a href="https://pigcode.ai" target="_top" class="text-custom-gold hover:underline font-semibold">console</a>.</li>
              <li>Create an account with email or a third-party login such as GitHub or Google.</li>
              <li>After signing in, enter your personal dashboard.</li>
            </ol>
          `,
          apikey: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Step 2 — Create an API Key</h3>
            <ol class="list-decimal ml-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
              <li>Open the console and click the <strong>Tokens</strong> menu.</li>
              <li>Click the <strong>Create Token</strong> button.</li>
              <li>Give the token a name, for example <code class="code-chip">my-cli-key</code>.</li>
              <li>Choose a token group (each group maps to a channel and ratio — see the <a href="pricing.html#plans" class="text-custom-gold hover:underline font-semibold">pricing page</a>):
                <ul class="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Codex groups (Dedicated / Enterprise / Official)</strong> — for Codex CLI, OpenCode, and other OpenAI-protocol tools, ratios from 0.08x</li>
                  <li><strong>CC-MAX groups (Enterprise / Official)</strong> — for Claude Code and other Anthropic-protocol tools, ratios from 0.8x</li>
                  <li><strong>Gemini group</strong> — for Gemini CLI, multimodal and image generation</li>
                  <li><strong>Grok group</strong> — Grok Pro / Heavy model channel</li>
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
            <tr class="bg-slate-50 dark:bg-custom-surface-dark">
              <th class="px-4 py-3 text-sm font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">Protocol</th>
              <th class="px-4 py-3 text-sm font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">Endpoint</th>
              <th class="px-4 py-3 text-sm font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">Tools</th>
            </tr>
          `,
          endpointBody: `
            <tr class="border-b border-slate-100 dark:border-white/5"><td class="px-4 py-3 font-medium">Anthropic</td><td class="px-4 py-3"><code class="code-chip">https://pigcode.ai</code></td><td class="px-4 py-3">Claude Code</td></tr>
            <tr class="border-b border-slate-100 dark:border-white/5"><td class="px-4 py-3 font-medium">OpenAI</td><td class="px-4 py-3"><code class="code-chip">https://pigcode.ai/v1</code></td><td class="px-4 py-3">Codex CLI, OpenCode, Droid CLI</td></tr>
            <tr><td class="px-4 py-3 font-medium">Gemini</td><td class="px-4 py-3"><code class="code-chip">https://pigcode.ai/v1beta</code></td><td class="px-4 py-3">Gemini CLI</td></tr>
          `,
          usage: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Step 4 — Check Usage</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">After signing in, your dashboard shows the current balance and request stats. Open the <strong>Logs</strong> menu to inspect request history and usage details.</p>
          `,
          quickConfig: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Step 5 — Quick Configuration</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">After you get an API key, the fastest setup path is via environment variables:</p>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-4"><span class="lang-label">bash</span><pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># Anthropic protocol (Claude Code)
export ANTHROPIC_API_KEY="sk-pig-xxxx"
export ANTHROPIC_BASE_URL="https://pigcode.ai"

# OpenAI protocol (Codex CLI / OpenCode / Droid CLI)
export OPENAI_API_KEY="sk-pig-xxxx"
export OPENAI_BASE_URL="https://pigcode.ai/v1"

# Gemini protocol (Gemini CLI)
export GEMINI_API_KEY="sk-pig-xxxx"
export GOOGLE_GEMINI_BASE_URL="https://pigcode.ai/v1beta"</code></pre></div>
            <div class="border-l-4 border-custom-gold bg-custom-gold/[0.07] dark:bg-custom-gold/10 p-4 rounded-r-lg"><p class="text-sm text-slate-700 dark:text-slate-300"><strong>Tip:</strong> Save these values in <code class="code-chip">~/.bashrc</code> or <code class="code-chip">~/.zshrc</code> so every new terminal session loads them automatically.</p></div>
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
        studio: {
          enter: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Enter Studio</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">Open <a href="https://pigcode.ai/connect/studio" target="_top" class="text-custom-gold hover:underline font-semibold">pigcode.ai/connect/studio</a> and sign in with your console account — zero setup. Chat, image, and video creation share one balance with the API; see the console <strong>Logs</strong> for itemized usage.</p>
          `,
          chat: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Chat</h3>
            <ul class="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
              <li>Pick a <strong>group</strong> and <strong>model</strong> at the top — groups map to the channel ratios on the pricing page.</li>
              <li>Streaming replies with reasoning display and per-message actions (retry, copy, and more).</li>
              <li>Chat history is stored locally in your browser (localStorage) — it does not sync across devices; save anything important.</li>
            </ul>
          `,
          image: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Image generation</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">Open the creation workspace inside Studio. Billed at <strong>¥0.2 per image</strong>:</p>
            <ul class="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <li><strong>GPT Image 2</strong> — text-to-image, image-to-image, and edit chains with multiple reference images.</li>
              <li><strong>Grok Imagine family</strong> — text-to-image (size/quality params not yet supported; constrain framing via prompt).</li>
              <li>Generation history is stored locally (IndexedDB) with batch download/delete; jobs resume after a refresh.</li>
            </ul>
          `,
          video: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Video generation</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">Currently powered by <strong>Grok Imagine video</strong> (more models coming). Text-to-video and image-to-video at <strong>5 / 10 / 15 seconds</strong>, billed at <strong>$0.05 per second</strong> (≈ $0.25–$0.75 per clip):</p>
            <ul class="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <li>Video jobs run asynchronously — leave the page and progress resumes when you return.</li>
              <li>Image-to-video: upload a first frame and steer the motion with your prompt.</li>
            </ul>
            <div class="border-l-4 border-custom-gold bg-amber-50 dark:bg-amber-900/20 p-4 rounded-r-lg">
              <p class="text-sm text-slate-700 dark:text-slate-300"><strong>Note:</strong> finished video links expire after ~2 hours — download promptly.</p>
            </div>
          `,
          audio: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Speech generation</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">Text to speech with <strong>grok-voice-think-fast-2.0</strong>, billed at <strong>$0.02 per 1k characters</strong> (a 500-character read ≈ $0.01). Type, pick a model, then play or download the result.</p>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed"><code class="code-chip">gpt-realtime-2.1</code> and <code class="code-chip">suno-v5</code> (music) are being connected and will appear in the model picker once live.</p>
          `,
          gallery: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Inspiration wall</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Studio ships with a public gallery of generation examples. When something catches your eye, pull its prompt straight into the workspace and remix it into your own.</p>
          `
        },
        toolGuide: {
          claudeCode: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Claude Code</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">The official AI coding assistant from Anthropic. Requires Node.js (v18+).</p>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">Install</h4>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># macOS / Linux
npm install -g @anthropic-ai/claude-code

# Windows (PowerShell as administrator)
npm install -g @anthropic-ai/claude-code</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">Option 1: Config file (recommended)</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">Edit <code class="code-chip">settings.json</code>:</p>
            <ul class="list-disc ml-6 space-y-1 text-slate-700 dark:text-slate-300 mb-3">
              <li>macOS / Linux: <code class="code-chip">~/.claude/settings.json</code></li>
              <li>Windows: <code class="code-chip">%USERPROFILE%\\.claude\\settings.json</code></li>
            </ul>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">json</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>{
  "env": {
    "ANTHROPIC_BASE_URL": "https://pigcode.ai",
    "ANTHROPIC_API_KEY": "sk-pig-xxxx"
  }
}</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">Option 2: Environment variables</h4>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-3">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># macOS / Linux
export ANTHROPIC_API_KEY="sk-pig-xxxx"
export ANTHROPIC_BASE_URL="https://pigcode.ai"</code></pre>
            </div>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-3">
              <span class="lang-label">powershell</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># Windows (PowerShell)
$env:ANTHROPIC_API_KEY = "sk-pig-xxxx"
$env:ANTHROPIC_BASE_URL = "https://pigcode.ai"</code></pre>
            </div>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">cmd</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># Windows (CMD)
set ANTHROPIC_API_KEY=sk-pig-xxxx
set ANTHROPIC_BASE_URL=https://pigcode.ai</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">Option 3: VS Code extension</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">If you use the Claude Code extension for VS Code, search for <code class="code-chip">claude</code> in VS Code settings and update the following:</p>
            <ul class="list-disc ml-6 space-y-1 text-slate-700 dark:text-slate-300 mb-4">
              <li><strong>API Key</strong>: enter <code class="code-chip">sk-pig-xxxx</code></li>
              <li><strong>API Base URL</strong>: enter <code class="code-chip">https://pigcode.ai</code></li>
            </ul>
            <div class="border-l-4 border-custom-gold bg-amber-50 dark:bg-amber-900/20 p-4 rounded-r-lg">
              <p class="text-sm text-slate-700 dark:text-slate-300"><strong>Note:</strong> Claude Code uses the native Anthropic protocol — do not append <code class="code-chip">/v1</code> to the endpoint.</p>
            </div>
          `,
          codexCli: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Codex CLI</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">The official open-source command-line coding assistant from OpenAI. Uses the OpenAI-compatible protocol.</p>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">Install</h4>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>npm i -g @openai/codex</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">Config file</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">Edit <code class="code-chip">~/.codex/config.toml</code>:</p>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">toml</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>model = "gpt-5.6-sol"
model_provider = "pigcode"

[model_providers.pigcode]
name = "Pigcode"
base_url = "https://pigcode.ai/v1"
env_key = "PIGCODE_API_KEY"</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">API key configuration</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">Codex reads the key from the environment variable specified by <code class="code-chip">env_key</code>:</p>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-4">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>export PIGCODE_API_KEY="sk-pig-xxxx"</code></pre>
            </div>
          `,
          geminiCli: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Gemini CLI</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">The official AI command-line tool from Google. Uses the Gemini protocol.</p>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">Install</h4>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>npm i -g @google/gemini-cli</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">Option 1: .env file</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">Add the following to <code class="code-chip">~/.gemini/.env</code>:</p>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">env</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>GEMINI_API_KEY=sk-pig-xxxx
GOOGLE_GEMINI_BASE_URL=https://pigcode.ai/v1beta</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">Option 2: Shell environment variables</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">You can also add them to <code class="code-chip">~/.bashrc</code> or <code class="code-chip">~/.zshrc</code>:</p>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-4">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>export GEMINI_API_KEY="sk-pig-xxxx"
export GOOGLE_GEMINI_BASE_URL="https://pigcode.ai/v1beta"</code></pre>
            </div>
          `,
          opencode: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">OpenCode</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">An open-source terminal AI coding assistant with support for custom OpenAI-compatible providers.</p>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">Install</h4>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># Install script
curl -fsSL https://opencode.ai/install | bash

# npm
npm install -g opencode-ai</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">Config file</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">Edit <code class="code-chip">~/.config/opencode/opencode.json</code> (or <code class="code-chip">opencode.json</code> in your project root):</p>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-4">
              <span class="lang-label">json</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "pigcode": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Pigcode",
      "options": {
        "baseURL": "https://pigcode.ai/v1",
        "apiKey": "{env:PIGCODE_API_KEY}"
      },
      "models": {
        "gpt-5.6-sol": {
          "name": "GPT-5.5"
        }
      }
    }
  },
  "model": "pigcode/gpt-5.6-sol"
}</code></pre>
            </div>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Then set <code class="code-chip">export PIGCODE_API_KEY="sk-pig-xxxx"</code>, or store the key with the <code class="code-chip">/connect</code> command inside OpenCode.</p>
          `,
          droidCli: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">Droid CLI</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">The AI terminal coding assistant from Factory. Supports custom models via BYOK (Bring Your Own Key).</p>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">Install</h4>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># macOS / Linux
curl -fsSL https://app.factory.ai/cli | sh

# Windows (PowerShell)
irm https://app.factory.ai/cli/windows | iex

# npm
npm install -g droid</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">Config file</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">Edit <code class="code-chip">~/.factory/settings.json</code> and add an entry to <code class="code-chip">customModels</code>:</p>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-4">
              <span class="lang-label">json</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>{
  "customModels": [
    {
      "model": "gpt-5.6-sol",
      "displayName": "Pigcode GPT-5.5",
      "baseUrl": "https://pigcode.ai/v1",
      "apiKey": "sk-pig-xxxx",
      "provider": "generic-chat-completion-api",
      "maxOutputTokens": 16384
    }
  ]
}</code></pre>
            </div>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Then switch to the custom model with the <code class="code-chip">/model</code> command inside Droid.</p>
          `,
          ccSwitch: `
            <h3 class="text-xl font-semibold text-custom-ink dark:text-white mb-4">CC Switch</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">An open-source desktop app for managing AI CLI providers (Claude Code, Codex, Gemini CLI, OpenCode and more). Switch between multiple API providers with one click — no manual config editing.</p>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">Core features</h4>
            <ul class="list-disc ml-6 space-y-1 text-slate-700 dark:text-slate-300 mb-6">
              <li>Switch the API provider for Claude Code / Codex / Gemini CLI and more with one click</li>
              <li>Manage multiple provider configurations</li>
              <li>Import a provider via a Deep Link in one click</li>
              <li>Automatically back up and restore configurations</li>
            </ul>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">Install</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">Windows / Linux users can download the installer from <a href="https://github.com/farion1231/cc-switch/releases" target="_blank" rel="noopener" class="text-custom-gold hover:underline font-semibold">GitHub Releases</a>; on macOS you can also use Homebrew:</p>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">bash</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># macOS (Homebrew)
brew install --cask cc-switch</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">One-click Deep Link import</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">After installing, open the following link in your browser (replace <code class="code-chip">sk-pig-xxxx</code> with your API key) to import the Pigcode configuration automatically:</p>
            <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mb-6">
              <span class="lang-label">text</span>
              <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code>ccswitch://v1/import?resource=provider&amp;app=claude&amp;name=Pigcode&amp;endpoint=https%3A%2F%2Fpigcode.ai&amp;apiKey=sk-pig-xxxx</code></pre>
            </div>
            <h4 class="text-base font-semibold text-custom-ink dark:text-slate-200 mb-3">Manual configuration</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Alternatively, open CC Switch, click "Add" on the Providers page, enter the name <code class="code-chip">Pigcode</code>, the endpoint <code class="code-chip">https://pigcode.ai</code> and your API key, then save and switch to it.</p>
          `
        },
        reference: {
          quickRefTitle: 'Quick Reference',
          commandsTitle: 'Common Commands',
          commandsLead: 'These are the built-in commands you will use most often in CLI tools:',
          troubleshootTitle: 'Troubleshooting',
          quickRefHead: `
            <tr class="bg-slate-50 dark:bg-custom-surface-dark">
              <th class="px-4 py-3 font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">Tool</th>
              <th class="px-4 py-3 font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">Install command</th>
              <th class="px-4 py-3 font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">Config file</th>
              <th class="px-4 py-3 font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">Endpoint</th>
            </tr>
          `,
          commandsHead: `
            <tr class="bg-slate-50 dark:bg-custom-surface-dark">
              <th class="px-4 py-3 font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">Command</th>
              <th class="px-4 py-3 font-semibold text-custom-ink dark:text-slate-300 border-b border-slate-200 dark:border-white/10">Description</th>
            </tr>
          `,
          cmd: {
            help: 'Show help and the list of available commands',
            clear: 'Clear the current conversation history',
            compact: 'Compact the conversation context to free up token quota',
            cost: 'Show the token usage and cost of the current session',
            model: 'View or switch the active model',
            models: 'List all available models'
          },
          ts: {
            q1: `
              <h4 class="font-semibold text-custom-ink dark:text-slate-200 mb-2">Command not found</h4>
              <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">After installing, the terminal reports the command does not exist. This usually means the npm global bin directory is not on your PATH.</p>
              <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed"><strong>Fix:</strong></p>
              <div class="code-block bg-slate-50 dark:bg-custom-surface-dark rounded-lg p-4 font-mono text-sm mt-2">
                <pre class="text-slate-800 dark:text-slate-200 overflow-x-auto"><code># Show the npm global bin directory
npm config get prefix

# Add the printed path/bin to PATH
export PATH="$(npm config get prefix)/bin:$PATH"</code></pre>
              </div>
            `,
            q2: `
              <h4 class="font-semibold text-custom-ink dark:text-slate-200 mb-2">API connection failed</h4>
              <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">Requests time out or cannot reach the server.</p>
              <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed"><strong>Fix:</strong></p>
              <ul class="list-disc ml-6 space-y-1 text-slate-700 dark:text-slate-300 text-sm mt-2">
                <li>Check that your network connection is working</li>
                <li>Confirm the endpoint is correct (see the endpoint table above)</li>
                <li>Check whether a proxy or VPN is blocking the connection</li>
                <li>Try testing endpoint reachability with <code class="code-chip code-chip-xs">curl</code></li>
              </ul>
            `,
            q3: `
              <h4 class="font-semibold text-custom-ink dark:text-slate-200 mb-2">Wrong endpoint configuration</h4>
              <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">Requests fail because the endpoint is configured incorrectly.</p>
              <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed"><strong>Fix:</strong></p>
              <ul class="list-disc ml-6 space-y-1 text-slate-700 dark:text-slate-300 text-sm mt-2">
                <li>Claude Code uses the Anthropic protocol. Endpoint: <code class="code-chip code-chip-xs">https://pigcode.ai</code> — do <strong>not</strong> append <code class="code-chip code-chip-xs">/v1</code></li>
                <li>Codex CLI / OpenCode / Droid CLI use the OpenAI protocol. Endpoint: <code class="code-chip code-chip-xs">https://pigcode.ai/v1</code></li>
                <li>Gemini CLI uses the Gemini protocol. Endpoint: <code class="code-chip code-chip-xs">https://pigcode.ai/v1beta</code></li>
              </ul>
            `,
            q4: `
              <h4 class="font-semibold text-custom-ink dark:text-slate-200 mb-2">Invalid API key</h4>
              <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">Authentication fails or the API key is reported invalid.</p>
              <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed"><strong>Fix:</strong></p>
              <ul class="list-disc ml-6 space-y-1 text-slate-700 dark:text-slate-300 text-sm mt-2">
                <li>Make sure the API key was copied correctly (no extra spaces or missing characters)</li>
                <li>Make sure the key group matches the tool you are using (CC-MAX groups for Claude Code, Codex groups for Codex CLI, etc.)</li>
                <li>Sign in to the console and check whether the token is still valid — not deleted or expired</li>
                <li>Check that your account balance is sufficient</li>
              </ul>
            `
          }
        }
      },
      models: {
        title: 'Model Catalog - Pigcode',
        hero: {
          badge: 'Model Catalog',
          title: '<span>Every model in the world, </span><span class="brand-emphasis">at a glance</span>',
          description: 'Context windows, capability tags, and modality support for 5,000+ models from 60+ vendors, with the data timestamp shown for each catalog snapshot.',
          stats: {
            models: 'Models',
            vendors: 'Vendors',
            types: 'Model types'
          }
        },
        filters: {
          title: 'Filters',
          search: 'Search models',
          searchPlaceholder: 'Search name or model ID…',
          type: 'Modality',
          vendor: 'Vendor',
          vendorSearchPlaceholder: 'Search vendor…',
          noVendor: 'No matching vendor',
          capability: 'Capabilities',
          context: 'Context window',
          hideDeprecated: 'Hide deprecated models',
          reset: 'Reset filters'
        },
        toolbar: {
          count: '{n} models',
          sort: 'Sort',
          sortNewest: 'Newest first',
          sortContext: 'Longest context',
          sortName: 'Name A→Z'
        },
        card: {
          context: 'Context',
          copy: 'Copy model ID',
          deprecated: 'Deprecated',
          official: 'Official',
          reference: 'Ref',
          priceSource: 'Price source',
          priceIn: 'In',
          priceOut: 'Out'
        },
        loadMore: 'Load more',
        updated: 'Data updated',
        loadError: 'Failed to load catalog data. Please refresh.',
        empty: 'No matching models. Try relaxing the filters.',
        note: '* Models and ratios actually available on this site follow the live console. See the',
        noteLink: 'pricing page'
      }
    }
  };

  function normalizeLocale(locale) {
    if (!locale) return 'en-US';
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
    return normalizeLocale(navigator.language || navigator.userLanguage || 'en-US');
  }

  var storedDefaultVersion = null;
  try {
    storedDefaultVersion = localStorage.getItem(LOCALE_DEFAULT_VERSION_KEY);
    if (storedDefaultVersion !== LOCALE_DEFAULT_VERSION) {
      localStorage.setItem(STORAGE_KEY, 'en-US');
      localStorage.setItem(LOCALE_DEFAULT_VERSION_KEY, LOCALE_DEFAULT_VERSION);
    }
  } catch (error) {
    // ignore
  }

  var currentLocale = getStoredLocale() || 'en-US';

  function lookup(locale, key) {
    return key.split('.').reduce(function (result, part) {
      return result && Object.prototype.hasOwnProperty.call(result, part) ? result[part] : undefined;
    }, translations[locale]);
  }

  function resolveTranslation(key) {
    var localeValue = lookup(currentLocale, key);
    if (localeValue !== undefined) return localeValue;
    return lookup('zh-CN', key);
  }

  function t(key) {
    var value = resolveTranslation(key);
    return value !== undefined ? value : key;
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
      var value = resolveTranslation(node.getAttribute('data-i18n-html'));
      if (typeof value === 'string') {
        node.innerHTML = value;
      }
    });
  }

  function applyTextAttribute(root, attrName) {
    collectNodes(root, '[' + attrName + ']').forEach(function (node) {
      var value = resolveTranslation(node.getAttribute(attrName));
      if (typeof value === 'string') {
        node.textContent = value;
      }
    });
  }

  function applyText(root) {
    applyTextAttribute(root, 'data-i18n');
    applyTextAttribute(root, 'data-i18n-safe');
  }

  function applyAttributes(root) {
    collectNodes(root, '[data-i18n-attr]').forEach(function (node) {
      node.getAttribute('data-i18n-attr').split(';').forEach(function (entry) {
        var parts = entry.split(':');
        if (parts.length !== 2) return;
        var attr = parts[0].trim();
        var key = parts[1].trim();
        var value = resolveTranslation(key);
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

  window.PigcodeI18n = {
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
