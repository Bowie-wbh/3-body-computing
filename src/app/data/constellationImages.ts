 /**
 * 星座简介页面图片资源配置
 * Constellation Page Image Assets Configuration
 * 
 * 此文件集中管理星座简介页面的所有图片导入
 * 防止图片引用丢失或显示异常
 */

// ========================================
// Screen6 - AI模型卡片图片 (4张)
// ========================================
import imgTianwen from "figma:asset/ea035d335997adce2e5f882a778a0e9ab74e1c00.png";  // 天文模型
import imgQixiang from "figma:asset/5a4ea9270b6d4451eab74eeadec144ed64b11714.png";  // 气象模型
import imgYaogan from "figma:asset/248fba50dd4f1d6d08f46634ef512f3dfa222737.png";   // 遥感模型
import imgXihe from "figma:asset/1010c352d32f7ea43ef54d8098e35d0a17b67e51.png";     // 羲和模型

// ========================================
// Screen2 - 卫星图片
// ========================================
import imgSatellite from "figma:asset/097288b0b285da7b4809ec1b4fc5faf227b1d6a0.png";  // 卫星轨道图 (fallback to satellite img)

// ========================================
// Screen7 - 全球合作背景装饰图片 (2张)
// ========================================
import imgWorldITU from "figma:asset/51899ed8789546fe024890165aced0669b901dd7.png";    // ITU挑战赛装饰 (fallback to ITU image)
import imgWorldOlive from "figma:asset/57f7b2eea2225d25ee8832c034a52e17ec8f8d5f.png";  // 橄榄枝装饰 (fallback to earth image)

// ========================================
// Screen9 - 技术成果图片 (5张)
// ========================================
import imgComputer from "figma:asset/302b1c8b7eabefdf2aad9f0fdf984025237ae16b.png";      // "之江智加"星载智能计算机
import imgLaser from "figma:asset/1ad5b028dd81536db5f25e923ff9b59cd9fae5f6.png";         // "之江智光"星间激光通信机
import imgRouter from "figma:asset/b706473cdb60b7a0c844fb6e4e744832ca2b1c5a.png";        // "之江智桥"星载高速路由器
import imgDistributed from "figma:asset/24006ac554fcbc60285022ae3a46441a9b1e0fe0.png";   // 之江天基分布式操作系统
import imgModel from "figma:asset/ea8e5b8358a7b0a42e463ca3875b86619a0c3aac.png";         // 具身智能卫星模型

// ========================================
// Screen8 - 合作伙伴Logo (48张) - 新版本来自 Figma node 75-1589
// ========================================
import logoPartner1 from "figma:asset/logo-1.png";
import logoPartner2 from "figma:asset/logo-2.png";
import logoPartner3 from "figma:asset/logo-3.png";
import logoPartner4 from "figma:asset/logo-4.png";
import logoPartner5 from "figma:asset/logo-5.png";
import logoPartner6 from "figma:asset/logo-6.png";
import logoPartner7 from "figma:asset/logo-7.png";
import logoPartner8 from "figma:asset/logo-8.png";
import logoPartner9 from "figma:asset/logo-9.png";
import logoPartner10 from "figma:asset/logo-10.png";
import logoPartner11 from "figma:asset/logo-11.png";
import logoPartner12 from "figma:asset/logo-12.png";
import logoPartner13 from "figma:asset/logo-13.png";
import logoPartner14 from "figma:asset/logo-14.png";
import logoPartner15 from "figma:asset/logo-15.png";
import logoPartner16 from "figma:asset/logo-16.png";
import logoPartner17 from "figma:asset/logo-17.png";
import logoPartner18 from "figma:asset/logo-18.png";
import logoPartner19 from "figma:asset/logo-19.png";
import logoPartner20 from "figma:asset/logo-20.png";
import logoPartner21 from "figma:asset/logo-21.png";
import logoPartner22 from "figma:asset/logo-22.png";
import logoPartner23 from "figma:asset/logo-23.png";
import logoPartner24 from "figma:asset/logo-24.png";
import logoPartner25 from "figma:asset/logo-25.png";
import logoPartner26 from "figma:asset/logo-26.png";
import logoPartner27 from "figma:asset/logo-27.png";
import logoPartner28 from "figma:asset/logo-28.png";
import logoPartner29 from "figma:asset/logo-29.png";
import logoPartner30 from "figma:asset/logo-30.png";
import logoPartner31 from "figma:asset/logo-31.png";
import logoPartner32 from "figma:asset/logo-32.png";
import logoPartner33 from "figma:asset/logo-33.png";
import logoPartner34 from "figma:asset/logo-34.png";
import logoPartner35 from "figma:asset/logo-35.png";
import logoPartner36 from "figma:asset/logo-36.png";
import logoPartner37 from "figma:asset/logo-37.png";
import logoPartner38 from "figma:asset/logo-38.png";
import logoPartner39 from "figma:asset/logo-39.png";
import logoPartner40 from "figma:asset/logo-40.png";
import logoPartner41 from "figma:asset/logo-41.png";
import logoPartner42 from "figma:asset/logo-42.png";
import logoPartner43 from "figma:asset/logo-43.png";
import logoPartner44 from "figma:asset/logo-44.png";
import logoPartner45 from "figma:asset/logo-45.png";
import logoPartner46 from "figma:asset/logo-46.png";
import logoPartner47 from "figma:asset/logo-47.png";
import logoPartner48 from "figma:asset/logo-48.png";

// ========================================
// 导出配置对象
// ========================================

/**
 * Screen6 AI模型卡片图片
 * 顺序：天文 → 气象 → 遥感 → 羲和
 */
export const aiModelImages = [
  imgTianwen,   // 第1张 - 天文
  imgQixiang,   // 第2张 - 气象
  imgYaogan,    // 第3张 - 遥感
  imgXihe       // 第4张 - 羲和
];

/**
 * Screen2 卫星图片
 */
export const satelliteImage = imgSatellite;

/**
 * Screen7 全球合作背景装饰图片
 */
export const globalCooperationImages = {
  itu: imgWorldITU,        // ITU挑战赛装饰（右上角）
  olive: imgWorldOlive     // 橄榄枝装饰（左下角）
};

/**
 * Screen9 技术成果图片
 * 顺序：智加 → 智光 → 智桥 → 分布式系统 → 具身智能
 */
export const achievementImages = {
  computer: imgComputer,        // \"之江智加\"星载智能计算机
  laser: imgLaser,              // \"之江智光\"星间激光通信机
  router: imgRouter,            // \"之江智桥\"星载高速路由器
  distributed: imgDistributed,  // 之江天基分布式操作系统
  model: imgModel               // 具身智能卫星模型
};

/**
 * Screen8 合作伙伴Logo数组 (48个) - 新版本来自 Figma node 75-1589
 * 分为3行，每行16个
 */
export const partnerLogos = [
  logoPartner1, logoPartner2, logoPartner3, logoPartner4,
  logoPartner5, logoPartner6, logoPartner7, logoPartner8,
  logoPartner9, logoPartner10, logoPartner11, logoPartner12,
  logoPartner13, logoPartner14, logoPartner15, logoPartner16,
  logoPartner17, logoPartner18, logoPartner19, logoPartner20,
  logoPartner21, logoPartner22, logoPartner23, logoPartner24,
  logoPartner25, logoPartner26, logoPartner27, logoPartner28,
  logoPartner29, logoPartner30, logoPartner31, logoPartner32,
  logoPartner33, logoPartner34, logoPartner35, logoPartner36,
  logoPartner37, logoPartner38, logoPartner39, logoPartner40,
  logoPartner41, logoPartner42, logoPartner43, logoPartner44,
  logoPartner45, logoPartner46, logoPartner47, logoPartner48,
];

/**
 * Screen8 合作伙伴Logo - 按行分组
 * 行1: 左→右滚动 (logo 1-16)
 * 行2: 右→左滚动 (logo 17-32)
 * 行3: 左→右滚动 (logo 33-48)
 */
export const partnerLogosRow1 = [
  logoPartner1, logoPartner2, logoPartner3, logoPartner4,
  logoPartner5, logoPartner6, logoPartner7, logoPartner8,
  logoPartner9, logoPartner10, logoPartner11, logoPartner12,
  logoPartner13, logoPartner14, logoPartner15, logoPartner16,
];

export const partnerLogosRow2 = [
  logoPartner17, logoPartner18, logoPartner19, logoPartner20,
  logoPartner21, logoPartner22, logoPartner23, logoPartner24,
  logoPartner25, logoPartner26, logoPartner27, logoPartner28,
  logoPartner29, logoPartner30, logoPartner31, logoPartner32,
];

export const partnerLogosRow3 = [
  logoPartner33, logoPartner34, logoPartner35, logoPartner36,
  logoPartner37, logoPartner38, logoPartner39, logoPartner40,
  logoPartner41, logoPartner42, logoPartner43, logoPartner44,
  logoPartner45, logoPartner46, logoPartner47, logoPartner48,
];

/**
 * Modal内容图片
 * 用于Screen6的弹窗展示
 */
export const modalContentImages = {
  tianwen: imgTianwen,
  qixiang: imgQixiang,
  yaogan: imgYaogan
};

/**
 * 完整的星座简介页面图片配置
 * 统一导出所有图片资源
 */
export const constellationPageImages = {
  // AI模型卡片
  aiModels: aiModelImages,
  
  // 卫星图片
  satellite: satelliteImage,
  
  // 全球合作装饰
  globalCooperation: globalCooperationImages,
  
  // 技术成果
  achievements: achievementImages,
  
  // 合作伙伴Logo
  partners: partnerLogos,
  
  // Modal内容
  modals: modalContentImages
};