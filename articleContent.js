// /data/articleContent.js
module.exports = {
  // 按文章ID映射内容，key为文章ID，value为富文本内容
  contentMap: {
    1: `
      <div style="padding: 10rpx 0;">
        <p style="font-size: 32rpx; line-height: 1.8; color: #333;">科目一高频易错题汇总：</p>
        <p style="font-size: 30rpx; line-height: 1.8; color: #666; margin: 15rpx 0;">1、驾驶机动车在高速公路上倒车、逆行、穿越中央分隔带掉头的，一次记12分。（正确）</p>
        <p style="font-size: 30rpx; line-height: 1.8; color: #666; margin: 15rpx 0;">2、饮酒后驾驶机动车的，一次记6分。（错误，实际记12分）</p>
        <p style="font-size: 30rpx; line-height: 1.8; color: #666; margin: 15rpx 0;">3、驾驶机动车不按规定避让校车的，一次记3分。（正确）</p>
        <img src="/images/km1-example.jpg" alt="科目一例题" style="width: 100%; margin: 20rpx 0; border-radius: 8rpx;"/>
        <p style="font-size: 30rpx; line-height: 1.8; color: #666;">更多易错题可关注公众号【驾考助手】获取完整版...</p>
      </div>
    `,
    2: `
      <div style="padding: 10rpx 0;">
        <p style="font-size: 32rpx; line-height: 1.8; color: #333;">科目四答题技巧口诀：</p>
        <p style="font-size: 30rpx; line-height: 1.8; color: #666; margin: 15rpx 0;">✅ 能让行的都让行，能帮助的都帮助，能避让就避让，不抢不急都对。</p>
        <p style="font-size: 30rpx; line-height: 1.8; color: #666; margin: 15rpx 0;">✅ 抢救伤员先救命，后治伤；止血先近心端，包扎先清洁。</p>
        <p style="font-size: 30rpx; line-height: 1.8; color: #666; margin: 15rpx 0;">✅ 雾天行车开雾灯，雨天行车开近光，夜间行车关远光。</p>
        <img src="/images/km4-formula.jpg" alt="科目四口诀" style="width: 100%; margin: 20rpx 0; border-radius: 8rpx;"/>
      </div>
    `,
    3: `
      <div style="padding: 10rpx 0;">
        <p style="font-size: 32rpx; line-height: 1.8; color: #333;">2025驾考新规解读：</p>
        <p style="font-size: 30rpx; line-height: 1.8; color: #666; margin: 15rpx 0;">1、新增C6准驾车型，允许驾驶轻型牵引挂车。</p>
        <p style="font-size: 30rpx; line-height: 1.8; color: #666; margin: 15rpx 0;">2、科目二取消坡道定点停车和起步（部分城市试点）。</p>
        <p style="font-size: 30rpx; line-height: 1.8; color: #666; margin: 15rpx 0;">3、科目三安全文明驾驶常识考试新增应急处置考题。</p>
      </div>
    `
  },
  // 兜底内容（ID匹配不到时使用）
  defaultContent: `<div style="text-align: center; padding: 50rpx 0; color: #999;">暂无文章内容</div>`
};
