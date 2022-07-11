let gap = 10;

for (gap; gap > 0; gap = Math.floor(gap / 3)) {
  console.log(gap);
}


function name(args) {
  const a = Object.keys(args).filter(x => args[x] !== null);
  console.log(a);
  let filterMap = {};
  a.forEach(x => {
    filterMap[x] = args[x];
  })

  return filterMap;
}

console.log(name({age: '', name: null}))

const str = 'pages/user-info/index?customer_id=227&expires_in=172800&ktoken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJHZHFReVdMR2g0aXU4dzdBelpGeTZwUlV1MTczcmtYZCIsInR5cCI6IkpXVCIsImV4cCI6MTYzNzMxNDE4OSwiYWxnIjoiSFMyNTYifQ.MzGnR-sAjnIieXE6xvm1Ah0JD2av-O5jTopkSCLtAQQ&login_ip=58.33.101.126&login_time=2021-11-17%2015%3A00%3A20&potoken=YOrhSqe0alCjaBO2EbsZRydiIERkfno-dPNrPo5kt2rVGunLCiZSLIb2n_ybW0yfhsQC8v2Wij4XWfzp3_hYu5_uLItXUhlvQ-IlMBcrEglDHejM6Ptzf1o9t_RufB4klzv0o7RmCTAwzKOJ5tRfe89X9a0PGHiWNIjsMkiXxjL3DNvXZVeOF80epAX_XEBRkvcH5nzks9q3_apzgXUETzQuUW3E8moA-zJxihm2qysMxMNwbMpCFrUjEmr9edBPTlb-wFnF2G3ZqI4Eby-Z1A&user_name=13100001234&user_type=1'

