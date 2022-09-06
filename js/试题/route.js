const arr = [{
  "name": "System",
  "path": "/system",
  "hidden": false,
  "redirect": "noRedirect",
  "component": "Layout",
  "alwaysShow": true,
  "meta": {"title": "系统管理", "icon": "system", "noCache": false},
  "children": [{
    "name": "User",
    "path": "user",
    "hidden": false,
    "component": "system/user/index",
    "meta": {"title": "用户管理", "icon": "user", "noCache": false}
  }, {
    "name": "Role",
    "path": "role",
    "hidden": false,
    "component": "system/role/index",
    "meta": {"title": "角色管理", "icon": "peoples", "noCache": false}
  }, {
    "name": "Menu",
    "path": "menu",
    "hidden": false,
    "component": "system/menu/index",
    "meta": {"title": "菜单管理", "icon": "tree-table", "noCache": false}
  }, {
    "name": "Dept",
    "path": "dept",
    "hidden": false,
    "component": "system/dept/index",
    "meta": {"title": "部门管理", "icon": "tree", "noCache": false}
  }, {
    "name": "Post",
    "path": "post",
    "hidden": false,
    "component": "system/post/index",
    "meta": {"title": "岗位管理", "icon": "post", "noCache": false}
  }, {
    "name": "Dict",
    "path": "dict",
    "hidden": false,
    "component": "system/dict/index",
    "meta": {"title": "字典管理", "icon": "dict", "noCache": false}
  }, {
    "name": "Config",
    "path": "config",
    "hidden": false,
    "component": "system/config/index",
    "meta": {"title": "参数设置", "icon": "edit", "noCache": false}
  }, {
    "name": "Notice",
    "path": "notice",
    "hidden": false,
    "component": "system/notice/index",
    "meta": {"title": "通知公告", "icon": "message", "noCache": false}
  }, {
    "name": "Log",
    "path": "log",
    "hidden": false,
    "redirect": "noRedirect",
    "component": "ParentView",
    "alwaysShow": true,
    "meta": {"title": "日志管理", "icon": "log", "noCache": false},
    "children": [{
      "name": "Operlog",
      "path": "operlog",
      "hidden": false,
      "component": "system/operlog/index",
      "meta": {"title": "操作日志", "icon": "form", "noCache": false}
    }, {
      "name": "Logininfor",
      "path": "logininfor",
      "hidden": false,
      "component": "system/logininfor/index",
      "meta": {"title": "登录日志", "icon": "logininfor", "noCache": false}
    }]
  }]
}, {
  "name": "Monitor",
  "path": "/monitor",
  "hidden": false,
  "redirect": "noRedirect",
  "component": "Layout",
  "alwaysShow": true,
  "meta": {"title": "系统监控", "icon": "monitor", "noCache": false},
  "children": [{
    "name": "Online",
    "path": "online",
    "hidden": false,
    "component": "monitor/online/index",
    "meta": {"title": "在线用户", "icon": "online", "noCache": false}
  }, {
    "name": "Job",
    "path": "job",
    "hidden": false,
    "component": "monitor/job/index",
    "meta": {"title": "定时任务", "icon": "job", "noCache": false}
  }, {
    "name": "Http://localhost:8718",
    "path": "http://localhost:8718",
    "hidden": false,
    "component": "Layout",
    "meta": {"title": "Sentinel控制台", "icon": "sentinel", "noCache": false, "link": "http://localhost:8718"}
  }, {
    "name": "Http://localhost:8848/nacos",
    "path": "http://localhost:8848/nacos",
    "hidden": false,
    "component": "Layout",
    "meta": {"title": "Nacos控制台", "icon": "nacos", "noCache": false, "link": "http://localhost:8848/nacos"}
  }, {
    "name": "Http://localhost:9100/login",
    "path": "http://localhost:9100/login",
    "hidden": false,
    "component": "Layout",
    "meta": {"title": "Admin控制台", "icon": "server", "noCache": false, "link": "http://localhost:9100/login"}
  }]
}, {
  "name": "Tool",
  "path": "/tool",
  "hidden": false,
  "redirect": "noRedirect",
  "component": "Layout",
  "alwaysShow": true,
  "meta": {"title": "系统工具", "icon": "tool", "noCache": false},
  "children": [{
    "name": "Build",
    "path": "build",
    "hidden": false,
    "component": "tool/build/index",
    "meta": {"title": "表单构建", "icon": "build", "noCache": false}
  }, {
    "name": "Gen",
    "path": "gen",
    "hidden": false,
    "component": "tool/gen/index",
    "meta": {"title": "代码生成", "icon": "code", "noCache": false}
  }, {
    "name": "Http://localhost:8080/swagger-ui/index.html",
    "path": "http://localhost:8080/swagger-ui/index.html",
    "hidden": false,
    "component": "Layout",
    "meta": {
      "title": "系统接口",
      "icon": "swagger",
      "noCache": false,
      "link": "http://localhost:8080/swagger-ui/index.html"
    }
  }]
}, {
  "name": "Map",
  "path": "/map",
  "hidden": false,
  "redirect": "noRedirect",
  "component": "Layout",
  "alwaysShow": true,
  "meta": {"title": "时空地图", "icon": "#", "noCache": false},
  "children": [{
    "name": "Https://console.newayz.com/console/geoStudio/MyMap",
    "path": "console.newayz.com/console/geoStudio/MyMap",
    "hidden": false,
    "component": "InnerLink",
    "meta": {
      "title": "地图图层制作",
      "icon": "#",
      "noCache": false,
      "link": "https://console.newayz.com/console/geoStudio/MyMap"
    }
  }, {
    "name": "Https://location-dev.newayz.com/aimap-gl-v2-example/demo",
    "path": "location-dev.newayz.com/aimap-gl-v2-example/demo",
    "hidden": false,
    "component": "InnerLink",
    "meta": {
      "title": "地图应用可视化",
      "icon": "#",
      "noCache": false,
      "link": "https://location-dev.newayz.com/aimap-gl-v2-example/demo"
    }
  }, {
    "name": "Geocoding",
    "path": "geocoding",
    "hidden": false,
    "component": "map/geocoding/index",
    "meta": {"title": "地理正向解析", "icon": "#", "noCache": false}
  }]
}, {
  "name": "Location",
  "path": "/location",
  "hidden": false,
  "redirect": "noRedirect",
  "component": "Layout",
  "alwaysShow": true,
  "meta": {"title": "时空定位", "icon": "#", "noCache": false},
  "children": [{
    "name": "Https://lotboard.newayz.com/dashboard",
    "path": "lotboard.newayz.com/dashboard",
    "hidden": false,
    "component": "InnerLink",
    "meta": {"title": "物联感知", "icon": "#", "noCache": false, "link": "https://lotboard.newayz.com/dashboard"}
  }]
}, {
  "name": "Data-m",
  "path": "/data-m",
  "hidden": false,
  "redirect": "noRedirect",
  "component": "Layout",
  "alwaysShow": true,
  "meta": {"title": "时空数据", "icon": "#", "noCache": false},
  "children": [{
    "name": "Https://pgp.newayz.com/static/datas/index.html",
    "path": "pgp.newayz.com/static/datas/index.html",
    "hidden": false,
    "component": "InnerLink",
    "meta": {
      "title": "时空数据治理平台",
      "icon": "#",
      "noCache": false,
      "link": "https://pgp.newayz.com/static/datas/index.html"
    }
  }, {
    "name": "Https://universe.newayz.com/universe/ui/",
    "path": "universe.newayz.com/universe/ui/",
    "hidden": false,
    "component": "InnerLink",
    "meta": {"title": "时空计算平台", "icon": "#", "noCache": false, "link": "https://universe.newayz.com/universe/ui/"}
  }, {
    "name": "Https://zhiguan.newayz.com/page/overview",
    "path": "zhiguan.newayz.com/page/overview",
    "hidden": false,
    "component": "InnerLink",
    "meta": {"title": "时空分析平台", "icon": "#", "noCache": false, "link": "https://zhiguan.newayz.com/page/overview"}
  }]
}, {
  "name": "Application",
  "path": "/application",
  "hidden": false,
  "redirect": "noRedirect",
  "component": "Layout",
  "alwaysShow": true,
  "meta": {"title": "时空应用", "icon": "#", "noCache": false},
  "children": [{
    "name": "Https://company-map.newayz.com",
    "path": "company-map.newayz.com",
    "hidden": false,
    "component": "InnerLink",
    "meta": {"title": "集成电路产业链地图", "icon": "#", "noCache": false, "link": "https://company-map.newayz.com"}
  }, {
    "name": "Https://static.newayz.com/eitc/",
    "path": "static.newayz.com/eitc/",
    "hidden": false,
    "component": "InnerLink",
    "meta": {"title": "园区产业图谱", "icon": "#", "noCache": false, "link": "https://static.newayz.com/eitc/"}
  }]
}, {
  "name": "Metadata",
  "path": "/metadata",
  "hidden": false,
  "redirect": "noRedirect",
  "component": "Layout",
  "alwaysShow": true,
  "meta": {"title": "数据源管理", "icon": "#", "noCache": false},
  "children": [{
    "name": "Datasource",
    "path": "datasource",
    "hidden": false,
    "component": "metadata/datasource/index",
    "meta": {"title": "数据源", "icon": "#", "noCache": false}
  }, {
    "name": "Datacolumn",
    "path": "datacolumn",
    "hidden": false,
    "component": "metadata/datacolumn/index",
    "meta": {"title": "元数据", "icon": "#", "noCache": false}
  }, {
    "name": "Datasearch",
    "path": "datasearch",
    "hidden": false,
    "component": "metadata/datasearch/index",
    "meta": {"title": "数据检索", "icon": "#", "noCache": false}
  }, {
    "name": "Datamap",
    "path": "datamap",
    "hidden": false,
    "component": "metadata/datamap/index",
    "meta": {"title": "数据地图", "icon": "#", "noCache": false}
  }, {
    "name": "Sqlconsole",
    "path": "sqlconsole",
    "hidden": false,
    "component": "metadata/sqlconsole/index",
    "meta": {"title": "SQL工作台", "icon": "#", "noCache": false}
  }]
}, {
  "name": "Market",
  "path": "/market",
  "hidden": false,
  "redirect": "noRedirect",
  "component": "Layout",
  "alwaysShow": true,
  "meta": {"title": "数据服务", "icon": "#", "noCache": false},
  "children": [{
    "name": "Dataapi",
    "path": "dataapi",
    "hidden": false,
    "component": "market/dataapi/index",
    "meta": {"title": "数据服务", "icon": "#", "noCache": false}
  }, {
    "name": "Apitoken",
    "path": "apitoken",
    "hidden": false,
    "component": "market/apitoken/index",
    "meta": {"title": "token申请", "icon": "list", "noCache": false}
  }, {
    "name": "Apimask",
    "path": "apimask",
    "hidden": false,
    "component": "market/apimask/index",
    "meta": {"title": "数据脱敏", "icon": "#", "noCache": false}
  }, {
    "name": "Apilog",
    "path": "apilog",
    "hidden": false,
    "component": "market/apilog/index",
    "meta": {"title": "接口日志", "icon": "#", "noCache": false}
  }, {
    "name": "Dataservice",
    "path": "dataservice",
    "hidden": false,
    "component": "market/dataservice/index",
    "meta": {"title": "服务集成", "icon": "#", "noCache": false}
  }, {
    "name": "Servicelog",
    "path": "servicelog",
    "hidden": false,
    "component": "market/servicelog/index",
    "meta": {"title": "服务日志", "icon": "#", "noCache": false}
  }]
}, {
  "name": "Standard",
  "path": "/standard",
  "hidden": false,
  "redirect": "noRedirect",
  "component": "Layout",
  "alwaysShow": true,
  "meta": {"title": "数据标准管理", "icon": "#", "noCache": false},
  "children": [{
    "name": "Datadict",
    "path": "datadict",
    "hidden": false,
    "component": "standard/datadict/index",
    "meta": {"title": "标准字典", "icon": "#", "noCache": false}
  }, {
    "name": "Mapping",
    "path": "mapping",
    "hidden": false,
    "component": "standard/mapping/index",
    "meta": {"title": "字典映射", "icon": "#", "noCache": false}
  }, {
    "name": "Contraststat",
    "path": "contraststat",
    "hidden": false,
    "component": "standard/contraststat/index",
    "meta": {"title": "对照统计", "icon": "#", "noCache": false}
  }]
}, {
  "name": "Quality",
  "path": "/quality",
  "hidden": false,
  "redirect": "noRedirect",
  "component": "Layout",
  "alwaysShow": true,
  "meta": {"title": "数据质量管理", "icon": "#", "noCache": false},
  "children": [{
    "name": "Checkrule",
    "path": "checkrule",
    "hidden": false,
    "component": "quality/checkrule/index",
    "meta": {"title": "规则配置", "icon": "#", "noCache": false}
  }, {
    "name": "Checkstat",
    "path": "checkstat",
    "hidden": false,
    "component": "quality/checkstat/index",
    "meta": {"title": "问题统计", "icon": "#", "noCache": false}
  }, {
    "name": "Checkreport",
    "path": "checkreport",
    "hidden": false,
    "component": "quality/checkreport/index",
    "meta": {"title": "质量报告", "icon": "#", "noCache": false}
  }, {
    "name": "Checkjob",
    "path": "checkjob",
    "hidden": false,
    "component": "quality/checkjob/index",
    "meta": {"title": "定时任务", "icon": "#", "noCache": false}
  }, {
    "name": "Checklog",
    "path": "checklog",
    "hidden": false,
    "component": "quality/checklog/index",
    "meta": {"title": "任务日志", "icon": "#", "noCache": false}
  }]
}, {
  "name": "Swap",
  "path": "/swap",
  "hidden": false,
  "redirect": "noRedirect",
  "component": "Layout",
  "alwaysShow": true,
  "meta": {"title": "数据交换", "icon": "#", "noCache": false},
  "children": [{
    "name": "JobProject",
    "path": "jobProject",
    "hidden": false,
    "component": "swap/project/index",
    "meta": {"title": "项目管理", "icon": "#", "noCache": false}
  }, {
    "name": "Json-build",
    "path": "json-build",
    "hidden": false,
    "component": "swap/json-build/index",
    "meta": {"title": "构建任务", "icon": "#", "noCache": false}
  }, {
    "name": "Task",
    "path": "task",
    "hidden": false,
    "component": "swap/task/index",
    "meta": {"title": "任务管理", "icon": "#", "noCache": false}
  }, {
    "name": "Log",
    "path": "log",
    "hidden": false,
    "component": "swap/log/index",
    "meta": {"title": "日志管理", "icon": "#", "noCache": false}
  }]
}]


function solveArr(arr) {
  let i = 0;
  while (i < arr.length) {
    let {children, meta} = arr[i];
    if (meta.link) {
      meta.link = 'lll'
    }

    if (Array.isArray(children)) {
      solveArr(children)
    }

    i++;
  }
}

solveArr(arr);

console.log(arr);
