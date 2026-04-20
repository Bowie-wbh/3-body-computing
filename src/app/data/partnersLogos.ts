/**
 * 合作单位Logo配置文件（使用Figma导入的真实logo）
 */

// 从Figma导入的logo资源
import imgImage from "figma:asset/18e7fed704277ab1a850a7563185ecdb5c8b3ade.png";
import imgImage1 from "figma:asset/b3528bc3db41d97230a29de2297040d6208c0062.png";
import imgImage2 from "figma:asset/aa996aea97ca6025aa8660571f957eb9007dd5fc.png";
import imgImage3 from "figma:asset/cb2ec7341f283500b501aede3268b4fb2e0b4d77.png";
import imgImage4 from "figma:asset/67dd62489e793eae3b40635b7bcb6283193fc624.png";
import imgImage5 from "figma:asset/466e227311cbe5056b8cd795b99bd0c628db2dc6.png";
import imgImage6 from "figma:asset/323f6b158b34dd5fb7ab64e6f294b96ac373de22.png";
import imgImage7 from "figma:asset/3794bf6e210bb42037473fe0337bb0a9c9e8e196.png";
import imgImage8 from "figma:asset/c7f12040b523d43e169d7de3dc22aa362e03e86d.png";
import imgImage9 from "figma:asset/5bab8448671a25a8475e88dac72acc5052dac6b2.png";
import imgImage10 from "figma:asset/b4d73d591ce69fa55deee9f61504b4e96e59e337.png";
import imgImage11 from "figma:asset/b24527a6cd46eb333f78dbcddd401377cbd07048.png";
import imgImage12 from "figma:asset/055346fc5977b98d5f76fe418788fda201d55ebd.png";
import imgImage13 from "figma:asset/dc00dbf1905eec742969359cf2d11f35bf59d2cf.png";
import imgImage14 from "figma:asset/ed1ce26b72141de3ab291091adffb5d54eee8b83.png";
import imgImage15 from "figma:asset/cec748dcb997ee0c127c2f520faa8b2c75021692.png";
import imgImage16 from "figma:asset/9f4b33873ba6452f1ff478667328355fc5d864b4.png";
import imgImage17 from "figma:asset/0184e0d3bd18567b5b76667c7c23f51fc716bb4c.png";
import imgImage18 from "figma:asset/d345039eea44f33a43e039be3e4b75d8cc7737d5.png";
import imgImage19 from "figma:asset/878d614ec18216314f5a8bb019b80eb4b49c7eac.png";
import imgImage20 from "figma:asset/6b56c0a34c68220be6bd08a5475e8cc469aae871.png";
import imgImage21 from "figma:asset/ad80b97aac24962c4ed8214ad6ad03dbdf11355d.png";
import imgImage22 from "figma:asset/395da47932d1fa4ccc8a985a8ba8896f4a1f9d34.png";
import imgImage23 from "figma:asset/79e711dd4ece1e5308937dd2146037527c9afa76.png";

export interface PartnerLogo {
  id: string;
  name: string;
  logo: string; // 图片对象（从figma:asset导入）
}

/**
 * 合作单位列表（24个真实logo）
 * 按照Figma中的布局顺序排列
 */
export const partnersLogos: PartnerLogo[] = [
  // 第一行
  {
    id: '1',
    name: 'ADASPACE 国星宇航',
    logo: imgImage
  },
  {
    id: '2',
    name: 'STAR·VISION 地卫二',
    logo: imgImage1
  },
  {
    id: '3',
    name: '氦星光联',
    logo: imgImage2
  },
  {
    id: '4',
    name: '广西大学',
    logo: imgImage3
  },
  {
    id: '5',
    name: '中国科学院国家天文台',
    logo: imgImage4
  },
  {
    id: '6',
    name: 'EMPOSAT 航天驭星',
    logo: imgImage5
  },
  {
    id: '7',
    name: 'LANDSPACE 蓝箭航天',
    logo: imgImage11
  },
  {
    id: '8',
    name: '中国雄安',
    logo: imgImage21
  },
  // 第二行
  {
    id: '9',
    name: '中国航天科工',
    logo: imgImage12
  },
  {
    id: '10',
    name: '西北工业大学',
    logo: imgImage13
  },
  {
    id: '11',
    name: '北京理工大学',
    logo: imgImage14
  },
  {
    id: '12',
    name: 'TIANXIAN 天链',
    logo: imgImage15
  },
  {
    id: '13',
    name: '十方星链 SFSATLINK',
    logo: imgImage16
  },
  {
    id: '14',
    name: '中国航天',
    logo: imgImage17
  },
  {
    id: '15',
    name: '斯北图',
    logo: imgImage18
  },
  {
    id: '16',
    name: 'Creatunion 开运联合',
    logo: imgImage22
  },
  // 第三行
  {
    id: '17',
    name: '复旦大学',
    logo: imgImage6
  },
  {
    id: '18',
    name: '鸿擎科技',
    logo: imgImage7
  },
  {
    id: '19',
    name: 'TIANXI 天玺',
    logo: imgImage8
  },
  {
    id: '20',
    name: 'MINOSPACE 微纳星空',
    logo: imgImage9
  },
  {
    id: '21',
    name: '绮雲空间',
    logo: imgImage10
  },
  {
    id: '22',
    name: '京济通信',
    logo: imgImage19
  },
  {
    id: '23',
    name: 'RESEP 中科睿格',
    logo: imgImage20
  },
  {
    id: '24',
    name: 'Xipon SPACE',
    logo: imgImage23
  },
];

/**
 * 获取所有合作单位logo
 */
export function getPartnersLogos(): PartnerLogo[] {
  return partnersLogos;
}

/**
 * 根据ID获取合作单位logo
 */
export function getPartnerLogoById(id: string): PartnerLogo | undefined {
  return partnersLogos.find(p => p.id === id);
}

/**
 * 获取合作单位数量
 */
export function getPartnersLogosCount(): number {
  return partnersLogos.length;
}
