'use strict';
const projects = window.PORTFOLIO_PROJECTS || [];
const main = document.querySelector('main');
const players = [];
const unavailable = new Set(projects.flatMap(p => p.videos.filter(v => !v.available).map(v => v.id)));
const total = projects.reduce((count, p) => count + p.videos.length, 0);
const updateCount = () => { document.getElementById('video-count').textContent = total - unavailable.size; };
document.getElementById('project-count').textContent = projects.length;
updateCount();

function element(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

// 仅在卡片接近视口时接入视频地址；浏览器只预载元数据。
const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
}, { rootMargin: '120px' }) : null;

for (const project of projects) {
  const section = element('section', 'project-section');
  section.id = project.id;
  section.setAttribute('aria-labelledby', `${project.id}-title`);
  const heading = element('div', 'project-head');
  const headingText = element('div');
  headingText.append(element('p', 'project-meta', `Project ${project.number} · ${project.period} · ${project.label}`));
  const title = element('h2', '', project.title);
  title.id = `${project.id}-title`;
  headingText.append(title);
  const tags = element('div', 'tags');
  for (const label of project.tags || []) tags.append(element('span', 'tag', label));
  heading.append(headingText, tags);
  const intro = element('div', 'section-top');
  intro.append(element('h3', '', project.images?.length ? '项目图表' : project.videos.length ? '项目视频' : '项目介绍'), element('p', '', project.description));
  const grid = element('div', `video-grid ${project.id === 'vla' ? 'vla-grid' : ''}`);

  for (const item of project.videos) {
    const card = element('article', 'media-card');
    const box = element('div', 'video-box');
    const video = element('video', 'project-video');
    video.id = item.id;
    video.controls = true;
    video.preload = 'metadata';
    video.playsInline = true;
    video.poster = item.poster;
    video.dataset.src = item.src;
    video.setAttribute('aria-label', item.title);
    const fallback = element('a', '', '浏览器不支持此视频，请打开视频文件。');
    fallback.href = item.src;
    video.append(fallback);
    const error = element('div', 'video-error');
    error.hidden = true;
    error.setAttribute('role', 'status');
    error.append(element('p', '', '视频暂时无法加载，请检查网络后重试。'));
    const retry = element('button', '', '重新加载');
    retry.type = 'button';
    retry.addEventListener('click', () => { error.hidden = true; video.src = item.src; video.load(); });
    error.append(retry);
    const caption = element('h4', 'media-title', item.title);
    video.addEventListener('play', () => players.forEach(other => { if (other !== video) other.pause(); }));
    video.addEventListener('error', () => { error.hidden = false; unavailable.add(item.id); updateCount(); });
    video.addEventListener('loadedmetadata', () => { error.hidden = true; unavailable.delete(item.id); updateCount(); });
    box.append(video, error);
    card.append(box, caption);
    grid.append(card);
    players.push(video);
    if (!item.available) {
      error.firstElementChild.textContent = '视频待补充';
      error.hidden = false;
      retry.hidden = true;
    } else if (observer) observer.observe(video);
    else video.src = item.src;
  }
  section.append(heading, intro);
  if (project.images?.length) {
    const gallery = element('div', 'video-grid image-grid');
    project.images.forEach((item, index) => {
      const card = element('article', 'media-card');
      const open = element('button', 'image-open');
      open.type = 'button';
      open.setAttribute('aria-label', `放大查看：${item.title}`);
      const img = element('img', 'project-image');
      img.src = item.src; img.alt = item.title; img.loading = 'lazy';
      open.append(img);
      open.addEventListener('click', () => openGallery(project.images, index, open));
      card.append(open, element('h4', 'media-title', item.title));
      gallery.append(card);
    });
    section.append(gallery);
  }
  if (project.videos.length) section.append(grid);
  main.append(section);
}

// 原图查看器：保留原始比例，支持按钮、方向键和 Escape。
const viewer = element('dialog', 'image-viewer');
viewer.setAttribute('aria-label', '项目图表查看器');
const closeViewer = element('button', 'viewer-close', '关闭 ×');
closeViewer.type = 'button';
const fullImage = element('img', 'viewer-image');
const caption = element('p', 'viewer-caption');
caption.setAttribute('aria-live', 'polite');
const controls = element('div', 'viewer-controls');
const prev = element('button', '', '上一张');
const next = element('button', '', '下一张');
prev.type = next.type = 'button';
controls.append(prev, next);
viewer.append(closeViewer, fullImage, caption, controls);
document.body.append(viewer);
let activeImages = [], activeIndex = 0, opener;
function showImage(index) {
  activeIndex = (index + activeImages.length) % activeImages.length;
  const item = activeImages[activeIndex];
  fullImage.src = item.src; fullImage.alt = item.title;
  caption.textContent = `${activeIndex + 1} / ${activeImages.length} · ${item.title}`;
}
function openGallery(images, index, trigger) {
  activeImages = images; opener = trigger; showImage(index);
  players.forEach(video => video.pause());
  viewer.showModal(); document.body.classList.add('viewer-open');
}
prev.addEventListener('click', () => showImage(activeIndex - 1));
next.addEventListener('click', () => showImage(activeIndex + 1));
closeViewer.addEventListener('click', () => viewer.close());
viewer.addEventListener('close', () => { document.body.classList.remove('viewer-open'); opener?.focus(); });
viewer.addEventListener('click', e => { if (e.target === viewer) viewer.close(); });
viewer.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    e.preventDefault(); showImage(activeIndex + (e.key === 'ArrowRight' ? 1 : -1));
  }
});
