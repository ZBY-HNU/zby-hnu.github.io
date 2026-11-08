// 项目文案与素材统一在这里维护。
window.PORTFOLIO_PROJECTS = [
  {
    "id": "huawei",
    "number": "01",
    "title": "移动端性能与温度优化",
    "description": "端侧性能数据采集与分析，结合 SAC 强化学习开展 APP 冷启动性能与温度优化。",
    "label": "华为技术有限公司",
    "period": "2026.03–2026.06",
    "tags": [
      "性能数据分析",
      "SAC 强化学习",
      "端侧部署"
    ],
    "videos": [],
    "images": [
      {
        "title": "启动时长 · 参数散点与箱线分析",
        "src": "assets/images/huawei-scatter.png"
      },
      {
        "title": "启动时长 · Pearson / Spearman 相关性分析",
        "src": "assets/images/huawei-correlation.png"
      },
      {
        "title": "在线调度 · 整体温度变化",
        "src": "assets/images/huawei-temperature.png"
      },
      {
        "title": "在线调度 · 每秒超温面积变化",
        "src": "assets/images/huawei-excess-curve.png"
      },
      {
        "title": "在线调度 · 总超温面积对比",
        "src": "assets/images/huawei-thermal.png"
      },
      {
        "title": "在线调度 · 每轮次平均启动时间",
        "src": "assets/images/huawei-average.png"
      },
      {
        "title": "在线调度 · 每轮次最大启动时间",
        "src": "assets/images/huawei-maximum.png"
      },
      {
        "title": "在线调度 · 各 APP 平均启动时间",
        "src": "assets/images/huawei-app-average.png"
      }
    ]
  },
  {
    "id": "vla",
    "number": "02",
    "title": "基于 VLA 的双臂轮式机器人长程操作闭环系统",
    "description": "面向家居场景的语言指令驱动操作，将视觉观测、关节状态、动作序列及任务指令整理为 LeRobot 格式，完成观测—动作对齐与归一化；基于 OpenPI（JAX）对 π₀.₅ 进行 LoRA 微调，部署策略推理服务并对接相机、状态反馈与动作控制接口，开展机械臂操作及长程任务真机验证。",
    "label": "VLA 后训练 · 真机部署",
    "period": "2026.08–2026.10",
    "tags": [
      "OpenPI · π₀.₅",
      "LoRA 后训练",
      "LeRobot",
      "真机部署"
    ],
    "videos": [
      {
        "id": "vla-real-robot",
        "title": "松灵机器人 · VLA 真机操作演示",
        "src": "assets/videos/vla-real-robot.mp4",
        "poster": "assets/posters/vla-real-robot.jpg",
        "available": true
      },
      {
        "id": "task1",
        "title": "Task 1 · 仿真任务演示",
        "src": "assets/videos/task1.webm",
        "poster": "assets/posters/task1.jpg",
        "available": true
      },
      {
        "id": "task2",
        "title": "Task 2 · 仿真任务演示",
        "src": "assets/videos/task2.webm",
        "poster": "assets/posters/task2.jpg",
        "available": true
      },
      {
        "id": "task3",
        "title": "Task 3 · 仿真任务演示",
        "src": "assets/videos/task3.webm",
        "poster": "assets/posters/task3.jpg",
        "available": true
      },
      {
        "id": "vla-arm-simulation",
        "title": "机械臂仿真 · 操作演示",
        "src": "assets/videos/vla-arm-simulation.mp4",
        "poster": "assets/posters/vla-arm-simulation.jpg",
        "available": true
      }
    ]
  },
  {
    "id": "g1",
    "number": "03",
    "title": "人形机器人动作复现与运动控制",
    "description": "机器人动作演示",
    "label": "Unitree G1",
    "period": "2026.06–2026.08",
    "tags": [
      "动作复现",
      "Sim2Sim / Sim2Real",
      "真机稳定部署"
    ],
    "videos": [
      {
        "id": "g1-01",
        "title": "G1 展示视频 01",
        "src": "assets/videos/g1-01.mp4",
        "poster": "assets/posters/g1-01.jpg",
        "available": true
      },
      {
        "id": "g1-02",
        "title": "G1 展示视频 02",
        "src": "assets/videos/g1-02.mp4",
        "poster": "assets/posters/g1-02.jpg",
        "available": true
      },
      {
        "id": "g1-03",
        "title": "G1 展示视频 03",
        "src": "assets/videos/g1-03.mp4",
        "poster": "assets/posters/g1-03.jpg",
        "available": true
      },
      {
        "id": "g1-04",
        "title": "G1 展示视频 04",
        "src": "assets/videos/g1-04.mp4",
        "poster": "assets/posters/g1-04.jpg",
        "available": true
      }
    ]
  },
  {
    "id": "leju",
    "number": "04",
    "title": "乐聚机器人养老系统与真机部署（ACT）",
    "description": "面向养老辅助场景，展示跌倒检测与 ACT 轮椅协作的真机部署。结合人体骨架时序特征与目标检测进行跌倒识别，基于人工示教数据学习轮椅把手抓握、接近对齐与连续推行。",
    "label": "养老辅助 · 真机部署",
    "tags": [
      "真机部署",
      "跌倒检测",
      "模仿学习",
      "ACT 轮椅协作"
    ],
    "videos": [
      {
        "id": "leju-fall-lab",
        "title": "人形机器人 · 实验室跌倒场景演示",
        "src": "assets/videos/leju-fall-lab.mp4",
        "poster": "assets/posters/leju-fall-lab.jpg",
        "available": true
      },
      {
        "id": "leju-fall-home",
        "title": "人形机器人 · 家居跌倒场景演示",
        "src": "assets/videos/leju-fall-home.mp4",
        "poster": "assets/posters/leju-fall-home.jpg",
        "available": true
      },
      {
        "id": "wheeled-fall-detection",
        "title": "跌倒检测 · 视觉识别演示",
        "src": "assets/videos/wheeled-fall-detection.mp4",
        "poster": "assets/posters/wheeled-fall-detection.jpg",
        "available": true
      },
      {
        "id": "leju-act-wheelchair",
        "title": "乐聚机器人 · 轮椅推行演示",
        "src": "assets/videos/leju-act-wheelchair.mp4",
        "poster": "assets/posters/leju-act-wheelchair.jpg",
        "available": true
      }
    ],
    "period": "2026.06–2026.07"
  },
  {
    "id": "agent",
    "title": "磁盘状态管理 Agent",
    "description": "基于 FastAPI 与 LangGraph 构建磁盘运维助手，结合 RAG、记忆与上下文管理，实现任务的可控执行与中断恢复。",
    "label": "课程作业",
    "tags": [
      "Agent Harness",
      "RAG 检索",
      "Memory / Context"
    ],
    "videos": [
      {
        "id": "agent-demo",
        "title": "磁盘状态管理 Agent · 操作演示",
        "src": "assets/videos/agent-demo.mp4",
        "poster": "assets/posters/agent-demo.jpg",
        "available": true
      }
    ],
    "kind": "coursework"
  }
];
