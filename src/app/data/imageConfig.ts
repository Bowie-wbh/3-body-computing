/**
 * 图片配置中心
 * 
 * 在这个文件中，您可以统一修改网站中所有的配图。
 * 只需替换URL即可更改相应的图片。
 * 
 * 支持的图片格式：
 * - Unsplash 图片 URL (https://images.unsplash.com/...)
 * - Figma 资源 (figma:asset/...)
 * - 其他任何有效的图片 URL
 */

import rocketLaunchImage from 'figma:asset/097288b0b285da7b4809ec1b4fc5faf227b1d6a0.png';
import seaLaunchImage from 'figma:asset/097288b0b285da7b4809ec1b4fc5faf227b1d6a0.png';
import satelliteImage from 'figma:asset/097288b0b285da7b4809ec1b4fc5faf227b1d6a0.png';
import tianjiImage from 'figma:asset/7e0e8f8036939591c5ba0dc686e2ac8248534235.png';
import timelineImage1 from 'figma:asset/afd13addfeda3def36da3f672e930ce2dc45ab5a.png';
import timelineImage2 from 'figma:asset/b0393a4e1b85f08a23579f3eb3e75d7db3e3fa8f.png';
import timelineImage3 from 'figma:asset/185d683ecd240dedfe54fd6fb4855d50c49a0d63.png';
import timelineImage4 from 'figma:asset/aad10790c506e7c7483f174e6221d857397d59ed.png';
import timelineImage5 from 'figma:asset/31136a16c24b32e27d51e86a609082b4584fa9e5.png';
import constellationHeroImage from 'figma:asset/8db3c19a24e6d142dab50bc954571673e9048158.png';

// ============================================
// 关于我们页面 (AboutPage) 图片
// ============================================
export const aboutPageImages = {
  // Screen 1 - 主要展示图片
  hero: tianjiImage,
  
  // Screen 2 - 时间线事件图片（4张）
  timeline: [
    timelineImage1,
    timelineImage2,
    timelineImage3,
    timelineImage5,
  ],
  
  // Screen 4 - 联系信息 QR Code
  qrCode: 'https://images.unsplash.com/photo-1685575112968-7dd67bc447b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxRUiUyMGNvZGUlMjB0ZWNobm9sb2d5JTIwc2NhbnxlbnwxfHx8fDE3NzI0MzE2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
};

// ============================================
// 星座简介页面 (ConstellationPage) 图片
// ============================================
export const constellationPageImages = {
  // Screen 2 - 卫星在轨道上
  satellite: satelliteImage,
  
  // Screen 9 - 火星征途
  mars: 'https://images.unsplash.com/photo-1770723963275-d7644b1e6e6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXJzJTIwcGxhbmV0JTIwc3VyZmFjZSUyMHJlZHxlbnwxfHx8fDE3NzI1MTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  
  // Screen 2 - 三大能力卡片图片（4张）
  capabilities: [
    'https://images.unsplash.com/photo-1771885124792-119a9daa556b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWxzYXIlMjBzcGFjZSUyMGFzdHJvbm9teSUyMG5lYnVsYSUyMGNvc21pY3xlbnwxfHx8fDE3NzI0NDQ2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', // 天基天文时域模型 - 太空脉冲星
    'https://images.unsplash.com/photo-1749006590639-e749e6b7d84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMG5ldHdvcmt8ZW58MXx8fHwxNzcyNDA1MDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1606405783859-b0af07f905ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY29tcHV0aW5nJTIwY2lyY3VpdHMlMjBibHVlfGVufDF8fHx8MTc3MjQzMDQyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1766297248076-2848d8d0d464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpZmljJTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc3MjMzNzczN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  
  // Screen 7 - 全球合作卡片图片（2张）
  globalCooperation: [
    'https://images.unsplash.com/photo-1575029645663-d8faa1ac2880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwY29sbGFib3JhdGlvbiUyMGNvbmZlcmVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjQzMDU0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1586036308218-5ed6553c98b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGNvbm5lY3Rpdml0eSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzcyNDMwNTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  
  // Screen 7 - 装饰图片
  decorations: {
    topRight: 'figma:asset/6640f793ec7822714a8367553523af57e47370ad.png',
    bottomLeft: 'figma:asset/b1ffcbf1718529e5c2bca0d18d88691961f4dcac.png',
  },
};

// ============================================
// 开放服务页面 (ServicesPage) 图片
// ============================================
export const servicesPageImages = {
  // Screen 1 - Hero 背景图片
  hero: constellationHeroImage,
  
  // Screen 2 - 模型服务卡片图片（6张）
  models: [
    'https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNDMzMzIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1749711391000-72a0cca73062?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBkYXRhJTIwcHJvY2Vzc2luZyUyMGNvbXB1dGVyfGVufDF8fHx8MTc3MjQzMzMyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNDMwMzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzI0MzMzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1695462131550-24be3156b25d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY29tcHV0aW5nJTIwdGVjaG5vbG9neSUyMGZ1dHVyZXxlbnwxfHx8fDE3NzI0MzMzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1759296682393-a5c3695080fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHRlY2hub2xvZ3klMjBkaWdpdGFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NzI0MzMzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  
  // Screen 3 - 轮播图片（4张）
  carousel: [
    'https://images.unsplash.com/photo-1606834230438-f3b80fe1ae4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBlYXJ0aCUyMG9ic2VydmF0aW9uJTIwcmVtb3RlJTIwc2Vuc2luZ3xlbnwxfHx8fDE3NzI0MzUxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1574848487925-18965cf1004a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBpbWFnZXJ5JTIwZGF0YSUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzcyNDM1MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1714255288526-cc155b548aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1vdGUlMjBzZW5zaW5nJTIwc2F0ZWxsaXRlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI0MzUxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1712512162392-d523620fbaa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aCUyMG1vbml0b3JpbmclMjBzYXRlbGxpdGUlMjBzcGFjZXxlbnwxfHx8fDE3NzI0MzUxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ],
};

/**
 * 使用说明：
 * 
 * 1. 修改单张图片：
 *    直接替换对应的URL即可
 *    例如: aboutPageImages.hero = '新的图片URL'
 * 
 * 2. 修改图片数组中的某一张：
 *    例如: aboutPageImages.timeline[0] = '新的图片URL'
 * 
 * 3. 添加新图片：
 *    在对应的对象中添加新的属性
 * 
 * 4. 图片来源推荐：
 *    - Unsplash: https://unsplash.com （免费高质量图片）
 *    - 自定义图片：上传到CDN后使用其URL
 */