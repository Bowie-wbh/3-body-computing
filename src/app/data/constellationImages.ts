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
// Screen8 - 合作伙伴Logo (24张)
// ========================================
import logoPartner1 from "figma:asset/18e7fed704277ab1a850a7563185ecdb5c8b3ade.png";
import logoPartner2 from "figma:asset/b3528bc3db41d97230a29de2297040d6208c0062.png";
import logoPartner3 from "figma:asset/aa996aea97ca6025aa8660571f957eb9007dd5fc.png";
import logoPartner4 from "figma:asset/cb2ec7341f283500b501aede3268b4fb2e0b4d77.png";
import logoPartner5 from "figma:asset/67dd62489e793eae3b40635b7bcb6283193fc624.png";
import logoPartner6 from "figma:asset/466e227311cbe5056b8cd795b99bd0c628db2dc6.png";
import logoPartner7 from "figma:asset/323f6b158b34dd5fb7ab64e6f294b96ac373de22.png";
import logoPartner8 from "figma:asset/3794bf6e210bb42037473fe0337bb0a9c9e8e196.png";
import logoPartner9 from "figma:asset/c7f12040b523d43e169d7de3dc22aa362e03e86d.png";
import logoPartner10 from "figma:asset/5bab8448671a25a8475e88dac72acc5052dac6b2.png";
import logoPartner11 from "figma:asset/b4d73d591ce69fa55deee9f61504b4e96e59e337.png";
import logoPartner12 from "figma:asset/b24527a6cd46eb333f78dbcddd401377cbd07048.png";
import logoPartner13 from "figma:asset/055346fc5977b98d5f76fe418788fda201d55ebd.png";
import logoPartner14 from "figma:asset/dc00dbf1905eec742969359cf2d11f35bf59d2cf.png";
import logoPartner15 from "figma:asset/ed1ce26b72141de3ab291091adffb5d54eee8b83.png";
import logoPartner16 from "figma:asset/cec748dcb997ee0c127c2f520faa8b2c75021692.png";
import logoPartner17 from "figma:asset/9f4b33873ba6452f1ff478667328355fc5d864b4.png";
import logoPartner18 from "figma:asset/0184e0d3bd18567b5b76667c7c23f51fc716bb4c.png";
import logoPartner19 from "figma:asset/d345039eea44f33a43e039be3e4b75d8cc7737d5.png";
import logoPartner20 from "figma:asset/878d614ec18216314f5a8bb019b80eb4b49c7eac.png";
import logoPartner21 from "figma:asset/6b56c0a34c68220be6bd08a5475e8cc469aae871.png";
import logoPartner22 from "figma:asset/ad80b97aac24962c4ed8214ad6ad03dbdf11355d.png";
import logoPartner23 from "figma:asset/395da47932d1fa4ccc8a985a8ba8896f4a1f9d34.png";
import logoPartner24 from "figma:asset/79e711dd4ece1e5308937dd2146037527c9afa76.png";

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
 * Screen8 合作伙伴Logo数组 (24个)
 */
export const partnerLogos = [
  logoPartner1, logoPartner2, logoPartner3, logoPartner4,
  logoPartner5, logoPartner6, logoPartner7, logoPartner8,
  logoPartner9, logoPartner10, logoPartner11, logoPartner12,
  logoPartner13, logoPartner14, logoPartner15, logoPartner16,
  logoPartner17, logoPartner18, logoPartner19, logoPartner20,
  logoPartner21, logoPartner22, logoPartner23, logoPartner24,
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