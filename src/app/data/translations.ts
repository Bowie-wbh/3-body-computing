export const translations = {
  zh: {
    nav: {
      constellation: '星座简介',
      services: '开放服务',
      about: '关于我们',
      register: '注册',
      login: '登录',
    },
    home: {
      hero: {
        title: '协同全球合作伙伴共建的千星规模太空计算基础设施',
        subtitle: '把人工智能送入太空',
        cta: '立即开始',
        skip: 'Skip',
      },
    },
    constellation: {
      screen1: {
        title: '协同全球合作伙伴共建的千星规模太空计算基础设施',
        subtitle: '把人工智能送入太空',
        cta: '立即开始',
      },
      screen2: {
        title: '定义新一类卫星：计算卫星',
      },
      screen3: {
        title1: '计算上天',
        desc1: '将大算力计算单元、路由器、星间小型高速通信机部署到卫星，变"天感地算"为"天感天算"',
        title2: '星间组网',
        desc2: '基于天基分布式操作系统和星间组网技术将多个太空计算节点链接成网，实现"星间互联"，形成"太空云计算"能力',
        title3: '模型上天',
        desc3: '是将地面模型部署上天，实现在轨信息与数据的自主感测及计算任务自主规划',
      },
      screen4: {
        title: '建设目标',
        subtitle: '1000颗卫星规模，1EOPS算力',
      },
      screen5: {
        title: '建设规划',
        phase1: {
          year: '2025年',
          title: '技术验证阶段，12颗计算卫星',
          desc: '构建由12颗计算卫星组成的"首发任务"，完成P级算力上天、激光稳定建链、星间组网、天基模型等关键技术验证。',
        },
        phase2: {
          year: '2027年',
          title: '场景验证阶段，100颗计算卫星',
          desc: '对遥感、天文、导航、通信等典型场景进行示范验证，与合作伙伴共建典型示范系统，形成百余颗计算卫星规模的计算星座。',
        },
        phase3: {
          year: '2032年',
          title: '大规模组网阶段，1000颗计算卫星',
          desc: '为行业提供协议、工具、算力、算法等基础服务，搭建开放技术创新平台，构建太空计算合作生态，建成千星规模计算星座。',
        },
      },
      screen6: {
        title: '"人工智能+"科学技术',
        subtitle: '在太空变革科学研究范式',
        cards: [
          {
            title: '天基天文时域模型',
            desc: '双星协同探测，实现伽玛暴在轨实时探测、认证、分类。',
            partners: '合作单位：广西大学、国家天文台',
          },
          {
            title: '天基气象模型',
            desc: '气象预报在轨生成，大幅提升天气预报的时效性与精准度',
            partners: '合作单位：复旦大学、巡天千河、航天八院',
          },
          {
            title: '天基遥感模型',
            desc: '80亿参数，调度卫星协同处理源数据，大幅提升观测效率。',
            partners: '合作单位：北京师范大学、香港大学、航天体系院',
          },
          {
            title: '羲和二号卫星',
            desc: '为羲和二号卫星提供星载算力，支撑太阳观测数据在轨实时处理。',
            partners: '合作单位：南京大学、航天八院、航天局高分中心',
          },
        ],
      },
      screen7: {
        title: '"人工智能+"全球合作',
        subtitle: '服务全球开放科学',
        card1: {
          title: 'ITU·人工智能与太空计算挑战赛',
          desc: '全球首个聚焦"在轨智能计算"的国际赛事，获奖团队将有机会获得之江实验室提供的算法上星、方案落地的全流程支持。',
          organizer: '主办单位：国际电信联盟、中国信息通信研究院、之江实验室',
          cta: '了解详情',
        },
        card2: {
          title: 'UNESCO·橄榄叶计划',
          desc: '计划每年发射1-2颗益性科学试验卫星，面向全球公开征集太空科学载荷和太空智能应用，提供开放搭载和验证服务。',
          organizer: '主办单位：之江实验室、雄安科学园、鸿擎科技',
          cta: '了解详情',
        },
      },
      screen8: {
        title: '合作单位',
        subtitle: '共商共建共享共发展',
        statLabels: {
          launched: '已发射',
          deployed: '已投产',
          inProgress: '沟通中',
          target2027: "'27目标"
        }
      },
      screen9: {
        title: '太空计算关键技术',
        subtitle: '之江实验室聚焦突破太空计算软硬件技术，形成了系列关键成果。',
        achievements: [
          {
            title: '"之江智加"星载智能计算机',
            desc: '采用超异构架构设计，集成轻量化高可靠星载操作系统、高通量推理引擎，负责对海量星上数据进行在轨处理、存储和转发。',
            highlight: '算力：1POPS~10POPS',
          },
          {
            title: '"之江智光"星间激光通信机',
            desc: '以激光束为载体的通信传输设备，满足巨量、高速、即时、安全的天基数据传输需求，可快速建链并稳定维持，星座高率、高宽带组网。',
            highlight: '通信速率：10Gbps~200Gbps',
          },
          {
            title: '"之江智桥"星载高速路由器',
            desc: '星间、星地及星内通信的统一互联枢纽，具备高速率、低延迟、高可靠传输能力，支持多速率、多通道、多层以太网交换。',
            highlight: '交换容量：440G~1T',
          },
          {
            title: '之江天基分布式操作系统',
            desc: '实现对星座卫星组网和计算资源的统一管理，支持天基模型或应用的灵活部署和在轨实时更新。',
            highlight: '计算星座资源管家',
          },
          {
            title: '具身智能卫星模型',
            desc: '将人工智能技术与传统卫星深度融合，使卫星具备资源感知、任务规划、智能决策与自主执行能力。',
            highlight: '计算星座智慧大脑',
          },
        ],
      },
    },
    services: {
      screen1: {
        title: '把人工智能送入太空',
        subtitle: '支持模型训练、调试、地面验证到部署全流程',
        highlight: '未来科学家，在此启程',
        cta: '立即开始',
        stats: {
          card1Title: '组网能力',
          card1Items: [
            { text: '所有荷地面站', highlight: '全部IP化', text2: '' },
            { text: '', highlight: '3星', text2: '星间星地分布式业务成功' },
            { text: '', highlight: '6星', text2: '星间建链成功' },
          ],
          card2Title: '计算能力',
          card2Items: [
            { text: '单星最大算力', highlight: '744T OPS' },
            { text: '在轨整体算力', highlight: '5POPS' },
            { text: '支持模型参数', highlight: '1400亿' },
          ],
        },
      },
      screen2: {
        title: '在轨模型',
        deploymentText: '天完成模型部署和在轨更新',
        ctaButton: '"人工智能+"科学技术',
        models: [
          { name: '天基遥感模型', params: '80亿参数', partners: '之江实验室、北京师范大学、香港大学、航天体系院' },
          { name: '天基天文时域模型', params: '80亿参数', partners: '国家天文台、广西大学、之江实验室' },
          { name: '量子抗干扰加密算法', params: '', partners: '之江实验室' },
          { name: '遥感图像融合算法', params: '', partners: '宁波大学' },
          { name: '航天多模态模型', params: '3亿参数', partners: '航天体系院' },
          { name: '千问大语言模型', params: '6亿参数', partners: '国星宇航' },
          { name: '太空云盘', params: '', partners: '太空字节' },
          { name: '伏羲气象模型', params: '1.5亿参数', partners: '复旦大学' },
          { name: 'L0-L4遥感图像处理算法', params: '', partners: '之江实验室' },
          { name: '地表要素提取模型', params: '', partners: '之江实验室' },
        ],
        carousel: [
          { title: '深空探测', desc: '首发任务中的两颗卫星搭载了广西大学的宇宙X射线偏振探测器，部署了国家天文台与实验室联合研发的天基天文时域模型，用于在轨探测伽马射线暴瞬变源。' },
          { title: '灾害应急', desc: '天基遥感模型利用三计算星座拍摄地表影像，在复杂地表特征情况下，发现了甘肃省酒泉市肃州区的一处火情，并对火点、烟雾区域进行了分割。' },
          { title: '智慧城市', desc: '天基遥感模型对新疆乌鲁木齐市城区进行了一次基础设施普查试验，在大雪覆盖的复杂条件下，完成了对体育场、桥梁等设施的自动识别。' },
          { title: '环境监测', desc: '面向水环境监测的三星协同在轨智能处理试验，标志着三体计算星座首发任务已完全打通"遥感载荷拍摄—在轨数据处理—星间协同传输—在轨模型计算—任务结果下传"的全链路能力。' },
        ],
      },
      screen2b: {
        title: '科学载荷在轨验证能力',
        subtitle: '双星X射振探器+天文时模型，开辟GRB瞬变源观测新模式',
        stats: [
          { value: 72, unit: '小时', text: '载荷持续开机' },
          { value: 2, unit: 'GB', text: '累计下数据' },
        ],
        images: [
          { title: 'X射线偏振探测器' },
          { title: '载荷在轨工作流程' },
        ],
      },
      screen3: {
        title: '服务流程',
        steps: [
          {
            title: '模型训练服务',
            desc: '提供数据管理、算力调度和开发环境，支持标准化模型训练与全流程日志追踪，让您专注算法创新本身，快速完成模型迭代。',
          },
          {
            title: '应用调试服务',
            desc: '提供与在轨卫星一致的调试环境和标准化打包流程，支持远程调试、快速定位问题，确保每一份应用镜像在地面即具备在轨运行能力。',
          },
          {
            title: '应用验证服务',
            desc: '提供空恶劣环境的自动化仿真测试，支持漏洞扫描、安全检测与功能正确性多维校验，确保应用在轨运行可靠。',
          },
          {
            title: '应用部署服务',
            desc: '通过验证的应用，可一键提交在轨部署申请，我们将为您配置三体计算星座的在轨算力资源',
          },
        ],
      },
    },
    about: {
      screen1: {
        title: '天基计算系统研究中心',
        desc: '天基计算系统研究中心以构建"三体计算星座"为使命任务，采用"共商共建共享共发展"的方式，联合全球合作伙伴共同建设千星规模的计算星座，打造开放共享的太空计算系统，构建天基智能计算基础设施，为通信、导航、遥感和空间科学等卫星提供天基计算服务，为国家重大战略任务和全球开放科技合作提供重要支撑。',
      },
      screen2: {
        title: '大事记',
        events: [
          {
            date: '2024/02/03',
            title: '智加X1星载智能计算机发射成功',
            desc: '2024年2月3日，智加X1星载智能计算机搭载东方慧眼01号发射，验证在轨目标检测、云判和ROI压缩能。',
            url: '',
          },
          {
            date: '2024/09/24',
            title: '智加X2星载智能计算机发射成功',
            desc: '2024年9月24日，智加X2星载智能计算机随国星宇航"星时代-21"卫星发射，验证在轨目标检测、抗单粒子翻转可靠性实验和软件轨重构功能。',
            url: 'https://www.zhejianglab.org/lab/post/3468?pid=2',
          },
          {
            date: '2024/11/11',
            title: '天基分布式操作系统和天基遥感模型发射成功',
            desc: '2024年11月11日，天基分布式操作系统和天基遥感模型搭载阿曼星发射成功，成功进行在轨验证。',
            url: 'https://www.zhejianglab.org/lab/post/3507?pid=2',
          },
          {
            date: '2025/05/14',
            title: '三计算星座首发任务成功',
            desc: '2025年5月14日12时12分，三体计算星座首发12星搭载长征二号丁运载火箭在酒泉卫星发射中心成功发射，标志着我国首个整轨互联的太空计算星座正式进入网阶段。',
            url: 'https://www.zhejianglab.org/lab/post/3617?pid=2',
          },
        ],
      },
      screen3: {
        title: '太空计算关键技术',
        subtitle: '之江实验室聚焦突破太空计算软硬件技术，形成了系列关键成果。',
        achievements: [
          {
            title: '"之江智加"星载智能计算机',
            desc: '采用超异构架构设计，集成轻量化高可靠星载操作系统、高通量推理引擎，负责对海量星上数据进行在轨处理、存储和转发。',
            highlight: '算力：1POPS~10POPS',
          },
          {
            title: '"之江智光"星间激光通信机',
            desc: '以激光束为载体的通信传输设备，满���巨量、高速、即时、安全的天基数据传输需求，可快速建链并稳定维持，支持星座高速率、高宽带组网。',
            highlight: '通信速率：10Gbps~200Gbps',
          },
          {
            title: '"之江智桥"星载高速路由器',
            desc: '星间、星地及星内通信的统一互联枢纽，具备高速率、低延迟、高可靠传输能力，支持多速率、多通道、多层以太网交换。',
            highlight: '交换容量：440G~1T',
          },
          {
            title: '之江天基分布式操作系统',
            desc: '实现对星座卫星组网和计算资源的统一管理，支持天基模型或应用的灵活部署和在轨实时更新。',
            highlight: '计算星座资源管家',
          },
          {
            title: '具身智能卫星模型',
            desc: '将人工智能技术与传统卫星深度融合，使卫星具备资源感知、任务规划、智能决策与自主执行能力。',
            highlight: '计算星座智慧大脑',
          },
        ],
      },
      screen4: {
        title: '联系我们',
        options: [
          '获取产品介绍资料',
          '成为星座建设合作伙伴',
          '成为太空智能应用合作伙伴',
        ],
        contact: {
          phone: '电话：13975139466',
          email: '邮箱：guogang@zhejianglab.org',
          address: '地址：杭州市余杭区文一西路2880号',
        },
      },
    },
    footer: {
      title: '三体计算星座',
      subtitle: '协同全球合作伙伴共建的千星规模太空计算基础设施',
      viewMore: '查看更多',
      links: {
        constellation: '星座简介',
        services: '开放服务',
        resources: '开放资源',
        about: '关于我们',
      },
      partners: {
        title: '友情链接',
        zjlab: '之江实验室',
        zero2x: 'zero2x',
        itu: 'ITU',
        olive: '橄榄叶',
      },
      copyright: 'Copyright © 2026 之江实验室. All Rights Reserved | 浙ICP备18016057号-16',
    },
    auth: {
      title: '欢迎登录',
      phoneLogin: '手机登录',
      phonePassword: '密码登录',
      phone: '手机号',
      password: '密码',
      code: '验证码',
      getCode: '获取验证码',
      forgotPassword: '忘记密码？',
      login: '登录',
      register: '注册账号',
      backHome: '回到主页',
      registerTitle: '注册账号',
      registerSuccess: '注册成功！',
      confirmPassword: '确认密码',
      haveAccount: '已有账号？',
      noAccount: '还没有账号？',
      goToLogin: '去登录',
      registerButton: '注册',
      forgotPasswordTitle: '找回密码',
      email: '邮箱',
      sendResetLink: '发送重置链接',
      backToLogin: '返回登录',
      resetSuccess: '密码重置邮件已发送！',
      phoneError: '请输入有效的手机号',
      passwordError: '密码长度至少为6位',
      passwordMismatch: '两次输入的密码不一致',
      codeError: '请输入验证码',
      emailError: '请输入有效的邮箱地址',
    },
  },
  en: {
    nav: {
      constellation: 'Constellation',
      services: 'Services',
      about: 'About Us',
      register: 'Register',
      login: 'Login',
    },
    home: {
      hero: {
        title: 'Building a Thousand-Satellite Space Computing Infrastructure with Global Partners',
        subtitle: 'Sending AI to Space',
        cta: 'Get Started',
        skip: 'Skip',
      },
    },
    constellation: {
      screen1: {
        title: 'Building a Thousand-Satellite Space Computing Infrastructure with Global Partners',
        subtitle: 'Sending AI to Space',
        cta: 'Get Started',
      },
      screen2: {
        title: 'Defining a New Class of Satellites: Computing Satellites',
      },
      screen3: {
        title1: 'Computing in Space',
        desc1: 'Deploy high-performance computing units, routers, and inter-satellite communication devices to satellites, transforming "sense in space, compute on ground" to "sense and compute in space"',
        title2: 'Inter-Satellite Networking',
        desc2: 'Link multiple space computing nodes through space-based distributed OS and inter-satellite networking technology to achieve "inter-satellite connectivity" and form "space cloud computing" capabilities',
        title3: 'Models in Orbit',
        desc3: 'Deploy ground models to orbit, enabling autonomous sensing and computing task planning for in-orbit information and data',
      },
      screen4: {
        title: 'Construction Goals',
        subtitle: '1000 Satellites, 1EOPS Computing Power',
      },
      screen5: {
        title: 'Development Plan',
        phase1: {
          year: '2025',
          title: 'Technology Verification Phase, 12 Computing Satellites',
          desc: 'Build the "first mission" consisting of 12 computing satellites to complete key technology verification including P-level computing power in space, stable laser link establishment, inter-satellite networking, and space-based models',
        },
        phase2: {
          year: '2027',
          title: 'Scenario Verification Phase, 100 Computing Satellites',
          desc: 'Demonstrate and verify typical scenarios such as remote sensing, astronomy, navigation, and communication, build typical demonstration systems with partners, and form a computing constellation of over a hundred computing satellites',
        },
        phase3: {
          year: '2032',
          title: 'Large-Scale Networking Phase, 1000 Computing Satellites',
          desc: 'Provide basic services such as protocols, tools, computing power, and algorithms for the industry, build an open technology innovation platform, construct a space computing cooperative ecosystem, and complete a thousand-satellite computing constellation',
        },
      },
      screen6: {
        title: '"AI+" Science and Technology',
        subtitle: 'Transforming Scientific Research Paradigms in Space',
        cards: [
          {
            title: 'Space-based Astronomical Time-domain Model',
            desc: 'Dual-satellite collaborative detection for real-time in-orbit detection, authentication, and classification of gamma-ray bursts.',
            partners: 'Partners: Guangxi University, National Astronomical Observatory',
          },
          {
            title: 'Space-based Meteorological Model',
            desc: 'Weather forecasts generated in orbit, significantly improving the timeliness and accuracy of weather forecasting',
            partners: 'Partners: Fudan University, Xuntian Qianhe, Aerospace 8th Institute',
          },
          {
            title: 'Space-based Remote Sensing Model',
            desc: '8 billion parameters, scheduling satellites to collaboratively process source data, significantly improving observation efficiency.',
            partners: 'Partners: Beijing Normal University, University of Hong Kong, Aerospace Systems Institute',
          },
          {
            title: 'Xihe-2 Satellite',
            desc: 'Providing satellite computing power for the Xihe-2 satellite to support real-time processing of solar observation data in orbit.',
            partners: 'Partners: Nanjing University, Aerospace 8th Institute, CNSA High-Resolution Center',
          },
        ],
      },
      screen7: {
        title: '"AI+" Global Cooperation',
        subtitle: 'Serving Global Open Science',
        card1: {
          title: 'ITU · AI and Space Computing Challenge',
          desc: 'The world\'s first international competition focused on "in-orbit intelligent computing". Winning teams will have the opportunity to receive full-process support from Zhejiang Lab for algorithm deployment to satellites and solution implementation.',
          organizer: 'Organizers: ITU, China Academy of Information and Communications Technology, Zhejiang Lab',
          cta: 'Learn More',
        },
        card2: {
          title: 'UNESCO · Olive Leaf Program',
          desc: 'Plans to launch 1-2 public welfare scientific experiment satellites annually, openly soliciting space science payloads and space intelligent applications globally, providing open loading and verification services.',
          organizer: 'Organizers: Zhejiang Lab, Xiong\'an Science Park, Hongqing Technology',
          cta: 'Learn More',
        },
      },
      screen8: {
        title: 'Partners',
        subtitle: 'Consultation, Construction, Sharing, and Development Together',
        statLabels: {
          launched: 'Launched',
          deployed: 'Deployed',
          inProgress: 'In Progress',
          target2027: "'27 Target"
        }
      },
      screen9: {
        title: 'Technical Achievements',
        subtitle: 'Zhejiang Lab focuses on breakthroughs in space computing software and hardware technology, forming a series of key achievements.',
        achievements: [
          {
            title: '"Zhijiang Zhijia" Satellite Intelligent Computer',
            desc: 'Adopts ultra-heterogeneous architecture design, integrates lightweight and highly reliable satellite operating system and high-throughput inference engine, responsible for in-orbit processing, storage, and forwarding of massive satellite data.',
            highlight: 'Computing Power: 1POPS~10POPS',
          },
          {
            title: '"Zhijiang Zhiguang" Inter-Satellite Laser Communicator',
            desc: 'Communication transmission equipment using laser beams as carriers, meeting the needs of massive, high-speed, instant, and secure space-based data transmission, capable of rapid link establishment and stable maintenance, supporting high-rate, high-bandwidth constellation networking.',
            highlight: 'Communication Rate: 10Gbps~200Gbps',
          },
          {
            title: '"Zhijiang Zhiqiao" Satellite High-Speed Router',
            desc: 'Unified interconnection hub for inter-satellite, satellite-ground, and intra-satellite communication, with high-rate, low-latency, and highly reliable transmission capabilities, supporting multi-rate, multi-channel, multi-layer Ethernet switching.',
            highlight: 'Switching Capacity: 440G~1T',
          },
          {
            title: 'Zhijiang Space-based Distributed Operating System',
            desc: 'Realizes unified management of constellation satellite networking and computing resources, supports flexible deployment and real-time in-orbit updates of space-based models or applications.',
            highlight: 'Resource Manager for Computing Constellation',
          },
          {
            title: 'Embodied Intelligence Satellite Model',
            desc: 'Deeply integrates artificial intelligence technology with traditional satellites, enabling satellites with resource awareness, task planning, intelligent decision-making, and autonomous execution capabilities.',
            highlight: 'Wisdom Brain for Computing Constellation',
          },
        ],
      },
    },
    services: {
      screen1: {
        title: 'Sending AI to Space',
        subtitle: 'Supporting the full process from model training, debugging, ground verification to deployment',
        highlight: 'Future Scientists, Start Here',
        cta: 'Get Started',
        stats: {
          card1Title: 'Networking Capability',
          card1Items: [
            { text: 'All payloads and ground stations', highlight: 'fully IPized' },
            { text: '', highlight: 'Three-star', text2: 'successful inter-satellite and ground distributed business' },
            { text: '', highlight: 'Six-star', text2: 'successful inter-satellite link establishment' },
          ],
          card2Title: 'Computing Capability',
          card2Items: [
            { text: 'Maximum computing power per satellite', highlight: '744T OPS' },
            { text: 'Total computing power in orbit', highlight: '5POPS' },
            { text: 'Support model parameters', highlight: '140 billion' },
          ],
        },
      },
      screen2: {
        title: 'In-Orbit Models',
        deploymentText: 'days to deploy to orbit',
        ctaButton: 'View All Models',
        models: [
          { name: 'Space-based Remote Sensing Model', params: '8B Parameters', partners: 'Zhejiang Lab, Beijing Normal University, University of Hong Kong, Aerospace Systems Institute' },
          { name: 'Space-based Astronomical Time-domain Model', params: '8B Parameters', partners: 'National Astronomical Observatory, Guangxi University, Zhejiang Lab' },
          { name: 'Quantum Anti-Interference Encryption Algorithm', params: '', partners: 'Zhejiang Lab' },
          { name: 'Remote Sensing Image Fusion Algorithm', params: '', partners: 'Ningbo University' },
          { name: 'Aerospace Multimodal Model', params: '300M Parameters', partners: 'Aerospace Systems Institute' },
          { name: 'Qianwen Large Language Model', params: '600M Parameters', partners: 'Guoxing Aerospace' },
          { name: 'Space Cloud Disk', params: '', partners: 'Space Byte' },
          { name: 'Fuxi Meteorological Model', params: '150M Parameters', partners: 'Fudan University' },
          { name: 'L0-L4 Remote Sensing Image Processing Algorithm', params: '', partners: 'Zhejiang Lab' },
          { name: 'Surface Element Extraction Model', params: '', partners: 'Zhejiang Lab' },
        ],
        carousel: [
          { title: 'Deep Space Exploration', desc: 'Two satellites in the first mission carried the universe X-ray polarimeter from Guangxi University, deploying the space-based astronomical time-domain model jointly developed by the National Astronomical Observatory and the laboratory, used for in-orbit detection of gamma-ray burst transient sources.' },
          { title: 'Disaster Response', desc: 'The space-based remote sensing model used the Three-Body Computing Constellation to capture ground images, discovering a fire in Suzhou District, Jiuquan City, Gansu Province, under complex ground features, and segmenting the fire points and smoke areas.' },
          { title: 'Smart City', desc: 'The space-based remote sensing model conducted an infrastructure census trial in Urumqi City, Xinjiang, under complex conditions covered by heavy snow, automatically identifying facilities such as stadiums and bridges.' },
          { title: 'Environmental Monitoring', desc: 'A three-star collaborative in-orbit intelligent processing trial for water environment monitoring marks that the first mission of the Three-Body Computing Constellation has fully connected the entire chain of "remote sensing payload imaging—on-orbit data processing—inter-satellite collaborative transmission—on-orbit model calculation—task result download".' },
        ],
      },
      screen2b: {
        title: 'On-Orbit Verification Capability of Scientific Payloads',
        subtitle: 'Dual-star X-ray Polarimeter + Astronomical Time-domain Model, Opening a New Mode for GRB Transient Source Observation',
        stats: [
          { value: 72, unit: 'hours', text: 'Payload continuous operation' },
          { value: 2, unit: 'GB', text: 'Cumulative downloaded data' },
        ],
        images: [
          { title: 'X-ray Polarimeter' },
          { title: 'On-Orbit Workflow of X-ray Polarimeter' },
        ],
      },
      screen3: {
        title: 'Service Process',
        steps: [
          {
            title: 'Model Training Service',
            desc: 'Provides data management, computing power scheduling, and development environment, supports standardized model training and full-process log tracking, allowing you to focus on algorithm innovation and quickly complete model iterations.',
          },
          {
            title: 'Application Debugging Service',
            desc: 'Provides debugging environment consistent with in-orbit satellites and standardized packaging process, supports remote debugging and rapid problem location, ensuring every application image has in-orbit operation capability on the ground.',
          },
          {
            title: 'Application Verification Service',
            desc: 'Provides automated simulation testing in harsh space environments, supports vulnerability scanning, security detection, and functional correctness multi-dimensional verification, ensuring reliable in-orbit operation of applications.',
          },
          {
            title: 'Application Deployment Service',
            desc: 'Applications that pass verification can submit in-orbit deployment applications with one click, and we will allocate in-orbit computing power resources of the Three-Body Computing Constellation for you.',
          },
        ],
      },
    },
    about: {
      screen1: {
        title: 'Space-based Computing System Research Center',
        desc: 'The Space-based Computing System Research Center takes the construction of the "Three-Body Computing Constellation" as its mission, adopts the approach of "consultation, construction, sharing, and development together", jointly builds a thousand-satellite computing constellation with global partners, creates an open and shared space computing system, constructs space-based intelligent computing infrastructure, provides space-based computing services for satellites in communication, navigation, remote sensing, and space science, and provides important support for national major strategic tasks and global open scientific and technological cooperation.',
      },
      screen2: {
        title: 'Milestones',
        events: [
          {
            date: '2024/02/03',
            title: 'Zhijia X1 Satellite Intelligent Computer Successfully Launched',
            desc: 'On February 3, 2024, the Zhijia X1 satellite intelligent computer was launched aboard Dongfang Huiyan 01, verifying in-orbit target detection, cloud judgment, and ROI compression functions.',
            url: '',
          },
          {
            date: '2024/09/24',
            title: 'Zhijia X2 Satellite Intelligent Computer Successfully Launched',
            desc: 'On September 24, 2024, the Zhijia X2 satellite intelligent computer was launched with Guoxing Aerospace\'s "Star Era-21" satellite, verifying in-orbit target detection, anti-single-particle flip reliability experiments, and software orbit reconstruction functions.',
            url: 'https://www.zhejianglab.org/lab/post/3468?pid=2',
          },
          {
            date: '2024/11/11',
            title: 'Space-based Distributed OS and Remote Sensing Model Successfully Launched',
            desc: 'On November 11, 2024, the space-based distributed operating system and space-based remote sensing model were successfully launched aboard the Oman satellite and successfully verified in orbit.',
            url: 'https://www.zhejianglab.org/lab/post/3507?pid=2',
          },
          {
            date: '2025/05/14',
            title: 'Three-Body Computing Constellation First Mission Success',
            desc: 'At 12:12 on May 14, 2025, the first 12 satellites of the Three-Body Computing Constellation were successfully launched aboard the Long March 2D carrier rocket at the Jiuquan Satellite Launch Center, marking that China\'s first full-orbit interconnected space computing constellation has officially entered the networking phase.',
            url: 'https://www.zhejianglab.org/lab/post/3617?pid=2',
          },
        ],
      },
      screen3: {
        title: 'Technical Achievements',
        subtitle: 'Zhejiang Lab focuses on breakthroughs in space computing software and hardware technology, forming a series of key achievements.',
        achievements: [
          {
            title: '"Zhijiang Zhijia" Satellite Intelligent Computer',
            desc: 'Adopts ultra-heterogeneous architecture design, integrates lightweight and highly reliable satellite operating system and high-throughput inference engine, responsible for in-orbit processing, storage, and forwarding of massive satellite data.',
            highlight: 'Computing Power: 1POPS~10POPS',
          },
          {
            title: '"Zhijiang Zhiguang" Inter-Satellite Laser Communicator',
            desc: 'Communication transmission equipment using laser beams as carriers, meeting the needs of massive, high-speed, instant, and secure space-based data transmission, capable of rapid link establishment and stable maintenance, supporting high-rate, high-bandwidth constellation networking.',
            highlight: 'Communication Rate: 10Gbps~200Gbps',
          },
          {
            title: '"Zhijiang Zhiqiao" Satellite High-Speed Router',
            desc: 'Unified interconnection hub for inter-satellite, satellite-ground, and intra-satellite communication, with high-rate, low-latency, and highly reliable transmission capabilities, supporting multi-rate, multi-channel, multi-layer Ethernet switching.',
            highlight: 'Switching Capacity: 440G~1T',
          },
          {
            title: 'Zhijiang Space-based Distributed Operating System',
            desc: 'Realizes unified management of constellation satellite networking and computing resources, supports flexible deployment and real-time in-orbit updates of space-based models or applications.',
            highlight: 'Resource Manager for Computing Constellation',
          },
          {
            title: 'Embodied Intelligence Satellite Model',
            desc: 'Deeply integrates artificial intelligence technology with traditional satellites, enabling satellites with resource awareness, task planning, intelligent decision-making, and autonomous execution capabilities.',
            highlight: 'Wisdom Brain for Computing Constellation',
          },
        ],
      },
      screen4: {
        title: 'Contact Us',
        options: [
          'Get Product Introduction Materials',
          'Become a Constellation Construction Partner',
          'Become a Space Intelligence Application Partner',
        ],
        contact: {
          phone: 'Phone: 13975139466',
          email: 'Email: guogang@zhejianglab.org',
          address: 'Address: No. 2880 Wenyi West Road, Yuhang District, Hangzhou',
        },
      },
    },
    footer: {
      title: 'Three-Body Computing Constellation',
      subtitle: 'Building a Thousand-Satellite Space Computing Infrastructure with Global Partners',
      viewMore: 'View More',
      links: {
        constellation: 'Constellation',
        services: 'Services',
        resources: 'Resources',
        about: 'About Us',
      },
      partners: {
        title: 'Links',
        zjlab: 'Zhejiang Lab',
        zero2x: 'zero2x',
        itu: 'ITU',
        olive: 'Olive Leaf',
      },
      copyright: 'Copyright © 2026 Zhejiang Lab. All Rights Reserved | 浙ICP备18016057号-16',
    },
    auth: {
      title: 'Welcome',
      phoneLogin: 'Phone Login',
      phonePassword: 'Password Login',
      phone: 'Phone Number',
      password: 'Password',
      code: 'Verification Code',
      getCode: 'Get Code',
      forgotPassword: 'Forgot Password?',
      login: 'Login',
      register: 'Register',
      backHome: 'Back to Home',
      registerTitle: 'Register Account',
      registerSuccess: 'Registration Successful!',
      confirmPassword: 'Confirm Password',
      haveAccount: 'Already have an account?',
      noAccount: 'Don\'t have an account?',
      goToLogin: 'Go to Login',
      registerButton: 'Register',
      forgotPasswordTitle: 'Forgot Password',
      email: 'Email',
      sendResetLink: 'Send Reset Link',
      backToLogin: 'Back to Login',
      resetSuccess: 'Password reset email sent!',
      phoneError: 'Please enter a valid phone number',
      passwordError: 'Password must be at least 6 characters long',
      passwordMismatch: 'Passwords do not match',
      codeError: 'Please enter the verification code',
      emailError: 'Please enter a valid email address',
    },
  },
};