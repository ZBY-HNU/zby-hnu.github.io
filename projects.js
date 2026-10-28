// 项目文案、视频及封面统一在这里维护。available=false 时显示待补充状态。
window.PORTFOLIO_PROJECTS = [
  {
    id: 'g1', number: '01', title: '宇树 G1', description: '机器人动作演示',
    label: 'Unitree G1', period: '2026.06–2026.08',
    tags: ['动作复现', 'Sim2Sim / Sim2Real', '真机稳定部署'],
    videos: [
      { id: 'g1-01', title: 'G1 展示视频 01', src: 'assets/videos/g1-01.mp4', poster: 'assets/posters/g1-01.jpg', available: true },
      { id: 'g1-02', title: 'G1 展示视频 02', src: 'assets/videos/g1-02.mp4', poster: 'assets/posters/g1-02.jpg', available: true },
      { id: 'g1-03', title: 'G1 展示视频 03', src: 'assets/videos/g1-03.mp4', poster: 'assets/posters/g1-03.jpg', available: true },
      { id: 'g1-04', title: 'G1 展示视频 04', src: 'assets/videos/g1-04.mp4', poster: 'assets/posters/g1-04.jpg', available: true }
    ]
  },
  {
    id: 'vla', number: '02', title: 'VLA 仿真', description: 'Vision-Language-Action 仿真任务展示', label: 'Simulation',
    period: '2026.08–2026.10', tags: ['视觉语言动作', '仿真任务执行'],
    videos: [
      { id: 'task1', title: 'Task 1 · 仿真任务演示', src: 'assets/videos/task1.webm', poster: 'assets/posters/task1.jpg', available: true },
      { id: 'task2', title: 'Task 2 · 仿真任务演示', src: 'assets/videos/task2.webm', poster: 'assets/posters/task2.jpg', available: true },
      { id: 'task3', title: 'Task 3 · 仿真任务演示', src: 'assets/videos/task3.webm', poster: 'assets/posters/task3.jpg', available: true }
    ]
  }
];
