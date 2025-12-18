// /data/examSites.js
module.exports = {
  examSites: [
    {
      id: '1',
      name: '柳州汉华科目三',
      address: '柳州市柳南区柳工大道168号',
      contact: '0772-1234567',
      routeIds: [1, 2,3] // 该考场包含线路1和线路2
    },
    {
      id: '2',
      name: '测试线路',
      address: '南宁市江南区那洪大道78号',
      contact: '0771-7654321',
      routeIds: [4,5] // 该考场包含线路3
    },
    // 其他考场...
  ]
};